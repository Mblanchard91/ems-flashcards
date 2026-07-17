// Section 4 — Shock, Seizures, Fontanelles, Diabetic Emergencies
// Source: EMT_final_tesseract_corrected.txt review guide.

const items = [
  // --- Shock ---
  {
    id: "s4-shock-ss-multi",
    concept: "shock-signs",
    mode: "multi",
    payload: {
      question: "Which of these are signs/symptoms of shock?",
      choices: [
        "Restlessness or anxiety",
        "Altered mental status",
        "Pale, cool, clammy skin",
        "Weak, thready pulse",
        "Rapid, shallow breathing",
        "Flushed, warm, dry skin",
        "Slow, strong pulse",
        "Increased urine output",
      ],
      correctIndices: [0, 1, 2, 3, 4],
    },
  },
  {
    id: "s4-shock-treatment-seq",
    concept: "shock-treatment",
    mode: "seq",
    payload: {
      prompt: "Put the shock treatment steps in order.",
      steps: [
        "Open and maintain the airway",
        "Provide ventilation",
        "Provide oxygenation",
        "Control any bleeding",
        "Splint fractures",
        "Maintain body temperature",
        "Position patient supine",
        "Apply a pelvic binder if indicated",
        "Begin rapid transport",
      ],
    },
  },
  {
    id: "s4-shock-hyperventilate-fc",
    concept: "shock-treatment-cautions",
    mode: "flashcard",
    payload: {
      front: "Should you hyperventilate a shock patient during ventilation?",
      back: "No — hyperventilating can worsen shock. Ventilate at a normal rate.",
    },
  },
  {
    id: "s4-shock-impaled-fc",
    concept: "shock-treatment-cautions",
    mode: "flashcard",
    payload: {
      front: "Should you remove an impaled object during shock treatment?",
      back: "No — never remove an impaled object in the field. Stabilize it in place.",
    },
  },

  // --- Fontanelles ---
  {
    id: "s4-fontanelle-sunken-fc",
    concept: "fontanelles",
    mode: "flashcard",
    payload: {
      front: "Sunken fontanelle in an infant — what does it indicate?",
      back: "Dehydration.",
    },
  },
  {
    id: "s4-fontanelle-bulging-fc",
    concept: "fontanelles",
    mode: "flashcard",
    payload: {
      front: "Bulging fontanelle in an infant — what does it indicate?",
      back: "Increased intracranial pressure (ICP).",
    },
  },

  // --- Seizures ---
  {
    id: "s4-seizure-ss-multi",
    concept: "seizure-signs",
    mode: "multi",
    payload: {
      question: "Which of these are signs/symptoms associated with a seizure?",
      choices: [
        "Aura (warning sensation before onset)",
        "Loss of consciousness",
        "Rigid muscle contraction",
        "Convulsive (jerking) activity",
        "Bitten tongue",
        "Excessive saliva or foaming",
        "Incontinence",
        "Post-ictal confusion",
        "Improved memory immediately afterward",
        "Increased alertness during the seizure",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5, 6, 7],
    },
  },
  {
    id: "s4-seizure-treatment-seq",
    concept: "seizure-treatment",
    mode: "seq",
    payload: {
      prompt: "Put the seizure treatment steps in order.",
      steps: [
        "Prevent injury to the patient",
        "Position the patient",
        "Open the airway",
        "Suction as needed",
        "Provide ventilation",
        "Provide oxygenation",
        "Transport",
      ],
    },
  },

  // --- Diabetic emergencies ---
  {
    id: "s4-hypoglycemia-mechanism-fc",
    concept: "diabetic-emergencies",
    mode: "flashcard",
    payload: {
      front: "What causes the signs/symptoms of hypoglycemia?",
      back: "The body releases epinephrine in response to low blood sugar, causing symptoms like sweating, shakiness, and a rapid heart rate.",
    },
  },
  {
    id: "s4-oral-glucose-fc",
    concept: "diabetic-emergencies",
    mode: "flashcard",
    payload: {
      front: "Oral glucose administration rule?",
      back: "Give it between the cheek and gum — only if the patient is alert enough to protect their own airway.",
    },
  },
];

const section04 = {
  id: 4,
  title: "Shock, Seizures, Fontanelles, Diabetic Emergencies",
  items,
};

export default section04;
