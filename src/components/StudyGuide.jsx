import { useState } from "react";
import { sections, modesForSection, itemsForMode } from "../data/studyGuide/index.js";
import { shuffle } from "../utils/deck.js";
import Flashcards from "./Flashcards.jsx";
import MCPlayer from "./MCPlayer.jsx";
import MultiSelectPlayer from "./MultiSelectPlayer.jsx";
import MatchingPlayer from "./MatchingPlayer.jsx";
import SequencePlayer from "./SequencePlayer.jsx";
import StudyGuideSummary from "./StudyGuideSummary.jsx";
import styles from "./StudyGuide.module.css";

// Flashcards aren't graded, so they're excluded from "All Questions" —
// a session there needs a meaningful score out of a total.
const GRADABLE_MODES = ["mc", "multi", "match", "seq"];

const ALL_SECTIONS_VIRTUAL = {
  id: "all",
  title: "All Sections",
  items: sections.flatMap((s) => s.items),
};

function toFlashcardDeck(items) {
  return items.map((item) => ({
    id: item.id,
    term: item.payload.front,
    definition: item.payload.back,
  }));
}

function gradableItemCount(section) {
  return GRADABLE_MODES.reduce((n, m) => n + itemsForMode(section, m).length, 0);
}

function buildAllQuestionsQueue(section) {
  const modesPresent = GRADABLE_MODES.filter((m) => itemsForMode(section, m).length > 0);
  return shuffle(modesPresent).map((m) => ({ mode: m, items: shuffle(itemsForMode(section, m)) }));
}

