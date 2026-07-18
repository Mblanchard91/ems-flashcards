// Section 6 — Allergic Reactions & GI Emergencies
// Source: EMT_final_tesseract_corrected.txt review guide.

const items = [
  // --- Allergic reaction vs. anaphylaxis ---
  {
    id: "s6-anaphylaxis-signs-multi",
    concept: "allergic-vs-anaphylaxis",
    mode: "multi",
    payload: {
      question: "Which of these indicate anaphylaxis rather than a mild, localized allergic reaction?",
      choices: [
        "Hives spreading across the body",
        "Swelling of the face, lips, or tongue",
        "Difficulty breathing or wheezing",
        "Throat tightness",
        "Rapid, weak, or absent pulse",
        "Dizziness or fainting",
        "Sense of impending doom",
        "Warm, flushed skin",
        "Agitation or anxiousness",
        "Difficulty swallowing",
        "Low blood pressure",
        "Itching in one small area",
        "Runny nose",
        "Watery eyes",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  },
  {
    id: "s6-allergic-treatment-multi",
    concept: "allergic-reaction-treatment",
    mode: "multi",
    payload: {
      question: "Which of these are correct for treating a mild allergic reaction?",
      choices: [
        "Ensure adequate oxygenation",
        "Give epinephrine if it's prescribed to the patient AND they're hypotensive, in respiratory distress, or have upper airway edema",
        "Transport",
        "A second epinephrine dose may be needed en route",
        "Give epinephrine regardless of the patient's vitals",
        "Withhold oxygen to avoid drying the airway",
      ],
      correctIndices: [0, 1, 2, 3],
    },
  },
  {
    id: "s6-anaphylaxis-treatment-multi",
    concept: "anaphylaxis-treatment",
    mode: "multi",
    payload: {
      question: "Which of these are correct for treating anaphylactic shock?",
      choices: [
        "Open the airway",
        "Suction as needed",
        "Maintain SpO2 ≥94% with 15 LPM NRB",
        "Provide PPV if breathing is inadequate",
        "Administer epinephrine if it's prescribed to the patient AND they're hypotensive, in respiratory distress, or have upper airway edema",
        "Consider ALS",
        "Transport",
        "Withhold epinephrine until ALS arrives",
        "Keep the patient sitting fully upright regardless of blood pressure",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5, 6],
    },
  },
  {
    id: "s6-epinephrine-effects-fc",
    concept: "epinephrine-effects",
    mode: "flashcard",
    payload: {
      front: "What effects/side effects does epinephrine have on the patient?",
      back: "Increases heart rate and blood pressure, and causes bronchodilation. Side effects: pale skin (especially at the injection site), dizziness, chest pain, headache, nausea and vomiting, excitability, and anxiousness — the patient may feel shaky or jittery afterward, but it resolves.",
    },
  },

  // --- Esophageal varices ---
  {
    id: "s6-varices-definition-fc",
    concept: "esophageal-varices",
    mode: "flashcard",
    payload: {
      front: "Esophageal varices — what are they, and why is a rupture especially dangerous?",
      back: "The esophagus's blood vessels become enlarged and fragile, often from chronic alcohol use or portal hypertension (elevated pressure in the liver's blood supply). If they rupture, it causes massive upper GI bleeding — a double danger: shock from the blood loss, and airway compromise from the sheer volume of blood vomited (hematemesis).",
    },
  },
  {
    id: "s6-varices-ss-multi",
    concept: "esophageal-varices",
    mode: "multi",
    payload: {
      question: "Which of these are signs/symptoms of ruptured esophageal varices?",
      choices: [
        "Painless bleeding in the digestive tract",
        "Large amounts of bright red hematemesis",
        "Absence of pain or tenderness in the abdomen",
        "Rapid pulse",
        "Breathing difficulty",
        "Pale, cool, clammy skin plus other shock signs",
        "Jaundice",
        "Severe abdominal pain with rigidity",
        "Slow, strong pulse",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5, 6],
    },
  },
  {
    id: "s6-varices-treatment-multi",
    concept: "esophageal-varices",
    mode: "multi",
    payload: {
      question: "Which of these are correct for treating suspected ruptured esophageal varices?",
      choices: [
        "Keep the airway patent",
        "Suction and position left lateral recumbent if the patient may still vomit",
        "Position of comfort if not vomiting and no altered mental status",
        "Provide PPV if breathing is inadequate",
        "Maintain SpO2 ≥94% (15 LPM NRB if severe hypoxia)",
        "Never give anything by mouth",
        "Keep the patient calm",
        "Treat for shock",
        "Transport",
        "Give oral fluids to prevent dehydration",
        "Position upright regardless of vomiting risk",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
  },

  // --- Abdominal emergencies ---
  {
    id: "s6-abdominal-match",
    concept: "abdominal-emergencies",
    mode: "match",
    payload: {
      pairs: [
        { left: "Ectopic pregnancy", right: "Sharp, one-sided lower abdominal pain in a pregnant patient, often with vaginal bleeding" },
        { left: "Appendicitis", right: "Pain that starts near the navel and moves to the right lower quadrant (RLQ), often with fever" },
        { left: "GI Bleed", right: "Blood in vomit or stool (bright red or black/tarry)" },
        { left: "Pancreatitis", right: "Severe, persistent pain in the left upper quadrant (LUQ), radiating straight through to the back" },
        { left: "Renal Calculi (kidney stones)", right: "Sudden, severe flank pain that may radiate to the groin" },
      ],
    },
  },
];

const section06 = {
  id: 6,
  title: "Allergic Reactions & GI Emergencies",
  items,
};

export default section06;
