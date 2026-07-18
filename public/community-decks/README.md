# Community decks

Each file here is one submitted custom deck, referenced by a permanent
link like `?deckId=<slug>`. Files are fetched at runtime by the app
(`src/utils/deckLink.js`'s `fetchCommunityDeck`) — they are **not**
bundled into the JS build, so adding one doesn't require touching any
app code, just committing the file and letting the existing deploy
workflow publish it.

`index.json` is a separate manifest that drives the "User Created
Flashcards" browse screen on the main landing page. It is **not**
auto-generated from the files in this folder — a deck existing as
`<deckId>.json` does not by itself make it appear on that screen; it
only appears once it also has an entry in `index.json`. This lets
someone share a link-only deck without it being publicly browsable.

## Adding a deck

For submissions that come in via the [gmail-deck-bot](../../scripts/gmail-deck-bot/),
this is fully automated — the bot adds `<deckId>.json` here, and (if the
submitter opted in) an entry to `index.json` too, in the same PR. You
just review and merge.

If a deck ever needs to be added by hand (e.g. from a GitHub issue
instead of the email flow), add a file here named `<deckId>.json` with
this shape:

```json
{
  "name": "Deck Display Name",
  "cards": [
    ["term", "definition"],
    ["term", "definition"]
  ]
}
```

Once merged and deployed, the permanent link the submitter already has
(`?deckId=<slug>`) starts working automatically — nothing else changes
on their end, since that link was generated and shared before the file
existed.

To also list it on the browse page, add a matching entry to
`index.json`:

```json
{
  "deckId": "<slug>",
  "name": "Deck Display Name",
  "cardCount": 12
}
```
