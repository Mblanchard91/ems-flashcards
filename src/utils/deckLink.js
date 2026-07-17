import LZString from "lz-string";

const { compressToEncodedURIComponent, decompressFromEncodedURIComponent } = LZString;

// Two ways a custom deck can travel:
//  - "deckData" — the whole deck compressed straight into the URL. Works the
//    instant it's generated, no server involved, but gets long for big decks.
//  - "deckId" — a short slug that looks up a JSON file under
//    /community-decks/. Stays short regardless of deck size, but only works
//    once that file has actually been reviewed, merged, and deployed.

function slugify(name) {
  const slug = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
  return slug || "deck";
}

function randomSuffix() {
  return Math.random().toString(36).slice(2, 8);
}

function generateDeckId(name) {
  return `${slugify(name)}-${randomSuffix()}`;
}

function encodeDeckData(deck) {
  const compact = {
    name: deck.name,
    cards: deck.cards.map((c) => [c.term, c.definition]),
  };
  return compressToEncodedURIComponent(JSON.stringify(compact));
}

function decodeDeckData(encoded) {
  const json = decompressFromEncodedURIComponent(encoded);
  if (!json) return null;
  try {
    const parsed = JSON.parse(json);
    if (!parsed || !Array.isArray(parsed.cards)) return null;
    return {
      name: parsed.name || "Untitled Deck",
      cards: parsed.cards.map(([term, definition], i) => ({
        id: `custom-${i}`,
        term,
        definition,
      })),
    };
  } catch {
    return null;
  }
}

async function fetchCommunityDeck(deckId) {
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}community-decks/${deckId}.json`);
    if (!res.ok) return null;
    const parsed = await res.json();
    if (!parsed || !Array.isArray(parsed.cards)) return null;
    return {
      name: parsed.name || "Untitled Deck",
      cards: parsed.cards.map(([term, definition], i) => ({
        id: `${deckId}-${i}`,
        term,
        definition,
      })),
    };
  } catch {
    return null;
  }
}

function buildTemporaryLink(deck) {
  const url = new URL(window.location.href);
  url.search = "";
  url.searchParams.set("deckData", encodeDeckData(deck));
  return url.toString();
}

function buildPermanentLink(deckId) {
  const url = new URL(window.location.href);
  url.search = "";
  url.searchParams.set("deckId", deckId);
  return url.toString();
}

// Plain base64 JSON, not lz-string — this only ever travels inside an email
// body (no URL-length pressure), and a review script decoding it needs a
// trivial, unambiguous format rather than re-implementing lz-string's
// compression algorithm in a different runtime.
function encodeSubmissionPayload({ name, deckId, cards, listPublicly }) {
  const json = JSON.stringify({
    name,
    slug: deckId,
    listPublicly,
    cards: cards.map((c) => [c.term, c.definition]),
  });
  return btoa(unescape(encodeURIComponent(json)));
}

export {
  slugify,
  generateDeckId,
  encodeDeckData,
  decodeDeckData,
  fetchCommunityDeck,
  buildTemporaryLink,
  buildPermanentLink,
  encodeSubmissionPayload,
};
