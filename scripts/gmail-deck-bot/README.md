# Gmail deck-submission bot

Turns a "Build Your Own Deck" submission email into a ready-to-review
GitHub pull request automatically. Nothing merges on its own — you still
review and click merge, same as any other PR.

This lives in the repo for reference/version control, but it does **not**
run from here — Google Apps Script projects run on Google's own
infrastructure, tied to your Google account. You copy the code in once.

## One-time setup

1. **Create the Apps Script project.** Go to
   [script.google.com/create](https://script.google.com/create) (while
   signed into the Google account whose Gmail should receive submissions —
   `michaelblanchard250@gmail.com`). Name the project something like
   "EMS Flashcards Deck Bot".

2. **Paste the code.** Delete the default `Code.gs` contents and paste in
   everything from [`deck-submission-bot.gs`](deck-submission-bot.gs).

3. **Create a GitHub token.** Go to
   [github.com/settings/personal-access-tokens/new](https://github.com/settings/personal-access-tokens/new)
   and create a **fine-grained** personal access token:
   - Resource owner: `Mblanchard91`
   - Repository access: **Only select repositories** → `ems-flashcards`
   - Permissions: **Contents** → Read and write, **Pull requests** → Read
     and write
   - Set an expiration (90 days is fine — you'll get an email reminder to
     regenerate it before it lapses)

   Copy the token now; GitHub only shows it once.

4. **Store the token in the script.** In the Apps Script editor, click the
   gear icon (**Project Settings**) → **Script Properties** → **Add script
   property**. Name: `GITHUB_TOKEN`. Value: the token from step 3.

5. **Run `setup()` once.** Back in the editor, select the `setup` function
   from the dropdown next to the Run button and click Run. The first run
   will prompt you to authorize the script — it needs Gmail access (to
   read submission emails) and external request access (to call GitHub).
   Review and allow. This installs a trigger that runs `processSubmissions`
   every 15 minutes; you can confirm it under the clock icon (**Triggers**)
   in the left sidebar.

That's it — submissions sent to that inbox will now turn into PRs within
~15 minutes.

## How it works

- The app's "Send for Review" button opens a pre-filled email with a
  `-----BEGIN DECK DATA-----` / `-----END DECK DATA-----` block containing
  the deck as base64-encoded JSON (name, slug, cards).
- Every 15 minutes, the script searches Gmail for unread submission emails,
  decodes that block, and:
  1. Creates a branch `deck-submission/<slug>`
  2. Adds `public/community-decks/<slug>.json` on that branch
  3. Opens a pull request into `main`
- The email gets labeled `deck-processed` (or `deck-processing-failed` if
  something went wrong — check the Apps Script **Executions** log for the
  error) and marked read, so it's never processed twice.
- The deck's permanent link (`?deckId=<slug>`) starts working the moment
  you merge the PR and the existing deploy workflow finishes — nothing
  else to do on your end beyond merging.

## Retrying a failed submission

If an email got labeled `deck-processing-failed`, fix whatever the
Executions log says was wrong (or just try again later if it looked like a
transient GitHub API error), then remove the `deck-processing-failed`
label and mark the email unread — it'll be picked up on the next run.

## Rotating the token

Fine-grained tokens expire on the schedule you set. When GitHub emails a
reminder, generate a new one the same way (step 3) and update the
`GITHUB_TOKEN` script property (step 4) — no code changes needed.
