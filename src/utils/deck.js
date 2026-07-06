// Builds a study deck from a set of cards, respecting the "always display
// mnemonics in order" setting. When enabled, each mnemonic group (e.g. all
// SAMPLE cards) is treated as a single atomic block that keeps its internal
// order, while everything else (abbreviation cards and the position of each
// mnemonic block) still shuffles freely.

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function buildDeck(cards, { mnemonicsInOrder }) {
  if (!mnemonicsInOrder) {
    return shuffle(cards);
  }

  const groups = new Map();
  const units = [];

  for (const card of cards) {
    if (card.type === "mnemonic") {
      if (!groups.has(card.mnemonicGroup)) {
        const unit = { kind: "group", cards: [] };
        groups.set(card.mnemonicGroup, unit);
        units.push(unit);
      }
      groups.get(card.mnemonicGroup).cards.push(card);
    } else {
      units.push({ kind: "single", cards: [card] });
    }
  }

  return shuffle(units).flatMap((unit) => unit.cards);
}

export { buildDeck, shuffle };
