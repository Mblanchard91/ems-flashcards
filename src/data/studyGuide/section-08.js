// Section 8 — Oxygen Administration & Chest Trauma
// Source: EMT_final_tesseract_corrected.txt review guide.
// Note: MOI vs NOI definitions are covered in Section 1 — cross-reference
// rather than duplicate here.

const items = [
  // --- Oxygen targets/devices ---
  {
    id: "s8-o2-targets-match",
    concept: "oxygen-targets",
    mode: "match",
    payload: {
      prompt: "Match the patient/condition to the correct oxygen treatment.",
      pairs: [
        { left: "Inadequate breathing (adult)", right: "PPV 10-12 breaths/min" },
        { left: "Inadequate breathing (infant/child)", right: "PPV 12-20 breaths/min" },
        { left: "Adequate breathing + chest trauma", right: "NRB 15 LPM, maintain SpO2 >95%" },
        { left: "Medical patient", right: "Nasal cannula 2 LPM, titrate to SpO2 ≥94%" },
        { left: "Trauma patient", right: "15 LPM NRB, target SpO2 ≥95%" },
        { left: "Pregnant, more than 20 weeks", right: "15 LPM NRB regardless of SpO2 (pregnancy)" },
        { left: "Inhaled poisoning", right: "15 LPM NRB regardless of SpO2 (suspected poisoning)" },
        { left: "COPD", right: "Nasal cannula, target SpO2 88-92%" },
      ],
    },
  },
  {
    id: "s8-o2-copd-mc",
    concept: "oxygen-targets",
    mode: "mc",
    payload: {
      question: "What's the target SpO2 for a COPD patient on oxygen?",
      choices: ["88-92%", "≥94%", "≥95%", "100%"],
      correctIndex: 0,
    },
  },
  {
    id: "s8-o2-pregnant-mc",
    concept: "oxygen-targets",
    mode: "mc",
    payload: {
      question: "What's the oxygen flow rate and device for a pregnant patient over 20 weeks, regardless of SpO2?",
      choices: ["15 LPM via NRB", "2 LPM via nasal cannula", "6 LPM via nasal cannula", "PPV at 10-12/min"],
      correctIndex: 0,
    },
  },
  {
    id: "s8-o2-medical-mc",
    concept: "oxygen-targets",
    mode: "mc",
    payload: {
      question: "What's the target SpO2 for a medical patient on a nasal cannula?",
      choices: ["≥94%", "88-92%", "≥90%", "100%"],
      correctIndex: 0,
    },
  },

  // --- Open chest wound ---
  {
    id: "s8-open-chest-seq",
    concept: "open-chest-wound",
    mode: "seq",
    payload: {
      prompt: "Put the open chest wound treatment steps in order.",
      steps: [
        "Apply a gloved hand to seal the wound",
        "Apply an occlusive dressing over the wound",
        "Burp (lift) one corner of the dressing if the patient develops respiratory distress",
      ],
    },
  },
  {
    id: "s8-neck-wound-fc",
    concept: "open-chest-wound",
    mode: "flashcard",
    payload: {
      front: "Open neck wound — dressing rule?",
      back: "Use an occlusive dressing to prevent an air embolism — neck wounds can pull air directly into a major vein.",
    },
  },
  {
    id: "s8-evisceration-dressing-fc",
    concept: "open-chest-wound",
    mode: "flashcard",
    payload: {
      front: "Open chest wound with evisceration — dressing order?",
      back: "Apply a sterile moist dressing first, then cover with an occlusive dressing.",
    },
  },

  // --- Evisceration ---
  {
    id: "s8-evisceration-seq",
    concept: "evisceration-treatment",
    mode: "seq",
    payload: {
      prompt: "Put the evisceration treatment steps in order.",
      steps: [
        "Expose the wound",
        "Do not touch or attempt to replace the organs",
        "Position the patient on their back, legs flexed, if no spinal injury",
        "Apply a sterile moist dressing",
        "Cover with an occlusive dressing (avoid foil)",
        "Secure with tape or cravats",
        "Provide high-concentration oxygen",
        "Treat for shock",
      ],
    },
  },

  // --- Tension pneumothorax vs hemothorax ---
  {
    id: "s8-pneumo-vs-hemo-match",
    concept: "tension-pneumo-vs-hemothorax",
    mode: "match",
    payload: {
      pairs: [
        { left: "Tension pneumothorax", right: "Air trapped in the pleural space under pressure, collapsing the lung and shifting the heart/great vessels" },
        { left: "Hemothorax", right: "Blood collects in the pleural space, usually from chest trauma" },
      ],
    },
  },

  // --- Cardiac tamponade ---
  {
    id: "s8-tamponade-definition-fc",
    concept: "cardiac-tamponade",
    mode: "flashcard",
    payload: {
      front: "Cardiac tamponade — what is it?",
      back: "Blood leaks into the pericardial sac (usually from penetrating trauma), compressing the heart chambers so they can't fill properly.",
    },
  },
  {
    id: "s8-tamponade-becks-fc",
    concept: "cardiac-tamponade",
    mode: "flashcard",
    payload: {
      front: "Cardiac tamponade — Beck's triad?",
      back: "Distended neck veins, muffled heart sounds, and narrowing pulse pressure.",
    },
  },
];

const section08 = {
  id: 8,
  title: "Oxygen Administration & Chest Trauma",
  items,
};

export default section08;
