# Community decks

Each file here is one submitted custom deck, referenced by a permanent
link like `?deckId=<slug>`. Files are fetched at runtime by the app
(`src/utils/deckLink.js`'s `fetchCommunityDeck`) — they are **not**
bundled into the JS build, so adding one doesn't require touching any
app code, just committing the file and letting the existing deploy
workflow publish it.

## Adding a deck

When a "Build Your Own Deck" submission comes in via a GitHub issue, add
a file here named `<deckId>.json` (the slug from the issue) with this
shape:

```json
{
  "name": "Deck Display Name",
  "cards": [
    ["term", "definition"],
    ["term", "definition"]
  ]
}
```

The issue body already contains this exact JSON, ready to paste in.

Once merged and deployed, the permanent link the submitter already has
(`?deckId=<slug>`) starts working automatically — nothing else changes
on their end, since that link was generated and shared before the file
existed.
