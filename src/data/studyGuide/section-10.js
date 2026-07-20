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
    id: "s10-newborn-need-resuscitation-fc",
    concept: "newborn-thresholds",
    mode: "flashcard",
    payload: {
      front: "Newborn assessment — how do you identify a possible need for resuscitation?",
      back: "Ask: term gestation? Good tone? Crying? If either \"good tone\" or \"crying\" is no, begin resuscitation. Call for ALS as part of this initial check, not as an afterthought.",
    },
  },
  {
    id: "s10-newborn-ppv-rate-fc",
    concept: "newborn-thresholds",
    mode: "flashcard",
    payload: {
      front: "Newborn needing PPV — what rate do you ventilate at?",
      back: "40–60 breaths/min (mnemonic: \"breathe-two-three-breathe-two-three\"). This is the ventilation delivery rate, not a normal newborn breathing rate reference.",
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
      back: "Support the family with compassion, not suspicion — it's not your job to diagnose SUIDS or investigate. If you're ever unsure whether to resuscitate, always resuscitate.",
    },
  },
  {
    id: "s10-suids-withhold-fc",
    concept: "newborn-general-care",
    mode: "flashcard",
    payload: {
      front: "SUIDS — when can you withhold resuscitation?",
      back: "Only for rigor mortis (stiffening of the body after death) or lividity (bruising in dependent areas from pooled blood).",
    },
  },

  // --- CPR ---
  {
    id: "s10-cpr-start-fc",
    concept: "cpr-start",
    mode: "flashcard",
    payload: {
      front: "When should you start CPR?",
      back: "When primary assessment finds all 3: unresponsiveness, apnea (absence of breathing, including agonal breathing), and no pulse. Check the carotid pulse for no more than 10 seconds — no pulse found means begin compressions immediately.",
    },
  },
  {
    id: "s10-cpr-pediatric-pulse-fc",
    concept: "cpr-start",
    mode: "flashcard",
    payload: {
      front: "Checking for a pulse in an infant or small child — where, and what's different?",
      back: "Check the brachial or femoral pulse — carotid is hard to assess in infants/small children. For infants specifically, HR <60 bpm is itself considered nonperfusing and an indication for compressions.",
    },
  },
  {
    id: "s10-cpr-clinical-picture-fc",
    concept: "cpr-start",
    mode: "flashcard",
    payload: {
      front: "Is a pediatric heart rate under 60 always an automatic reason to start compressions?",
      back: "No — use the whole clinical picture. E.g. an unconscious, hypotensive 2-year-old with HR 58 needs ventilations now (add compressions if HR doesn't respond), but an alert 8-year-old with normal BP and HR 60 likely needs no immediate intervention, despite technically being under 60.",
    },
  },
  {
    id: "s10-cpr-pediatric-scenario-mc",
    concept: "cpr-start",
    mode: "mc",
    payload: {
      question: "An unconscious, hypotensive 2-year-old has a heart rate of 58 bpm. What's the priority?",
      choices: [
        "Begin ventilations now, add compressions if the heart rate doesn't respond",
        "Do nothing — the heart rate is close enough to 60",
        "Begin chest compressions only, no ventilations needed",
        "Wait for ALS before intervening",
      ],
      correctIndex: 0,
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
