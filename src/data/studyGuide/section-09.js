// Section 9 — Environmental Emergencies, ICP, Burns, Electrical Shock
// Source: EMT_final_tesseract_corrected.txt review guide.

const items = [
  {
    id: "s9-hyperthermia-fc",
    concept: "hyperthermia-treatment",
    mode: "flashcard",
    payload: {
      front: "Hyperthermia — treatment?",
      back: "Remove clothing, move the patient to shade or air conditioning, and apply cold packs to the armpits and groin.",
    },
  },
  {
    id: "s9-hypothermia-fc",
    concept: "hypothermia-treatment",
    mode: "flashcard",
    payload: {
      front: "Hypothermia — treatment?",
      back: "Remove the patient from the cold, remove wet clothing, apply warm blankets, and apply hot packs to the groin and armpits.",
    },
  },
  {
    id: "s9-cushings-triad-fc",
    concept: "cushings-triad",
    mode: "flashcard",
    payload: {
      front: "Cushing's Triad — what does it indicate, and what are the 3 signs?",
      back: "The body's response to increased intracranial pressure (ICP): increased blood pressure, decreased pulse, and irregular respirations.",
    },
  },

  // --- Public health ---
  {
    id: "s9-public-health-multi",
    concept: "ems-public-health",
    mode: "multi",
    payload: {
      question: "Which of these count as public health activities of an EMS system?",
      choices: [
        "Blood pressure checks at a community event",
        "Teaching bleeding control to Boy Scouts",
        "Installing child car seats",
        "Responding to a 911 call for chest pain",
        "Transporting a patient to the ER",
        "Running a CPR class for the public",
      ],
      correctIndices: [0, 1, 2, 5],
    },
  },

  // --- Burns ---
  {
    id: "s9-burns-match",
    concept: "burn-degrees",
    mode: "match",
    payload: {
      pairs: [
        { left: "Superficial (1st degree)", right: "Epidermis only; redness, mild swelling; heals without scarring (e.g. sunburn)" },
        { left: "Partial thickness (2nd degree)", right: "Epidermis + dermis damaged; deep pain, blisters, mottled appearance; heals with little scarring" },
        { left: "Full thickness (3rd degree)", right: "All skin layers (and possibly deeper structures) damaged; charred or dry/white appearance; may have no pain if nerves destroyed" },
      ],
    },
  },
  {
    id: "s9-burn-1st-fc",
    concept: "burn-degrees",
    mode: "flashcard",
    payload: {
      front: "What's another name for a 1st degree burn?",
      back: "Superficial burn — epidermis only.",
    },
  },
  {
    id: "s9-burn-2nd-fc",
    concept: "burn-degrees",
    mode: "flashcard",
    payload: {
      front: "What's another name for a 2nd degree burn?",
      back: "Partial thickness burn — epidermis and dermis damaged.",
    },
  },
  {
    id: "s9-burn-3rd-fc",
    concept: "burn-degrees",
    mode: "flashcard",
    payload: {
      front: "What's another name for a 3rd degree burn?",
      back: "Full thickness burn — all skin layers (and possibly deeper structures) damaged.",
    },
  },

  // --- Electrical shock ---
  {
    id: "s9-electrical-shock-multi",
    concept: "electrical-shock",
    mode: "multi",
    payload: {
      question: "Which of these are effects/signs of electrical shock?",
      choices: [
        "Burns at the entry and exit points",
        "Paralysis from disrupted nerve pathways",
        "Muscle tenderness or twitching",
        "Irregular heartbeat or cardiac arrest",
        "Seizures",
        "Improved muscle strength",
        "Decreased blood clotting risk",
        "Visual difficulties",
      ],
      correctIndices: [0, 1, 2, 3, 4, 7],
    },
  },
];

const section09 = {
  id: 9,
  title: "Environmental Emergencies, ICP, Burns, Electrical Shock",
  items,
};

export default section09;
