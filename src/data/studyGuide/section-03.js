// Section 3 — Moving Patients & Cardiac Anatomy
// Source: EMT_final_tesseract_corrected.txt review guide + Pearson Emergency
// Care 14e excerpts. Item shape:
//   { id, concept, mode, tags?, payload }
// mode-specific payload shapes:
//   flashcard: { front, back }
//   multi:     { question, choices: string[], correctIndices: number[] }
//   match:     { pairs: { left, right }[] }
//   seq:       { prompt, steps: string[] }   // steps in correct order

const items = [
  // --- Body mechanics ---
  {
    id: "s3-body-mechanics-multi",
    concept: "body-mechanics",
    mode: "multi",
    payload: {
      question: "Which of these are correct body mechanics principles when moving a patient?",
      choices: [
        "Keep the weight as close to your body as possible",
        "Lift with your legs, hips, and glutes — not your back",
        "Keep your body's joints “stacked” (aligned) rather than twisted",
        "Minimize the distance you carry the patient",
        "Bend at the waist to reach the patient",
        "Twist your torso while lifting to reposition the patient",
        "Hold the load away from your body for a better view",
      ],
      correctIndices: [0, 1, 2, 3],
    },
  },

  // --- Emergency move criteria ---
  {
    id: "s3-emergency-move-multi",
    concept: "emergency-move-criteria",
    mode: "multi",
    payload: {
      question: "Which of these justify an emergency move (moving the patient immediately, skipping spinal precautions)?",
      choices: [
        "Fire or imminent fire risk",
        "Explosives or hazardous materials present",
        "You can't protect the patient from other scene hazards",
        "You can't reach other patients who need lifesaving care unless this patient is moved first",
        "The patient's location makes it impossible to provide lifesaving care",
        "The patient is anxious and asking to be moved",
        "Bystanders are filming the scene",
        "The stretcher would be more comfortable than the ground",
      ],
      correctIndices: [0, 1, 2, 3, 4],
    },
  },

  // --- Named drag/carry techniques ---
  {
    id: "s3-clothing-drag-fc",
    concept: "clothing-drag",
    mode: "flashcard",
    payload: {
      front: "Clothing drag — when is it used, and what's its main drawback?",
      back: "Used only in emergencies. The patient is dragged by their clothing. Drawback: it doesn't protect the neck/spine.",
    },
  },
  {
    id: "s3-blanket-drag-fc",
    concept: "blanket-drag",
    mode: "flashcard",
    payload: {
      front: "Blanket drag — technique?",
      back: "The patient is rolled onto a blanket, then dragged by the blanket.",
    },
  },
  {
    id: "s3-draw-sheet-fc",
    concept: "draw-sheet-transfer",
    mode: "flashcard",
    payload: {
      front: "Modified draw-sheet transfer",
      back: "A technique for sliding a patient from one stretcher/cot to another using a taut sheet, gathered and pulled at the shoulders, mid-torso, hips, and knees.",
    },
  },
  {
    id: "s3-draw-sheet-seq",
    concept: "draw-sheet-transfer",
    mode: "seq",
    payload: {
      prompt: "Put the modified draw-sheet transfer steps in order.",
      steps: [
        "Position the raised cot next to the receiving stretcher; the receiving side adjusts stretcher height/head position first",
        "Both sides gather the sheet on either side of the patient and pull it taut",
        "Holding the gathered sheet at support points near the shoulders, mid-torso, hips, and knees, both sides slide the patient in one motion onto the receiving stretcher",
        "Center the patient and raise the stretcher rails before handing off",
      ],
    },
  },
  {
    id: "s3-bent-arm-drag-fc",
    concept: "bent-arm-drag",
    mode: "flashcard",
    tags: ["web-sourced"],
    payload: {
      front: "Bent arm drag — technique? ⚠️ web-sourced, not the textbook",
      back: "Rescuer positions behind the patient, reaches under the armpits, grasps the forearms/wrists, cradles the patient's head between locked bent arms, and walks backward dragging the patient while continuously observing them.",
    },
  },
  {
    id: "s3-bent-arm-drag-seq",
    concept: "bent-arm-drag",
    mode: "seq",
    tags: ["web-sourced"],
    payload: {
      prompt: "Put the bent arm drag steps in order. ⚠️ web-sourced, not the textbook",
      steps: [
        "Rescuer positions behind the patient, reaches under the armpits, and grasps the forearms/wrists",
        "Cradles the patient's head between locked bent arms",
        "Walks backward, dragging the patient while continuously observing them",
      ],
    },
  },
  {
    id: "s3-urgent-move-fc",
    concept: "urgent-move",
    mode: "flashcard",
    payload: {
      front: "What is an “urgent move”, and how does it differ from an emergency move or a nonurgent move?",
      back: "An urgent move allows time for an abbreviated assessment before moving the patient (e.g. after extrication). An emergency move allows no time to assess at all. A nonurgent move happens only after a full assessment is completed.",
    },
  },
  {
    id: "s3-drag-techniques-match",
    concept: "drag-techniques-overview",
    mode: "match",
    payload: {
      pairs: [
        { left: "Clothing drag", right: "Dragged by the clothing; used only in emergencies, doesn't protect the spine" },
        { left: "Blanket drag", right: "Patient rolled onto a blanket, then dragged by it" },
        { left: "Bent arm drag", right: "Rescuer cradles the patient's head between locked arms, walks backward dragging them" },
        { left: "Urgent move", right: "Abbreviated assessment before moving, e.g. after extrication" },
      ],
    },
  },

  // --- LSB team positioning ---
  {
    id: "s3-lsb-positioning-fc",
    concept: "lsb-team-positioning",
    mode: "flashcard",
    payload: {
      front: "Long spine board (LSB) team positioning?",
      back: "One team member at the head, one at the foot, one on each side.",
    },
  },

  // --- Heart blood flow ---
  {
    id: "s3-heart-flow-right-seq",
    concept: "heart-blood-flow-right",
    mode: "seq",
    payload: {
      prompt: "Put the right-side heart blood flow in order.",
      steps: [
        "Superior/inferior vena cava",
        "Right atrium",
        "Tricuspid valve",
        "Right ventricle",
        "Pulmonic valve",
        "Pulmonary artery",
      ],
    },
  },
  {
    id: "s3-heart-flow-left-seq",
    concept: "heart-blood-flow-left",
    mode: "seq",
    payload: {
      prompt: "Put the left-side heart blood flow in order.",
      steps: [
        "Pulmonary vein",
        "Left atrium",
        "Bicuspid (mitral) valve",
        "Left ventricle",
        "Aortic valve",
        "Aorta",
      ],
    },
  },
  {
    id: "s3-heart-right-to-lungs-fc",
    concept: "heart-blood-flow-purpose",
    mode: "flashcard",
    payload: {
      front: "Which side of the heart pumps blood to the lungs to be oxygenated?",
      back: "The right side — deoxygenated blood is pumped to the lungs via the pulmonary artery.",
    },
  },
  {
    id: "s3-heart-left-to-body-fc",
    concept: "heart-blood-flow-purpose",
    mode: "flashcard",
    payload: {
      front: "Which side of the heart pumps oxygenated blood out to the body?",
      back: "The left side — blood leaves the lungs oxygenated and is pumped out to the body via the aorta.",
    },
  },
  {
    id: "s3-tpma-fc",
    concept: "tpma-mnemonic",
    mode: "flashcard",
    payload: {
      front: "Heart valve mnemonic TPMA — what does it stand for, and what does it represent?",
      back: "“Try Pulling My Aorta” = Tricuspid → Pulmonic → Mitral → Aortic — the order blood passes through the four heart valves.",
    },
  },

  // --- Heart failure sides ---
  {
    id: "s3-heart-failure-match",
    concept: "heart-failure-sides",
    mode: "match",
    payload: {
      pairs: [
        { left: "Left-sided heart failure", right: "Pulmonary edema (fluid backs up into the lungs)" },
        { left: "Right-sided heart failure", right: "Peripheral edema, JVD, and liver enlargement (fluid backs up into the body)" },
      ],
    },
  },
];

const section03 = {
  id: 3,
  title: "Moving Patients & Cardiac Anatomy",
  items,
};

export default section03;
