import { useState } from "react";
import { cards } from "./data/cards.js";
import { buildDeck } from "./utils/deck.js";
import { useLocalStorageState } from "./hooks/useLocalStorageState.js";
import Home from "./components/Home.jsx";
import Flashcards from "./components/Flashcards.jsx";
import Quiz from "./components/Quiz.jsx";
import QuizSummary from "./components/QuizSummary.jsx";
import "./App.css";

const DEFAULT_SETTINGS = { focusOnly: false, mnemonicsInOrder: false };

// TEMP DEBUG: visit index.html?debug=unicode to jump straight into
// Flashcards mode with just the non-ASCII-character cards, for checking
// font rendering on a given device. Remove this block once that's confirmed.
const DEBUG_UNICODE_IDS = [4, 5, 6, 7, 10, 11, 48, 49];

function getDebugDeck() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("debug") !== "unicode") return null;
  return DEBUG_UNICODE_IDS.map((id) => cards.find((card) => card.id === id));
}

function selectCards(settings) {
  return settings.focusOnly ? cards.filter((card) => card.focus) : cards;
}

function App() {
  const [settings, setSettings] = useLocalStorageState(
    "ems-flashcards:settings",
    DEFAULT_SETTINGS
  );
  const [screen, setScreen] = useState(() => (getDebugDeck() ? "flashcards" : "home"));
  const [deck, setDeck] = useState(() => getDebugDeck() || []);
  const [quizResult, setQuizResult] = useState(null);

  const goHome = () => {
    setScreen("home");
    setDeck([]);
    setQuizResult(null);
  };

  const startFlashcards = () => {
    setDeck(buildDeck(selectCards(settings), settings));
    setScreen("flashcards");
  };

  const startQuiz = () => {
    setDeck(buildDeck(selectCards(settings), settings));
    setScreen("quiz");
  };

  const finishQuiz = ({ missed, total }) => {
    setQuizResult({ missed, total });
    setScreen("quiz-summary");
  };

  const retryMissed = () => {
    setDeck(buildDeck(quizResult.missed, settings));
    setQuizResult(null);
    setScreen("quiz");
  };

  return (
    <div className="app">
      {screen === "home" && (
        <Home
          settings={settings}
          onSettingsChange={setSettings}
          onStartFlashcards={startFlashcards}
          onStartQuiz={startQuiz}
        />
      )}
      {screen === "flashcards" && <Flashcards deck={deck} onBack={goHome} />}
      {screen === "quiz" && (
        <Quiz deck={deck} onBack={goHome} onFinish={finishQuiz} />
      )}
      {screen === "quiz-summary" && quizResult && (
        <QuizSummary
          total={quizResult.total}
          missed={quizResult.missed}
          onRetryMissed={retryMissed}
          onHome={goHome}
        />
      )}
    </div>
  );
}

export default App;
