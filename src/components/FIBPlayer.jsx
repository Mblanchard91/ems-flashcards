import { useEffect, useRef, useState } from "react";
import { normalize } from "../utils/answer.js";
import styles from "./FIBPlayer.module.css";

function isCorrectAnswer(item, input) {
  const { answer, altAnswers = [] } = item.payload;
  const accepted = new Set([answer, ...altAnswers].map(normalize));
  return accepted.has(normalize(input));
}

function FIBPlayer({ items, onBack, onFinish }) {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [missed, setMissed] = useState([]);
  const inputRef = useRef(null);

  const item = items[index];
  const { prompt, answer } = item.payload;
  const isLast = index === items.length - 1;

  useEffect(() => {
    inputRef.current?.focus();
  }, [index]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (result === null) {
      const correct = isCorrectAnswer(item, input);
      setResult(correct ? "correct" : "incorrect");
      if (!correct) {
        setMissed((m) => [...m, { id: item.id, prompt, correctAnswerText: answer }]);
      }
      return;
    }

    if (isLast) {
      onFinish({ missed, total: items.length });
      return;
    }

    setIndex((i) => i + 1);
    setInput("");
    setResult(null);
  };

  const inputClass = [
    styles.input,
    result === "correct" ? styles.inputCorrect : "",
    result === "incorrect" ? styles.inputIncorrect : "",
  ]
    .filter(Boolean)
    .join(" ");

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
        <span className={styles.prompt}>{prompt}</span>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          className={inputClass}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          readOnly={result !== null}
          placeholder="Type your answer…"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />

        {result !== null && (
          <div
            className={`${styles.resultBanner} ${
              result === "correct" ? styles.correct : styles.incorrect
            }`}
          >
            <span className={styles.resultIcon}>{result === "correct" ? "✓" : "✕"}</span>
            <div>
              <strong>{result === "correct" ? "Correct!" : "Not quite"}</strong>
              <p>{answer}</p>
            </div>
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          {result === null ? "Check" : isLast ? "See Results" : "Next Question"}
        </button>
      </form>
    </div>
  );
}

export default FIBPlayer;
