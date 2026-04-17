// ============================================================
//  ENGINE.JS — DO NOT EDIT
//  Builds flashcards and MCQs from data-index.js.
//  Handles both text cards and visual (SVG) cards.
// ============================================================

import { ALL_ITEMS } from "./data-index.js";

export const JEWEL_TONES = [
  { name: "ruby",       front: "#9B111E", border: "#9B111E", text: "#fff", light: "#f8d7da" },
  { name: "sapphire",   front: "#0F52BA", border: "#0F52BA", text: "#fff", light: "#d0e4f7" },
  { name: "emerald",    front: "#046307", border: "#046307", text: "#fff", light: "#d4edda" },
  { name: "amethyst",   front: "#6B3FA0", border: "#6B3FA0", text: "#fff", light: "#e8d5f5" },
  { name: "topaz",      front: "#C47900", border: "#C47900", text: "#fff", light: "#fff3cd" },
  { name: "aquamarine", front: "#006D6D", border: "#006D6D", text: "#fff", light: "#ccf0f0" },
  { name: "garnet",     front: "#6E0E0A", border: "#6E0E0A", text: "#fff", light: "#f5c6c5" },
];

// ── Utility ──────────────────────────────────────────────────
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Deduplicate by value before slicing — prevents duplicate answer choices
// when multiple items share the same field value (e.g. NetBIOS on ports 137/138/139)
function uniqueVals(arr) {
  const seen = new Set();
  return arr.filter(v => {
    if (seen.has(v)) return false;
    seen.add(v);
    return true;
  });
}

// ── Flashcard builder ─────────────────────────────────────────
// Builds two interleaved decks:
//   Deck A: term on front, definition/detail on back
//   Deck B: category/acronym on front, full info on back
// If an item has a `visual` key, the back renders an SVG illustration
// instead of plain text. The visual key maps to a drawing function in visuals.js.
export function buildFlashcards() {
  const deckA = ALL_ITEMS
    .filter(item => item.term)
    .map((item, i) => ({
      id:         `deckA-${i}`,
      type:       "deckA",
      front:      item.term,
      frontLabel: item.category || "Term",
      back:       `${item.definition}\n${item.detail}\n[${item.extra || item.category}]`,
      backLabel:  "Definition",
      visual:     item.visual || null,
      color:      JEWEL_TONES[i % JEWEL_TONES.length],
    }));

  const deckB = ALL_ITEMS
    .filter(item => item.definition)
    .map((item, i) => ({
      id:         `deckB-${i}`,
      type:       "deckB",
      front:      item.definition,
      frontLabel: "Full Name",
      back:       `${item.term}\n${item.detail}\n[${item.category}]`,
      backLabel:  "Term & Detail",
      visual:     null,
      color:      JEWEL_TONES[(i + 3) % JEWEL_TONES.length],
    }));

  // Interleave: deckA[0], deckB[0], deckA[1], deckB[1]...
  const interleaved = [];
  const max = Math.max(deckA.length, deckB.length);
  for (let i = 0; i < max; i++) {
    if (i < deckA.length) interleaved.push(deckA[i]);
    if (i < deckB.length) interleaved.push(deckB[i]);
  }
  return interleaved;
}

// ── MCQ distractor helpers ────────────────────────────────────
// Each helper deduplicates BEFORE slicing to prevent identical answer choices.
function wrongTerm(correct) {
  return uniqueVals(
    shuffle(ALL_ITEMS.filter(x => x.term !== correct.term)).map(x => x.term)
  ).slice(0, 3);
}
function wrongDef(correct) {
  return uniqueVals(
    shuffle(ALL_ITEMS.filter(x => x.definition !== correct.definition)).map(x => x.definition)
  ).slice(0, 3);
}
function wrongDetail(correct) {
  return uniqueVals(
    shuffle(ALL_ITEMS.filter(x => x.term !== correct.term)).map(x => x.detail)
  ).slice(0, 3);
}
function wrongExtra(correct) {
  return uniqueVals(
    shuffle(ALL_ITEMS.filter(x => x.extra !== correct.extra && x.extra)).map(x => x.extra)
  ).slice(0, 3);
}
function wrongCategory(correct) {
  const allCats = [...new Set(ALL_ITEMS.map(x => x.category))];
  return shuffle(allCats.filter(x => x !== correct.category)).slice(0, 3);
}

// ── MCQ builder ───────────────────────────────────────────────
// Generates 8 question types per item from the universal schema.
// Pre-built scenario questions (troubleshooting) are passed through directly.
// Total pool is shuffled and capped at 500 per session.
export function buildMCQs() {
  const questions = [];

  // Separate pre-built scenario questions from schema-driven items
  const scenarios  = ALL_ITEMS.filter(item => item.prebuilt === true);
  const schemaItems = ALL_ITEMS.filter(item => !item.prebuilt);

  // Auto-generate 8 question types per schema item
  schemaItems.forEach(item => {
    if (!item.term || !item.definition) return;

    questions.push({
      q:       `What is the term for: "${item.definition}"?`,
      correct: item.term,
      choices: shuffle([item.term, ...wrongTerm(item)]),
      topic:   "Term Identification",
    });
    questions.push({
      q:       `What does "${item.term}" stand for or mean?`,
      correct: item.definition,
      choices: shuffle([item.definition, ...wrongDef(item)]),
      topic:   "Definition",
    });
    questions.push({
      q:       `Which best describes "${item.term}"?`,
      correct: item.detail,
      choices: shuffle([item.detail, ...wrongDetail(item)]),
      topic:   "Key Detail",
    });
    questions.push({
      q:       `"${item.detail}" — which term does this describe?`,
      correct: item.term,
      choices: shuffle([item.term, ...wrongTerm(item)]),
      topic:   "Detail Lookup",
    });
    questions.push({
      q:       `Which category does "${item.term}" belong to?`,
      correct: item.category,
      choices: shuffle([item.category, ...wrongCategory(item)]),
      topic:   "Category",
    });
    if (item.extra) {
      questions.push({
        q:       `Which additional fact is associated with "${item.term}"?`,
        correct: item.extra,
        choices: shuffle([item.extra, ...wrongExtra(item)]),
        topic:   "Additional Detail",
      });
      questions.push({
        q:       `"${item.extra}" — which term does this apply to?`,
        correct: item.term,
        choices: shuffle([item.term, ...wrongTerm(item)]),
        topic:   "Fact Lookup",
      });
    }
    questions.push({
      q:       `"${item.definition}" — which category does this belong to?`,
      correct: item.category,
      choices: shuffle([item.category, ...wrongCategory(item)]),
      topic:   "Category Lookup",
    });
  });

  // Add pre-built scenario questions directly
  scenarios.forEach(item => {
    questions.push({
      q:       item.q,
      correct: item.correct,
      choices: shuffle([item.correct, ...item.distractors]),
      topic:   item.topic || "Troubleshooting",
    });
  });

  // Shuffle full pool and cap at 500 per session
  return shuffle(questions).slice(0, 500);
}

export const APP_TITLE    = "FlashMaster";
export const APP_SUBTITLE = "CompTIA A+ Core 1 · 220-1201";
