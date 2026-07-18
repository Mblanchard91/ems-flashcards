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
        "Weak, thready, or absent peripheral pulses",
        "Delayed capillary refill",
        "Rapid breathing that becomes deep, shallow, labored, or irregular",
        "Narrowing pulse pressure",
        "Low blood pressure (a late sign)",
        "Dilated, sluggish pupils",
        "Marked thirst",
        "Nausea and vomiting",
        "Pallor with cyanosis to the lips",
        "Flushed, warm, dry skin",
        "Slow, strong pulse",
        "Increased urine output",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    },
  },
  {
    id: "s4-shock-treatment-multi",
    concept: "shock-treatment",
    mode: "multi",
    payload: {
      question: "Which of these are correct shock treatment steps?",
      choices: [
        "Open and maintain the airway",
        "Provide ventilation",
        "Provide oxygenation",
        "Control any bleeding",
        "Splint fractures",
        "Maintain body temperature",
        "Position patient supine",
        "Apply a pelvic binder if indicated",
        "Begin rapid transport",
        "Give the patient food or water to prevent dehydration",
        "Elevate the head to reduce blood pressure",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8],
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

  // --- Shock: 5 causal types ---
  {
    id: "s4-shock-hypovolemic-fc",
    concept: "shock-types",
    mode: "flashcard",
    payload: {
      front: "Hypovolemic shock — cause?",
      back: "Shock resulting from blood or fluid loss.",
    },
  },
  {
    id: "s4-shock-cardiogenic-fc",
    concept: "shock-types",
    mode: "flashcard",
    payload: {
      front: "Cardiogenic shock — cause?",
      back: "Shock (lack of perfusion) brought on not by blood loss but by the heart's inadequate pumping action — often the result of a heart attack (MI) or congestive heart failure.",
    },
  },
  {
    id: "s4-shock-obstructive-fc",
    concept: "shock-types",
    mode: "flashcard",
    payload: {
      front: "Obstructive shock — cause?",
      back: "Term for the different conditions that block the flow of blood and cause hypoperfusion.",
    },
  },
  {
    id: "s4-shock-distributive-fc",
    concept: "shock-types",
    mode: "flashcard",
    payload: {
      front: "Distributive shock — cause?",
      back: "Hypoperfusion due to a lack of blood vessel tone — blood vessel dilation leads to decreased pressure within the circulatory system.",
    },
  },
  {
    id: "s4-shock-neurogenic-fc",
    concept: "shock-types",
    mode: "flashcard",
    payload: {
      front: "Neurogenic shock — cause?",
      back: "Hypoperfusion caused by a spinal cord injury that results in systemic vasodilation and nerve paralysis.",
    },
  },
  {
    id: "s4-shock-types-match",
    concept: "shock-types",
    mode: "match",
    payload: {
      prompt: "Match each type of shock to its cause.",
      pairs: [
        { left: "Hypovolemic shock", right: "Blood or fluid loss" },
        { left: "Cardiogenic shock", right: "The heart's inadequate pumping action — often from MI or CHF" },
        { left: "Obstructive shock", right: "Conditions that block the flow of blood" },
        { left: "Distributive shock", right: "Lack of blood vessel tone — vessel dilation drops circulatory pressure" },
        { left: "Neurogenic shock", right: "Spinal cord injury causing systemic vasodilation and nerve paralysis" },
      ],
    },
  },
  {
    id: "s4-shock-hemorrhagic-fc",
    concept: "shock-types",
    mode: "flashcard",
    payload: {
      front: "Is hemorrhagic shock a 6th type of shock?",
      back: "No — it's a subtype of hypovolemic shock, specifically the bleeding-caused subset (hypovolemic shock caused by blood loss).",
    },
  },
  {
    id: "s4-shock-taxonomy-multi",
    concept: "shock-types",
    mode: "multi",
    payload: {
      question: "Which of these are one of the 5 primary causal types of shock (not a subtype, and not a stage)?",
      choices: [
        "Hypovolemic shock",
        "Cardiogenic shock",
        "Obstructive shock",
        "Distributive shock",
        "Neurogenic shock",
        "Hemorrhagic shock",
        "Compensated shock",
        "Decompensated shock",
      ],
      correctIndices: [0, 1, 2, 3, 4],
    },
  },

  // --- Shock: 2 stages ---
  {
    id: "s4-shock-compensated-fc",
    concept: "shock-stages",
    mode: "flashcard",
    payload: {
      front: "Compensated shock — what's happening?",
      back: "The period when the patient is developing shock but the body is still able to maintain perfusion.",
    },
  },
  {
    id: "s4-shock-decompensated-fc",
    concept: "shock-stages",
    mode: "flashcard",
    payload: {
      front: "Decompensated shock — what's happening?",
      back: "The period when the body can no longer compensate for low blood volume or lack of perfusion — late signs such as decreasing blood pressure become evident.",
    },
  },
  {
    id: "s4-shock-stages-match",
    concept: "shock-stages",
    mode: "match",
    payload: {
      prompt: "Match each stage of shock to what's happening in the body.",
      pairs: [
        { left: "Compensated shock", right: "Developing shock, but the body is still maintaining perfusion" },
        { left: "Decompensated shock", right: "The body can no longer compensate — late signs like falling blood pressure appear" },
      ],
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
        "Hypertension and tachycardia following the convulsion",
        "Improved memory immediately afterward",
        "Increased alertness during the seizure",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
  },
  {
    id: "s4-seizure-treatment-multi",
    concept: "seizure-treatment",
    mode: "multi",
    payload: {
      question: "Which of these are correct seizure treatment steps?",
      choices: [
        "Prevent injury to the patient",
        "Position the patient",
        "Open the airway",
        "Suction as needed",
        "Provide ventilation",
        "Provide oxygenation",
        "Transport",
        "Restrain the patient's limbs to stop the convulsions",
        "Insert an oral airway during active convulsions",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5, 6],
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
