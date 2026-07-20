// Section 11 — Behavioral, Psychiatric, Dispatch, MCI, Blast Injuries
// Source: EMT_final_tesseract_corrected.txt review guide + Pearson Emergency
// Care 14e excerpts (Behavioral & Psychiatric Emergencies; Reasonable Force
// and Restraint).

const items = [
  // --- Suicidal patient assessment ---
  {
    id: "s11-ideation-fc",
    concept: "suicide-risk-assessment",
    mode: "flashcard",
    payload: {
      front: "Suicide risk assessment: Ideation — what do you ask?",
      back: "Are you thinking about hurting or killing yourself?",
    },
  },
  {
    id: "s11-plan-fc",
    concept: "suicide-risk-assessment",
    mode: "flashcard",
    payload: {
      front: "Suicide risk assessment: Plan — what do you ask?",
      back: "Do you have a plan for how you would do it?",
    },
  },
  {
    id: "s11-means-fc",
    concept: "suicide-risk-assessment",
    mode: "flashcard",
    payload: {
      front: "Suicide risk assessment: Means — what do you ask?",
      back: "Do you have access to the means to carry out that plan?",
    },
  },
  {
    id: "s11-intent-fc",
    concept: "suicide-risk-assessment",
    mode: "flashcard",
    payload: {
      front: "Suicide risk assessment: Intent — what do you ask?",
      back: "Do you intend to act on this plan?",
    },
  },
  {
    id: "s11-suicide-treatment-multi",
    concept: "suicide-patient-treatment",
    mode: "multi",
    payload: {
      question: "Which of these are correct approaches when caring for a suicidal patient?",
      choices: [
        "Listen carefully and take them seriously",
        "A rapid, sudden recovery/calm can be trusted as a good sign",
        "Never show disgust or judgment",
        "Deny or downplay that the attempt happened",
        "Try to shock them out of it",
        "A past suicide attempt means higher risk going forward",
      ],
      correctIndices: [0, 2, 5],
    },
  },
  {
    id: "s11-suicide-treatment-sequence-multi",
    concept: "suicide-patient-treatment-sequence",
    mode: "multi",
    payload: {
      question: "Which of these are correct steps when treating a suicidal patient?",
      choices: [
        "Ensure your own safety first",
        "Assess the patient for medical or trauma injuries",
        "Calm the patient and stay with them",
        "Use restraints to protect yourself, others, or the patient from harm if needed",
        "Transport to a facility for psychological treatment",
        "Leave the patient alone to de-escalate",
        "Restrain the patient immediately regardless of need",
      ],
      correctIndices: [0, 1, 2, 3, 4],
    },
  },

  // --- Schizophrenia & excited delirium ---
  {
    id: "s11-schizophrenia-definition-fc",
    concept: "schizophrenia",
    mode: "flashcard",
    payload: {
      front: "Schizophrenia — definition?",
      back: "A chronic mental disorder affecting how a person thinks, feels, and behaves. Severe or untreated cases may seem to lose touch with reality.",
    },
  },
  {
    id: "s11-excited-delirium-fc",
    concept: "excited-delirium",
    mode: "flashcard",
    payload: {
      front: "Excited (agitated) delirium — what triggers it, and what does it look like?",
      back: "Triggered by uncontrolled psychiatric illness and/or drug intoxication (usually cocaine or amphetamine use). Presents as bizarre and/or aggressive behavior, shouting, paranoia, panic, violence toward others, insensitivity to pain, unexpected physical strength, and hyperthermia.",
    },
  },
  {
    id: "s11-excited-delirium-pattern-fc",
    concept: "excited-delirium",
    mode: "flashcard",
    payload: {
      front: "Excited delirium — the deadly pattern?",
      back: "The patient suddenly stops struggling, then within minutes has inadequate/absent respirations leading to cardiac arrest. Calming down does not mean recovering — monitor constantly.",
    },
  },
  {
    id: "s11-excited-delirium-stimulant-fc",
    concept: "excited-delirium",
    mode: "flashcard",
    payload: {
      front: "Excited delirium with stimulant intoxication — why is restraint especially risky?",
      back: "Muscles keep contracting against restraints even when limbs are held still, so the heart and lungs run at max capacity, causing rapid decompensation. Contact ALS — they may give chemical restraint (sedation).",
    },
  },
  {
    id: "s11-excited-delirium-symptoms-multi",
    concept: "excited-delirium",
    mode: "multi",
    payload: {
      question: "Which of these are part of excited delirium's presenting picture?",
      choices: [
        "Bizarre and/or aggressive behavior",
        "Shouting",
        "Paranoia",
        "Panic",
        "Violence toward others",
        "Insensitivity to pain",
        "Unexpected physical strength",
        "Hyperthermia",
        "Hypothermia",
        "Drowsiness or sedation",
        "Slow, deliberate movements",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5, 6, 7],
    },
  },
  {
    id: "s11-psychosis-symptoms-fc",
    concept: "acute-psychosis",
    mode: "flashcard",
    payload: {
      front: "Acute psychosis (the emergency presentation of schizophrenia) — 4 possible symptom categories?",
      back: "Hallucinations, delusions, catatonia, and thought disorder — one or more may be present.",
    },
  },
  {
    id: "s11-psychosis-match",
    concept: "acute-psychosis",
    mode: "match",
    payload: {
      prompt: "Match each acute psychosis symptom category to its description.",
      pairs: [
        { left: "Hallucinations", right: "False sensory perception — auditory (voices) is typically psychiatric, visual can be psychiatric or from drug intoxication/alcohol withdrawal" },
        { left: "Delusions", right: "A fixed false belief (e.g. paranoia)" },
        { left: "Catatonia", right: "Near-total non-interaction, or wild/inappropriate movement" },
        { left: "Thought disorder", right: "Impaired processing/communication; unusual speech or writing" },
      ],
    },
  },
  {
    id: "s11-delirium-progression-seq",
    concept: "excited-delirium",
    mode: "seq",
    payload: {
      prompt: "Put the excited delirium deterioration pattern in order.",
      steps: [
        "Patient suddenly stops struggling",
        "Within minutes, respirations become inadequate or absent",
        "Cardiac arrest",
      ],
    },
  },
  {
    id: "s11-hallucinations-fc",
    concept: "acute-psychosis",
    mode: "flashcard",
    payload: {
      front: "Auditory vs. visual hallucinations — which cause(s) link to each?",
      back: "Auditory (hearing voices) is typically psychiatric in origin. Visual hallucinations can be psychiatric OR caused by drug intoxication/alcohol withdrawal.",
    },
  },

  // --- PTSD/TBI ---
  {
    id: "s11-ptsd-combat-multi",
    concept: "ptsd-tbi-overlap",
    mode: "multi",
    payload: {
      question: "Which of these are combat-veteran-specific PTSD symptoms (not necessarily shared with TBI)?",
      choices: [
        "Guilt or shame",
        "Avoidance of others",
        "Depression",
        "Paranoia",
        "Hostility",
        "Feeling they won't live much longer",
        "Agitation",
        "Anger",
        "Improved concentration",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5, 6, 7],
    },
  },
  {
    id: "s11-ptsd-tbi-overlap-multi",
    concept: "ptsd-tbi-overlap",
    mode: "multi",
    payload: {
      question: "Which of these are symptoms that overlap between PTSD and TBI?",
      choices: [
        "Severe headaches",
        "Drug/alcohol abuse",
        "Sleep disturbance",
        "Depression",
        "Anxiety",
        "Anger",
        "Memory problems",
        "Easily frustrated",
        "Relationship problems",
        "Easily fatigued",
        "Sensitivity to smells",
        "Automatic actions",
        "Numbness",
        "Improved concentration",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  },
  {
    id: "s11-tbi-language-fc",
    concept: "ptsd-tbi-overlap",
    mode: "flashcard",
    payload: {
      front: "TBI — what should you call it when talking with a patient?",
      back: "Say “concussion,” not “TBI” — it's less alarming and more familiar to patients.",
    },
  },

  // --- Dispatch info ---
  {
    id: "s11-dispatch-info-multi",
    concept: "dispatch-info",
    mode: "multi",
    payload: {
      question: "Which of these are pieces of information dispatch needs from you (or you need from dispatch)?",
      choices: [
        "Location",
        "Nature of the call",
        "Caller information",
        "Patient location",
        "Patient count and severity",
        "Special circumstances",
        "The patient's insurance provider",
        "The patient's favorite hospital",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: "s11-dispatch-most-important-fc",
    concept: "dispatch-info",
    mode: "flashcard",
    payload: {
      front: "Of all the dispatch information categories, which is most important?",
      back: "Location — without it, none of the other information matters.",
    },
  },

  // --- Extrication ---
  {
    id: "s11-extrication-fc",
    concept: "extrication",
    mode: "flashcard",
    payload: {
      front: "Before using complex extrication/access tools, what should you try first?",
      back: "Try all doors first — complex tools are a last resort.",
    },
  },

  // --- MCI incident command ---
  {
    id: "s11-mci-command-fc",
    concept: "mci-incident-command",
    mode: "flashcard",
    payload: {
      front: "MCI: who takes command initially, and when can it change?",
      back: "The senior member of the first emergency service on scene assumes Incident Command — often an EMS unit. As reinforcements arrive, the original commander can stay in command or transfer it to someone of higher rank.",
    },
  },
  {
    id: "s11-command-structure-match",
    concept: "mci-incident-command",
    mode: "match",
    payload: {
      prompt: "Match each incident command structure to its description.",
      pairs: [
        { left: "Single incident command", right: "One agency controls everything (e.g. fire service runs EMS)" },
        { left: "Unified command", right: "Multiple agencies (fire/police/EMS) work independently but cooperatively — used when other agencies have major involvement" },
      ],
    },
  },

  // --- Blast injuries ---
  {
    id: "s11-blast-injuries-match",
    concept: "blast-injuries",
    mode: "match",
    payload: {
      prompt: "Match each blast injury category to its description.",
      pairs: [
        { left: "Primary", right: "The blast wave itself" },
        { left: "Secondary", right: "Flying debris/shrapnel" },
        { left: "Tertiary", right: "Body propulsion — being thrown by the blast" },
        { left: "Quaternary", right: "Burn, crush, or inhalation injury worsening existing conditions" },
        { left: "Quinary", right: "Environmental exposure to bacteria, chemicals, or radiation" },
      ],
    },
  },
  {
    id: "s11-blast-wtc-fc",
    concept: "blast-injuries",
    mode: "flashcard",
    payload: {
      front: "9/11 WTC collapse — which blast injury categories does it exemplify?",
      back: "Quaternary (crush/inhalation injury) and quinary (environmental exposure to dust/debris/chemicals).",
    },
  },
];

const section11 = {
  id: 11,
  title: "Behavioral, Psychiatric, Dispatch, MCI, Blast Injuries",
  items,
};

export default section11;
