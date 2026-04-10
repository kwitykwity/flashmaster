// ============================================================
//  APP.JSX — DO NOT EDIT
//  Pure UI. Swap subjects by editing data.js only.
// ============================================================

import { useState, useEffect } from "react";
import {
  JEWEL_TONES, shuffle,
  buildFlashcards, buildMCQs,
  APP_TITLE, APP_SUBTITLE,
} from "./engine.js";

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

  .header { width: 100%; padding: 18px 24px 12px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #1a1a1a; }
  .header-title { font-family: 'Abril Fatface', serif; font-size: 1.3rem; background: linear-gradient(90deg, #9B111E, #6B3FA0, #0F52BA); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; letter-spacing: 0.04em; }
  .nav-tabs { display: flex; gap: 8px; }
  .nav-tab { font-family: 'Arvo', serif; font-size: 0.82rem; padding: 6px 16px; border-radius: 20px; border: 1.5px solid #333; background: transparent; color: #888; cursor: pointer; transition: all 0.2s; letter-spacing: 0.05em; }
  .nav-tab.active { border-color: #6B3FA0; color: #c89ef0; background: #1a0d2e; }
  .nav-tab:hover:not(.active) { border-color: #555; color: #ccc; }

  .main-area { flex: 1; display: flex; align-items: center; justify-content: center; width: 100%; padding: 24px 16px; min-height: calc(100vh - 120px); }

  /* API SCREEN */
  .api-screen { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 24px; min-height: 70vh; width: 100%; max-width: 480px; padding: 32px 20px; }
  .api-gem { font-size: 3.5rem; animation: pulse-gem 2s ease-in-out infinite; filter: drop-shadow(0 0 18px #6B3FA0); }
  @keyframes pulse-gem { 0%,100%{transform:scale(1);filter:drop-shadow(0 0 18px #6B3FA0)} 50%{transform:scale(1.08);filter:drop-shadow(0 0 30px #9B111E)} }
  .api-title { font-family: 'Abril Fatface', serif; font-size: 1.8rem; text-align: center; color: #e8d5f5; letter-spacing: 0.04em; }
  .api-subtitle { font-family: 'Arvo', serif; font-size: 0.9rem; color: #888; text-align: center; line-height: 1.7; }
  .api-input { width: 100%; padding: 14px 18px; background: #0d0d0d; border: 1.5px solid #3a2060; border-radius: 10px; color: #e8d5f5; font-family: 'Arvo', serif; font-size: 0.95rem; outline: none; transition: border-color 0.2s; letter-spacing: 0.03em; }
  .api-input:focus { border-color: #6B3FA0; }
  .api-input::placeholder { color: #444; }
  .api-hint { font-size: 0.78rem; color: #555; text-align: center; margin-top: 4px; }
  .api-error { color: #ff6b6b; font-size: 0.82rem; text-align: center; }
  .api-link { font-family: 'Arvo', serif; font-size: 0.8rem; text-decoration: none; padding: 6px 14px; border-radius: 16px; letter-spacing: 0.04em; transition: opacity 0.2s; }
  .api-link:hover { opacity: 0.8; }

  /* FLASHCARD */
  .card-scene { perspective: 1200px; width: min(360px, calc(100vw - 64px)); height: min(216px, calc((100vw - 64px) * 0.6)); }
  @media (max-width: 480px) { .card-scene { width: calc(100vw - 6px); height: calc((100vw - 6px) * 0.6); } }
  .card-inner { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 0.7s cubic-bezier(0.4,0.2,0.2,1); cursor: pointer; }
  .card-inner.flipped { transform: rotateX(-180deg); }
  .card-face { position: absolute; inset: 0; border-radius: 12px; backface-visibility: hidden; -webkit-backface-visibility: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; gap: 8px; box-shadow: 0 8px 40px rgba(0,0,0,0.7); }
  .card-back { transform: rotateX(180deg); background: #fff; border-width: 3px; border-style: solid; }
  .card-label { font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; font-family: 'Arvo', serif; }
  .card-front .card-label { color: rgba(255,255,255,0.75); }
  .card-back .card-label { opacity: 0.55; }
  .card-main { font-family: 'Abril Fatface', serif; font-size: clamp(1.6rem,5vw,2.4rem); text-align: center; line-height: 1.1; }
  .card-front .card-main { color: #fff; }
  .card-back .card-main { color: #1a1a1a; font-size: clamp(1.1rem,3.5vw,1.5rem); }
  .card-desc { font-family: 'Arvo', serif; font-size: clamp(0.72rem,2vw,0.88rem); text-align: center; line-height: 1.5; color: #333; margin-top: 4px; }
  .card-type-badge { position: absolute; bottom: 10px; right: 14px; font-size: 0.65rem; font-family: 'Arvo', serif; font-weight: 700; padding: 2px 8px; border-radius: 10px; letter-spacing: 0.08em; }
  .card-hint { font-size: 0.7rem; color: rgba(255,255,255,0.5); margin-top: 8px; letter-spacing: 0.08em; font-family: 'Arvo', serif; animation: blink-hint 2.5s ease-in-out infinite; }
  @keyframes blink-hint { 0%,100%{opacity:0.5} 50%{opacity:0.2} }
  .fc-nav { display: flex; align-items: center; gap: 20px; margin-top: 24px; }
  .fc-btn { background: transparent; border: 1.5px solid #333; color: #aaa; font-family: 'Arvo', serif; font-size: 0.85rem; padding: 8px 20px; border-radius: 20px; cursor: pointer; transition: all 0.2s; letter-spacing: 0.04em; }
  .fc-btn:hover { border-color: #6B3FA0; color: #c89ef0; }
  .fc-counter { font-family: 'Arvo', serif; font-size: 0.82rem; color: #555; }

  /* MCQ */
  .mcq-outer { display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%; }
  .mcq-card { width: min(360px, calc(100vw - 64px)); min-height: min(288px, calc((100vw - 64px) * 0.8)); border-radius: 8px; overflow: hidden; box-shadow: 0 10px 50px rgba(0,0,0,0.8); display: flex; flex-direction: column; position: relative; animation: card-enter 0.4s cubic-bezier(0.34,1.56,0.64,1); }
  @media (max-width: 480px) { .mcq-card { width: calc(100vw - 6px); } }
  @keyframes card-enter { from{transform:translateY(30px) scale(0.95);opacity:0} to{transform:translateY(0) scale(1);opacity:1} }
  .mcq-card.shake { animation: shake 0.5s cubic-bezier(0.36,0.07,0.19,0.97); }
  @keyframes shake { 10%,90%{transform:translateX(-3px)} 20%,80%{transform:translateX(5px)} 30%,50%,70%{transform:translateX(-6px)} 40%,60%{transform:translateX(6px)} 100%{transform:translateX(0)} }
  .mcq-band { height: 52px; display: flex; align-items: center; justify-content: center; padding: 0 16px; }
  .mcq-band-text { font-family: 'Abril Fatface', serif; font-size: 1.15rem; color: #fff; text-align: center; letter-spacing: 0.06em; text-shadow: 0 1px 4px rgba(0,0,0,0.4); }
  .mcq-body { background: #fffdf5; flex: 1; padding: 16px 18px 12px; display: flex; flex-direction: column; gap: 10px; }
  .mcq-q-label { font-family: 'Arvo', serif; font-size: 0.65rem; letter-spacing: 0.15em; color: #888; text-transform: uppercase; }
  .mcq-question { font-family: 'Arvo', serif; font-size: clamp(0.82rem,2.5vw,0.95rem); color: #1a1a1a; line-height: 1.5; min-height: 48px; }
  .mcq-choices { display: flex; flex-direction: column; gap: 6px; margin-top: 4px; }
  .mcq-choice { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 6px; border: 1.5px solid #ddd; background: #fff; cursor: pointer; transition: all 0.15s; font-family: 'Arvo', serif; font-size: clamp(0.75rem,2.2vw,0.85rem); color: #1a1a1a; text-align: left; }
  .mcq-choice:hover:not(.disabled) { border-color: #aaa; background: #f9f7ee; }
  .mcq-choice.correct { border-color: #046307; background: #d4edda; color: #046307; }
  .mcq-choice.wrong { border-color: #9B111E; background: #f8d7da; color: #9B111E; }
  .mcq-choice.disabled { cursor: default; }
  .choice-letter { font-family: 'Abril Fatface', serif; font-size: 0.9rem; min-width: 20px; text-align: center; opacity: 0.7; }
  .mcq-footer { background: #fffdf5; padding: 6px 18px 12px; display: flex; justify-content: flex-end; }
  .mcq-footer-text { font-family: 'Arvo', serif; font-size: 0.68rem; color: #aaa; font-style: italic; }

  /* COUNTERS */
  .counters { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-top: 4px; }
  .counter-gem { display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 8px 16px; border-radius: 10px; min-width: 72px; border: 1.5px solid; }
  .counter-num { font-family: 'Abril Fatface', serif; font-size: 1.4rem; line-height: 1; }
  .counter-label { font-family: 'Arvo', serif; font-size: 0.62rem; letter-spacing: 0.12em; text-transform: uppercase; opacity: 0.85; }

  /* SPARKLE */
  .sparkle-container { position: fixed; pointer-events: none; inset: 0; z-index: 9999; }
  .sparkle { position: absolute; width: 8px; height: 8px; border-radius: 50%; animation: sparkle-fly 0.8s ease-out forwards; }
  @keyframes sparkle-fly { 0%{transform:translate(0,0) scale(1);opacity:1} 100%{transform:translate(var(--tx),var(--ty)) scale(0);opacity:0} }

  .progress-bar-wrap { width: min(360px, calc(100vw - 64px)); height: 4px; background: #111; border-radius: 2px; overflow: hidden; }
  .progress-bar-fill { height: 100%; border-radius: 2px; transition: width 0.4s ease; }

  .shuffle-toast { position: fixed; top: 80px; left: 50%; transform: translateX(-50%); background: #1a0d2e; border: 1.5px solid #6B3FA0; color: #c89ef0; padding: 12px 28px; border-radius: 30px; font-family: 'Abril Fatface', serif; font-size: 1rem; letter-spacing: 0.05em; z-index: 1000; animation: toast-in 0.4s cubic-bezier(0.34,1.56,0.64,1); box-shadow: 0 0 30px rgba(107,63,160,0.4); }
  @keyframes toast-in { from{transform:translateX(-50%) translateY(-20px);opacity:0} to{transform:translateX(-50%) translateY(0);opacity:1} }
`;

const LETTERS = ["A", "B", "C", "D"];

// ── Sparkles ─────────────────────────────────────────────────
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
        <div key={s.id} className="sparkle" style={{ left: s.x, top: s.y, background: s.color, "--tx": s.tx, "--ty": s.ty }} />
      ))}
    </div>
  );
}

// ── Flashcard View ────────────────────────────────────────────
function FlashcardView({ cards }) {
  const [idx, setIdx]       = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card  = cards[idx];
  const color = card.color;

  const go = (dir) => {
    setFlipped(false);
    setTimeout(() => setIdx(i => (i + dir + cards.length) % cards.length), 200);
  };

  const backParts = card.back.split("\n");

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
            <span className="card-main" style={{ color: "#1a1a1a" }}>{backParts[0]}</span>
            {backParts[1] && <span className="card-desc">{backParts[1]}</span>}
            {backParts[2] && (
              <span className="card-type-badge" style={{ background: color.light || "#eee", color: color.front }}>
                {backParts[2].replace(/[\[\]]/g, "")}
              </span>
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

// ── MCQ View ──────────────────────────────────────────────────
function MCQView({ questions: initialQs }) {
  const [queue, setQueue]               = useState(() => shuffle([...initialQs]));
  const [pos, setPos]                   = useState(0);
  const [selected, setSelected]         = useState(null);
  const [shaking, setShaking]           = useState(false);
  const [sparkTrigger, setSparkTrigger] = useState(0);
  const [cycleCorrect, setCycleCorrect] = useState(0);
  const [cycleMisses, setCycleMisses]   = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [showToast, setShowToast]       = useState(false);
  const [toastMsg, setToastMsg]         = useState("");

  const current   = queue[pos] || queue[0];
  const colorIdx  = pos % JEWEL_TONES.length;
  const bandColor = JEWEL_TONES[colorIdx].front;

  const toast = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2800);
  };

  const triggerShuffle = () => {
    toast("✦ Deck Shuffled — New Cycle Begins! ✦");
    setQueue(shuffle([...initialQs]));
    setPos(0);
    setSelected(null);
    setCycleCorrect(0);
    setCycleMisses(0);
  };

  const handleChoice = (choice) => {
    if (selected !== null) return;
    setSelected(choice);
    const isCorrect = choice === current.correct;
    setTotalAnswered(t => t + 1);
    setTotalCorrect(t => t + (isCorrect ? 1 : 0));

    let newCC = cycleCorrect;
    let newCM = cycleMisses;

    if (isCorrect) {
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

    // Cycle reset: 6th miss fires immediately
    if (newCM >= 6) {
      setTimeout(() => {
        toast("6 misses — cycle resets. Keep going!");
        setCycleCorrect(0);
        setCycleMisses(0);
      }, 900);
    }

    // Shuffle trigger: 75 correct with ≤5 misses in this cycle
    if (newCC >= 75 && newCM <= 5) {
      setTimeout(triggerShuffle, 1000);
      return;
    }

    setTimeout(() => {
      setSelected(null);
      const newQueue = [...queue];
      if (isCorrect) {
        newQueue.splice(Math.min(pos + 21, newQueue.length), 0, { ...current });
      } else {
        newQueue.splice(Math.min(pos + 1 + Math.floor(Math.random() * 10), newQueue.length), 0, { ...current });
      }
      setQueue(newQueue);
      setPos(p => p + 1);
    }, 1100);
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
          <span className="counter-num">{pos + 1}</span>
          <span className="counter-label">Question</span>
        </div>
      </div>

      <div className="progress-bar-wrap">
        <div className="progress-bar-fill" style={{ width: progressPct + "%", background: "linear-gradient(90deg,#046307,#6B3FA0)" }} />
      </div>
      <div style={{ fontSize: "0.68rem", color: "#555", fontFamily: "Arvo,serif", marginTop: -8 }}>
        {cycleCorrect}/75 correct · {Math.max(0, 5 - cycleMisses)} misses remaining this cycle
      </div>

      <div className={`mcq-card${shaking ? " shake" : ""}`}>
        <div className="mcq-band" style={{ background: bandColor }}>
          <span className="mcq-band-text">{current.topic}</span>
        </div>
        <div className="mcq-body">
          <span className="mcq-q-label">Question {pos + 1}</span>
          <p className="mcq-question">{current.q}</p>
          <div className="mcq-choices">
            {current.choices.map((choice, ci) => {
              let cls = "mcq-choice";
              if (selected !== null) {
                cls += " disabled";
                if (choice === current.correct) cls += " correct";
                else if (choice === selected) cls += " wrong";
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
        <div className="mcq-footer">
          <span className="mcq-footer-text">{APP_SUBTITLE}</span>
        </div>
      </div>
    </div>
  );
}

// ── API Key Screen ────────────────────────────────────────────
function APIScreen({ onSubmit }) {
  const [key, setKey]     = useState("");
  const [error, setError] = useState("");

  const submitKey = () => {
    const trimmedKey = key.trim();
    if (!trimmedKey.startsWith("sk-ant-")) {
      setError("Key should start with sk-ant- — check and try again.");
      return;
    }
    setError("");
    onSubmit(trimmedKey);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      submitKey();
    }
  };

  return (
    <div className="api-screen">
      <div className="api-gem">💎</div>
      <h1 className="api-title">{APP_TITLE}</h1>
      <p className="api-subtitle">
        Enter your Anthropic API key to unlock<br />
        AI-powered hints and feedback.<br />
        Flashcards &amp; MCQs work without one.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
        <p className="api-hint" style={{ color: "#666", marginBottom: 0 }}>Don't have a key yet?</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <a href="https://www.anthropic.com/api" target="_blank" rel="noopener noreferrer"
            className="api-link" style={{ color: "#c89ef0", border: "1px solid #3a2060", background: "#0d0820" }}>
            ✦ Sign up for API access
          </a>
          <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener noreferrer"
            className="api-link" style={{ color: "#9fd4f7", border: "1px solid #0e2d4a", background: "#050e18" }}>
            ✦ Go to API key console
          </a>
        </div>
      </div>

      <input
        className="api-input"
        type="password"
        placeholder="sk-ant-api03-..."
        value={key}
        onChange={e => setKey(e.target.value)}
        onKeyDown={handleKey}
        autoFocus
        style={{ width: "100%" }}
      />
      <p className="api-hint">Press Enter to initialize or click Enter key · Key is never stored</p>
      {error && <p className="api-error">{error}</p>}

      <button className="fc-btn" style={{ borderColor: "#6B3FA0", color: "#c89ef0", width: "100%", maxWidth: "320px" }}
        onClick={submitKey}>
        Enter API key
      </button>

      <button className="fc-btn" style={{ borderColor: "#6B3FA0", color: "#c89ef0", marginTop: 12 }}
        onClick={() => onSubmit("NO_KEY")}>
        Continue without API key
      </button>
    </div>
  );
}

// ── Root App ──────────────────────────────────────────────────
export default function App() {
  const [apiKey,     setApiKey]     = useState(null);
  const [tab,        setTab]        = useState("flashcards");
  const [flashcards] = useState(buildFlashcards);
  const [questions]  = useState(buildMCQs);

  if (!apiKey) {
    return (
      <>
        <style>{STYLES}</style>
        <div className="app-wrap">
          <APIScreen onSubmit={setApiKey} />
        </div>
      </>
    );
  }

  return (
    <>
      <style>{STYLES}</style>
      <div className="app-wrap">
        <header className="header">
          <span className="header-title">{APP_TITLE}</span>
          <nav className="nav-tabs">
            <button className={`nav-tab${tab === "flashcards" ? " active" : ""}`} onClick={() => setTab("flashcards")}>Flashcards</button>
            <button className={`nav-tab${tab === "mcq" ? " active" : ""}`} onClick={() => setTab("mcq")}>MCQ Test</button>
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
