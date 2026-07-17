# Community decks

Each file here is one submitted custom deck, referenced by a permanent
link like `?deckId=<slug>`. Files are fetched at runtime by the app
(`src/utils/deckLink.js`'s `fetchCommunityDeck`) — they are **not**
bundled into the JS build, so adding one doesn't require touching any
app code, just committing the file and letting the existing deploy
workflow publish it.

`index.json` is a separate manifest that drives the "User Created
Flashcards" browse screen on the main landing page. It is **not**
auto-generated — a deck existing as `<deckId>.json` here does not by
itself make it appear on that screen; it only appears once you also add
it to `index.json` (see below). This lets someone share a link-only deck
without it being publicly browsable.

## Adding a deck

When a "Build Your Own Deck" submission comes in (via the gmail-deck-bot
PR, or a GitHub issue), add a file here named `<deckId>.json` (the slug
from the submission) with this shape:

```json
{
  "name": "Deck Display Name",
  "cards": [
    ["term", "definition"],
    ["term", "definition"]
  ]
}
```

The submission body already contains this exact JSON, ready to paste in.

Once merged and deployed, the permanent link the submitter already has
(`?deckId=<slug>`) starts working automatically — nothing else changes
on their end, since that link was generated and shared before the file
existed.

## Listing a deck on the main page

The submission includes a "list on main page" preference (checked by
default when the submitter built the deck). If it's `true`, also add an
entry to `index.json`:

```json
{
  "deckId": "<slug>",
  "name": "Deck Display Name",
  "cardCount": 12
}
```

If it's `false`, just add the `<deckId>.json` file as above and leave
`index.json` alone — the deck still works for anyone with the direct
link, it just won't show up in the browse list.
