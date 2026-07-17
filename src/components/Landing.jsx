import styles from "./Landing.module.css";

function Landing({ onOpenAbbreviations, onOpenStudyGuide, onOpenCommunity }) {
  return (
    <div className={styles.screen}>
      <div className={styles.eyebrow}>EMS Study Cards</div>
      <h1 className={styles.title}>What do you want to study?</h1>

      <div className={styles.list}>
        <button type="button" className={styles.card} onClick={onOpenAbbreviations}>
          <span className={styles.cardTitle}>Abbreviations &amp; Mnemonics</span>
          <span className={styles.cardMeta}>Flashcards &amp; typed-answer quiz</span>
        </button>
        <button type="button" className={styles.card} onClick={onOpenStudyGuide}>
          <span className={styles.cardTitle}>EMT Final Review — Study Guide</span>
          <span className={styles.cardMeta}>Flashcards, select-all, matching, sequencing</span>
        </button>
        <button type="button" className={styles.card} onClick={onOpenCommunity}>
          <span className={styles.cardTitle}>User Created Flashcards</span>
          <span className={styles.cardMeta}>Browse shared decks or build your own</span>
        </button>
      </div>
    </div>
  );
}

export default Landing;
