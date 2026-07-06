import { useLayoutEffect, useRef, useState } from "react";
import { useSwipe } from "../hooks/useSwipe.js";
import styles from "./Flashcards.module.css";

const SETTLE_MS = 280;

function CardFace({ card, flipped, onClick }) {
  return (
    <div
      className={`${styles.cardInner} ${flipped ? styles.flipped : ""}`}
      onClick={onClick}
    >
      <div className={`${styles.face} ${styles.front}`}>
        <span className={styles.term}>{card.term}</span>
      </div>
      <div className={`${styles.face} ${styles.back}`}>
        <span className={styles.definition}>{card.definition}</span>
      </div>
    </div>
  );
}

// Renders prev/current/next as a three-up filmstrip and slides the whole
// strip left/right, so the outgoing card fully leaves before the incoming
// card's content is ever on screen — rather than swapping text in place.
function Flashcards({ deck, onBack }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [settling, setSettling] = useState(null); // null | "left" | "right"
  const [skipTransition, setSkipTransition] = useState(false);
  const [stageWidth, setStageWidth] = useState(0);
  const stageRef = useRef(null);

  const isFirst = index === 0;
  const isLast = index === deck.length - 1;
  const card = deck[index];
  const prevCard = isFirst ? null : deck[index - 1];
  const nextCard = isLast ? null : deck[index + 1];

  useLayoutEffect(() => {
    const node = stageRef.current;
    if (!node) return;
    const measure = () => setStageWidth(node.offsetWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const requestNext = () => {
    if (isLast || settling) return;
    setSettling("left");
  };

  const requestPrev = () => {
    if (isFirst || settling) return;
    setSettling("right");
  };

  const { offset, isDragging, handlers } = useSwipe({
    onSwipeLeft: requestNext,
    onSwipeRight: requestPrev,
    disabled: settling !== null,
  });

  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget || e.propertyName !== "transform" || !settling) {
      return;
    }
    setSkipTransition(true);
    setIndex((i) => (settling === "left" ? i + 1 : i - 1));
    setFlipped(false);
    setSettling(null);
  };

  useLayoutEffect(() => {
    if (!skipTransition) return;
    const id = requestAnimationFrame(() => setSkipTransition(false));
    return () => cancelAnimationFrame(id);
  }, [skipTransition]);

  let position = 0;
  if (isDragging) {
    position = stageWidth ? -offset / stageWidth : 0;
  } else if (settling === "left") {
    position = 1;
  } else if (settling === "right") {
    position = -1;
  }
  if (isFirst) position = Math.max(0, position);
  if (isLast) position = Math.min(0, position);
  position = Math.max(-1, Math.min(1, position));

  const trackTransform = `translateX(${-(1 + position) * stageWidth}px)`;
  const trackTransition =
    isDragging || skipTransition
      ? "none"
      : `transform ${SETTLE_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1)`;

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

      <div className={styles.stage} ref={stageRef} {...handlers}>
        <div
          className={styles.track}
          style={{ transform: trackTransform, transition: trackTransition }}
          onTransitionEnd={handleTransitionEnd}
        >
          <div className={styles.slide} style={{ width: stageWidth }}>
            {prevCard && <CardFace card={prevCard} flipped={false} />}
          </div>
          <div className={styles.slide} style={{ width: stageWidth }}>
            <CardFace
              card={card}
              flipped={flipped}
              onClick={() => setFlipped((f) => !f)}
            />
          </div>
          <div className={styles.slide} style={{ width: stageWidth }}>
            {nextCard && <CardFace card={nextCard} flipped={false} />}
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
          onClick={requestPrev}
          disabled={isFirst || settling !== null}
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
          onClick={requestNext}
          disabled={isLast || settling !== null}
          aria-label="Next card"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default Flashcards;
