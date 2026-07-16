import styles from "./CustomDeckLanding.module.css";

function CustomDeckLanding({ deck, onStartFlashcards, onStartQuiz, onEdit, onSwitchToMainDeck }) {
  return (
    <div className={styles.screen}>
      <div className={styles.eyebrow}>Custom Deck</div>
      <h1 className={styles.title}>{deck.name}</h1>
      <p className={styles.subtitle}>
        {deck.cards.length} card{deck.cards.length === 1 ? "" : "s"}
      </p>

      <div className={styles.actions}>
        <button type="button" className="btn btn-primary" onClick={onStartFlashcards}>
          Start Flashcards
        </button>
        <button type="button" className="btn btn-secondary" onClick={onStartQuiz}>
          Start Quiz
        </button>
        <button type="button" className="btn btn-secondary" onClick={onEdit}>
          Edit This Card Set
        </button>
      </div>

      <button type="button" className={styles.switchLink} onClick={onSwitchToMainDeck}>
        Browse the full EMS deck instead
      </button>
    </div>
  );
}

export default CustomDeckLanding;
