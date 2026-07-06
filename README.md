# EMS Flashcards

A mobile-first flashcard app for studying EMS abbreviations and mnemonics —
flashcard mode with tap-to-flip / swipe navigation, and a typed-answer quiz
mode with an end-of-quiz summary.

## Editing the card data

All cards live in [`src/data/cards.js`](src/data/cards.js), a plain array of
objects:

```js
{
  id: 1,
  term: "Pt",              // front of the card
  definition: "patient",    // back of the card
  focus: true,              // included when "Focus subset only" is checked
  category: "General & Documentation", // grouping label (informational only)
  type: "abbreviation",     // "abbreviation" | "mnemonic"
  mnemonicGroup: "SAMPLE",  // only present on type: "mnemonic" cards
}
```

- Add a new card by adding a new object to `abbreviationCards` or
  `mnemonicCards` (or straight into the `cards` array) with a unique `id`.
- Mnemonic cards must set `type: "mnemonic"` and `mnemonicGroup` to the
  mnemonic's name — this is what keeps all cards in the same mnemonic group
  together and in original order when "Always display mnemonics in order" is
  checked.
- If a definition has multiple acceptable phrasings joined by " or " (e.g.
  `"pulmonary embolism or physical exam"`), Quiz Mode already accepts either
  half individually — no extra data needed. Same for definitions with a
  parenthetical aside like `"milliliter (same as cc)"`.

## Running locally

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to `http://localhost:5173`).

## Deploying to GitHub Pages

This repo deploys via **GitHub Actions**, not the `gh-pages` branch approach —
every push to `main` rebuilds and republishes automatically.

1. Push this repo to GitHub (see exact commands below).
2. In the GitHub repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab) — the
   `.github/workflows/deploy.yml` workflow builds the app and publishes
   `dist/` to Pages.
4. The site will be live at `https://<your-username>.github.io/ems-flashcards/`.

If you rename the GitHub repo to something other than `ems-flashcards`,
update the `base` path in [`vite.config.js`](vite.config.js) to match — it
must equal `/<repo-name>/` for asset paths to resolve correctly on Pages.
