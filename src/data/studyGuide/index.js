import section01 from "./section-01.js";
import section02 from "./section-02.js";
import section03 from "./section-03.js";
import section04 from "./section-04.js";
import section05 from "./section-05.js";
import section06 from "./section-06.js";
import section07 from "./section-07.js";
import section08 from "./section-08.js";
import section09 from "./section-09.js";
import section10 from "./section-10.js";
import section11 from "./section-11.js";
import section12 from "./section-12.js";

const sections = [
  section01,
  section02,
  section03,
  section04,
  section05,
  section06,
  section07,
  section08,
  section09,
  section10,
  section11,
  section12,
];

const MODE_LABELS = {
  flashcard: "Flashcards",
  mc: "Multiple Choice",
  multi: "Select All That Apply",
  match: "Matching",
  seq: "Sequence",
};

// Items can optionally carry a `deckLabel` to split a single mode into
// multiple selectable sub-decks within one section (e.g. Section 12's
// vocabulary terms vs. its abbreviations, both flashcard-mode but shown
// as two separate buttons). Items without a deckLabel behave as before,
// grouped only by mode.
function modesForSection(section) {
  const groups = new Map();
  for (const item of section.items) {
    const key = item.mode + "::" + (item.deckLabel || "");
    const existing = groups.get(key);
    if (existing) {
      existing.count += 1;
    } else {
      groups.set(key, {
        mode: item.mode,
        deckLabel: item.deckLabel || null,
        label: item.deckLabel || MODE_LABELS[item.mode] || item.mode,
        count: 1,
      });
    }
  }
  return [...groups.values()];
}

function itemsForMode(section, mode, deckLabel) {
  return section.items.filter(
    (item) => item.mode === mode && (item.deckLabel || null) === (deckLabel || null)
  );
}

export { sections, modesForSection, itemsForMode, MODE_LABELS };
