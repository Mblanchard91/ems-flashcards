import { cards } from "../data/cards.js";
import styles from "./Home.module.css";

const TOTAL_COUNT = cards.length;
const FOCUS_COUNT = cards.filter((card) => card.focus).length;

function Home({ settings, onSettingsChange, onStartFlashcards, onStartQuiz, onBack }) {
  const selectedCount = settings.focusOnly ? FOCUS_COUNT : TOTAL_COUNT;

  const toggle = (key) => {
    onSettingsChange({ ...settings, [key]: !settings[key] });
  };

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <button type="button" className="btn btn-ghost" onClick={onBack}>
          ‹ Back
        </button>
      </div>

      <div className={styles.eyebrow}>EMS Study Cards</div>
      <h1 className={styles.title}>Abbreviations &amp; Mnemonics</h1>
      <p className={styles.subtitle}>
        Study the full deck or just your focus terms, flashcard-style or quiz
        yourself with typed answers.
      </p>

      <div className={styles.settingsCard}>
        <label className="checkbox-row">
          <input
            type="checkbox"
            checked={settings.focusOnly}
            onChange={() => toggle("focusOnly")}
          />
          <span>Focus subset only</span>
        </label>
        <label className="checkbox-row">
          <input
            type="checkbox"
            checked={settings.mnemonicsInOrder}
            onChange={() => toggle("mnemonicsInOrder")}
          />
          <span>Always display mnemonics in order</span>
        </label>
      </div>

      <div className={styles.countBadge}>
        <strong>{selectedCount}</strong>
        <span>
          of {TOTAL_COUNT} card{TOTAL_COUNT === 1 ? "" : "s"} selected
        </span>
      </div>

      <div className={styles.actions}>
        <button type="button" className="btn btn-primary" onClick={onStartFlashcards}>
          Start Flashcards
        </button>
        <button type="button" className="btn btn-secondary" onClick={onStartQuiz}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Home;
