// Section 10 — Airway Management & Newborn/Pediatric Care
// Source: EMT_final_tesseract_corrected.txt review guide.

const items = [
  // --- Airway management ---
  {
    id: "s10-airway-match",
    concept: "airway-management",
    mode: "match",
    payload: {
      prompt: "Match each airway finding to the correct intervention.",
      pairs: [
        { left: "Snoring respirations", right: "Jaw-thrust or head-tilt chin-lift maneuver" },
        { left: "Gurgling respirations", right: "Suction the airway" },
        { left: "Unresponsive, no gag reflex", right: "OPA (oropharyngeal airway)" },
        { left: "Unresponsive, possible gag reflex", right: "NPA (nasopharyngeal airway)" },
        { left: "Trauma patient with difficulty speaking", right: "Suspect airway injury — manage the airway first" },
      ],
    },
  },

  // --- Newborn ventilation/CPR thresholds ---
  {
    id: "s10-newborn-normal-rr-fc",
    concept: "newborn-thresholds",
    mode: "flashcard",
    payload: {
      front: "What's a normal newborn respiratory rate?",
      back: "40–60 breaths/min — this is the reference range \"inadequate\" breathing is judged against.",
    },
  },
  {
    id: "s10-newborn-hr60-100-fc",
    concept: "newborn-thresholds",
    mode: "flashcard",
    payload: {
      front: "Newborn: apneic/gasping with HR 60-100 — what do you do?",
      back: "Provide PPV (positive pressure ventilation).",
    },
  },
  {
    id: "s10-newborn-hr60-fc",
    concept: "newborn-thresholds",
    mode: "flashcard",
    payload: {
      front: "Newborn: HR below 60 — what do you do?",
      back: "Provide PPV plus chest compressions, at a 3:1 ratio, 120 events/min.",
    },
  },
  {
    id: "s10-newborn-hr80-mc",
    concept: "newborn-thresholds",
    mode: "mc",
    payload: {
      question: "A newborn is apneic with a heart rate of 80. What's the correct action?",
      choices: [
        "Provide PPV",
        "Provide PPV plus chest compressions",
        "Begin chest compressions only",
        "No intervention needed",
      ],
      correctIndex: 0,
    },
  },
  {
    id: "s10-newborn-hr40-mc",
    concept: "newborn-thresholds",
    mode: "mc",
    payload: {
      question: "A newborn's heart rate is 40. What's the correct action?",
      choices: [
        "Provide PPV plus chest compressions at a 3:1 ratio, 120 events/min",
        "Provide PPV only",
        "Begin rescue breathing only",
        "Wait 1 minute and reassess",
      ],
      correctIndex: 0,
    },
  },

  // --- Newborn general care ---
  {
    id: "s10-newborn-initial-care-fc",
    concept: "newborn-general-care",
    mode: "flashcard",
    payload: {
      front: "Newborn — initial care steps?",
      back: "Dry, stimulate, and keep the newborn warm.",
    },
  },
  {
    id: "s10-amniotic-fluid-fc",
    concept: "newborn-general-care",
    mode: "flashcard",
    payload: {
      front: "Normal amniotic fluid — volume and appearance?",
      back: "About 500 mL, clear and odorless.",
    },
  },
  {
    id: "s10-prolapsed-cord-fc",
    concept: "newborn-general-care",
    mode: "flashcard",
    payload: {
      front: "Prolapsed umbilical cord — protocol?",
      back: "Position the mother to relieve pressure on the cord (e.g. knee-chest position). This is the only situation where an EMT inserts gloved fingers into the birth canal — to push or hold the baby's head off the cord, especially during contractions. Do not push the cord back in, keep it moist, and transport immediately.",
    },
  },
  {
    id: "s10-suids-fc",
    concept: "newborn-general-care",
    mode: "flashcard",
    payload: {
      front: "SUIDS (Sudden Unexpected Infant Death Syndrome) — what's your role?",
      back: "Support the family — your role is emotional support, not investigation.",
    },
  },

  // --- CPR ---
  {
    id: "s10-cpr-start-fc",
    concept: "cpr-start",
    mode: "flashcard",
    payload: {
      front: "When should you start CPR?",
      back: "When the patient is unconscious and unresponsive with no normal breathing/pulse.",
    },
  },

  // --- Choking management ---
  {
    id: "s10-choking-severity-match",
    concept: "choking-severity",
    mode: "match",
    payload: {
      prompt: "Match each choking severity to its presentation.",
      pairs: [
        { left: "Severe choking", right: "No air movement at all — may still be conscious/walking but not breathing, coughing, or gasping" },
        { left: "Nonsevere choking", right: "Partial blockage — can speak/cough/wheeze/gasp, stridor possible" },
      ],
    },
  },
  {
    id: "s10-adult-thrusts-fc",
    concept: "choking-technique",
    mode: "flashcard",
    payload: {
      front: "Adult/child (>1 year), severe choking — technique?",
      back: "Stand/kneel behind the patient, fist over the navel, grab with the other hand, quick forceful upward thrusts, repeat until cleared or unconscious. If you can't wrap both arms around the patient, use sternum placement instead.",
    },
  },
  {
    id: "s10-infant-backslaps-fc",
    concept: "choking-technique",
    mode: "flashcard",
    payload: {
      front: "Infant (<1 year), severe choking — back slap technique?",
      back: "Position the infant face-down along your forearm, head lower than the body. Give 5 back slaps with the heel of your hand between the shoulder blades.",
    },
  },
  {
    id: "s10-infant-chestthrusts-fc",
    concept: "choking-technique",
    mode: "flashcard",
    payload: {
      front: "Infant (<1 year), severe choking — chest thrust technique?",
      back: "Turn the infant face-up, head still lower than the body. With 2 fingers on the lower sternum just below the nipple line, give 5 chest thrusts — about 1.5 inches deep (one-third the chest's depth), 1 per second.",
    },
  },
  {
    id: "s10-infant-seq",
    concept: "choking-technique",
    mode: "seq",
    payload: {
      prompt: "Put the infant choking sequence in order (see the back slap and chest thrust technique cards above for the details of each step).",
      steps: ["5 back slaps", "5 chest thrusts", "Repeat, alternating, until cleared or the infant becomes unconscious"],
    },
  },
  {
    id: "s10-unconscious-choking-fc",
    concept: "choking-technique",
    mode: "flashcard",
    payload: {
      front: "Choking patient becomes unconscious (any age) — what do you do?",
      back: "Begin CPR.",
    },
  },
];

const section10 = {
  id: 10,
  title: "Airway Management & Newborn/Pediatric Care",
  items,
};

export default section10;
