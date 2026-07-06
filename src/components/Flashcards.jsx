import { useState } from "react";
import { useSwipe } from "../hooks/useSwipe.js";
import styles from "./Flashcards.module.css";

function Flashcards({ deck, onBack }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = deck[index];
  const isFirst = index === 0;
  const isLast = index === deck.length - 1;

  const goNext = () => {
    if (isLast) return;
    setFlipped(false);
    setIndex((i) => i + 1);
  };

  const goPrev = () => {
    if (isFirst) return;
    setFlipped(false);
    setIndex((i) => i - 1);
  };

  const { offset, isDragging, handlers } = useSwipe({
    onSwipeLeft: goNext,
    onSwipeRight: goPrev,
  });

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <button type="button" className="btn btn-ghost" onClick={onBack}>
          ‹ Back to Home
        </button>
        <span className={styles.progress}>
          Card {index + 1} of {deck.length}
        </span>
      </div>

      <div className={styles.progressTrack}>
        <div
          className={styles.progressFill}
          style={{ width: `${((index + 1) / deck.length) * 100}%` }}
        />
      </div>

      <div className={styles.cardStage} {...handlers}>
        <div
          className={styles.cardOuter}
          style={{
            transform: `translateX(${offset}px)`,
            transition: isDragging ? "none" : "transform 0.25s ease",
          }}
        >
          <div
            className={`${styles.cardInner} ${flipped ? styles.flipped : ""}`}
            onClick={() => setFlipped((f) => !f)}
          >
            <div className={`${styles.face} ${styles.front}`}>
              <span className={styles.term}>{card.term}</span>
            </div>
            <div className={`${styles.face} ${styles.back}`}>
              <span className={styles.definition}>{card.definition}</span>
            </div>
          </div>
        </div>
      </div>

      <p className={styles.hint}>
        {flipped ? "Tap card to flip back" : "Tap card to reveal answer"}
      </p>

      <div className={styles.navRow}>
        <button
          type="button"
          className="btn-icon"
          onClick={goPrev}
          disabled={isFirst}
          aria-label="Previous card"
        >
          ‹
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setFlipped((f) => !f)}
        >
          {flipped ? "Hide Answer" : "Show Answer"}
        </button>
        <button
          type="button"
          className="btn-icon"
          onClick={goNext}
          disabled={isLast}
          aria-label="Next card"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default Flashcards;
