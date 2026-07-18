// Section 1 — Patient Positioning & Scene Assessment
// Source: EMT_final_tesseract_corrected.txt review guide.

const items = [
  // --- Positioning by chief complaint ---
  {
    id: "s1-positioning-match",
    concept: "positioning-by-complaint",
    mode: "match",
    payload: {
      pairs: [
        { left: "Unresponsive, no spinal injury suspected", right: "Left lateral recumbent (recovery position)" },
        { left: "Chest pain / breathing difficulty", right: "Position of comfort — usually sitting" },
        { left: "Suspected spinal injury", right: "Backboard or vacuum mattress, full-body immobilization" },
        { left: "Shock", right: "Supine" },
        { left: "Nauseated / vomiting", right: "Sitting or recovery position" },
        { left: "Pregnant, more than 20 weeks", right: "Left side (left lateral)" },
      ],
    },
  },
  {
    id: "s1-positioning-unresponsive-fc",
    concept: "positioning-by-complaint",
    mode: "flashcard",
    payload: {
      front: "Positioning: unresponsive patient, no spinal injury suspected?",
      back: "Left lateral recumbent (recovery position) — protects the airway from vomit/fluids.",
    },
  },
  {
    id: "s1-positioning-pregnant-fc",
    concept: "positioning-by-complaint",
    mode: "flashcard",
    payload: {
      front: "Positioning: pregnant patient, more than 20 weeks?",
      back: "Left side (left lateral) — takes the weight of the uterus off the vena cava.",
    },
  },

  // --- Scene size-up ---
  {
    id: "s1-ppe-multi",
    concept: "scene-size-up-ppe",
    mode: "multi",
    payload: {
      question: "Which of these count as PPE (personal protective equipment) during scene size-up?",
      choices: [
        "Gloves",
        "Eye protection",
        "Surgical mask",
        "HEPA/N-95 mask",
        "Gown",
        "Helmet",
        "Turnout gear",
        "Stethoscope",
        "Portable radio",
        "Penlight",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5, 6],
    },
  },
  {
    id: "s1-size-up-multi",
    concept: "scene-size-up-order",
    mode: "multi",
    payload: {
      question: "Which of these are part of scene size-up?",
      choices: [
        "Perform an initial visual survey of the scene",
        "Evaluate scene hazards",
        "Determine MOI (mechanism of injury) or NOI (nature of illness)",
        "Determine patient count",
        "Determine resource needs",
        "Begin treatment before assessing for hazards",
        "Assume the scene is safe once you arrive",
      ],
      correctIndices: [0, 1, 2, 3, 4],
    },
  },
  {
    id: "s1-moi-fc",
    concept: "moi-noi",
    mode: "flashcard",
    payload: {
      front: "What is MOI?",
      back: "Mechanism of Injury — how a traumatic injury happened (e.g. fall height, collision speed).",
    },
  },
  {
    id: "s1-noi-fc",
    concept: "moi-noi",
    mode: "flashcard",
    payload: {
      front: "What is NOI?",
      back: "Nature of Illness — the underlying medical condition causing the patient's symptoms (non-trauma).",
    },
  },
  {
    id: "s1-sizeup-ongoing-fc",
    concept: "scene-size-up-ongoing",
    mode: "flashcard",
    payload: {
      front: "Is scene size-up a one-time step at the start of the call?",
      back: "No — size-up is ongoing throughout the call, not performed just once at the start.",
    },
  },

  // --- Primary assessment ---
  {
    id: "s1-primary-assessment-seq",
    concept: "primary-assessment",
    mode: "seq",
    payload: {
      prompt: "Put the primary assessment steps in order.",
      steps: [
        "Form a general impression",
        "Assess level of consciousness (LOC)",
        "Assess airway",
        "Assess breathing",
        "Assess oxygenation",
        "Assess circulation",
        "Determine patient priority",
      ],
    },
  },

  // --- Secondary assessment ---
  {
    id: "s1-secondary-assessment-multi",
    concept: "secondary-assessment",
    mode: "multi",
    payload: {
      question: "Which of these are components of the secondary assessment?",
      choices: [
        "Physical exam",
        "Vital signs",
        "Patient history",
        "General impression",
        "Determining mechanism of injury (MOI)",
      ],
      correctIndices: [0, 1, 2],
    },
  },

  // --- Ongoing assessment ---
  {
    id: "s1-ongoing-assessment-fc",
    concept: "ongoing-assessment",
    mode: "flashcard",
    payload: {
      front: "What is the ongoing assessment, and when might it be skipped?",
      back: "A repeated reassessment of the patient's condition throughout care. It's mainly skipped for stable patients requiring minimal care — most patients should be reassessed regularly.",
    },
  },
];

const section01 = {
  id: 1,
  title: "Patient Positioning & Scene Assessment",
  items,
};

export default section01;
