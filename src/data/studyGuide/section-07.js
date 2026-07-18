// Section 7 — Trauma: Spinal, Bleeding, Eyes, Fractures, Sickle Cell
// Source: EMT_final_tesseract_corrected.txt review guide.

const items = [
  // --- Spinal injury ---
  {
    id: "s7-manual-stabilization-fc",
    concept: "spinal-injury-treatment",
    mode: "flashcard",
    payload: {
      front: "Manual stabilization — definition?",
      back: "Using one's hands to prevent movement of the patient's head and neck until a cervical collar can be applied.",
    },
  },
  {
    id: "s7-spinal-seq",
    concept: "spinal-injury-treatment",
    mode: "seq",
    payload: {
      prompt: "Put the spinal injury treatment steps in order.",
      steps: [
        "Manually stabilize the head and neck",
        "Open the airway with a jaw-thrust maneuver",
        "Assess sensation, circulation, and motor function (SMC)",
        "Assess the neck for injury",
        "Apply a cervical collar",
        "Secure to the long spine board (straps at nipple, navel, knee, then head)",
        "Reassess SMC",
        "Transport",
      ],
    },
  },

  // --- Trauma Center designations ---
  {
    id: "s7-trauma-center-match",
    concept: "trauma-center-designations",
    mode: "match",
    payload: {
      prompt: "Match each trauma center level to its capability.",
      pairs: [
        { left: "Level I", right: "Regional Trauma Center — manages all types of trauma, 24/7" },
        { left: "Level II", right: "Area Trauma Center — most trauma with surgical capability, 24/7; transfers specialized cases to Level I" },
        { left: "Level III", right: "Community Trauma Center — some surgical capability; stabilizes before transfer to a higher level" },
        { left: "Level IV", right: "Trauma Facility — small/remote hospital; stabilizes before transfer to a higher level" },
      ],
    },
  },
  {
    id: "s7-trauma-center-level1-fc",
    concept: "trauma-center-designations",
    mode: "flashcard",
    payload: {
      front: "What's a Level I Trauma Center?",
      back: "A Regional Trauma Center — manages all types of trauma, 24/7.",
    },
  },
  {
    id: "s7-trauma-center-level4-fc",
    concept: "trauma-center-designations",
    mode: "flashcard",
    payload: {
      front: "What's a Level IV Trauma Center?",
      back: "A Trauma Facility — typically a small, remote community hospital that stabilizes seriously injured patients before transferring to a higher-level center.",
    },
  },

  // --- Bleeding control ---
  {
    id: "s7-bleeding-seq",
    concept: "bleeding-control",
    mode: "seq",
    payload: {
      prompt: "Put the bleeding control steps in order.",
      steps: [
        "Apply direct pressure",
        "Apply a tourniquet if direct pressure fails",
        "Apply a hemostatic agent if needed",
        "Treat for shock",
      ],
    },
  },
  {
    id: "s7-impaled-object-fc",
    concept: "bleeding-control",
    mode: "flashcard",
    payload: {
      front: "Should you remove an impaled object when controlling bleeding?",
      back: "No — never remove an impaled object. Stabilize it in place and control bleeding around it. If it's too large to transport, cut and secure it with bandaging rather than removing it.",
    },
  },

  // --- Eye injuries ---
  {
    id: "s7-eye-injuries-match",
    concept: "eye-injuries",
    mode: "match",
    payload: {
      pairs: [
        { left: "Chemical exposure", right: "Irrigate continuously for 20+ minutes; protect the uninjured eye from runoff" },
        { left: "Embedded debris", right: "OK to remove if on the conjunctiva; never touch or remove if on the cornea" },
      ],
    },
  },
  {
    id: "s7-eye-debris-fc",
    concept: "eye-injuries",
    mode: "flashcard",
    payload: {
      front: "Embedded eye debris — when is it OK to remove it yourself?",
      back: "Only if it's on the conjunctiva. Never touch or attempt to remove debris embedded in the cornea — stabilize and transport.",
    },
  },

  // --- Extremity fracture rules ---
  {
    id: "s7-fracture-smc-fc",
    concept: "fracture-splinting-rules",
    mode: "flashcard",
    payload: {
      front: "Extremity fracture — SMC check timing?",
      back: "Check sensation, circulation, and motor function (SMC) both before and after splinting.",
    },
  },
  {
    id: "s7-fracture-joints-fc",
    concept: "fracture-splinting-rules",
    mode: "flashcard",
    payload: {
      front: "Extremity fracture — splinting rule for joints?",
      back: "Immobilize the joints above and below the fracture site.",
    },
  },
  {
    id: "s7-dislocation-definition-fc",
    concept: "fracture-splinting-rules",
    mode: "flashcard",
    payload: {
      front: "Dislocation — definition?",
      back: "The disruption or “coming apart” of a joint.",
    },
  },
  {
    id: "s7-dislocation-fc",
    concept: "fracture-splinting-rules",
    mode: "flashcard",
    payload: {
      front: "Dislocation — should you attempt to realign it?",
      back: "No — splint dislocations in the position found. Do not attempt to realign in the field.",
    },
  },
  {
    id: "s7-fracture-extras-fc",
    concept: "fracture-splinting-rules",
    mode: "flashcard",
    payload: {
      front: "Fracture care — what else should you do besides splinting?",
      back: "Apply cold packs, elevate the limb if possible, and remove jewelry near the injury site.",
    },
  },
  {
    id: "s7-pulses-absent-mc",
    concept: "fracture-pulse-decision",
    mode: "mc",
    payload: {
      question: "You're splinting a deformed extremity fracture. Distal pulses are absent — what do you do?",
      choices: [
        "Gently apply manual traction to try to restore a pulse, then splint",
        "Splint in the position found without attempting traction",
        "Wait for ALS before touching the limb",
        "Apply a tourniquet above the fracture",
      ],
      correctIndex: 0,
    },
  },
  {
    id: "s7-pulses-present-fc",
    concept: "fracture-pulse-decision",
    mode: "flashcard",
    payload: {
      front: "Deformed fracture with pulses present — do you realign it?",
      back: "No — splint in the position found. Only attempt gentle traction/realignment if pulses are absent.",
    },
  },

  // --- Femur / shoulder-clavicle ---
  {
    id: "s7-femur-fc",
    concept: "femur-shoulder-treatment",
    mode: "flashcard",
    payload: {
      front: "Femur fracture — treatment?",
      back: "Traction splint, or secure to a long spine board if a traction splint isn't appropriate or available.",
    },
  },
  {
    id: "s7-shoulder-clavicle-fc",
    concept: "femur-shoulder-treatment",
    mode: "flashcard",
    payload: {
      front: "Shoulder or clavicle fracture — treatment?",
      back: "Sling and swathe.",
    },
  },

  // --- Compartment syndrome ---
  {
    id: "s7-compartment-definition-fc",
    concept: "compartment-syndrome",
    mode: "flashcard",
    payload: {
      front: "Compartment syndrome — what is it?",
      back: "Injury caused when tissues such as blood vessels and nerves are constricted within a space — from swelling, or from a tight dressing or cast. Extremity fracture/crush injury is the classic EMS cause, but a too-tight splint or cast can cause it too.",
    },
  },
  {
    id: "s7-compartment-ss-fc",
    concept: "compartment-syndrome",
    mode: "flashcard",
    payload: {
      front: "Compartment syndrome — signs/symptoms?",
      back: "Pain, swelling, a sensation of pressure, the extremity feeling hard compared to the uninjured side, and reduced or absent CSM (circulation, sensation, motor function).",
    },
  },
  {
    id: "s7-compartment-treatment-fc",
    concept: "compartment-syndrome",
    mode: "flashcard",
    payload: {
      front: "Compartment syndrome — treatment?",
      back: "Same as fracture care: cold application, elevation (if safe after splinting), and prompt transport. If a dressing, cast, or splint you applied is the cause, loosen it.",
    },
  },
  {
    id: "s7-compartment-progression-seq",
    concept: "compartment-syndrome",
    mode: "seq",
    payload: {
      prompt: "Put the compartment syndrome progression in order.",
      steps: [
        "Fracture or crush injury occurs",
        "Bleeding and swelling begin within the muscle compartment",
        "Pressure builds until the body can't perfuse the tissue",
        "Cellular damage causes more swelling and blood flow is lost — the limb may be lost if not relieved",
      ],
    },
  },

  // --- Sickle cell ---
  {
    id: "s7-sickle-cell-fc",
    concept: "sickle-cell",
    mode: "flashcard",
    payload: {
      front: "Sickle cell disease vs. sickle cell anemia — what's the relationship?",
      back: "SCD is an inherited hemoglobin defect that causes abnormally shaped (sickle) red blood cells. This leads to SCA, where those abnormal cells are destroyed prematurely in circulation.",
    },
  },
  {
    id: "s7-sickle-crisis-fc",
    concept: "sickle-cell",
    mode: "flashcard",
    payload: {
      front: "Sickle cell crisis — what causes it?",
      back: "Sludging of sickled red blood cells in the capillaries, causing severe pain in the arms, legs, chest, and/or abdomen.",
    },
  },
  {
    id: "s7-sickle-treatment-fc",
    concept: "sickle-cell",
    mode: "flashcard",
    payload: {
      front: "Sickle cell crisis — treatment?",
      back: "Give O2 if SOB, chest pain, or SpO2 <95%. Monitor for acute chest syndrome and fever (risk of shock). Transport stroke symptoms to a stroke center if available.",
    },
  },
  {
    id: "s7-sickle-complications-match",
    concept: "sickle-cell-complications",
    mode: "match",
    payload: {
      pairs: [
        { left: "Spleen destruction", right: "Increased infection risk" },
        { left: "Acute chest syndrome", right: "Shortness of breath and chest pain from hypoxia" },
        { left: "Priapism", right: "Prolonged, painful erection — in sickle cell, caused by sludged blood flow (can also result from spinal injury or other medical problems)" },
        { left: "Stroke", right: "Sludged blood flow blocking circulation to the brain" },
        { left: "Jaundice", right: "Yellowing of the skin/eyes from rapid red blood cell breakdown" },
      ],
    },
  },
];

const section07 = {
  id: 7,
  title: "Trauma: Spinal, Bleeding, Eyes, Fractures, Sickle Cell",
  items,
};

export default section07;
