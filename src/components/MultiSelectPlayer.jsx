import { useState } from "react";
import styles from "./MultiSelectPlayer.module.css";

function MultiSelectPlayer({ items, onBack, onFinish }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(new Set());
  const [submitted, setSubmitted] = useState(false);
  const [missed, setMissed] = useState([]);

  const item = items[index];
  const { question, choices, correctIndices } = item.payload;
  const isLast = index === items.length - 1;
  const correctSet = new Set(correctIndices);

  const toggleChoice = (i) => {
    if (submitted) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const isCorrect = () => {
    if (selected.size !== correctSet.size) return false;
    for (const i of selected) if (!correctSet.has(i)) return false;
    return true;
  };

  const handleSubmit = () => {
    if (!submitted) {
      setSubmitted(true);
      if (!isCorrect()) {
        setMissed((m) => [
          ...m,
          {
            id: item.id,
            prompt: question,
            correctAnswerText: correctIndices.map((i) => choices[i]).join("; "),
          },
        ]);
      }
      return;
    }

    if (isLast) {
      onFinish({ missed, total: items.length });
      return;
    }

    setIndex((i) => i + 1);
    setSelected(new Set());
    setSubmitted(false);
  };

  const choiceClass = (i) => {
    if (!submitted) return selected.has(i) ? styles.choiceSelected : "";
    const isChosen = selected.has(i);
    const shouldBeChosen = correctSet.has(i);
    if (shouldBeChosen && isChosen) return styles.choiceCorrect;
    if (shouldBeChosen && !isChosen) return styles.choiceMissed;
    if (!shouldBeChosen && isChosen) return styles.choiceWrong;
    return "";
  };

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <button type="button" className="btn btn-ghost" onClick={onBack}>
          ‹ Back
        </button>
        <span className={styles.progress}>
          Question {index + 1} of {items.length}
        </span>
      </div>

      <div className={styles.progressTrack}>
        <div
          className={styles.progressFill}
          style={{ width: `${((index + 1) / items.length) * 100}%` }}
        />
      </div>

      <div className={styles.questionCard}>
        <span className={styles.question}>{question}</span>
      </div>

      <p className={styles.hint}>Select all that apply</p>

      <div className={styles.choices}>
        {choices.map((choice, i) => (
          <button
            key={i}
            type="button"
            className={`${styles.choice} ${choiceClass(i)}`}
            onClick={() => toggleChoice(i)}
          >
            <span className={styles.checkbox}>{selected.has(i) ? "✓" : ""}</span>
            <span>{choice}</span>
          </button>
        ))}
      </div>

      <button
        type="button"
        className="btn btn-primary"
        onClick={handleSubmit}
        disabled={!submitted && selected.size === 0}
      >
        {submitted ? (isLast ? "See Results" : "Next Question") : "Check"}
      </button>
    </div>
  );
}

export default MultiSelectPlayer;
