import styles from "./DeckPending.module.css";

function DeckPending({ onSwitchToMainDeck }) {
  return (
    <div className={styles.screen}>
      <div className={styles.icon}>🛠️</div>
      <h1 className={styles.title}>This deck isn't ready yet</h1>
      <p className={styles.subtitle}>
        It's still being reviewed. Check back soon — this same link will work
        once it's added.
      </p>
      <div className={styles.actions}>
        <button type="button" className="btn btn-primary" onClick={onSwitchToMainDeck}>
          Browse the full EMS deck instead
        </button>
      </div>
    </div>
  );
}

export default DeckPending;
