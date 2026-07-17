import { useEffect, useState } from "react";
import { fetchCommunityDeck } from "../utils/deckLink.js";
import styles from "./CommunityDecks.module.css";

async function fetchDeckIndex() {
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}community-decks/index.json`);
    if (!res.ok) return [];
    const parsed = await res.json();
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function CommunityDecks({ onBack, onBuildOwnDeck, onOpenDeck }) {
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [decks, setDecks] = useState([]);
  const [openingId, setOpeningId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetchDeckIndex().then((list) => {
      if (cancelled) return;
      setDecks(list);
      setStatus("ready");
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const openDeck = async (deckId) => {
    setOpeningId(deckId);
    const deck = await fetchCommunityDeck(deckId);
    setOpeningId(null);
    if (deck) onOpenDeck(deck);
  };

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <button type="button" className="btn btn-ghost" onClick={onBack}>
          ‹ Back
        </button>
      </div>

      <div className={styles.eyebrow}>Community</div>
      <h1 className={styles.title}>User Created Flashcards</h1>
      <p className={styles.subtitle}>Browse shared decks, or build and share your own.</p>

      {status === "loading" && <p className={styles.empty}>Loading shared decks…</p>}

      {status === "ready" && decks.length === 0 && (
        <p className={styles.empty}>No shared decks yet — be the first to build one.</p>
      )}

      {status === "ready" && decks.length > 0 && (
        <div className={styles.list}>
          {decks.map((deck) => (
            <button
              key={deck.deckId}
              type="button"
              className={styles.card}
              onClick={() => openDeck(deck.deckId)}
              disabled={openingId !== null}
            >
              <span className={styles.cardTitle}>{deck.name}</span>
              <span className={styles.cardMeta}>
                {openingId === deck.deckId
                  ? "Opening…"
                  : `${deck.cardCount} card${deck.cardCount === 1 ? "" : "s"}`}
              </span>
            </button>
          ))}
        </div>
      )}

      <button type="button" className="btn btn-primary" onClick={onBuildOwnDeck}>
        Build Your Own Deck
      </button>
    </div>
  );
}

export default CommunityDecks;
