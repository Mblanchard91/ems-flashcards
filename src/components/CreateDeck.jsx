import { useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState.js";
import {
  generateDeckId,
  buildTemporaryLink,
  buildPermanentLink,
} from "../utils/deckLink.js";
import styles from "./CreateDeck.module.css";

const GITHUB_REPO = "Mblanchard91/ems-flashcards";
const EMPTY_DRAFT = { name: "", cards: [] };

function buildIssueUrl({ name, deckId, cardCount, temporaryLink, permanentLink, cards }) {
  const title = `New community deck: ${name}`;
  const cardRows = cards.map(([term, definition]) => `  ["${term}", "${definition}"]`).join(",\n");
  const body = [
    `**Deck name:** ${name}`,
    `**Deck ID (slug):** \`${deckId}\``,
    `**Card count:** ${cardCount}`,
    "",
    `**Temporary link (already works):** ${temporaryLink}`,
    `**Permanent link (once merged):** ${permanentLink}`,
    "",
    `To publish, add \`public/community-decks/${deckId}.json\`:`,
    "",
    "```json",
    "{",
    `  "name": "${name}",`,
    '  "cards": [',
    cardRows,
    "  ]",
    "}",
    "```",
  ].join("\n");

  const url = new URL(`https://github.com/${GITHUB_REPO}/issues/new`);
  url.searchParams.set("title", title);
  url.searchParams.set("body", body);
  return url.toString();
}

function CopyLink({ label, hint, link }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard API unavailable — the link is still shown for manual copy
    }
  };

  return (
    <div className={styles.linkBlock}>
      <div className={styles.linkLabel}>{label}</div>
      <div className={styles.linkHint}>{hint}</div>
      <div className={styles.linkRow}>
        <span className={styles.linkText}>{link}</span>
        <button type="button" className={`btn btn-secondary ${styles.copyBtn}`} onClick={copy}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

function CreateDeck({ initialDeck, onBack }) {
  const [draft, setDraft] = useLocalStorageState("ems-flashcards:deck-draft", EMPTY_DRAFT);
  const editing = !!initialDeck;
  const [name, setName] = useState(initialDeck?.name ?? draft.name);
  const [cards, setCards] = useState(initialDeck?.cards ?? draft.cards);
  const [termInput, setTermInput] = useState("");
  const [definitionInput, setDefinitionInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [published, setPublished] = useState(null);

  const syncDraft = (nextName, nextCards) => {
    if (!editing) setDraft({ name: nextName, cards: nextCards });
  };

  const updateName = (value) => {
    setName(value);
    syncDraft(value, cards);
  };

  const resetForm = () => {
    setTermInput("");
    setDefinitionInput("");
    setEditingId(null);
  };

  const addOrUpdateCard = () => {
    const term = termInput.trim();
    const definition = definitionInput.trim();
    if (!term || !definition) return;

    const nextCards =
      editingId !== null
        ? cards.map((c) => (c.id === editingId ? { ...c, term, definition } : c))
        : [...cards, { id: crypto.randomUUID(), term, definition }];

    setCards(nextCards);
    syncDraft(name, nextCards);
    resetForm();
  };

  const editCard = (card) => {
    setEditingId(card.id);
    setTermInput(card.term);
    setDefinitionInput(card.definition);
  };

  const deleteCard = (id) => {
    const nextCards = cards.filter((c) => c.id !== id);
    setCards(nextCards);
    syncDraft(name, nextCards);
    if (editingId === id) resetForm();
  };

  const canPublish = name.trim().length > 0 && cards.length > 0;

  const publish = () => {
    if (!canPublish) return;
    const deckId = generateDeckId(name.trim());
    const deckPayload = { name: name.trim(), cards };
    const temporaryLink = buildTemporaryLink(deckPayload);
    const permanentLink = buildPermanentLink(deckId);
    setPublished({ deckId, temporaryLink, permanentLink });
    if (!editing) setDraft(EMPTY_DRAFT);
  };

  if (published) {
    const issueUrl = buildIssueUrl({
      name: name.trim(),
      deckId: published.deckId,
      cardCount: cards.length,
      temporaryLink: published.temporaryLink,
      permanentLink: published.permanentLink,
      cards: cards.map((c) => [c.term, c.definition]),
    });

    return (
      <div className={styles.screen}>
        <div className={styles.resultCard}>
          <h2>"{name.trim()}" is ready</h2>
          <p>{cards.length} card{cards.length === 1 ? "" : "s"}</p>
        </div>

        <CopyLink
          label="Share this now"
          hint="Works immediately for anyone you send it to."
          link={published.temporaryLink}
        />
        <CopyLink
          label="Permanent link"
          hint="Short and stable, but only works after it's reviewed and added — shows a “coming soon” page until then."
          link={published.permanentLink}
        />

        <div className={styles.actions}>
          <a
            className="btn btn-primary"
            href={issueUrl}
            target="_blank"
            rel="noreferrer"
          >
            Send for Review
          </a>
          <button type="button" className="btn btn-secondary" onClick={onBack}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <button type="button" className="btn btn-ghost" onClick={onBack}>
          ‹ Back to Home
        </button>
        <span className={styles.title}>{editing ? "Edit Deck" : "Build Your Own"}</span>
      </div>

      <input
        className={styles.nameInput}
        type="text"
        value={name}
        onChange={(e) => updateName(e.target.value)}
        placeholder="Name your deck"
      />

      <div className={styles.addCard}>
        <input
          type="text"
          value={termInput}
          onChange={(e) => setTermInput(e.target.value)}
          placeholder="Term (front of card)"
        />
        <input
          type="text"
          value={definitionInput}
          onChange={(e) => setDefinitionInput(e.target.value)}
          placeholder="Definition (back of card)"
          onKeyDown={(e) => {
            if (e.key === "Enter") addOrUpdateCard();
          }}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={addOrUpdateCard}
          disabled={!termInput.trim() || !definitionInput.trim()}
        >
          {editingId !== null ? "Save Card" : "Add Card"}
        </button>
      </div>

      <div className={styles.cardCount}>
        {cards.length} card{cards.length === 1 ? "" : "s"}
      </div>

      {cards.length === 0 ? (
        <p className={styles.empty}>No cards yet — add your first one above.</p>
      ) : (
        <ul className={styles.cardList}>
          {cards.map((card) => (
            <li key={card.id} className={styles.cardItem}>
              <div className={styles.cardItemText}>
                <div className={styles.cardItemTerm}>{card.term}</div>
                <div className={styles.cardItemDefinition}>{card.definition}</div>
              </div>
              <div className={styles.cardItemActions}>
                <button
                  type="button"
                  className={styles.iconBtn}
                  onClick={() => editCard(card)}
                  aria-label={`Edit ${card.term}`}
                >
                  ✎
                </button>
                <button
                  type="button"
                  className={styles.iconBtn}
                  onClick={() => deleteCard(card.id)}
                  aria-label={`Delete ${card.term}`}
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <p className={styles.disclaimer}>
        Once you generate your links, anyone who has them can view and study
        these cards. Only share them with people you want to see them.
      </p>

      <div className={styles.actions}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={publish}
          disabled={!canPublish}
        >
          Generate Links
        </button>
      </div>
    </div>
  );
}

export default CreateDeck;
