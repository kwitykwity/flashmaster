// ============================================================
//  APP.JSX — DO NOT EDIT
//  Pure UI. Swap subjects by editing data files only.
//  Renders SVG illustrations on flashcard backs when available.
//  Uses /api/anthropic proxy — no API key input needed.
// ============================================================

import { useState, useEffect } from "react";
import {
  JEWEL_TONES, shuffle,
  buildFlashcards, buildMCQs,
  APP_TITLE, APP_SUBTITLE,
} from "./engine.js";
import { VISUAL_MAP } from "./visuals.jsx";

// ── Sound ────────────────────────────────────────────────────
function playMagicSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    notes.forEach((freq, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);
      gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.08);
      gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + i * 0.08 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + 0.35);
      osc.start(ctx.currentTime + i * 0.08);
      osc.stop(ctx.currentTime + i * 0.08 + 0.4);
    });
  } catch (e) {}
}

// ── Styles ───────────────────────────────────────────────────
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Arvo:ital,wght@0,400;0,700;1,400&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body, #root { background: #000; min-height: 100vh; font-family: 'Arvo', serif; color: #fff; }
  .app-wrap { min-height: 100vh; background: #000; display: flex; flex-direction: column; align-items: center; }

  .header { width: 100%; padding: 18px 24px 12px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #1a1a1a; flex-wrap: wrap; gap: 8px; }
  .header-title { font-family: 'Abril Fatface', serif; font-size: 1.2rem; background: linear-gradient(90deg, #9B111E, #6B3FA0, #0F52BA); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; letter-spacing: 0.04em; }
  .nav-tabs { display: flex; gap: 8px; }
  .nav-tab { font-family: 'Arvo', serif; font-size: 0.82rem; padding: 6px 16px; border-radius: 20px; border: 1.5px solid #333; background: transparent; color: #888; cursor: pointer; transition: all 0.2s; letter-spacing: 0.05em; }
  .nav-tab.active { border-color: #6B3FA0; color: #c89ef0; background: #1a0d2e; }
  .nav-tab:hover:not(.active) { border-color: #555; color: #ccc; }

  .main-area { flex: 1; display: flex; align-items: center; justify-content: center; width: 100%; padding: 24px 16px; min-height: calc(100vh - 120px); }

  .card-scene { perspective: 1200px; width: min(360px, calc(100vw - 32px)); height: min(240px, calc((100vw - 32px) * 0.667)); }
  @media (max-width: 480px) { .card-scene { width: calc(100vw - 6px); height: calc((100vw - 6px) * 0.667); } }
  .card-inner { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 0.7s cubic-bezier(0.4,0.2,0.2,1); cursor: pointer; }
  .card-inner.flipped { transform: rotateX(-180deg); }
  .card-face { position: absolute; inset: 0; border-radius: 12px; backface-visibility: hidden; -webkit-backface-visibility: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 16px; gap: 6px; box-shadow: 0 8px 40px rgba(0,0,0,0.7); overflow: hidden; }
  .card-back { transform: rotateX(180deg); background: #fff; border-width: 3px; border-style: solid; }
  .card-label { font-size: 0.68rem; letter-spacing: 0.15em; text-transform: uppercase; font-family: 'Arvo', serif; }
  .card-front .card-label { color: rgba(255,255,255,0.75); }
  .card-back .card-label { opacity: 0.55; }
  .card-main { font-family: 'Abril Fatface', serif; font-size: clamp(1.4rem,5vw,2.2rem); text-align: center; line-height: 1.1; }
  .card-front .card-main { color: #fff; }
  .card-back .card-main { color: #1a1a1a; font-size: clamp(1rem,3.5vw,1.4rem); }
  .card-desc { font-family: 'Arvo', serif; font-size: clamp(0.68rem,2vw,0.82rem); text-align: center; line-height: 1.5; color: #333; margin-top: 2px; }
  .card-type-badge { position: absolute; bottom: 8px; right: 12px; font-size: 0.62rem; font-family: 'Arvo', serif; font-weight: 700; padding: 2px 8px; border-radius: 10px; letter-spacing: 0.08em; }
  .card-hint { font-size: 0.68rem; color: rgba(255,255,255,0.45); margin-top: 6px; letter-spacing: 0.08em; font-family: 'Arvo', serif; animation: blink-hint 2.5s ease-in-out infinite; }
  @keyframes blink-hint { 0%,100%{opacity:0.45} 50%{opacity:0.2} }
  .card-visual { width: 100%; flex: 1; display: flex; align-items: center; justify-content: center; min-height: 0; }

  .fc-nav { display: flex; align-items: center; gap: 20px; margin-top: 20px; }
  .fc-btn { background: transparent; border: 1.5px solid #333; color: #aaa; font-family: 'Arvo', serif; font-size: 0.85rem; padding: 8px 20px; border-radius: 20px; cursor: pointer; transition: all 0.2s; letter-spacing: 0.04em; }
  .fc-btn:hover { border-color: #6B3FA0; color: #c89ef0; }
  .fc-counter { font-family: 'Arvo', serif; font-size: 0.82rem; color: #555; }

  .mcq-outer { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
  .mcq-card { width: min(360px, calc(100vw - 32px)); border-radius: 8px; overflow: hidden; box-shadow: 0 10px 50px rgba(0,0,0,0.8); display: flex; flex-direction: column; animation: card-enter 0.4s cubic-bezier(0.34,1.56,0.64,1); }
  @media (max-width: 480px) { .mcq-card { width: calc(100vw - 6px); } }
  @keyframes card-enter { from{transform:translateY(30px) scale(0.95);opacity:0} to{transform:translateY(0) scale(1);opacity:1} }
  .mcq-card.shake { animation: shake 0.5s cubic-bezier(0.36,0.07,0.19,0.97); }
  @keyframes shake { 10%,90%{transform:translateX(-3px)} 20%,80%{transform:translateX(5px)} 30%,50%,70%{transform:translateX(-6px)} 40%,60%{transform:translateX(6px)} 100%{transform:translateX(0)} }
  .mcq-band { height: 48px; display: flex; align-items: center; justify-content: center; padding: 0 16px; }
  .mcq-band-text { font-family: 'Abril Fatface', serif; font-size: 1.05rem; color: #fff; text-align: center; letter-spacing: 0.06em; text-shadow: 0 1px 4px rgba(0,0,0,0.4); }
  .mcq-body { background: #fffdf5; flex: 1; padding: 14px 16px 10px; display: flex; flex-direction: column; gap: 8px; }
  .mcq-q-label { font-family: 'Arvo', serif; font-size: 0.62rem; letter-spacing: 0.15em; color: #888; text-transform: uppercase; }
  .mcq-question { font-family: 'Arvo', serif; font-size: clamp(0.78rem,2.5vw,0.9rem); color: #1a1a1a; line-height: 1.5; min-height: 44px; }
  .mcq-choices { display: flex; flex-direction: column; gap: 5px; margin-top: 2px; }
  .mcq-choice { display: flex; align-items: center; gap: 10px; padding: 7px 12px; border-radius: 6px; border: 1.5px solid #ddd; background: #fff; cursor: pointer; transition: all 0.15s; font-family: 'Arvo', serif; font-size: clamp(0.72rem,2.2vw,0.82rem); color: #1a1a1a; text-align: left; }
  .mcq-choice:hover:not(.disabled) { border-color: #aaa; background: #f9f7ee; }
  .mcq-choice.correct { border-color: #046307; background: #d4edda; color: #046307; }
  .mcq-choice.wrong { border-color: #9B111E; background: #f8d7da; color: #9B111E; }
  .mcq-choice.disabled { cursor: default; }
  .choice-letter { font-family: 'Abril Fatface', serif; font-size: 0.88rem; min-width: 18px; text-align: center; opacity: 0.7; }
  .mcq-footer { background: #fffdf5; padding: 5px 16px 10px; display: flex; justify-content: flex-end; }
  .mcq-footer-text { font-family: 'Arvo', serif; font-size: 0.65rem; color: #aaa; font-style: italic; }

  .counters { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
  .counter-gem { display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 7px 14px; border-radius: 10px; min-width: 66px; border: 1.5px solid; }
  .counter-num { font-family: 'Abril Fatface', serif; font-size: 1.3rem; line-height: 1; }
  .counter-label { font-family: 'Arvo', serif; font-size: 0.6rem; letter-spacing: 0.12em; text-transform: uppercase; opacity: 0.85; }

  .sparkle-container { position: fixed; pointer-events: none; inset: 0; z-index: 9999; }
  .sparkle { position: absolute; width: 8px; height: 8px; border-radius: 50%; animation: sparkle-fly 0.8s ease-out forwards; }
  @keyframes sparkle-fly { 0%{transform:translate(0,0) scale(1);opacity:1} 100%{transform:translate(var(--tx),var(--ty)) scale(0);opacity:0} }

  .progress-bar-wrap { width: min(360px, calc(100vw - 32px)); height: 4px; background: #111; border-radius: 2px; overflow: hidden; }
  .progress-bar-fill { height: 100%; border-radius: 2px; transition: width 0.4s ease; }
  .cycle-info { font-size: 0.66rem; color: #555; font-family: 'Arvo',serif; margin-top: -6px; }

  .shuffle-toast { position: fixed; top: 80px; left: 50%; transform: translateX(-50%); background: #1a0d2e; border: 1.5px solid #6B3FA0; color: #c89ef0; padding: 12px 28px; border-radius: 30px; font-family: 'Abril Fatface', serif; font-size: 1rem; letter-spacing: 0.05em; z-index: 1000; animation: toast-in 0.4s cubic-bezier(0.34,1.56,0.64,1); box-shadow: 0 0 30px rgba(107,63,160,0.4); white-space: nowrap; }
  @keyframes toast-in { from{transform:translateX(-50%) translateY(-20px);opacity:0} to{transform:translateX(-50%) translateY(0);opacity:1} }

  .explain-panel { width: min(360px, calc(100vw - 32px)); border-radius: 10px; border: 1.5px solid #9B111E; background: #120408; overflow: hidden; animation: explain-in 0.35s cubic-bezier(0.34,1.56,0.64,1); }
  @media (max-width: 480px) { .explain-panel { width: calc(100vw - 6px); } }
  @keyframes explain-in { from{transform:translateY(-12px);opacity:0} to{transform:translateY(0);opacity:1} }
  .explain-header { display: flex; align-items: center; gap: 8px; padding: 10px 14px 8px; border-bottom: 1px solid #2a0a10; }
  .explain-title { font-family: 'Abril Fatface', serif; font-size: 0.8rem; color: #e57373; letter-spacing: 0.08em; }
  .explain-body { padding: 12px 14px 14px; font-family: 'Arvo', serif; font-size: clamp(0.76rem,2.2vw,0.86rem); color: #ddd; line-height: 1.65; }
  .explain-shimmer { display: flex; align-items: center; gap: 10px; padding: 14px; }
  .shimmer-dots { display: flex; gap: 5px; }
  .shimmer-dot { width: 7px; height: 7px; border-radius: 50%; background: #9B111E; animation: dot-pulse 1.2s ease-in-out infinite; }
  .shimmer-dot:nth-child(2) { animation-delay: 0.2s; }
  .shimmer-dot:nth-child(3) { animation-delay: 0.4s; }
  @keyframes dot-pulse { 0%,100%{opacity:0.3;transform:scale(0.8)} 50%{opacity:1;transform:scale(1)} }
  .shimmer-text { font-family: 'Arvo', serif; font-size: 0.8rem; color: #555; font-style: italic; }
  .explain-next { display: block; width: calc(100% - 28px); margin: 0 14px 14px; padding: 9px 0; background: transparent; border: 1.5px solid #6B3FA0; border-radius: 20px; color: #c89ef0; font-family: 'Arvo', serif; font-size: 0.85rem; letter-spacing: 0.05em; cursor: pointer; transition: all 0.2s; }
  .explain-next:hover { background: #1a0d2e; }
  .explain-next-correct { display: block; width: calc(100% - 28px); margin: 8px 14px 12px; padding: 9px 0; background: transparent; border: 1.5px solid #046307; border-radius: 20px; color: #4caf50; font-family: 'Arvo', serif; font-size: 0.85rem; letter-spacing: 0.05em; cursor: pointer; transition: all 0.2s; }
  .explain-next-correct:hover { background: #0d1a0d; }
`;

const LETTERS = ["A", "B", "C", "D"];

function Sparkles({ trigger }) {
  const [sparks, setSparks] = useState([]);
  useEffect(() => {
    if (!trigger) return;
    const newSparks = Array.from({ length: 18 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      color: JEWEL_TONES[i % JEWEL_TONES.length].front,
      tx: (Math.random() - 0.5) * 160 + "px",
      ty: (Math.random() - 0.5) * 160 + "px",
    }));
    setSparks(newSparks);
    setTimeout(() => setSparks([]), 900);
  }, [trigger]);
  if (!sparks.length) return null;
  return (
    <div className="sparkle-container">
      {sparks.map(s => (
        <div key={s.id} className="sparkle"
          style={{ left: s.x, top: s.y, background: s.color, "--tx": s.tx, "--ty": s.ty }} />
      ))}
    </div>
  );
}

function FlashcardView({ cards }) {
  const [idx, setIdx]         = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card  = cards[idx];
  const color = card.color;

  const go = (dir) => {
    setFlipped(false);
    setTimeout(() => setIdx(i => (i + dir + cards.length) % cards.length), 200);
  };

  const backParts = card.back ? card.back.split("\n") : [];
  const VisualFn  = card.visual ? VISUAL_MAP[card.visual] : null;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="card-scene" onClick={() => setFlipped(f => !f)}>
        <div className={`card-inner${flipped ? " flipped" : ""}`}>
          <div className="card-face card-front" style={{ background: color.front }}>
            <span className="card-label">{card.frontLabel}</span>
            <span className="card-main">{card.front}</span>
            <span className="card-hint">click to flip</span>
          </div>
          <div className="card-face card-back" style={{ borderColor: color.front }}>
            <span className="card-label" style={{ color: color.front }}>{card.backLabel}</span>
            {VisualFn ? (
              <div className="card-visual"><VisualFn /></div>
            ) : (
              <>
                <span className="card-main" style={{ color: "#1a1a1a" }}>{backParts[0]}</span>
                {backParts[1] && <span className="card-desc">{backParts[1]}</span>}
                {backParts[2] && (
                  <span className="card-type-badge"
                    style={{ background: color.light || "#eee", color: color.front }}>
                    {backParts[2].replace(/[\[\]]/g, "")}
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="fc-nav">
        <button className="fc-btn" onClick={() => go(-1)}>← Prev</button>
        <span className="fc-counter">{idx + 1} / {cards.length}</span>
        <button className="fc-btn" onClick={() => go(1)}>Next →</button>
      </div>
    </div>
  );
}

function ExplanationPanel({ question, chosen, onNext }) {
  const [explanation, setExplanation] = useState(null);
  const [loading, setLoading]         = useState(false);

  useEffect(() => {
    setLoading(true);
    const prompt = `A student is studying for CompTIA A+ Core 1 (220-1201). They answered a multiple choice question incorrectly.

Question: ${question.q}
Their answer: ${chosen}
Correct answer: ${question.correct}

In 2-3 sentences, explain clearly why "${question.correct}" is correct and give one memorable tip or mnemonic to help them remember it. Be direct and specific. Do not start with "I" or repeat the question back.`;

    fetch("/api/anthropic", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    })
      .then(r => r.json())
      .then(data => {
        const text = data?.content?.[0]?.text || "Could not load explanation. Please try again.";
        setExplanation(text);
      })
      .catch(() => setExplanation("Could not reach the explanation service. Check your network connection."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="explain-panel">
      <div className="explain-header">
        <span className="explain-title">✦ Why the correct answer is: {question.correct}</span>
      </div>
      {loading ? (
        <div className="explain-shimmer">
          <div className="shimmer-dots">
            <div className="shimmer-dot" />
            <div className="shimmer-dot" />
            <div className="shimmer-dot" />
          </div>
          <span className="shimmer-text">Fetching explanation...</span>
        </div>
      ) : (
        <div className="explain-body">{explanation}</div>
      )}
      <button className="explain-next" onClick={onNext}>Next Question →</button>
    </div>
  );
}

function MCQView({ questions: initialQs }) {
  const [allQs] = useState(() =>
    shuffle([...initialQs]).map((q, i) => ({ ...q, _id: i }))
  );
  const [queue, setQueue]               = useState(() => [...allQs]);
  const [pos, setPos]                   = useState(0);
  const [seen, setSeen]                 = useState(() => new Set());
  const [selected, setSelected]         = useState(null);
  const [isCorrect, setIsCorrect]       = useState(null);
  const [shaking, setShaking]           = useState(false);
  const [sparkTrigger, setSparkTrigger] = useState(0);
  const [cycleCorrect, setCycleCorrect] = useState(0);
  const [cycleMisses, setCycleMisses]   = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [showToast, setShowToast]       = useState(false);
  const [toastMsg, setToastMsg]         = useState("");
  const [pendingShuffle, setPendingShuffle] = useState(false);

  const current   = queue[pos] || queue[0];
  const bandColor = JEWEL_TONES[pos % JEWEL_TONES.length].front;

  const toast = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2800);
  };

  const triggerShuffle = () => {
    toast("✦ Deck Shuffled — New Cycle Begins! ✦");
    const reshuffled = shuffle([...initialQs]).map((q, i) => ({ ...q, _id: i }));
    setQueue(reshuffled);
    setPos(0);
    setSeen(new Set());
    setSelected(null);
    setIsCorrect(null);
    setCycleCorrect(0);
    setCycleMisses(0);
    setPendingShuffle(false);
  };

  const handleChoice = (choice) => {
    if (selected !== null) return;
    setSelected(choice);
    const correct = choice === current.correct;
    setIsCorrect(correct);
    setTotalAnswered(t => t + 1);
    setTotalCorrect(t => t + (correct ? 1 : 0));

    let newCC = cycleCorrect;
    let newCM = cycleMisses;

    if (correct) {
      playMagicSound();
      setSparkTrigger(t => t + 1);
      newCC = cycleCorrect + 1;
      setCycleCorrect(newCC);
    } else {
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
      newCM = cycleMisses + 1;
      setCycleMisses(newCM);
    }

    if (newCM >= 6) {
      setTimeout(() => {
        toast("6 misses — cycle resets. Keep going!");
        setCycleCorrect(0);
        setCycleMisses(0);
      }, 900);
    }

    if (newCC >= 75 && newCM <= 5) {
      setPendingShuffle(true);
    }
  };

  const handleNext = () => {
    if (pendingShuffle) { triggerShuffle(); return; }

    const newQueue = [...queue];

    if (isCorrect) {
      // Mark as seen — retire this question for the rest of the cycle
      const newSeen = new Set(seen);
      newSeen.add(current._id);
      setSeen(newSeen);
      // Remove current from queue — pos stays the same, next item slides into place
      newQueue.splice(pos, 1);
      // If queue exhausted before shuffle trigger, reshuffle unseen questions
      if (newQueue.length === 0 || pos >= newQueue.length) {
        const unseen = shuffle([...initialQs])
          .map((q, i) => ({ ...q, _id: i + Date.now() }))
          .filter(q => !newSeen.has(q._id));
        if (unseen.length === 0) {
          triggerShuffle();
          return;
        }
        setQueue(unseen);
        setPos(0);
      } else {
        setQueue(newQueue);
        // pos stays the same — the next question slides into current pos
      }
    } else {
      // Wrong — remove from current pos, reinsert within next 10
      newQueue.splice(pos, 1);
      const reinsertAt = Math.min(pos + Math.floor(Math.random() * 10), newQueue.length);
      newQueue.splice(reinsertAt, 0, { ...current });
      setQueue(newQueue);
      setPos(p => p + 1);
    }

    setTotalAnswered(t => t + 1);
    setSelected(null);
    setIsCorrect(null);
  };

  const progressPct = Math.min((cycleCorrect / 75) * 100, 100);

  return (
    <div className="mcq-outer">
      <Sparkles trigger={sparkTrigger} />
      {showToast && <div className="shuffle-toast">{toastMsg}</div>}

      <div className="counters">
        <div className="counter-gem" style={{ background: "#0d1a0d", borderColor: "#046307", color: "#4caf50" }}>
          <span className="counter-num">{cycleCorrect}</span>
          <span className="counter-label">Correct</span>
        </div>
        <div className="counter-gem" style={{ background: "#1a0a0a", borderColor: "#9B111E", color: "#e57373" }}>
          <span className="counter-num">{cycleMisses}</span>
          <span className="counter-label">Misses</span>
        </div>
        <div className="counter-gem" style={{ background: "#0d0d1a", borderColor: "#0F52BA", color: "#64b5f6" }}>
          <span className="counter-num">{totalCorrect}</span>
          <span className="counter-label">Total ✓</span>
        </div>
        <div className="counter-gem" style={{ background: "#1a0d2e", borderColor: "#6B3FA0", color: "#c89ef0" }}>
          <span className="counter-num">{totalAnswered + 1}</span>
          <span className="counter-label">Question</span>
        </div>
      </div>

      <div className="progress-bar-wrap">
        <div className="progress-bar-fill"
          style={{ width: progressPct + "%", background: "linear-gradient(90deg,#046307,#6B3FA0)" }} />
      </div>
      <div className="cycle-info">
        {cycleCorrect}/75 correct · {Math.max(0, 5 - cycleMisses)} misses remaining this cycle
      </div>

      <div className={`mcq-card${shaking ? " shake" : ""}`}>
        <div className="mcq-band" style={{ background: bandColor }}>
          <span className="mcq-band-text">{current.topic}</span>
        </div>
        <div className="mcq-body">
          <span className="mcq-q-label">Question {totalAnswered + 1}</span>
          <p className="mcq-question">{current.q}</p>
          <div className="mcq-choices">
            {current.choices.map((choice, ci) => {
              let cls = "mcq-choice";
              if (selected !== null) {
                cls += " disabled";
                if (choice === current.correct) cls += " correct";
                else if (choice === selected && !isCorrect) cls += " wrong";
              }
              return (
                <button key={ci} className={cls} onClick={() => handleChoice(choice)}>
                  <span className="choice-letter">{LETTERS[ci]}</span>
                  <span>{choice}</span>
                </button>
              );
            })}
          </div>
        </div>
        {selected !== null && isCorrect && (
          <div style={{ background: "#fffdf5", padding: "0 16px 12px" }}>
            <button className="explain-next-correct" onClick={handleNext}>
              Next Question →
            </button>
          </div>
        )}
        <div className="mcq-footer">
          <span className="mcq-footer-text">{APP_SUBTITLE}</span>
        </div>
      </div>

      {selected !== null && !isCorrect && (
        <ExplanationPanel
          question={current}
          chosen={selected}
          onNext={handleNext}
        />
      )}
    </div>
  );
}

export default function App() {
  const [tab,        setTab]     = useState("flashcards");
  const [flashcards] = useState(buildFlashcards);
  const [questions]  = useState(buildMCQs);

  return (
    <>
      <style>{STYLES}</style>
      <div className="app-wrap">
        <header className="header">
          <span className="header-title">{APP_TITLE} · A+ 220-1201</span>
          <nav className="nav-tabs">
            <button
              className={`nav-tab${tab === "flashcards" ? " active" : ""}`}
              onClick={() => setTab("flashcards")}>
              Flashcards
            </button>
            <button
              className={`nav-tab${tab === "mcq" ? " active" : ""}`}
              onClick={() => setTab("mcq")}>
              MCQ Test
            </button>
          </nav>
        </header>
        <main className="main-area">
          {tab === "flashcards"
            ? <FlashcardView cards={flashcards} />
            : <MCQView questions={questions} />}
        </main>
      </div>
    </>
  );
}
