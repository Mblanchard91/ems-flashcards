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
    id: "s5-pneumo-ss-multi",
    concept: "spontaneous-pneumothorax",
    mode: "multi",
    payload: {
      question: "Which of these are signs/symptoms of a spontaneous pneumothorax?",
      choices: [
        "Sudden onset of shortness of breath",
        "Sudden onset of sharp chest or shoulder pain",
        "Decreased breath sounds on one side of the chest",
        "Subcutaneous emphysema",
        "Tachypnea",
        "Diaphoresis",
        "Pallor",
        "Cyanosis",
        "SpO2 below 94%",
        "Bilateral breath sounds, equal and clear",
        "Bradypnea",
        "Improving SpO2 with exertion",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
  },
  {
    id: "s5-pneumo-treatment-fc",
    concept: "spontaneous-pneumothorax",
    mode: "flashcard",
    payload: {
      front: "Spontaneous pneumothorax — treatment?",
      back: "Maintain SpO2 ≥94%. If inadequate, provide PPV using the most minimal tidal volume necessary to ventilate. Call ALS. Continuously reassess breath sounds during transport.",
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
        "Slurred speech or inability to speak",
        "Sudden severe headache",
        "Decreased level of consciousness",
        "Drooping eyelid or mouth on one side of the face",
        "Loss of bowel or bladder control",
        "Seizures",
        "Personality change",
        "Unequal pupil size",
        "Vision loss or double vision",
        "Nausea and vomiting",
        "Stiff neck",
        "Sudden weakness or paralysis of the face, arm, or leg",
        "Improved coordination",
        "Increased appetite",
        "Slow onset over several days",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    },
  },
  {
    id: "s5-stroke-treatment-multi",
    concept: "stroke-treatment",
    mode: "multi",
    payload: {
      question: "Which of these are correct stroke treatment steps?",
      choices: [
        "Maintain a patent airway",
        "Suction as needed",
        "Provide PPV if breathing is inadequate",
        "Give 2 LPM by nasal cannula (titrate to SpO2 ≥94%) if hypoxic with signs of dyspnea, heart failure, or shock",
        "Position supine if responsive, or lateral recumbent if unresponsive",
        "Check blood glucose level (BGL)",
        "Protect paralyzed extremities",
        "Perform the Cincinnati Prehospital Stroke Scale",
        "Determine time of symptom onset (last known well)",
        "Begin rapid transport to a stroke center",
        "Notify the receiving hospital",
        "Give the patient aspirin immediately",
        "Withhold oxygen regardless of SpO2",
        "Delay transport until symptoms fully resolve",
      ],
      correctIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  },
  {
    id: "s5-stroke-cva-fc",
    concept: "stroke-naming",
    mode: "flashcard",
    payload: {
      front: "Stroke was formerly known by what term?",
      back: "Cerebrovascular accident (CVA) — an older term that may still appear on the exam.",
    },
  },
  {
    id: "s5-cincinnati-match",
    concept: "cincinnati-stroke-scale",
    mode: "match",
    payload: {
      prompt: "Match each Cincinnati Prehospital Stroke Scale test to its abnormal finding.",
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
      prompt: "Match each type of medical direction to its definition.",
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