function StudyGuide({ onExit }) {
  const [screen, setScreen] = useState("sections");
  const [section, setSection] = useState(null);
  const [mode, setMode] = useState(null);
  const [playItems, setPlayItems] = useState([]);
  const [result, setResult] = useState(null);
  const [queue, setQueue] = useState(null); // array of { mode, items } | null — set during an "All Questions" run
  const [queueIndex, setQueueIndex] = useState(0);
  const [aggregated, setAggregated] = useState({ missed: [], total: 0 });

  const openSection = (s) => {
    setSection(s);
    setScreen("modes");
  };

  const openMode = (m) => {
    setMode(m);
    setPlayItems(shuffle(itemsForMode(section, m)));
    setQueue(null);
    setScreen("play");
  };

  const openAllQuestions = () => {
    const q = buildAllQuestionsQueue(section);
    if (q.length === 0) return;
    setQueue(q);
    setQueueIndex(0);
    setAggregated({ missed: [], total: 0 });
    setMode(q[0].mode);
    setPlayItems(q[0].items);
    setScreen("play");
  };

  const backToModes = () => {
    setScreen("modes");
    setResult(null);
    setQueue(null);
    setQueueIndex(0);
  };

  const backToSections = () => {
    setSection(null);
    setMode(null);
    setScreen("sections");
    setResult(null);
    setQueue(null);
    setQueueIndex(0);
  };

  const handleFinish = ({ missed, total }) => {
    if (queue) {
      const nextMissed = [...aggregated.missed, ...missed];
      const nextTotal = aggregated.total + total;
      const nextIndex = queueIndex + 1;

      if (nextIndex < queue.length) {
        setAggregated({ missed: nextMissed, total: nextTotal });
        setQueueIndex(nextIndex);
        setMode(queue[nextIndex].mode);
        setPlayItems(queue[nextIndex].items);
        return;
      }

      setQueue(null);
      setQueueIndex(0);
      setResult({ missed: nextMissed, total: nextTotal });
      setScreen("summary");
      return;
    }

    setResult({ missed, total });
    setScreen("summary");
  };

  const retryMissed = (missed) => {
    const missedIds = new Set(missed.map((m) => m.id));
    const matchedItems = section.items.filter((item) => missedIds.has(item.id));
    const modesPresent = [...new Set(matchedItems.map((item) => item.mode))];

    setResult(null);

    if (modesPresent.length <= 1) {
      setQueue(null);
      setQueueIndex(0);
      setMode(modesPresent[0] ?? mode);
      setPlayItems(shuffle(matchedItems));
      setScreen("play");
      return;
    }

    const q = shuffle(modesPresent).map((m) => ({
      mode: m,
      items: shuffle(matchedItems.filter((item) => item.mode === m)),
    }));
    setQueue(q);
    setQueueIndex(0);
    setAggregated({ missed: [], total: 0 });
    setMode(q[0].mode);
    setPlayItems(q[0].items);
    setScreen("play");
  };

  if (screen === "sections") {
    const allSectionsCount = ALL_SECTIONS_VIRTUAL.items.length;
    return (
      <div className={styles.screen}>
        <div className={styles.header}>
          <button type="button" className="btn btn-ghost" onClick={onExit}>
            ‹ Back to Home
          </button>
        </div>
        <div className={styles.eyebrow}>EMT Final Review</div>
        <h1 className={styles.title}>Study Guide</h1>
        <p className={styles.subtitle}>Pick a section to study.</p>

        <button
          type="button"
          className={`${styles.card} ${styles.cardHighlight}`}
          onClick={() => openSection(ALL_SECTIONS_VIRTUAL)}
        >
          <span className={styles.cardEyebrow}>🔀 Shuffle</span>
          <span className={styles.cardTitle}>All Sections</span>
          <span className={styles.cardMeta}>{allSectionsCount} items across all 12 sections</span>
        </button>

        <div className={styles.list}>
          {sections.map((s) => (
            <button key={s.id} type="button" className={styles.card} onClick={() => openSection(s)}>
              <span className={styles.cardEyebrow}>Section {s.id}</span>
              <span className={styles.cardTitle}>{s.title}</span>
              <span className={styles.cardMeta}>{s.items.length} items</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (screen === "modes" && section) {
    const allQuestionsCount = gradableItemCount(section);
    return (
      <div className={styles.screen}>
        <div className={styles.header}>
          <button type="button" className="btn btn-ghost" onClick={backToSections}>
            ‹ Sections
          </button>
        </div>
        <div className={styles.eyebrow}>{section.id === "all" ? "Study Guide" : `Section ${section.id}`}</div>
        <h1 className={styles.title}>{section.title}</h1>
        <p className={styles.subtitle}>Pick a study mode.</p>

        {allQuestionsCount > 0 && (
          <button
            type="button"
            className={`${styles.card} ${styles.cardHighlight}`}
            onClick={openAllQuestions}
          >
            <span className={styles.cardTitle}>All Questions</span>
            <span className={styles.cardMeta}>
              {allQuestionsCount} item{allQuestionsCount === 1 ? "" : "s"} — every mode mixed together
            </span>
          </button>
        )}

        <div className={styles.list}>
          {modesForSection(section).map(({ mode: m, label, count }) => (
            <button key={m} type="button" className={styles.card} onClick={() => openMode(m)}>
              <span className={styles.cardTitle}>{label}</span>
              <span className={styles.cardMeta}>
                {count} item{count === 1 ? "" : "s"}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (screen === "play" && mode === "flashcard") {
    return <Flashcards deck={toFlashcardDeck(playItems)} onBack={backToModes} backLabel="‹ Back" />;
  }
  if (screen === "play" && mode === "mc") {
    return <MCPlayer items={playItems} onBack={backToModes} onFinish={handleFinish} />;
  }
  if (screen === "play" && mode === "multi") {
    return <MultiSelectPlayer items={playItems} onBack={backToModes} onFinish={handleFinish} />;
  }
  if (screen === "play" && mode === "match") {
    return <MatchingPlayer items={playItems} onBack={backToModes} onFinish={handleFinish} />;
  }
  if (screen === "play" && mode === "seq") {
    return <SequencePlayer items={playItems} onBack={backToModes} onFinish={handleFinish} />;
  }

  if (screen === "summary" && result) {
    return (
      <StudyGuideSummary
        total={result.total}
        missed={result.missed}
        onRetryMissed={retryMissed}
        onBackToModes={backToModes}
        onBackToSections={backToSections}
      />
    );
  }

  return null;
}

export default StudyGuide;
