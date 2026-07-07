// Definitions can be compound in a few ways, and each needs different
// handling when checking a typed answer:
//  - "or"-joined alternatives ("blood sugar or breath sounds") — either
//    half alone is accepted.
//  - "/"-joined alternatives ("Position/Palliation/Provocation") — same
//    idea, each piece alone is accepted.
//  - "/" (or "&") used as an informal stand-in for "and" ("signs/symptoms"
//    typed for a definition stored as "signs & symptoms") — treated as
//    equivalent to "and", not split apart, since neither half alone is a
//    complete answer.
//  - a parenthetical aside ("milliliter (same as cc)") — stripped and also
//    accepted on its own.
//
// "/" is ambiguous between "alternatives" and "informal and", so both
// readings are accepted: each individual piece around a "/" or "or", AND
// the whole phrase with "/"/"&" read as "and".
//
// Splitting must happen on the raw (pre-normalize) text — normalize()
// converts "/" and "&" to "and", which would erase the split points before
// splitAlternatives ever saw them.

function normalize(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/\//g, " and ")
    .replace(/\s+/g, " ")
    .trim();
}

function stripParenthetical(text) {
  return text.replace(/\s*\([^)]*\)\s*/g, " ").trim();
}

function splitAlternatives(text) {
  return text
    .split(/\s+or\s+|\s*\/\s*/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function acceptableAnswers(card) {
  const rawCandidates = new Set();

  const addCandidate = (text) => {
    const trimmed = text?.trim();
    if (trimmed) rawCandidates.add(trimmed);
  };

  const collect = (text) => {
    addCandidate(text);
    const parts = splitAlternatives(text);
    if (parts.length > 1) parts.forEach(addCandidate);
  };

  collect(card.definition);
  const stripped = stripParenthetical(card.definition);
  if (stripped && stripped !== card.definition) collect(stripped);

  // Card-specific extra phrasings that don't derive from the definition
  // text itself (e.g. "pulse oxygen" alongside SpO2's "pulse ox").
  (card.synonyms || []).forEach(collect);

  const variants = new Set();
  for (const candidate of rawCandidates) {
    variants.add(normalize(candidate));
  }
  variants.delete("");
  return variants;
}

function checkAnswer(card, userInput) {
  return acceptableAnswers(card).has(normalize(userInput));
}

export { checkAnswer, acceptableAnswers, normalize };
