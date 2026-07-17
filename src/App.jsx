import { useEffect, useState } from "react";
import { cards } from "./data/cards.js";
import { buildDeck } from "./utils/deck.js";
import { useLocalStorageState } from "./hooks/useLocalStorageState.js";
import { decodeDeckData, fetchCommunityDeck } from "./utils/deckLink.js";
import Home from "./components/Home.jsx";
import Flashcards from "./components/Flashcards.jsx";
import Quiz from "./components/Quiz.jsx";
import QuizSummary from "./components/QuizSummary.jsx";
import CreateDeck from "./components/CreateDeck.jsx";
import CustomDeckLanding from "./components/CustomDeckLanding.jsx";
import DeckPending from "./components/DeckPending.jsx";
import StudyGuide from "./components/StudyGuide.jsx";
import "./App.css";

const SETTINGS_KEY = "ems-flashcards:settings";
const DEFAULT_SETTINGS = { focusOnly: true, mnemonicsInOrder: true };

// TEMP ONE-TIME MIGRATION: anyone with settings saved from before both
// checkboxes defaulted to checked gets forced back to checked, exactly
// once. Runs at module load (before the settings hook reads localStorage)
// so there's no flash of the old value. Safe to remove once devices that
// matter have loaded the app at least once after this shipped.
const SETTINGS_RESET_FLAG_KEY = "ems-flashcards:settings-reset-v1";
try {
  if (!localStorage.getItem(SETTINGS_RESET_FLAG_KEY)) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(DEFAULT_SETTINGS));
    localStorage.setItem(SETTINGS_RESET_FLAG_KEY, "1");
  }
} catch {
  // localStorage unavailable — nothing to migrate
}

function selectCards(settings) {
  return settings.focusOnly ? cards.filter((card) => card.focus) : cards;
}

function readDeckLinkParams() {
  const params = new URLSearchParams(window.location.search);
  return { deckData: params.get("deckData"), deckId: params.get("deckId") };
}

function App() {
  const [settings, setSettings] = useLocalStorageState(SETTINGS_KEY, DEFAULT_SETTINGS);
  const [screen, setScreen] = useState(() =>
    readDeckLinkParams().deckId ? "resolving" : "home"
  );
  const [deck, setDeck] = useState([]);
  const [quizResult, setQuizResult] = useState(null);
  const [customDeck, setCustomDeck] = useState(null);
  const [deckPending, setDeckPending] = useState(false);

  useEffect(() => {
    const { deckData, deckId } = readDeckLinkParams();

    if (deckData) {
      const decoded = decodeDeckData(deckData);
      if (decoded) setCustomDeck(decoded);
      return;
    }

    if (deckId) {
      fetchCommunityDeck(deckId).then((decoded) => {
        if (decoded) {
          setCustomDeck(decoded);
        } else {
          setDeckPending(true);
        }
        setScreen("home");
      });
    }
  }, []);

  const exitToMainHome = () => {
    window.history.replaceState(null, "", window.location.pathname);
    setCustomDeck(null);
    setDeckPending(false);
    setScreen("home");
    setDeck([]);
    setQuizResult(null);
  };

  const goHome = () => {
    setScreen("home");
    setDeck([]);
    setQuizResult(null);
  };

  const startFlashcards = () => {
    const source = customDeck ? customDeck.cards : selectCards(settings);
    setDeck(buildDeck(source, settings));
    setScreen("flashcards");
  };

  const startQuiz = () => {
    const source = customDeck ? customDeck.cards : selectCards(settings);
    setDeck(buildDeck(source, settings));
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
      {screen === "resolving" && <div />}
      {screen === "home" &&
        (deckPending ? (
          <DeckPending onSwitchToMainDeck={exitToMainHome} />
        ) : customDeck ? (
          <CustomDeckLanding
            deck={customDeck}
            onStartFlashcards={startFlashcards}
            onStartQuiz={startQuiz}
            onEdit={() => setScreen("create-deck")}
            onSwitchToMainDeck={exitToMainHome}
          />
        ) : (
          <Home
            settings={settings}
            onSettingsChange={setSettings}
            onStartFlashcards={startFlashcards}
            onStartQuiz={startQuiz}
            onBuildOwnDeck={() => setScreen("create-deck")}
            onOpenStudyGuide={() => setScreen("study-guide")}
          />
        ))}
      {screen === "create-deck" && (
        <CreateDeck initialDeck={customDeck} onBack={exitToMainHome} />
      )}
      {screen === "study-guide" && <StudyGuide onExit={goHome} />}
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
