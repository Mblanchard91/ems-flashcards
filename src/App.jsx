import { useState } from "react";
import { cards } from "./data/cards.js";
import { buildDeck } from "./utils/deck.js";
import { useLocalStorageState } from "./hooks/useLocalStorageState.js";
import Home from "./components/Home.jsx";
import Flashcards from "./components/Flashcards.jsx";
import Quiz from "./components/Quiz.jsx";
import QuizSummary from "./components/QuizSummary.jsx";
import "./App.css";

const DEFAULT_SETTINGS = { focusOnly: true, mnemonicsInOrder: true };

function selectCards(settings) {
  return settings.focusOnly ? cards.filter((card) => card.focus) : cards;
}

function App() {
  const [settings, setSettings] = useLocalStorageState(
    "ems-flashcards:settings",
    DEFAULT_SETTINGS
  );
  const [screen, setScreen] = useState("home");
  const [deck, setDeck] = useState([]);
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
