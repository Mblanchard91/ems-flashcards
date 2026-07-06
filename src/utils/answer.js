// Some definitions are compound ("blood sugar or breath sounds") or carry a
// parenthetical aside ("milliliter (same as cc)"). Typing the full string
// verbatim isn't realistic, so accept the whole definition, either half of an
// "or"-joined definition, and the definition with any parenthetical stripped.

function normalize(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/\s+/g, " ");
}

function stripParenthetical(text) {
  return text.replace(/\s*\([^)]*\)\s*/g, " ").trim();
}

function acceptableAnswers(card) {
  const variants = new Set();

  const addVariant = (text) => {
    if (!text) return;
    variants.add(normalize(text));
    const stripped = stripParenthetical(text);
    if (stripped) variants.add(normalize(stripped));
  };

  addVariant(card.definition);

  for (const variant of [...variants]) {
    if (variant.includes(" or ")) {
      for (const part of variant.split(" or ")) {
        variants.add(part.trim());
      }
    }
  }

  variants.delete("");
  return variants;
}

function checkAnswer(card, userInput) {
  return acceptableAnswers(card).has(normalize(userInput));
}

export { checkAnswer, acceptableAnswers, normalize };
