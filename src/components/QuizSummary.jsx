import styles from "./QuizSummary.module.css";

function QuizSummary({ total, missed, onRetryMissed, onHome }) {
  const score = total - missed.length;

  return (
    <div className={styles.screen}>
      <div className={styles.scoreCard}>
        <div className={styles.scoreLabel}>Quiz Complete</div>
        <div className={styles.scoreValue}>
          {score}/{total} correct
        </div>
      </div>

      {missed.length === 0 ? (
        <p className={styles.perfect}>Perfect score — nice work.</p>
      ) : (
        <>
          <div className={styles.missedTitle}>Missed cards</div>
          <ul className={styles.missedList}>
            {missed.map((card) => (
              <li key={card.id} className={styles.missedItem}>
                <div className={styles.missedTerm}>{card.term}</div>
                <div className={styles.missedDefinition}>{card.definition}</div>
              </li>
            ))}
          </ul>
        </>
      )}

      <div className={styles.actions}>
        {missed.length > 0 && (
          <button type="button" className="btn btn-primary" onClick={onRetryMissed}>
            Retry Missed Only
          </button>
        )}
        <button type="button" className="btn btn-secondary" onClick={onHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default QuizSummary;
