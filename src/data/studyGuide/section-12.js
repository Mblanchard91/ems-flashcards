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
// quirk, not something changed here), split into two 6-term rounds.

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
];

const section12 = {
  id: 12,
  title: "Abbreviations & Terminology",
  items,
};

export default section12;
