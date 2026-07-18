// Structural integrity check for src/data/studyGuide/*.js — run with:
//   node scripts/validate-study-guide.mjs
//
// Checks every item across every section for the kinds of bugs that are
// easy to introduce by hand and easy to miss in review: out-of-bounds
// correct-answer indices, duplicate ids, duplicate/ambiguous choice or
// match text (which makes a question a coin-flip instead of a real test).
// This does NOT check content accuracy — that still needs a human (or an
// LLM) read-through against the source material.

import { sections } from "../src/data/studyGuide/index.js";

const errors = [];
const seenIds = new Set();

for (const section of sections) {
  if (!section.items || section.items.length === 0) {
    errors.push(`Section ${section.id} (${section.title}) has no items`);
  }
  for (const item of section.items) {
    const tag = `Section ${section.id} / ${item.id}`;

    if (seenIds.has(item.id)) errors.push(`${tag}: duplicate id`);
    seenIds.add(item.id);

    if (!["flashcard", "mc", "multi", "match", "seq"].includes(item.mode)) {
      errors.push(`${tag}: unknown mode "${item.mode}"`);
    }

    const p = item.payload;
    if (!p) {
      errors.push(`${tag}: missing payload`);
      continue;
    }

    if (item.mode === "flashcard") {
      if (!p.front || !p.back) errors.push(`${tag}: flashcard missing front/back`);
    }

    if (item.mode === "mc") {
      if (!p.question || !Array.isArray(p.choices) || p.choices.length < 2) {
        errors.push(`${tag}: mc missing question/choices`);
      } else if (new Set(p.choices).size !== p.choices.length) {
        errors.push(`${tag}: mc has duplicate choice text`);
      }
      if (typeof p.correctIndex !== "number" || p.correctIndex < 0 || p.correctIndex >= p.choices.length) {
        errors.push(`${tag}: mc correctIndex out of bounds (${p.correctIndex} of ${p.choices?.length})`);
      }
    }

    if (item.mode === "multi") {
      if (!p.question || !Array.isArray(p.choices) || p.choices.length < 2) {
        errors.push(`${tag}: multi missing question/choices`);
      } else if (new Set(p.choices).size !== p.choices.length) {
        errors.push(`${tag}: multi has duplicate choice text`);
      }
      if (!Array.isArray(p.correctIndices) || p.correctIndices.length === 0) {
        errors.push(`${tag}: multi correctIndices empty`);
      } else {
        for (const i of p.correctIndices) {
          if (i < 0 || i >= p.choices.length) errors.push(`${tag}: multi correctIndices has out-of-bounds index ${i}`);
        }
        const uniq = new Set(p.correctIndices);
        if (uniq.size !== p.correctIndices.length) errors.push(`${tag}: multi correctIndices has duplicates`);
      }
    }

    if (item.mode === "match") {
      if (!Array.isArray(p.pairs) || p.pairs.length < 2) {
        errors.push(`${tag}: match needs at least 2 pairs (has ${p.pairs?.length})`);
      } else {
        for (const pair of p.pairs) {
          if (!pair.left || !pair.right) errors.push(`${tag}: match pair missing left/right`);
        }
        const rightTexts = p.pairs.map((pair) => pair.right);
        if (new Set(rightTexts).size !== rightTexts.length) {
          errors.push(`${tag}: match has duplicate right-side text (ambiguous match)`);
        }
        const leftTexts = p.pairs.map((pair) => pair.left);
        if (new Set(leftTexts).size !== leftTexts.length) {
          errors.push(`${tag}: match has duplicate left-side text`);
        }
      }
    }

    if (item.mode === "seq") {
      if (!p.prompt || !Array.isArray(p.steps) || p.steps.length < 2) {
        errors.push(`${tag}: seq needs prompt + at least 2 steps (has ${p.steps?.length})`);
      } else {
        const uniq = new Set(p.steps);
        if (uniq.size !== p.steps.length) errors.push(`${tag}: seq has duplicate step text`);
      }
    }
  }
}

console.log(`Checked ${sections.length} sections, ${sections.reduce((n, s) => n + s.items.length, 0)} items total.`);
if (errors.length === 0) {
  console.log("No errors found.");
} else {
  console.log(`${errors.length} error(s):`);
  errors.forEach((e) => console.log(" - " + e));
  process.exitCode = 1;
}
