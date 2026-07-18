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
        { left: "Expressed consent", right: "Given directly by a competent adult, before treatment starts" },
        { left: "Implied consent", right: "Assumed for an unresponsive/incapacitated patient (the “emergency doctrine”)" },
        { left: "Minor consent", right: "From a parent/guardian; not required for an emancipated minor" },
        { left: "Involuntary consent", right: "Obtained through a third party for an incompetent or incarcerated patient" },
      ],
    },
  },
  {
    id: "s2-consent-expressed-fc",
    concept: "consent-types",
    mode: "flashcard",
    payload: {
      front: "Expressed consent — definition?",
      back: "Must be obtained from every conscious adult with the capacity to make a rational decision, before treatment starts. The patient must be of legal age, able to understand and make a rational decision, and informed (in terms they understand) of the assessment/procedures and related risks. Verbal confirmation is preferred, but nonverbal cues (e.g. nodding) are acceptable too — document the patient's approval.",
    },
  },
  {
    id: "s2-consent-implied-fc",
    concept: "consent-types",
    mode: "flashcard",
    payload: {
      front: "Implied consent — definition?",
      back: "Also called the \"emergency doctrine.\" You assume an unresponsive patient, or one unable to make a rational decision (e.g. disoriented from a head injury), would consent to emergency care if they could. Also applies if a patient initially refuses care but then becomes unresponsive/incapacitated/irrational. Used when the patient is at significant risk of death, disability, or deterioration.",
    },
  },
  {
    id: "s2-consent-minor-fc",
    concept: "consent-types",
    mode: "flashcard",
    payload: {
      front: "Minor consent — definition?",
      back: "Obtained from a parent, legal guardian, or someone granted limited decision rights by them (teacher, stepparent, etc.). Minors generally can't accept/refuse care themselves; if a parent/guardian can't be reached, implied consent applies (document the circumstances). An emancipated minor (married, pregnant, a parent, in the armed forces, financially independent and living away from home, or court-declared emancipated) does not need parental consent.",
    },
  },
  {
    id: "s2-consent-involuntary-fc",
    concept: "consent-types",
    mode: "flashcard",
    payload: {
      front: "Involuntary consent — definition?",
      back: "Applies to a mentally incompetent adult, or someone in law enforcement custody/incarcerated. Consent is obtained through a third party (legal guardian, law enforcement officer, or other court officer) since the patient doesn't have the legal right to determine their own care.",
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
