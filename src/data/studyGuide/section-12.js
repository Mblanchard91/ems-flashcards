// Section 12 — Abbreviations & Terminology
// Source: EMT_final_tesseract_corrected.txt review guide.
//
// The doc's "30 Medical Abbreviations" item is intentionally omitted here —
// every one of those 30 (GSW, PPE, BS, c/o, VS, LOC, GCS, NTG, ASA, ETA,
// JVD, TBI, CP, MI, ICP, LSB, Abd, LLQ, LUQ, RLQ, RUQ, NKA, BSA, MDI, NC,
// PCR, Vtach, NPA, PRN, Vfib) already exists in the separate "Abbreviations
// & Mnemonics" deck (src/data/cards.js), with its own flashcard + typed-quiz
// modes. Re-authoring them here would just duplicate that content.
//
// This section covers the doc's other item: 12 medical terminology words
// (the doc's header says "7 Matching" but lists 12 — a source-document
// quirk, not something changed here), split into two 6-term rounds. Only
// 7 of the 12 (Tachycardia, Bradycardia, Auscultation, Apnea, Dyspnea,
// Dysrhythmia, Asystole) have confirmed textbook glossary definitions.
// The other 5 (Tachypnea, Bradypnea, Hypotension, Hypertension, Hypoxemia)
// were authored from general EMT/medical knowledge, not the textbook or
// any other specific source — standard, unambiguous definitions, just not
// textbook-cited. Kept in deliberately rather than trimmed.
//
// Also includes a consolidated "Key Terms / Vocabulary" flashcard deck
// (59 terms) pulling every textbook-glossary-defined term named elsewhere
// in the guide into one place, per the source doc's Section 12 item 3.
// Kept as a single flashcard deck rather than split by section of origin.

