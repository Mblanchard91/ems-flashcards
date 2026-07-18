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
