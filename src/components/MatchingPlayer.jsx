import { useEffect, useMemo, useRef, useState } from "react";
import { shuffle } from "../utils/deck.js";
import styles from "./MatchingPlayer.module.css";

const WRONG_FLASH_MS = 500;

function MatchingPlayer({ items, onBack, onFinish }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null); // { side, idx } | null
  const [matched, setMatched] = useState(new Set()); // pairIndex values
  const [wrongFlash, setWrongFlash] = useState(null); // { leftIdx, rightIdx } | null
  const [wrongCount, setWrongCount] = useState(0);
  const [skipped, setSkipped] = useState(false);
  const [missed, setMissed] = useState([]);
  const timeoutRef = useRef(null);

  const item = items[index];
  const { pairs, prompt } = item.payload;
  const isLast = index === items.length - 1;
  const isComplete = matched.size === pairs.length;

  const shuffledLeft = useMemo(
    () => shuffle(pairs.map((pair, pairIndex) => ({ text: pair.left, pairIndex }))),
    [pairs]
  );

  const shuffledRight = useMemo(
    () => shuffle(pairs.map((pair, pairIndex) => ({ text: pair.right, pairIndex }))),
    [pairs]
  );

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleTap = (side, idx) => {
    if (wrongFlash) return;
    const pairIndex = side === "left" ? shuffledLeft[idx].pairIndex : shuffledRight[idx].pairIndex;
    if (matched.has(pairIndex)) return;

    if (!selected) {
      setSelected({ side, idx });
      return;
    }

    if (selected.side === side) {
      setSelected(selected.idx === idx ? null : { side, idx });
      return;
    }

    const leftIdx = side === "left" ? idx : selected.idx;
    const rightIdx = side === "right" ? idx : selected.idx;
    const leftPairIndex = shuffledLeft[leftIdx].pairIndex;
    const rightPairIndex = shuffledRight[rightIdx].pairIndex;

    if (leftPairIndex === rightPairIndex) {
      setMatched((prev) => new Set(prev).add(leftPairIndex));
      setSelected(null);
    } else {
      setWrongFlash({ leftIdx, rightIdx });
      setWrongCount((c) => c + 1);
      timeoutRef.current = setTimeout(() => {
        setWrongFlash(null);
        setSelected(null);
      }, WRONG_FLASH_MS);
    }
  };

  const handleSkip = () => {
    if (wrongFlash || isComplete) return;
    setSelected(null);
    setMatched(new Set(pairs.map((_, i) => i)));
    setSkipped(true);
  };

  const handleContinue = () => {
    const newMissed =
      wrongCount > 0 || skipped
        ? [
            ...missed,
            {
              id: item.id,
              prompt: "Matching set",
              correctAnswerText: pairs.map((p) => `${p.left} → ${p.right}`).join("; "),
            },
          ]
        : missed;

    if (isLast) {
      onFinish({ missed: newMissed, total: items.length });
      return;
    }

    setMissed(newMissed);
    setIndex((i) => i + 1);
    setSelected(null);
    setMatched(new Set());
    setWrongFlash(null);
    setWrongCount(0);
    setSkipped(false);
  };

  const leftClass = (i) => {
    const pairIndex = shuffledLeft[i].pairIndex;
    if (matched.has(pairIndex)) return styles.cardMatched;
    if (wrongFlash?.leftIdx === i) return styles.cardWrong;
    if (selected?.side === "left" && selected.idx === i) return styles.cardSelected;
    return "";
  };

  const rightClass = (i) => {
    const pairIndex = shuffledRight[i].pairIndex;
    if (matched.has(pairIndex)) return styles.cardMatched;
    if (wrongFlash?.rightIdx === i) return styles.cardWrong;
    if (selected?.side === "right" && selected.idx === i) return styles.cardSelected;
    return "";
  };

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <button type="button" className="btn btn-ghost" onClick={onBack}>
          ‹ Back
        </button>
        <span className={styles.progress}>
          Set {index + 1} of {items.length}
        </span>
      </div>

      <div className={styles.progressTrack}>
        <div
          className={styles.progressFill}
          style={{ width: `${((index + 1) / items.length) * 100}%` }}
        />
      </div>

      {prompt && <p className={styles.prompt}>{prompt}</p>}
      <div className={styles.hintRow}>
        <p className={styles.hint}>Tap a term, then tap its match</p>
        {!isComplete && (
          <button type="button" className="btn-skip" onClick={handleSkip}>
            Skip — show answer
          </button>
        )}
      </div>

      <div className={styles.columns}>
        <div className={styles.column}>
          {shuffledLeft.map((entry, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.card} ${leftClass(i)}`}
              onClick={() => handleTap("left", i)}
              disabled={matched.has(entry.pairIndex)}
            >
              {entry.text}
            </button>
          ))}
        </div>
        <div className={styles.column}>
          {shuffledRight.map((entry, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.card} ${rightClass(i)}`}
              onClick={() => handleTap("right", i)}
              disabled={matched.has(entry.pairIndex)}
            >
              {entry.text}
            </button>
          ))}
        </div>
      </div>

      {isComplete && (
        <button type="button" className="btn btn-primary" onClick={handleContinue}>
          {isLast ? "See Results" : "Next Set"}
        </button>
      )}
    </div>
  );
}

export default MatchingPlayer;
