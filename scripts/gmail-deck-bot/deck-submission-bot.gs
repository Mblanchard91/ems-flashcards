/**
 * Gmail -> GitHub PR bot for EMS Flashcards community deck submissions.
 *
 * A "Build Your Own Deck" submission email (sent via the app's mailto link)
 * contains a base64 JSON block between BEGIN/END markers. This script,
 * running on a time-based trigger, finds unprocessed submission emails,
 * decodes that block, and opens a GitHub pull request that adds the deck
 * as a new file under public/community-decks/ — ready for a human (you) to
 * review and merge. Nothing merges automatically.
 *
 * Setup: see README.md in this same folder.
 */

const GITHUB_OWNER = "Mblanchard91";
const GITHUB_REPO = "ems-flashcards";
const GITHUB_API = "https://api.github.com";
const SUBJECT_SEARCH_TERM = "New community deck submission";
const PROCESSED_LABEL = "deck-processed";
const FAILED_LABEL = "deck-processing-failed";

/**
 * Entry point — call this from a time-based trigger (see setup()).
 */
function processSubmissions() {
  const query =
    'is:unread subject:"' +
    SUBJECT_SEARCH_TERM +
    '" -label:' +
    PROCESSED_LABEL +
    " -label:" +
    FAILED_LABEL;
  const threads = GmailApp.search(query);

  threads.forEach((thread) => {
    thread.getMessages().forEach((message) => {
      if (!message.isUnread()) return;

      try {
        const payload = parseSubmission(message);
        const prUrl = createDeckPullRequest(payload);
        Logger.log("Opened PR for deck '" + payload.name + "': " + prUrl);
        thread.addLabel(getOrCreateLabel(PROCESSED_LABEL));
        message.markRead();
      } catch (err) {
        Logger.log("Failed to process message '" + message.getSubject() + "': " + err);
        thread.addLabel(getOrCreateLabel(FAILED_LABEL));
        message.markRead();
      }
    });
  });
}

/**
 * One-time setup — run manually from the Apps Script editor once. Installs
 * the recurring trigger; safe to re-run (clears any existing trigger for
 * this function first, so it won't create duplicates).
 */
function setup() {
  ScriptApp.getProjectTriggers()
    .filter((t) => t.getHandlerFunction() === "processSubmissions")
    .forEach((t) => ScriptApp.deleteTrigger(t));

  ScriptApp.newTrigger("processSubmissions").timeBased().everyMinutes(15).create();

  Logger.log("Trigger installed: processSubmissions will run every 15 minutes.");
}

// ---- Email parsing ----------------------------------------------------

function parseSubmission(message) {
  const body = message.getPlainBody();
  const match = body.match(/-----BEGIN DECK DATA-----([\s\S]*?)-----END DECK DATA-----/);
  if (!match) {
    throw new Error("No deck data block found in email body");
  }

  const base64 = match[1].replace(/\s+/g, "");
  const jsonStr = Utilities.newBlob(Utilities.base64Decode(base64)).getDataAsString("UTF-8");
  const payload = JSON.parse(jsonStr);

  if (!payload || typeof payload.name !== "string" || !payload.name.trim()) {
    throw new Error("Deck payload is missing a name");
  }
  if (!payload.slug || !/^[a-z0-9-]+$/.test(payload.slug)) {
    throw new Error("Deck payload has an invalid slug: " + payload.slug);
  }
  if (!Array.isArray(payload.cards) || payload.cards.length === 0) {
    throw new Error("Deck payload has no cards");
  }

  return payload;
}

function getOrCreateLabel(name) {
  return GmailApp.getUserLabelByName(name) || GmailApp.createLabel(name);
}

// ---- GitHub ------------------------------------------------------------

function githubToken() {
  const token = PropertiesService.getScriptProperties().getProperty("GITHUB_TOKEN");
  if (!token) {
    throw new Error('Script property "GITHUB_TOKEN" is not set — see README.md');
  }
  return token;
}

/**
 * Thin UrlFetchApp wrapper. Never throws on a non-2xx response — callers
 * check `code` themselves, since some expected "failures" (branch already
 * exists, PR already exists) should be treated as success on a retry.
 */
function githubRequest(path, options) {
  const response = UrlFetchApp.fetch(
    GITHUB_API + path,
    Object.assign(
      {
        headers: {
          Authorization: "Bearer " + githubToken(),
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        muteHttpExceptions: true,
      },
      options || {}
    )
  );
  const code = response.getResponseCode();
  const text = response.getContentText();
  return { code: code, json: text ? JSON.parse(text) : null };
}

function githubRequestOrThrow(path, options) {
  const result = githubRequest(path, options);
  if (result.code >= 300) {
    throw new Error(
      "GitHub API " + path + " failed (" + result.code + "): " + JSON.stringify(result.json)
    );
  }
  return result.json;
}

function createDeckPullRequest(payload) {
  const branch = "deck-submission/" + payload.slug;
  const filePath = "public/community-decks/" + payload.slug + ".json";
  const repoPath = "/repos/" + GITHUB_OWNER + "/" + GITHUB_REPO;

  const mainRef = githubRequestOrThrow(repoPath + "/git/ref/heads/main");
  const mainSha = mainRef.object.sha;

  // 422 here means the branch already exists (e.g. a retry after a
  // previous partial failure) — that's fine, keep going.
  const branchResult = githubRequest(repoPath + "/git/refs", {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({ ref: "refs/heads/" + branch, sha: mainSha }),
  });
  if (branchResult.code >= 300 && branchResult.code !== 422) {
    throw new Error("Failed to create branch: " + JSON.stringify(branchResult.json));
  }

  const fileContent = JSON.stringify({ name: payload.name, cards: payload.cards }, null, 2);
  const encodedContent = Utilities.base64Encode(fileContent, Utilities.Charset.UTF_8);

  githubRequestOrThrow(repoPath + "/contents/" + filePath, {
    method: "put",
    contentType: "application/json",
    payload: JSON.stringify({
      message: "Add community deck: " + payload.name,
      content: encodedContent,
      branch: branch,
    }),
  });

  // 422 here means a PR for this branch already exists — fetch and return
  // that one instead of erroring.
  const prResult = githubRequest(repoPath + "/pulls", {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({
      title: "Add community deck: " + payload.name,
      head: branch,
      base: "main",
      body:
        "Auto-submitted via the \"Build Your Own Deck\" email flow.\n\n" +
        "**Deck:** " +
        payload.name +
        "\n**Cards:** " +
        payload.cards.length,
    }),
  });

  if (prResult.code < 300) {
    return prResult.json.html_url;
  }
  if (prResult.code === 422) {
    const existing = githubRequestOrThrow(
      repoPath + "/pulls?head=" + GITHUB_OWNER + ":" + branch + "&state=open"
    );
    if (existing.length > 0) return existing[0].html_url;
  }
  throw new Error("Failed to open PR: " + JSON.stringify(prResult.json));
}
