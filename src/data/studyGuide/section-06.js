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
        "Rapid, weak pulse",
        "Dizziness or fainting",
        "Sense of impending doom",
        "Itching in one small area",
        "Runny nose",
        "Watery eyes",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5, 6],
    },
  },
  {
    id: "s6-allergic-treatment-fc",
    concept: "allergic-reaction-treatment",
    mode: "flashcard",
    payload: {
      front: "Mild allergic reaction — treatment?",
      back: "Supportive care; monitor for progression to anaphylaxis. Remove the allergen if possible.",
    },
  },
  {
    id: "s6-anaphylaxis-treatment-fc",
    concept: "anaphylaxis-treatment",
    mode: "flashcard",
    payload: {
      front: "Anaphylaxis — treatment?",
      back: "Administer epinephrine (auto-injector if available), high-flow oxygen, treat for shock, and begin rapid transport.",
    },
  },
  {
    id: "s6-epinephrine-effects-fc",
    concept: "epinephrine-effects",
    mode: "flashcard",
    payload: {
      front: "What effects does epinephrine have on the body?",
      back: "Increases heart rate and blood pressure, dilates the airways (bronchodilation), and constricts blood vessels — reversing anaphylaxis. Side effects can include anxiety, tremors, and palpitations.",
    },
  },

  // --- Esophageal varices ---
  {
    id: "s6-varices-definition-fc",
    concept: "esophageal-varices",
    mode: "flashcard",
    payload: {
      front: "Esophageal varices — what are they, and what causes them?",
      back: "The esophagus's blood vessels become enlarged and fragile, often from chronic alcohol use or portal hypertension (elevated pressure in the liver's blood supply). If they rupture, it causes massive upper GI bleeding.",
    },
  },
  {
    id: "s6-varices-ss-fc",
    concept: "esophageal-varices",
    mode: "flashcard",
    payload: {
      front: "Esophageal varices — signs/symptoms, and why is this presentation especially dangerous?",
      back: "Vomiting large amounts of blood (hematemesis) — the ruptured vessel's blood enters the stomach, irritates the lining, and gets vomited up. This creates a double danger: shock from blood loss, and airway compromise from the sheer volume of blood being vomited.",
    },
  },
  {
    id: "s6-varices-treatment-fc",
    concept: "esophageal-varices",
    mode: "flashcard",
    payload: {
      front: "Esophageal varices — treatment?",
      back: "Treat for shock, provide oxygen, and begin rapid transport — do not attempt to stop internal bleeding in the field.",
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
        { left: "Appendicitis", right: "Pain that starts near the navel and moves to the right lower quadrant (RLQ)" },
        { left: "GI Bleed", right: "Blood in vomit or stool (bright red or black/tarry)" },
        { left: "Pancreatitis", right: "Severe upper abdominal pain, often radiating to the back" },
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
