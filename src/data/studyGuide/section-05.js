// Section 5 — Respiratory Emergencies, Stroke, Medical Direction
// Source: EMT_final_tesseract_corrected.txt review guide.

const items = [
  // --- Spontaneous pneumothorax ---
  {
    id: "s5-pneumo-profile-mc",
    concept: "spontaneous-pneumothorax",
    mode: "mc",
    payload: {
      question: "Which patient profile is most at risk for a spontaneous pneumothorax?",
      choices: [
        "Tall, thin patient in their teens to 20s, or someone with underlying lung disease",
        "Obese patient in their 40s-50s with no lung history",
        "Short, muscular patient in their 30s",
        "Elderly patient with a recent hip fracture",
      ],
      correctIndex: 0,
    },
  },
  {
    id: "s5-pneumo-ss-fc",
    concept: "spontaneous-pneumothorax",
    mode: "flashcard",
    payload: {
      front: "Spontaneous pneumothorax — signs/symptoms?",
      back: "Sudden sharp chest pain, shortness of breath, and decreased or absent breath sounds on the affected side.",
    },
  },
  {
    id: "s5-pneumo-treatment-fc",
    concept: "spontaneous-pneumothorax",
    mode: "flashcard",
    payload: {
      front: "Spontaneous pneumothorax — treatment?",
      back: "Maintain SpO2, provide PPV with minimal tidal volume if needed, request ALS, and continuously monitor breath sounds.",
    },
  },

  // --- Stroke ---
  {
    id: "s5-stroke-ss-multi",
    concept: "stroke-signs",
    mode: "multi",
    payload: {
      question: "Which of these are signs/symptoms of stroke?",
      choices: [
        "Facial droop",
        "Arm drift or weakness",
        "Slurred or abnormal speech",
        "Sudden severe headache",
        "Confusion",
        "Vision changes",
        "Loss of balance or coordination",
        "Improved coordination",
        "Increased appetite",
        "Slow onset over several days",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5, 6],
    },
  },
  {
    id: "s5-stroke-treatment-seq",
    concept: "stroke-treatment",
    mode: "seq",
    payload: {
      prompt: "Put the stroke treatment steps in order.",
      steps: [
        "Assess airway, breathing, circulation",
        "Perform the Cincinnati Prehospital Stroke Scale",
        "Determine time of symptom onset (last known well)",
        "Provide oxygen if needed",
        "Begin rapid transport to a stroke center",
        "Notify the receiving hospital",
      ],
    },
  },
  {
    id: "s5-cincinnati-match",
    concept: "cincinnati-stroke-scale",
    mode: "match",
    payload: {
      pairs: [
        { left: "Facial droop test", right: "Abnormal: one side of the face droops or doesn't move as well as the other" },
        { left: "Arm drift test", right: "Abnormal: one arm drifts downward compared to the other when both are held out" },
        { left: "Speech test", right: "Abnormal: slurred, incorrect words, or unable to speak" },
      ],
    },
  },

  // --- Medical direction ---
  {
    id: "s5-medical-direction-match",
    concept: "medical-direction",
    mode: "match",
    payload: {
      pairs: [
        { left: "Online medical direction", right: "Real-time direction via phone or radio from medical control" },
        { left: "Offline medical direction", right: "Standing written protocols/guidelines followed without real-time contact" },
      ],
    },
  },

  // --- EMT-assist drugs ---
  {
    id: "s5-assist-drugs-multi",
    concept: "emt-assist-drugs",
    mode: "multi",
    payload: {
      question: "Which medications can an EMT assist a patient with administering?",
      choices: [
        "MDI (metered dose inhaler)",
        "Nitroglycerin",
        "EpiPen — if it belongs to the patient",
        "Oral antibiotics",
        "Insulin",
        "Someone else's EpiPen, if the patient's isn't available",
      ],
      correctIndices: [0, 1, 2],
    },
  },
  {
    id: "s5-assist-drugs-rule-fc",
    concept: "emt-assist-drugs",
    mode: "flashcard",
    payload: {
      front: "Can an EMT assist a patient with someone else's prescribed medication?",
      back: "No — never assist with a medication that doesn't belong to the patient.",
    },
  },
];

const section05 = {
  id: 5,
  title: "Respiratory Emergencies, Stroke, Medical Direction",
  items,
};

export default section05;
