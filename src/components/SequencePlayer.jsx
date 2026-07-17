import { useMemo, useState } from "react";
import { shuffle } from "../utils/deck.js";
import styles from "./SequencePlayer.module.css";

function SequencePlayer({ items, onBack, onFinish }) {
  const [index, setIndex] = useState(0);
  const [placed, setPlaced] = useState([]);
  const [status, setStatus] = useState(null); // null | "correct" | "incorrect"
  const [missed, setMissed] = useState([]);

  const item = items[index];
  const { prompt, steps } = item.payload;
  const isLast = index === items.length - 1;

  const pool = useMemo(
    () => shuffle(steps.map((text, originalIndex) => ({ text, originalIndex }))),
    [steps]
  );
  const placedOriginalIndices = new Set(placed.map((p) => p.originalIndex));
  const remaining = pool.filter((p) => !placedOriginalIndices.has(p.originalIndex));

  const handleTapPool = (entry) => {
    if (status !== null) return;
    const next = [...placed, entry];
    setPlaced(next);
    if (next.length === steps.length) {
      const correct = next.every((p, i) => p.text === steps[i]);
      setStatus(correct ? "correct" : "incorrect");
    }
  };

  const handleUndo = () => {
    if (status !== null || placed.length === 0) return;
    setPlaced((p) => p.slice(0, -1));
  };

  const handleContinue = () => {
    const newMissed =
      status === "incorrect"
        ? [
            ...missed,
            {
              id: item.id,
              prompt,
              correctAnswerText: steps.join(" → "),
            },
          ]
        : missed;

    if (isLast) {
      onFinish({ missed: newMissed, total: items.length });
      return;
    }

    setMissed(newMissed);
    setIndex((i) => i + 1);
    setPlaced([]);
    setStatus(null);
  };

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <button type="button" className="btn btn-ghost" onClick={onBack}>
          ‹ Back
        </button>
        <span className={styles.progress}>
          Item {index + 1} of {items.length}
        </span>
      </div>

      <div className={styles.progressTrack}>
        <div
          className={styles.progressFill}
          style={{ width: `${((index + 1) / items.length) * 100}%` }}
        />
      </div>

      <p className={styles.prompt}>{prompt}</p>

      <div className={styles.placedList}>
        {steps.map((_, i) => {
          const entry = placed[i];
          const isWrongSlot = status === "incorrect" && entry && entry.text !== steps[i];
          return (
            <div
              key={i}
              className={`${styles.slot} ${entry ? styles.slotFilled : ""} ${
                isWrongSlot ? styles.slotWrong : ""
              }`}
            >
              <span className={styles.slotNumber}>{i + 1}</span>
              <span>{entry?.text ?? ""}</span>
            </div>
          );
        })}
      </div>

      {status === null && (
        <>
          <p className={styles.hint}>Tap steps in the order they belong</p>
          <div className={styles.pool}>
            {remaining.map((entry) => (
              <button
                key={entry.originalIndex}
                type="button"
                className={styles.poolItem}
                onClick={() => handleTapPool(entry)}
              >
                {entry.text}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleUndo}
            disabled={placed.length === 0}
          >
            Undo Last
          </button>
        </>
      )}

      {status === "correct" && (
        <div className={`${styles.resultBanner} ${styles.correct}`}>
          <strong>Correct order!</strong>
        </div>
      )}

      {status === "incorrect" && (
        <div className={`${styles.resultBanner} ${styles.incorrect}`}>
          <strong>Not quite — correct order:</strong>
          <p>{steps.join(" → ")}</p>
        </div>
      )}

      {status !== null && (
        <button type="button" className="btn btn-primary" onClick={handleContinue}>
          {isLast ? "See Results" : "Next Item"}
        </button>
      )}
    </div>
  );
}

export default SequencePlayer;
