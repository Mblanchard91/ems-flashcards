import { useMemo, useState } from "react";
import { shuffle } from "../utils/deck.js";
import styles from "./MCPlayer.module.css";

function MCPlayer({ items, onBack, onFinish }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [missed, setMissed] = useState([]);

  const item = items[index];
  const { question, choices, correctIndex } = item.payload;
  const isLast = index === items.length - 1;

  const shuffledChoices = useMemo(
    () => shuffle(choices.map((text, i) => ({ text, correct: i === correctIndex }))),
    [choices, correctIndex]
  );

  const handleSelect = (i) => {
    if (submitted) return;
    setSelected(i);
  };

  const handleSubmit = () => {
    if (!submitted) {
      setSubmitted(true);
      if (!shuffledChoices[selected].correct) {
        setMissed((m) => [
          ...m,
          {
            id: item.id,
            prompt: question,
            correctAnswerText: shuffledChoices.find((c) => c.correct).text,
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
    setSelected(null);
    setSubmitted(false);
  };

  const choiceClass = (i) => {
    if (!submitted) return selected === i ? styles.choiceSelected : "";
    const isChosen = selected === i;
    const isCorrectChoice = shuffledChoices[i].correct;
    if (isCorrectChoice) return styles.choiceCorrect;
    if (isChosen && !isCorrectChoice) return styles.choiceWrong;
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

      <div className={styles.choices}>
        {shuffledChoices.map((choice, i) => (
          <button
            key={i}
            type="button"
            className={`${styles.choice} ${choiceClass(i)}`}
            onClick={() => handleSelect(i)}
          >
            {choice.text}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="btn btn-primary"
        onClick={handleSubmit}
        disabled={!submitted && selected === null}
      >
        {submitted ? (isLast ? "See Results" : "Next Question") : "Check"}
      </button>
    </div>
  );
}

export default MCPlayer;