const items = [
  {
    id: "s12-terms-round1-match",
    concept: "medical-terminology",
    mode: "match",
    payload: {
      pairs: [
        { left: "Tachycardic", right: "Abnormally fast heart rate" },
        { left: "Tachypnea", right: "Abnormally fast breathing rate" },
        { left: "Bradycardia", right: "Abnormally slow heart rate" },
        { left: "Auscultation", right: "Listening to internal body sounds, usually with a stethoscope" },
        { left: "Bradypnea", right: "Abnormally slow breathing rate" },
        { left: "Apnea", right: "Absence of breathing" },
      ],
    },
  },
  {
    id: "s12-terms-round2-match",
    concept: "medical-terminology",
    mode: "match",
    payload: {
      pairs: [
        { left: "Dyspnea", right: "Difficulty breathing / shortness of breath" },
        { left: "Dysrhythmia", right: "Abnormal heart rhythm" },
        { left: "Asystole", right: "Complete absence of electrical activity in the heart (\"flatline\")" },
        { left: "Hypotension", right: "Abnormally low blood pressure" },
        { left: "Hypertension", right: "Abnormally high blood pressure" },
        { left: "Hypoxemia", right: "Low oxygen level in the blood" },
      ],
    },
  },

  // --- Key Terms / Vocabulary — consolidated deck ---
  // From Section 1
  {
    id: "s12-vocab-chief-complaint",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Chief complaint",
      back: "The statement (usually in the patient's own words) that describes the symptoms or concern associated with the primary problem the patient is having — the reason the patient calls EMS.",
    },
  },
  {
    id: "s12-vocab-general-impression",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "General impression",
      back: "The impression of the patient's condition formed on first approaching the patient, based on environment, chief complaint, and appearance.",
    },
  },
  {
    id: "s12-vocab-moi",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Mechanism of injury (MOI)",
      back: "A force or forces that may have caused injury.",
    },
  },
  {
    id: "s12-vocab-noi",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Nature of the illness (NOI)",
      back: "What is medically wrong with a patient.",
    },
  },
  {
    id: "s12-vocab-ppe",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Personal protective equipment (PPE)",
      back: "Equipment that protects the EMS worker from infection and/or exposure to the dangers of rescue operations.",
    },
  },
  {
    id: "s12-vocab-recovery-position",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Recovery position",
      back: "Lying on the side; also called the lateral recumbent position.",
    },
  },

  // From Section 2
  {
    id: "s12-vocab-expressed-consent",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Expressed consent",
      back: "Consent given by adults who are of legal age and mentally competent to make a rational decision regarding their medical care.",
    },
  },
  {
    id: "s12-vocab-implied-consent",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Implied consent",
      back: "The consent it is presumed patients or guardians would give if they could — e.g. an unconscious patient, or a child whose parents can't be reached.",
    },
  },

  // From Section 3
  {
    id: "s12-vocab-draw-sheet-method",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Draw-sheet method",
      back: "A method of transferring a patient from bed to stretcher by grasping and pulling the loosened bottom sheet of the bed.",
    },
  },
  {
    id: "s12-vocab-jvd",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Jugular vein distention (JVD)",
      back: "Bulging of the neck veins.",
    },
  },
  {
    id: "s12-vocab-hf-chf",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Heart failure (HF) / Congestive heart failure (CHF)",
      back: "Same condition, interchangeable names.",
    },
  },

  // From Section 4
  {
    id: "s12-vocab-seizure",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Seizure",
      back: "A sudden change in sensation, behavior, or movement; the most severe form produces violent muscle contractions called convulsions.",
    },
  },
  {
    id: "s12-vocab-hypoglycemia",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Hypoglycemia",
      back: "Low blood sugar.",
    },
  },
  {
    id: "s12-vocab-hypovolemic-shock",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Hypovolemic shock",
      back: "Shock resulting from blood or fluid loss.",
    },
  },
  {
    id: "s12-vocab-cardiogenic-shock",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Cardiogenic shock",
      back: "Shock (lack of perfusion) brought on not by blood loss but by the heart's inadequate pumping action — often the result of a heart attack (MI) or congestive heart failure.",
    },
  },
  {
    id: "s12-vocab-obstructive-shock",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Obstructive shock",
      back: "Term for the different conditions that block the flow of blood and cause hypoperfusion.",
    },
  },
  {
    id: "s12-vocab-distributive-shock",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Distributive shock",
      back: "Hypoperfusion due to a lack of blood vessel tone — blood vessel dilation leads to decreased pressure within the circulatory system.",
    },
  },
  {
    id: "s12-vocab-neurogenic-shock",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Neurogenic shock",
      back: "Hypoperfusion caused by a spinal cord injury that results in systemic vasodilation and nerve paralysis.",
    },
  },
  {
    id: "s12-vocab-hemorrhagic-shock",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Hemorrhagic shock",
      back: "A subtype of hypovolemic shock — specifically the bleeding-caused subset (hypovolemic shock caused by blood loss).",
    },
  },
  {
    id: "s12-vocab-compensated-shock",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Compensated shock",
      back: "The period when the patient is developing shock but the body is still able to maintain perfusion.",
    },
  },
  {
    id: "s12-vocab-decompensated-shock",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Decompensated shock",
      back: "The period when the body can no longer compensate for low blood volume or lack of perfusion — late signs such as decreasing blood pressure become evident.",
    },
  },

  // From Section 5
  {
    id: "s12-vocab-pneumothorax",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Pneumothorax",
      back: "Air in the chest cavity.",
    },
  },
  {
    id: "s12-vocab-stroke",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Stroke",
      back: "Altered function caused when an artery in the brain is blocked or ruptured; formerly called a cerebrovascular accident (CVA).",
    },
  },
  {
    id: "s12-vocab-nitroglycerin",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Nitroglycerin",
      back: "A drug that helps to dilate the coronary vessels that supply the heart muscle with blood.",
    },
  },
  {
    id: "s12-vocab-auto-injector",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Auto-injector",
      back: "A syringe preloaded with medication that has a spring-loaded device that pushes the needle through the skin when pressed firmly against the body — the generic term behind \"EpiPen,\" which is a brand name.",
    },
  },

  // From Section 6
  {
    id: "s12-vocab-allergic-reaction",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Allergic reaction",
      back: "An exaggerated immune response.",
    },
  },
  {
    id: "s12-vocab-anaphylaxis",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Anaphylaxis",
      back: "A severe or life-threatening allergic reaction in which blood vessels dilate (dropping blood pressure) and the respiratory lining swells (interfering with the airway); also called anaphylactic shock.",
    },
  },
  {
    id: "s12-vocab-epinephrine",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Epinephrine",
      back: "A hormone from the adrenal glands; as a medication it constricts blood vessels, dilates respiratory passages, and relieves severe allergic reactions.",
    },
  },
  {
    id: "s12-vocab-ectopic-pregnancy",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Ectopic pregnancy",
      back: "Implantation of the fertilized egg outside the uterus (in the fallopian tube, cervix, or abdominopelvic cavity).",
    },
  },
  {
    id: "s12-vocab-appendix",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Appendix",
      back: "Small tube near the junction of the small/large intestines in the RLQ; its inflammation (appendicitis) is a common cause of abdominal pain.",
    },
  },

  // From Section 7
  {
    id: "s12-vocab-manual-stabilization",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Manual stabilization",
      back: "Using one's hands to prevent movement of a patient's head and neck until a cervical collar can be applied.",
    },
  },
  {
    id: "s12-vocab-dislocation",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Dislocation",
      back: "The disruption or \"coming apart\" of a joint.",
    },
  },
  {
    id: "s12-vocab-compartment-syndrome",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Compartment syndrome",
      back: "Injury caused when tissues such as blood vessels and nerves are constricted within a space, from swelling or from a tight dressing or cast.",
    },
  },
  {
    id: "s12-vocab-traction-splint",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Traction splint",
      back: "A splint that applies constant pull along a lower extremity; used primarily on femoral shaft fractures.",
    },
  },
  {
    id: "s12-vocab-priapism",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Priapism",
      back: "Persistent erection of the penis that may result from spinal injury and some medical problems.",
    },
  },
  {
    id: "s12-vocab-scd",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Sickle cell disease (SCD)",
      back: "An inherited disease with a genetic hemoglobin defect resulting in an abnormal red blood cell structure.",
    },
  },
  {
    id: "s12-vocab-sca",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Sickle cell anemia (SCA)",
      back: "An abnormally low number of RBCs in the circulation due to sickle cell disease.",
    },
  },

  // From Section 8
  {
    id: "s12-vocab-nrb",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Nonrebreather (NRB) mask",
      back: "A face mask–and–reservoir bag device that delivers high concentrations of oxygen; exhaled air escapes through a valve and is not rebreathed.",
    },
  },
  {
    id: "s12-vocab-nasal-cannula",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Nasal cannula",
      back: "A device that delivers low concentrations of oxygen through two prongs that rest in the patient's nostrils.",
    },
  },
  {
    id: "s12-vocab-occlusive-dressing",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Occlusive dressing",
      back: "Any dressing that forms an airtight seal.",
    },
  },
  {
    id: "s12-vocab-tension-pneumothorax",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Tension pneumothorax",
      back: "A pneumothorax in which air accumulation puts pressure on the heart and vena cava, causing shock.",
    },
  },
  {
    id: "s12-vocab-evisceration",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Evisceration",
      back: "An intestine or other internal organ protruding through a wound in the abdomen.",
    },
  },

  // From Section 9
  {
    id: "s12-vocab-hyperthermia",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Hyperthermia",
      back: "An increase in body temperature above normal; life-threatening in the extreme.",
    },
  },
  {
    id: "s12-vocab-hypothermia",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Hypothermia",
      back: "Generalized cooling that reduces body temperature below normal; life-threatening in the extreme.",
    },
  },
  {
    id: "s12-vocab-superficial-burn",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Superficial burn",
      back: "A burn involving only the epidermis; reddening, possible swelling; also called a first-degree burn.",
    },
  },
  {
    id: "s12-vocab-partial-thickness-burn",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Partial thickness burn",
      back: "A burn damaging the epidermis and dermis; reddening, blistering, mottled appearance; also called a second-degree burn.",
    },
  },
  {
    id: "s12-vocab-full-thickness-burn",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Full thickness burn",
      back: "A burn damaging all skin layers; charred black or dry white areas; also called a third-degree burn.",
    },
  },
  {
    id: "s12-vocab-icp",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Intracranial pressure (ICP)",
      back: "Pressure inside the skull.",
    },
  },

  // From Section 10
  {
    id: "s12-vocab-opa",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Oropharyngeal airway (OPA)",
      back: "A curved device inserted through the patient's mouth into the pharynx to help maintain an open airway.",
    },
  },
  {
    id: "s12-vocab-npa",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Nasopharyngeal airway (NPA)",
      back: "A flexible breathing tube inserted through the patient's nostril into the pharynx to help maintain an open airway.",
    },
  },
  {
    id: "s12-vocab-gag-reflex",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Gag reflex",
      back: "Vomiting or retching when something is placed in the back of the pharynx; tied to the swallow reflex.",
    },
  },
  {
    id: "s12-vocab-cpr",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Cardiopulmonary resuscitation (CPR)",
      back: "Actions taken to revive a person by keeping the person's heart and lungs working.",
    },
  },

  // From Section 11
  {
    id: "s12-vocab-schizophrenia",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Schizophrenia",
      back: "A chronic mental disorder affecting how a person thinks, feels, and behaves; severe or untreated cases may seem to lose touch with reality.",
    },
  },
  {
    id: "s12-vocab-excited-delirium",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Excited delirium (agitated delirium)",
      back: "Bizarre and/or aggressive behavior, shouting, paranoia, panic, violence toward others, insensitivity to pain, unexpected physical strength, and hyperthermia — usually associated with cocaine or amphetamine use.",
    },
  },
  {
    id: "s12-vocab-concussion",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Concussion",
      back: "Mild closed head injury without detectable brain damage; complete recovery usually expected, though effects may linger for weeks, months, or even years.",
    },
  },
  {
    id: "s12-vocab-mci",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Multiple-casualty incident (MCI)",
      back: "Any medical or trauma incident involving multiple patients.",
    },
  },
  {
    id: "s12-vocab-incident-command",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Incident Command",
      back: "The person(s) who assume overall direction of a large-scale incident.",
    },
  },
  {
    id: "s12-vocab-single-incident-command",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Single incident command",
      back: "Command organization where a single agency controls all resources and operations.",
    },
  },
  {
    id: "s12-vocab-unified-command",
    concept: "key-terms-vocabulary",
    mode: "flashcard",
    payload: {
      front: "Unified command",
      back: "Command organization where several agencies work independently but cooperatively.",
    },
  },
];

const section12 = {
  id: 12,
  title: "Abbreviations & Terminology",
  items,
};

export default section12;
