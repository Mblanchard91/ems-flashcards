// Section 2 — Consent, Legal & Abuse
// Source: EMT_final_tesseract_corrected.txt review guide.

const items = [
  {
    id: "s2-family-comm-fc",
    concept: "family-communication",
    mode: "flashcard",
    payload: {
      front: "How should you communicate with family members on scene?",
      back: "Be honest but kind and supportive.",
    },
  },

  // --- Consent types ---
  {
    id: "s2-consent-match",
    concept: "consent-types",
    mode: "match",
    payload: {
      pairs: [
        { left: "Expressed consent", right: "Patient directly agrees (verbally or by action) after being informed of the treatment" },
        { left: "Implied consent", right: "Assumed for an unresponsive/incapacitated patient who would want life-saving care" },
        { left: "Minor consent", right: "A parent or legal guardian must consent; implied consent applies in emergencies if unavailable" },
        { left: "Involuntary consent", right: "Required by law for certain patients (e.g. police custody, mental health hold) even if they refuse" },
      ],
    },
  },
  {
    id: "s2-consent-expressed-fc",
    concept: "consent-types",
    mode: "flashcard",
    payload: {
      front: "Expressed consent — definition?",
      back: "The patient directly agrees, verbally or through their actions, to receive treatment after being informed of what will be done.",
    },
  },
  {
    id: "s2-consent-implied-fc",
    concept: "consent-types",
    mode: "flashcard",
    payload: {
      front: "Implied consent — definition?",
      back: "Assumed for an unresponsive or incapacitated patient, under the reasoning that a reasonable person would want life-saving treatment.",
    },
  },

  // --- HIPAA ---
  {
    id: "s2-hipaa-multi",
    concept: "hipaa-shareable",
    mode: "multi",
    payload: {
      question: "Which of these can you share with law enforcement about a patient?",
      choices: [
        "Patient's name",
        "Date of birth",
        "Whether they were wearing a seatbelt",
        "Alcohol or drug use information",
        "Medical history unrelated to this call",
        "Prescription medication list",
      ],
      correctIndices: [0, 1, 2],
    },
  },
  {
    id: "s2-hipaa-not-shareable-fc",
    concept: "hipaa-shareable",
    mode: "flashcard",
    payload: {
      front: "Which piece of information about a patient should you NOT share with law enforcement?",
      back: "Alcohol or drug use information.",
    },
  },

  // --- Abuse handling ---
  {
    id: "s2-abuse-multi",
    concept: "abuse-handling",
    mode: "multi",
    payload: {
      question: "Which of these are correct actions when responding to a suspected child/elder abuse case?",
      choices: [
        "Alert dispatch to the situation",
        "Remain unbiased and nonjudgmental while providing care",
        "Try to convince the patient/guardian to go to the hospital",
        "Document exactly what each party said, in quotation marks",
        "Notify receiving hospital staff of your suspicions",
        "Contact DHS (Department of Human Services)",
        "Confront the suspected abuser directly",
        "Promise the patient you won't tell anyone",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: "s2-abuse-documentation-fc",
    concept: "abuse-documentation",
    mode: "flashcard",
    payload: {
      front: "When documenting suspected abuse, how should you record what each party said?",
      back: "Write their exact words in quotation marks rather than paraphrasing — this preserves their statement for legal purposes.",
    },
  },
  {
    id: "s2-neglect-vs-abuse-fc",
    concept: "neglect-vs-abuse",
    mode: "flashcard",
    payload: {
      front: "Neglect vs. abuse — what's the difference?",
      back: "Neglect is failure to provide necessary care (food, supervision, medical needs). Abuse is active physical, sexual, or emotional harm.",
    },
  },

  // --- Scene safety ---
  {
    id: "s2-scene-safety-fc",
    concept: "scene-safety",
    mode: "flashcard",
    payload: {
      front: "What should you do if the scene becomes unsafe or you're threatened?",
      back: "Leave the scene immediately and wait for law enforcement before re-entering.",
    },
  },
];

const section02 = {
  id: 2,
  title: "Consent, Legal & Abuse",
  items,
};

export default section02;
