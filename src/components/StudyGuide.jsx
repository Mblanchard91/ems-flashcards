import { useState } from "react";
import { sections, modesForSection, itemsForMode } from "../data/studyGuide/index.js";
import Flashcards from "./Flashcards.jsx";
import MultiSelectPlayer from "./MultiSelectPlayer.jsx";
import MatchingPlayer from "./MatchingPlayer.jsx";
import SequencePlayer from "./SequencePlayer.jsx";
import StudyGuideSummary from "./StudyGuideSummary.jsx";
import styles from "./StudyGuide.module.css";

function toFlashcardDeck(items) {
  return items.map((item) => ({
    id: item.id,
    term: item.payload.front,
    definition: item.payload.back,
  }));
}

function StudyGuide({ onExit }) {
  const [screen, setScreen] = useState("sections");
  const [section, setSection] = useState(null);
  const [mode, setMode] = useState(null);
  const [playItems, setPlayItems] = useState([]);
  const [result, setResult] = useState(null);

  const openSection = (s) => {
    setSection(s);
    setScreen("modes");
  };

  const openMode = (m) => {
    setMode(m);
    setPlayItems(itemsForMode(section, m));
    setScreen("play");
  };

  const backToModes = () => {
    setScreen("modes");
    setResult(null);
  };

  const backToSections = () => {
    setSection(null);
    setMode(null);
    setScreen("sections");
    setResult(null);
  };

  const handleFinish = ({ missed, total }) => {
    setResult({ missed, total });
    setScreen("summary");
  };

  const retryMissed = (missed) => {
    const missedIds = new Set(missed.map((m) => m.id));
    setPlayItems(itemsForMode(section, mode).filter((item) => missedIds.has(item.id)));
    setResult(null);
    setScreen("play");
  };

  if (screen === "sections") {
    return (
      <div className={styles.screen}>
        <div className={styles.header}>
          <button type="button" className="btn btn-ghost" onClick={onExit}>
            ‹ Back to Home
          </button>
        </div>
        <div className={styles.eyebrow}>EMT Final Review</div>
        <h1 className={styles.title}>Study Guide</h1>
        <p className={styles.subtitle}>Pick a section to study.</p>
        <div className={styles.list}>
          {sections.map((s) => (
            <button key={s.id} type="button" className={styles.card} onClick={() => openSection(s)}>
              <span className={styles.cardEyebrow}>Section {s.id}</span>
              <span className={styles.cardTitle}>{s.title}</span>
              <span className={styles.cardMeta}>{s.items.length} items</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (screen === "modes" && section) {
    return (
      <div className={styles.screen}>
        <div className={styles.header}>
          <button type="button" className="btn btn-ghost" onClick={backToSections}>
            ‹ Sections
          </button>
        </div>
        <div className={styles.eyebrow}>Section {section.id}</div>
        <h1 className={styles.title}>{section.title}</h1>
        <p className={styles.subtitle}>Pick a study mode.</p>
        <div className={styles.list}>
          {modesForSection(section).map(({ mode: m, label, count }) => (
            <button key={m} type="button" className={styles.card} onClick={() => openMode(m)}>
              <span className={styles.cardTitle}>{label}</span>
              <span className={styles.cardMeta}>
                {count} item{count === 1 ? "" : "s"}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (screen === "play" && mode === "flashcard") {
    return <Flashcards deck={toFlashcardDeck(playItems)} onBack={backToModes} backLabel="‹ Back" />;
  }
  if (screen === "play" && mode === "multi") {
    return <MultiSelectPlayer items={playItems} onBack={backToModes} onFinish={handleFinish} />;
  }
  if (screen === "play" && mode === "match") {
    return <MatchingPlayer items={playItems} onBack={backToModes} onFinish={handleFinish} />;
  }
  if (screen === "play" && mode === "seq") {
    return <SequencePlayer items={playItems} onBack={backToModes} onFinish={handleFinish} />;
  }

  if (screen === "summary" && result) {
    return (
      <StudyGuideSummary
        total={result.total}
        missed={result.missed}
        onRetryMissed={retryMissed}
        onBackToModes={backToModes}
        onBackToSections={backToSections}
      />
    );
  }

  return null;
}

export default StudyGuide;
