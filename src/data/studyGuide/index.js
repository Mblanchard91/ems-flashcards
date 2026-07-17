import section03 from "./section-03.js";

// Only Section 3 is built out so far (pilot). Add more section-0N.js files
// and list them here as they're authored.
const sections = [section03];

const MODE_LABELS = {
  flashcard: "Flashcards",
  multi: "Select All That Apply",
  match: "Matching",
  seq: "Sequence",
};

function modesForSection(section) {
  const counts = new Map();
  for (const item of section.items) {
    counts.set(item.mode, (counts.get(item.mode) || 0) + 1);
  }
  return [...counts.entries()].map(([mode, count]) => ({
    mode,
    label: MODE_LABELS[mode] || mode,
    count,
  }));
}

function itemsForMode(section, mode) {
  return section.items.filter((item) => item.mode === mode);
}

export { sections, modesForSection, itemsForMode, MODE_LABELS };
