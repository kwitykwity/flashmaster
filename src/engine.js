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
// Deduplicates and filters empty/undefined values before slicing.
// Pads with fallbacks if pool runs short to always return exactly 3.

const FALLBACK_TERMS = ["SSH","HTTP","DHCP","RAID 0","DDR4","ATX","VGA","USB-A","NFC","DNS"];
const FALLBACK_DEFS  = ["Secure Shell","Hypertext Transfer Protocol","Domain Name System","Advanced Technology Extended","Near Field Communication"];
const FALLBACK_DETAILS = [
  "Encrypted remote CLI access",
  "Unencrypted web page delivery",
  "Resolves domain names to IPs",
  "Standard full-size motherboard",
  "Short-range wireless for peripherals",
];

function clean(arr) {
  return arr.filter(v => v && typeof v === "string" && v.trim().length > 0);
}

function pad(arr, fallbacks, n = 3) {
  const result = [...arr];
  for (const f of fallbacks) {
    if (result.length >= n) break;
    if (!result.includes(f)) result.push(f);
  }
  return result.slice(0, n);
}

function wrongTerm(correct) {
  const pool = clean(uniqueVals(
    shuffle(ALL_ITEMS.filter(x => x.term && x.term !== correct.term)).map(x => x.term)
  ));
  return pad(pool, FALLBACK_TERMS);
}

function wrongDef(correct) {
  const pool = clean(uniqueVals(
    shuffle(ALL_ITEMS.filter(x => x.definition && x.definition !== correct.definition)).map(x => x.definition)
  ));
  return pad(pool, FALLBACK_DEFS);
}

function wrongDetail(correct) {
  const pool = clean(uniqueVals(
    shuffle(ALL_ITEMS.filter(x => x.term !== correct.term && x.detail)).map(x => x.detail)
  ));
  return pad(pool, FALLBACK_DETAILS);
}

function wrongExtra(correct) {
  const pool = clean(uniqueVals(
    shuffle(ALL_ITEMS.filter(x => x.extra && x.extra !== correct.extra)).map(x => x.extra)
  ));
  return pad(pool, ["Port 22 · TCP","Port 80 · TCP","Port 443 · TCP"]);
}

function wrongCategory(correct) {
  const allCats = clean([...new Set(ALL_ITEMS.map(x => x.category))]);
  const pool = shuffle(allCats.filter(x => x !== correct.category));
  return pad(pool, ["Network Port","WiFi Standard","RAM Type","Storage Device","Power Supply"]);
}

// ── MCQ builder ───────────────────────────────────────────────
// Generates question types per item from the universal schema.
// Question templates are written so the answer is never visible
// in the question text itself.
// Pre-built scenario questions are passed through directly.
// Total pool is shuffled and capped at 500 per session.
export function buildMCQs() {
  const questions = [];

  const scenarios   = ALL_ITEMS.filter(item => item.prebuilt === true);
  const schemaItems = ALL_ITEMS.filter(item => !item.prebuilt);

  schemaItems.forEach(item => {
    if (!item.term || !item.definition) return;

    // Q1 — Given the full name, identify the term/acronym
    // Template uses definition but answer is the short term —
    // only safe when definition is clearly different from term
    // e.g. "Secure Shell" → "SSH" (safe)
    // e.g. "Zigbee Wireless Protocol" → "Zigbee" (too close — skip)
    const defWordsInTerm = item.term.toLowerCase().split(/\s+/)
      .some(w => w.length > 3 && item.definition.toLowerCase().includes(w));
    if (!defWordsInTerm) {
      questions.push({
        q:       `Which term or acronym matches this full name: "${item.definition}"?`,
        correct: item.term,
        choices: shuffle([item.term, ...wrongTerm(item)]),
        topic:   "Term Identification",
      });
    }

    // Q2 — Given the term, what does it stand for / mean?
    questions.push({
      q:       `What does "${item.term}" stand for or mean?`,
      correct: item.definition,
      choices: shuffle([item.definition, ...wrongDef(item)]),
      topic:   "Definition",
    });

    // Q3 — Given the term, pick the best description (uses detail field)
    questions.push({
      q:       `Which statement best describes "${item.term}"?`,
      correct: item.detail,
      choices: shuffle([item.detail, ...wrongDetail(item)]),
      topic:   "Key Detail",
    });

    // Q4 — Given the description, identify the term (reverse of Q3)
    questions.push({
      q:       `A technician describes: "${item.detail}" — which term is being described?`,
      correct: item.term,
      choices: shuffle([item.term, ...wrongTerm(item)]),
      topic:   "Detail Lookup",
    });

    // Q5 — Extra fact → identify the term (only when extra exists and
    // doesn't contain the term itself)
    if (item.extra) {
      const extraRevealsTerm = item.extra.toLowerCase().includes(item.term.toLowerCase());
      if (!extraRevealsTerm) {
        questions.push({
          q:       `Which term is associated with this characteristic: "${item.extra}"?`,
          correct: item.term,
          choices: shuffle([item.term, ...wrongTerm(item)]),
          topic:   "Fact Lookup",
        });
      }

      // Q6 — Given the term, pick the correct extra fact
      questions.push({
        q:       `Which additional detail applies to "${item.term}"?`,
        correct: item.extra,
        choices: shuffle([item.extra, ...wrongExtra(item)]),
        topic:   "Additional Detail",
      });
    }

    // Q7 — Scenario-style: pick the right tool/protocol for a job
    // Uses detail phrased as a "what would you use for..." question
    questions.push({
      q:       `A network technician needs to: "${item.detail}". Which term or protocol applies?`,
      correct: item.term,
      choices: shuffle([item.term, ...wrongTerm(item)]),
      topic:   "Applied Knowledge",
    });
  });

  // Pass pre-built scenario questions through directly
  scenarios.forEach(item => {
    questions.push({
      q:       item.q,
      correct: item.correct,
      choices: shuffle([item.correct, ...item.distractors]),
      topic:   item.topic || "Troubleshooting",
    });
  });

  // Validate — remove any question where correct answer is empty
  // or any choice is empty or undefined
  const valid = questions.filter(q =>
    q.correct &&
    q.choices.length === 4 &&
    q.choices.every(c => c && c.trim().length > 0) &&
    q.choices.includes(q.correct)
  );

  return shuffle(valid).slice(0, 500);
}

export const APP_TITLE    = "FlashMaster";
export const APP_SUBTITLE = "CompTIA A+ Core 1 · 220-1201";
