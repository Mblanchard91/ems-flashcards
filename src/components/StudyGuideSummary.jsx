import styles from "./StudyGuideSummary.module.css";

function StudyGuideSummary({ total, missed, onRetryMissed, onBackToModes, onBackToSections }) {
  const score = total - missed.length;

  return (
    <div className={styles.screen}>
      <div className={styles.scoreCard}>
        <div className={styles.scoreLabel}>Set Complete</div>
        <div className={styles.scoreValue}>
          {score}/{total} correct
        </div>
      </div>

      {missed.length === 0 ? (
        <p className={styles.perfect}>Perfect score — nice work.</p>
      ) : (
        <>
          <div className={styles.missedTitle}>Missed items</div>
          <ul className={styles.missedList}>
            {missed.map((entry) => (
              <li key={entry.id} className={styles.missedItem}>
                <div className={styles.missedPrompt}>{entry.prompt}</div>
                <div className={styles.missedAnswer}>{entry.correctAnswerText}</div>
              </li>
            ))}
          </ul>
        </>
      )}

      <div className={styles.actions}>
        {missed.length > 0 && (
          <button type="button" className="btn btn-primary" onClick={() => onRetryMissed(missed)}>
            Retry Missed Only
          </button>
        )}
        <button type="button" className="btn btn-secondary" onClick={onBackToModes}>
          Try Another Mode
        </button>
        <button type="button" className="btn btn-ghost" onClick={onBackToSections}>
          ‹ Back to Sections
        </button>
      </div>
    </div>
  );
}

export default StudyGuideSummary;
