// ============================================================
//  ENGINE.JS — DO NOT EDIT
//  Builds flashcards and MCQs from whatever is in data.js.
// ============================================================

import { DECK_CONFIG, ITEMS } from "./data.js";

const { fields, cardLabels, cardBack, mcqTopics, mcqTemplates, fieldALabel } = DECK_CONFIG;
const { fieldA, fieldB, fieldC, fieldD } = fields;

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

// Fills {fieldA}, {fieldB}, {fieldC}, {fieldD}, {desc}, {fieldALabel}
// placeholders in a template string using a data item.
function fill(template, item) {
  return template
    .replace(/{fieldA}/g,     item[fieldA]   ?? "")
    .replace(/{fieldB}/g,     item[fieldB]   ?? "")
    .replace(/{fieldC}/g,     item[fieldC]   ?? "")
    .replace(/{fieldD}/g,     item[fieldD]   ?? "")
    .replace(/{desc}/g,       item.desc      ?? "")
    .replace(/{fieldALabel}/g, fieldALabel   ?? "");
}

// ── Flashcard builder ────────────────────────────────────────
export function buildFlashcards() {
  const deckA = ITEMS.map((item, i) => ({
    id: `deckA-${i}`,
    type: "deckA",
    front: item[fieldA],
    frontLabel: cardLabels.deckA,
    back: fill(cardBack.deckA, item),
    backLabel: cardLabels.deckB,
    color: JEWEL_TONES[i % JEWEL_TONES.length],
  }));

  const deckB = ITEMS.map((item, i) => ({
    id: `deckB-${i}`,
    type: "deckB",
    front: item[fieldB],
    frontLabel: cardLabels.deckB,
    back: fill(cardBack.deckB, item),
    backLabel: cardLabels.deckA,
    color: JEWEL_TONES[(i + 3) % JEWEL_TONES.length],
  }));

  // Interleave: deckA[0], deckB[0], deckA[1], deckB[1] ...
  const interleaved = [];
  const max = Math.max(deckA.length, deckB.length);
  for (let i = 0; i < max; i++) {
    if (i < deckA.length) interleaved.push(deckA[i]);
    if (i < deckB.length) interleaved.push(deckB[i]);
  }
  return interleaved;
}

// ── MCQ distractor helpers ───────────────────────────────────
function wrongA(correct)    { return shuffle(ITEMS.filter(x => x[fieldA] !== correct[fieldA])).slice(0,3).map(x => x[fieldA]); }
function wrongB(correct)    { return shuffle(ITEMS.filter(x => x[fieldB] !== correct[fieldB])).slice(0,3).map(x => x[fieldB]); }
function wrongC(correct)    { return shuffle(ITEMS.filter(x => x[fieldC] !== correct[fieldC])).slice(0,3).map(x => x[fieldC]); }
function wrongDesc(correct) { return shuffle(ITEMS.filter(x => x[fieldA] !== correct[fieldA])).slice(0,3).map(x => x.desc); }
function wrongD(correct)    {
  // For fieldD (e.g. transport type) use all distinct values in the dataset
  const allD = [...new Set(ITEMS.map(x => x[fieldD]))];
  return shuffle(allD.filter(x => x !== correct[fieldD])).slice(0, 3);
}

// ── MCQ builder ──────────────────────────────────────────────
export function buildMCQs() {
  const questions = [];

  ITEMS.forEach((item) => {
    questions.push({
      q:       fill(mcqTemplates.lookupA, item),
      correct: item[fieldA],
      choices: shuffle([item[fieldA], ...wrongA(item)]),
      topic:   mcqTopics.lookupA,
    });
    questions.push({
      q:       fill(mcqTemplates.lookupB, item),
      correct: item[fieldB],
      choices: shuffle([item[fieldB], ...wrongB(item)]),
      topic:   mcqTopics.lookupB,
    });
    questions.push({
      q:       fill(mcqTemplates.expansion, item),
      correct: item[fieldC],
      choices: shuffle([item[fieldC], ...wrongC(item)]),
      topic:   mcqTopics.expansion,
    });
    questions.push({
      q:       fill(mcqTemplates.byDesc, item),
      correct: item[fieldB],
      choices: shuffle([item[fieldB], ...wrongB(item)]),
      topic:   mcqTopics.byDesc,
    });
    questions.push({
      q:       fill(mcqTemplates.typeByB, item),
      correct: item[fieldD],
      choices: shuffle([item[fieldD], ...wrongD(item)]),
      topic:   mcqTopics.typeByB,
    });
    questions.push({
      q:       fill(mcqTemplates.typeByA, item),
      correct: item[fieldD],
      choices: shuffle([item[fieldD], ...wrongD(item)]),
      topic:   mcqTopics.typeByA,
    });
    questions.push({
      q:       fill(mcqTemplates.funcByB, item),
      correct: item.desc,
      choices: shuffle([item.desc, ...wrongDesc(item)]),
      topic:   mcqTopics.funcByB,
    });
    questions.push({
      q:       fill(mcqTemplates.fullToA, item),
      correct: item[fieldA],
      choices: shuffle([item[fieldA], ...wrongA(item)]),
      topic:   mcqTopics.fullToA,
    });
  });

  return shuffle(questions).slice(0, 200);
}

export const APP_TITLE    = DECK_CONFIG.title;
export const APP_SUBTITLE = DECK_CONFIG.subtitle;
