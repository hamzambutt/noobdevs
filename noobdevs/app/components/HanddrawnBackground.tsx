"use client";

import React from "react";

export default function HanddrawnBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-0 z-0 overflow-hidden text-slate-800"
    >
      <style>{`
        @keyframes doodleFloat1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(1deg); }
        }
        @keyframes doodleFloat2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(6px) rotate(-1.2deg); }
        }
        @keyframes doodleSteam {
          0% { opacity: 0; transform: translateY(0px) scale(0.8); }
          50% { opacity: 0.7; transform: translateY(-5px) scale(1.1); }
          100% { opacity: 0; transform: translateY(-10px) scale(1.3); }
        }
        @keyframes doodleCursor {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes doodlePulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.08); }
        }
        @keyframes musicNoteFloat {
          0% { opacity: 0; transform: translate(0, 0) rotate(-10deg) scale(0.7); }
          30% { opacity: 0.85; }
          70% { opacity: 0.75; }
          100% { opacity: 0; transform: translate(12px, -20px) rotate(15deg) scale(1.1); }
        }
        @keyframes catTailFlick {
          0%, 100% { transform: rotate(0deg); }
          30% { transform: rotate(12deg); }
          70% { transform: rotate(-8deg); }
        }
        @keyframes birdFlap {
          0%, 100% { transform: translateY(0px) scaleY(1); }
          50% { transform: translateY(-3px) scaleY(0.75); }
        }

        .doodle-f1 { animation: doodleFloat1 8s ease-in-out infinite; }
        .doodle-f2 { animation: doodleFloat2 10s ease-in-out infinite; }
        .doodle-steam-1 { animation: doodleSteam 2.5s ease-out infinite; }
        .doodle-steam-2 { animation: doodleSteam 2.8s ease-out infinite 0.7s; }
        .doodle-cursor { animation: doodleCursor 1s infinite; }
        .doodle-glow { animation: doodlePulse 4s ease-in-out infinite; }
        .doodle-note-1 { animation: musicNoteFloat 3s ease-out infinite; }
        .doodle-note-2 { animation: musicNoteFloat 3.4s ease-out infinite 1.2s; }
        .doodle-tail { transform-origin: 30px 40px; animation: catTailFlick 3s ease-in-out infinite; }
        .doodle-bird { animation: birdFlap 2.2s ease-in-out infinite; }
      `}</style>

      {/* ══════════════════════════════════════════════════════════════════════
          SCATTERED MINI DOODLES & CONSTELLATIONS (ACROSS ENTIRE PAGE HEIGHT)
          (Sparkles ✨, stars ✦, paw prints 🐾, notes ♪, code { }, coffee, cats)
      ══════════════════════════════════════════════════════════════════════ */}
      
      {/* Mini Constellation 1 (Top / Hero Gutter) */}
      <div className="absolute left-[18%] top-[120px] opacity-[0.085] hidden lg:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M 30 10 L 30 25 M 22.5 17.5 L 37.5 17.5" stroke="#ef4444" strokeWidth="1.6" />
          <circle cx="15" cy="40" r="1.5" fill="currentColor" />
          <circle cx="45" cy="35" r="1.5" fill="#ef4444" />
          <text x="20" y="45" fontSize="10" fill="currentColor" stroke="none" fontFamily="monospace">{`{ }`}</text>
        </svg>
      </div>

      <div className="absolute right-[16%] top-[160px] opacity-[0.085] hidden lg:block">
        <svg width="70" height="50" viewBox="0 0 70 50" fill="none" stroke="currentColor" strokeWidth="1.4">
          <text x="10" y="24" fontSize="13" fill="#ef4444" stroke="none" fontFamily="monospace">&lt;/&gt;</text>
          <path d="M 45 15 Q 52 10 58 15 Q 64 10 70 15" strokeWidth="1.3" />
          <circle cx="50" cy="35" r="1.2" fill="currentColor" />
        </svg>
      </div>

      {/* Mini Constellation 2 (Hero to Marquee) */}
      <div className="absolute left-[12%] top-[520px] opacity-[0.085] hidden md:block">
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none" stroke="currentColor" strokeWidth="1.4">
          {/* Paw prints */}
          <ellipse cx="20" cy="30" rx="3" ry="4" fill="currentColor" />
          <circle cx="16" cy="22" r="1.2" fill="currentColor" />
          <circle cx="20" cy="20" r="1.2" fill="currentColor" />
          <circle cx="24" cy="22" r="1.2" fill="currentColor" />
          <ellipse cx="36" cy="20" rx="3" ry="4" fill="#ef4444" stroke="#ef4444" />
          <circle cx="32" cy="12" r="1.2" fill="#ef4444" />
          <circle cx="36" cy="10" r="1.2" fill="#ef4444" />
          <circle cx="40" cy="12" r="1.2" fill="#ef4444" />
          <text x="52" y="32" fontSize="11" fill="#ef4444" stroke="none" fontFamily="sans-serif">✦</text>
        </svg>
      </div>

      <div className="absolute right-[14%] top-[550px] opacity-[0.085] hidden md:block">
        <svg width="70" height="50" viewBox="0 0 70 50" fill="none" stroke="currentColor" strokeWidth="1.4">
          <text x="10" y="22" fontSize="14" fill="#ef4444" stroke="none">♪</text>
          <text x="28" y="36" fontSize="12" fill="currentColor" stroke="none">♫</text>
          <path d="M 45 20 L 55 20 M 50 15 L 50 25" stroke="#ef4444" strokeWidth="1.3" />
        </svg>
      </div>

      {/* Mini Constellation 3 (About Upper Margins) */}
      <div className="absolute left-[16%] top-[880px] opacity-[0.085] hidden lg:block">
        <svg width="70" height="50" viewBox="0 0 70 50" fill="none" stroke="currentColor" strokeWidth="1.3">
          <circle cx="20" cy="25" r="12" strokeDasharray="2 2" />
          <circle cx="20" cy="25" r="3" fill="#ef4444" />
          <text x="40" y="28" fontSize="11" fill="#ef4444" stroke="none" fontFamily="monospace">=&gt;</text>
        </svg>
      </div>

      <div className="absolute right-[15%] top-[920px] opacity-[0.085] hidden lg:block">
        <svg width="80" height="50" viewBox="0 0 80 50" fill="none" stroke="currentColor" strokeWidth="1.3">
          <text x="10" y="24" fontSize="10" fontWeight="bold" fill="currentColor" stroke="none" fontFamily="monospace">async</text>
          <path d="M 50 15 Q 58 10 65 15" stroke="#ef4444" strokeWidth="1.5" />
          <circle cx="68" cy="30" r="1.5" fill="#ef4444" />
        </svg>
      </div>

      {/* Mini Constellation 4 (About Lower Margins) */}
      <div className="absolute left-[14%] top-[1450px] opacity-[0.085] hidden lg:block">
        <svg width="70" height="60" viewBox="0 0 70 60" fill="none" stroke="currentColor" strokeWidth="1.3">
          {/* Coffee bean */}
          <ellipse cx="25" cy="25" rx="5" ry="7" transform="rotate(30 25 25)" fill="currentColor" fillOpacity="0.1" />
          <path d="M 23 20 Q 26 25 24 30" strokeWidth="1" />
          <text x="42" y="32" fontSize="14" fill="#ef4444" stroke="none">✨</text>
        </svg>
      </div>

      <div className="absolute right-[18%] top-[1500px] opacity-[0.085] hidden lg:block">
        <svg width="60" height="50" viewBox="0 0 60 50" fill="none" stroke="currentColor" strokeWidth="1.3">
          <path d="M 15 20 Q 22 14 30 20 Q 38 14 45 20" strokeWidth="1.6" stroke="#ef4444" />
          <text x="25" y="40" fontSize="10" fill="currentColor" stroke="none" fontFamily="monospace">0101</text>
        </svg>
      </div>

      {/* Mini Constellation 5 (Capabilities Margins) */}
      <div className="absolute left-[15%] top-[2150px] opacity-[0.085] hidden lg:block">
        <svg width="70" height="50" viewBox="0 0 70 50" fill="none" stroke="currentColor" strokeWidth="1.3">
          <text x="10" y="24" fontSize="14" fill="#ef4444" stroke="none">✦</text>
          <rect x="35" y="14" width="22" height="16" rx="2" strokeDasharray="2 2" />
          <text x="41" y="26" fontSize="8" fill="currentColor" stroke="none">npm</text>
        </svg>
      </div>

      <div className="absolute right-[14%] top-[2200px] opacity-[0.085] hidden lg:block">
        <svg width="80" height="50" viewBox="0 0 80 50" fill="none" stroke="currentColor" strokeWidth="1.3">
          {/* Cat face outline */}
          <circle cx="30" cy="25" r="10" fill="#fff" />
          <polygon points="22,17 24,10 28,16" fill="#ef4444" stroke="#ef4444" strokeWidth="1" />
          <polygon points="32,16 36,10 38,17" fill="#ef4444" stroke="#ef4444" strokeWidth="1" />
          <circle cx="27" cy="24" r="1" fill="currentColor" />
          <circle cx="33" cy="24" r="1" fill="currentColor" />
          <text x="50" y="28" fontSize="12" fill="#ef4444" stroke="none">♪</text>
        </svg>
      </div>

      {/* Mini Constellation 6 (Projects Margins) */}
      <div className="absolute left-[16%] top-[2950px] opacity-[0.085] hidden lg:block">
        <svg width="70" height="50" viewBox="0 0 70 50" fill="none" stroke="currentColor" strokeWidth="1.3">
          <text x="10" y="25" fontSize="12" fill="#ef4444" stroke="none" fontFamily="monospace">git-push</text>
          <circle cx="58" cy="22" r="2" fill="#22c55e" />
        </svg>
      </div>

      <div className="absolute right-[15%] top-[3000px] opacity-[0.085] hidden lg:block">
        <svg width="70" height="50" viewBox="0 0 70 50" fill="none" stroke="currentColor" strokeWidth="1.3">
          <path d="M 15 25 L 25 15 L 35 25 L 25 35 Z" stroke="#ef4444" strokeWidth="1.4" />
          <circle cx="25" cy="25" r="2" fill="#ef4444" />
          <text x="45" y="28" fontSize="13" fill="currentColor" stroke="none">✨</text>
        </svg>
      </div>

      {/* Mini Constellation 7 (Team Margins) */}
      <div className="absolute left-[14%] top-[3750px] opacity-[0.085] hidden lg:block">
        <svg width="70" height="50" viewBox="0 0 70 50" fill="none" stroke="currentColor" strokeWidth="1.3">
          <ellipse cx="25" cy="25" rx="8" ry="12" stroke="#ef4444" strokeWidth="1.4" strokeDasharray="2 2" />
          <text x="42" y="28" fontSize="12" fill="currentColor" stroke="none">♫</text>
        </svg>
      </div>

      <div className="absolute right-[16%] top-[3800px] opacity-[0.085] hidden lg:block">
        <svg width="70" height="50" viewBox="0 0 70 50" fill="none" stroke="currentColor" strokeWidth="1.3">
          <text x="10" y="26" fontSize="12" fontWeight="bold" fill="#ef4444" stroke="none" fontFamily="monospace">_init()</text>
          <circle cx="56" cy="22" r="1.5" fill="#ef4444" />
        </svg>
      </div>

      {/* Mini Constellation 8 (Contact & Footer Gutters) */}
      <div className="absolute left-[15%] top-[4550px] opacity-[0.085] hidden lg:block">
        <svg width="70" height="50" viewBox="0 0 70 50" fill="none" stroke="currentColor" strokeWidth="1.3">
          <text x="10" y="24" fontSize="15" fill="#ef4444" stroke="none">✦</text>
          <path d="M 35 18 Q 45 12 55 18" strokeWidth="1.4" />
          <circle cx="45" cy="32" r="1.5" fill="#ef4444" />
        </svg>
      </div>

      <div className="absolute right-[16%] top-[4600px] opacity-[0.085] hidden lg:block">
        <svg width="70" height="50" viewBox="0 0 70 50" fill="none" stroke="currentColor" strokeWidth="1.3">
          <ellipse cx="25" cy="22" rx="3" ry="4" fill="#ef4444" stroke="#ef4444" />
          <circle cx="21" cy="14" r="1.2" fill="#ef4444" />
          <circle cx="25" cy="12" r="1.2" fill="#ef4444" />
          <circle cx="29" cy="14" r="1.2" fill="#ef4444" />
          <text x="42" y="26" fontSize="12" fill="currentColor" stroke="none">♪</text>
        </svg>
      </div>


      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO & TOP REGION (y: 24px – 500px)
      ══════════════════════════════════════════════════════════════════════ */}
      
      {/* Hero Left: Desk with Monitor, Sleeping Cat on Top, Coffee Steam & Ladder Stickman */}
      <div className="absolute left-1 xl:left-6 2xl:left-12 top-24 w-72 h-88 opacity-[0.085] hover:opacity-[0.2] transition-opacity duration-500 hidden lg:block doodle-f1">
        <svg viewBox="0 0 220 260" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* Main Monitor */}
          <rect x="52" y="70" width="76" height="50" rx="3" fill="#fff" />
          <rect x="56" y="74" width="68" height="42" rx="1.5" strokeDasharray="2 2" opacity="0.5" />
          <path d="M 74 90 L 66 95 L 74 100" strokeWidth="1.9" stroke="#ef4444" />
          <path d="M 80 88 L 76 102" strokeWidth="1.6" />
          <path d="M 82 90 L 90 95 L 82 100" strokeWidth="1.9" stroke="#ef4444" />
          <line x1="62" y1="108" x2="84" y2="108" strokeWidth="1.4" />
          <path d="M 90 120 L 90 128 M 78 128 L 102 128" strokeWidth="2" />

          {/* 🐱 SLEEPING CAT CURLED ON TOP OF MONITOR */}
          <g transform="translate(68, 52)">
            <path d="M 12 18 C 12 8, 38 8, 38 18 C 38 24, 30 24, 12 18 Z" fill="#fff" strokeWidth="1.6" />
            <ellipse cx="10" cy="16" rx="6" ry="5.5" fill="#fff" strokeWidth="1.5" />
            <polygon points="6,12 8,7 11,11" fill="currentColor" fillOpacity="0.15" strokeWidth="1.2" />
            <polygon points="11,11 14,7 16,12" fill="currentColor" fillOpacity="0.15" strokeWidth="1.2" />
            <path d="M 7 16 Q 9 18 11 16" strokeWidth="1.1" />
            <path d="M 11 16 Q 13 18 15 16" strokeWidth="1.1" />
            <line x1="4" y1="17" x2="0" y2="16" strokeWidth="0.9" />
            <line x1="4" y1="19" x2="1" y2="20" strokeWidth="0.9" />
            <path d="M 38 18 Q 44 24 42 32 Q 40 36 43 38" strokeWidth="1.6" stroke="#ef4444" />
            <text x="26" y="6" fontSize="8" fontWeight="bold" fill="#ef4444" stroke="none" fontFamily="sans-serif">z Z</text>
          </g>

          {/* Desk Lamp */}
          <path d="M 22 126 C 22 104, 32 72, 45 66 L 56 76" strokeWidth="1.6" />
          <path d="M 52 62 L 68 76 L 56 86 Z" fill="#fff" />
          <line x1="20" y1="126" x2="28" y2="126" strokeWidth="2.5" />

          {/* Keyboard & Mouse */}
          <rect x="68" y="132" width="44" height="7" rx="1.5" />
          <ellipse cx="124" cy="135" rx="3.5" ry="4.5" />

          {/* Desk Surface & Legs */}
          <line x1="12" y1="140" x2="180" y2="140" strokeWidth="2.8" />
          <line x1="24" y1="140" x2="24" y2="210" strokeWidth="2.2" />
          <line x1="168" y1="140" x2="168" y2="210" strokeWidth="2.2" />

          {/* Coffee Mug with Steam */}
          <rect x="34" y="130" width="9" height="10" rx="1.5" fill="#fff" />
          <path d="M 43 133 C 46 133, 46 137, 43 137" />
          <path d="M 37 127 Q 39 122 37 117" stroke="#ef4444" strokeWidth="1.2" className="doodle-steam-1" />
          <path d="M 41 126 Q 39 121 41 116" stroke="#ef4444" strokeWidth="1.2" className="doodle-steam-2" />

          {/* Giant Curly Brace with Tiny Stickman Climber */}
          <g transform="translate(14, 142)">
            <path d="M 16 5 C 6 5, 6 25, -2 30 C 6 35, 6 55, 16 55" strokeWidth="3" stroke="#ef4444" opacity="0.8" fill="none" />
            <path d="M -8 10 L -4 60 M -2 10 L 2 60" strokeWidth="1.2" />
            <line x1="-7" y1="20" x2="-1" y2="20" />
            <line x1="-6" y1="30" x2="0" y2="30" />
            <line x1="-5" y1="40" x2="1" y2="40" />
            <circle cx="-3" cy="22" r="3" fill="#fff" />
            <line x1="-3" y1="25" x2="-3" y2="35" strokeWidth="1.4" />
            <path d="M -3 28 L -7 24 M -3 28 L 1 24" strokeWidth="1.2" />
            <path d="M -3 35 L -6 42 M -3 35 L 0 42" strokeWidth="1.2" />
          </g>
        </svg>
      </div>

      {/* Hero Right: Soaring Seagulls, Cloud Server, CD/Disc with Shine & Music Notes */}
      <div className="absolute right-1 xl:right-6 2xl:right-12 top-20 w-72 h-96 opacity-[0.085] hover:opacity-[0.2] transition-opacity duration-500 hidden lg:block doodle-f2">
        <svg viewBox="0 0 230 280" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* 🕊️ FLYING SEAGULLS IN SKY */}
          <g className="doodle-bird">
            <path d="M 30 20 Q 42 10 50 18 Q 58 10 70 20" strokeWidth="2" stroke="#ef4444" />
            <path d="M 75 32 Q 83 25 90 31 Q 97 25 105 32" strokeWidth="1.7" />
            <path d="M 55 42 Q 60 38 65 42 Q 70 38 75 42" strokeWidth="1.3" opacity="0.7" />
          </g>

          {/* Hanging Idea Lightbulb */}
          <line x1="175" y1="0" x2="175" y2="28" strokeWidth="1.2" />
          <path d="M 167 28 C 160 33, 160 43, 167 50 C 170 53, 171 56, 171 60 L 179 60 C 179 56, 180 53, 183 50 C 190 43, 190 33, 183 28 Z" fill="#fff" />
          <path d="M 173 43 L 175 36 L 177 43" stroke="#ef4444" strokeWidth="1.3" />
          <path d="M 158 30 L 152 26 M 192 30 L 198 26" stroke="#ef4444" strokeWidth="1.4" className="doodle-glow" />

          {/* 💿 RETRO CD / MUSIC DISC WITH SHINE RAYS */}
          <g transform="translate(130, 80)">
            <circle cx="35" cy="35" r="30" strokeWidth="2" fill="#fff" />
            <circle cx="35" cy="35" r="22" strokeDasharray="3 3" opacity="0.4" />
            <circle cx="35" cy="35" r="10" strokeWidth="1.5" stroke="#ef4444" />
            <circle cx="35" cy="35" r="4.5" fill="#ef4444" />
            <path d="M 18 18 L 28 28" stroke="#ef4444" strokeWidth="1.5" />
            <path d="M 42 42 L 52 52" stroke="#ef4444" strokeWidth="1.5" />
            <g className="doodle-note-1">
              <text x="68" y="24" fontSize="16" fill="#ef4444" stroke="none" fontFamily="sans-serif">♪</text>
            </g>
            <g className="doodle-note-2">
              <text x="75" y="44" fontSize="14" fill="currentColor" stroke="none" fontFamily="sans-serif">♫</text>
            </g>
          </g>

          {/* Cloud Architecture with Server */}
          <path d="M 35 75 C 25 75, 15 85, 20 95 C 10 100, 10 115, 20 122 C 20 130, 35 135, 50 135 C 65 135, 80 130, 85 120 C 95 115, 95 100, 85 92 C 85 80, 70 75, 60 75 Z" strokeWidth="1.8" fill="#fff" />
          <rect x="34" y="92" width="38" height="12" rx="2" fill="currentColor" fillOpacity="0.06" />
          <circle cx="40" cy="98" r="1.5" fill="#ef4444" />
          <circle cx="45" cy="98" r="1.5" fill="#22c55e" />
          <line x1="52" y1="98" x2="66" y2="98" strokeWidth="1.2" />
          <rect x="34" y="108" width="38" height="12" rx="2" fill="currentColor" fillOpacity="0.06" />
          <circle cx="40" cy="114" r="1.5" fill="#22c55e" />
          <circle cx="45" cy="114" r="1.5" fill="#ef4444" />

          {/* Open Laptop with Active Terminal */}
          <g transform="translate(25, 160)">
            <polygon points="15,0 95,0 90,52 20,52" strokeWidth="1.8" fill="#fff" />
            <path d="M 28 15 L 32 18 L 28 21" stroke="#ef4444" strokeWidth="1.5" />
            <line x1="36" y1="21" x2="42" y2="21" strokeWidth="1.5" className="doodle-cursor" />
            <line x1="28" y1="28" x2="68" y2="28" strokeWidth="1.2" />
            <polygon points="5,52 105,52 115,70 -5,70" strokeWidth="2" fill="#fff" />
            <rect x="44" y="58" width="22" height="8" rx="1" strokeWidth="1.2" />
          </g>
        </svg>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          2. MARQUEE & TRANSITION REGION (y: 640px – 1000px)
      ══════════════════════════════════════════════════════════════════════ */}

      {/* Marquee Left: Playful Cat Batting at Wire, Retro Cassette Tape & Floppy Disk */}
      <div className="absolute left-1 xl:left-6 2xl:left-12 top-[640px] w-72 h-88 opacity-[0.085] hover:opacity-[0.2] transition-opacity duration-500 hidden lg:block doodle-f1">
        <svg viewBox="0 0 220 240" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* 📼 RETRO AUDIO CASSETTE TAPE */}
          <g transform="translate(20, 20)">
            <rect x="0" y="0" width="70" height="46" rx="4" strokeWidth="1.8" fill="#fff" />
            <rect x="6" y="6" width="58" height="24" rx="2" strokeWidth="1.2" stroke="#ef4444" />
            <circle cx="22" cy="18" r="6" strokeWidth="1.4" />
            <circle cx="22" cy="18" r="2" fill="currentColor" />
            <circle cx="48" cy="18" r="6" strokeWidth="1.4" />
            <circle cx="48" cy="18" r="2" fill="currentColor" />
            <line x1="28" y1="18" x2="42" y2="18" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
            <polygon points="12,46 58,46 52,35 18,35" strokeWidth="1.2" />
          </g>

          {/* 🐱 PLAYFUL CAT BATTING AT WIRE */}
          <g transform="translate(80, 80)">
            <path d="M 40 -10 C 40 20, 25 35, 30 65" strokeWidth="1.4" stroke="#ef4444" strokeDasharray="2 2" />
            <circle cx="30" cy="67" r="3" fill="#ef4444" />
            <ellipse cx="65" cy="95" rx="14" ry="24" transform="rotate(-20 65 95)" fill="#fff" strokeWidth="1.8" />
            <circle cx="54" cy="65" r="9.5" fill="#fff" strokeWidth="1.6" />
            <polygon points="46,58 48,50 53,56" fill="currentColor" fillOpacity="0.15" strokeWidth="1.2" />
            <polygon points="55,56 60,50 62,58" fill="currentColor" fillOpacity="0.15" strokeWidth="1.2" />
            <circle cx="50" cy="64" r="1.2" fill="currentColor" />
            <circle cx="56" cy="64" r="1.2" fill="currentColor" />
            <path d="M 48 72 L 35 66" strokeWidth="2" strokeLinecap="round" />
            <circle cx="34" cy="65" r="2.5" fill="#ef4444" />
            <path d="M 54 75 L 38 72" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 75 110 Q 90 100 85 85 Q 82 78 86 74" strokeWidth="2" stroke="#ef4444" className="doodle-tail" />
          </g>

          {/* 💾 3.5" Floppy Disk */}
          <g transform="translate(25, 140) rotate(-10)">
            <rect x="0" y="0" width="46" height="46" rx="3" fill="#fff" strokeWidth="1.8" />
            <rect x="10" y="0" width="26" height="20" rx="1" strokeWidth="1.2" stroke="#ef4444" fill="currentColor" fillOpacity="0.08" />
            <rect x="6" y="24" width="34" height="18" rx="1" strokeWidth="1" />
            <line x1="10" y1="30" x2="30" y2="30" strokeWidth="1.2" stroke="#ef4444" />
          </g>
        </svg>
      </div>

      {/* Marquee Right: Retro iPod / Walkman with Earbuds, Vinyl Turntable & Notes */}
      <div className="absolute right-1 xl:right-6 2xl:right-12 top-[660px] w-72 h-88 opacity-[0.085] hover:opacity-[0.2] transition-opacity duration-500 hidden lg:block doodle-f2">
        <svg viewBox="0 0 220 240" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* 📱 CLASSIC IPOD WITH CLICK WHEEL */}
          <g transform="translate(110, 20)">
            <rect x="0" y="0" width="52" height="85" rx="6" strokeWidth="2" fill="#fff" />
            <rect x="6" y="6" width="40" height="30" rx="2" strokeWidth="1.2" fill="currentColor" fillOpacity="0.06" />
            <rect x="10" y="10" width="16" height="16" rx="1" fill="#ef4444" opacity="0.7" />
            <line x1="30" y1="14" x2="42" y2="14" strokeWidth="1.2" />
            <line x1="10" y1="30" x2="42" y2="30" strokeWidth="1.5" stroke="#ef4444" />
            <circle cx="26" cy="58" r="18" strokeWidth="1.6" fill="#fff" />
            <circle cx="26" cy="58" r="7" strokeWidth="1.2" fill="#ef4444" />
            <text x="23" y="46" fontSize="6" fontWeight="bold" fill="currentColor" stroke="none">MENU</text>
            <path d="M 26 0 C 26 -15, -10 -10, -20 20 C -25 40, -10 60, -30 75" strokeWidth="1.4" stroke="#ef4444" />
            <circle cx="-20" cy="20" r="3.5" fill="#ef4444" stroke="#262626" strokeWidth="1" />
            <circle cx="-30" cy="75" r="3.5" fill="#ef4444" stroke="#262626" strokeWidth="1" />
          </g>

          <g className="doodle-note-1" transform="translate(40, 40)">
            <text x="0" y="0" fontSize="20" fill="#ef4444" stroke="none" fontFamily="sans-serif">♬</text>
          </g>
          <g className="doodle-note-2" transform="translate(70, 70)">
            <text x="0" y="0" fontSize="16" fill="currentColor" stroke="none" fontFamily="sans-serif">♪</text>
          </g>

          {/* Vinyl Record */}
          <g transform="translate(20, 110)">
            <circle cx="45" cy="45" r="38" strokeWidth="2" fill="#fff" />
            <circle cx="45" cy="45" r="30" strokeDasharray="2 3" opacity="0.5" />
            <circle cx="45" cy="45" r="14" fill="#ef4444" stroke="#dc2626" strokeWidth="1.5" />
            <circle cx="45" cy="45" r="3" fill="#fff" />
            <text x="36" y="47" fontSize="5" fontWeight="bold" fill="#fff" stroke="none">NOOB</text>
          </g>
        </svg>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          3. ABOUT SECTION REGION (y: 1100px – 1800px)
      ══════════════════════════════════════════════════════════════════════ */}

      {/* Middle-Left: CPU Microchip, Potted Monstera, Chirping Bird on Branch */}
      <div className="absolute left-1 xl:left-6 2xl:left-12 top-[1150px] w-72 h-96 opacity-[0.085] hover:opacity-[0.2] transition-opacity duration-500 hidden lg:block doodle-f2">
        <svg viewBox="0 0 220 280" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <g transform="translate(45, 10)">
            <rect x="20" y="20" width="52" height="52" rx="4" strokeWidth="2" stroke="#ef4444" fill="#fff" />
            <rect x="28" y="28" width="36" height="36" rx="2" strokeWidth="1.2" fill="currentColor" fillOpacity="0.04" />
            <text x="33" y="50" fontSize="11" fontWeight="bold" fill="#ef4444" stroke="none" fontFamily="monospace">AI·ML</text>
            <path d="M 30 20 L 30 12 M 40 20 L 40 12 M 50 20 L 50 12 M 60 20 L 60 12" strokeWidth="1.5" />
            <path d="M 30 72 L 30 80 M 40 72 L 40 80 M 50 72 L 50 80 M 60 72 L 60 80" strokeWidth="1.5" />
            <path d="M 12 40 L 4 40 L 4 60 L -4 60" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="-4" cy="60" r="1.5" fill="currentColor" />
          </g>

          {/* 🐦 CHIRPING BIRD PERCHED ON A BRANCH */}
          <g transform="translate(20, 95)">
            <path d="M 10 40 Q 45 35 90 42 Q 120 40 140 45" strokeWidth="2.2" strokeLinecap="round" />
            <ellipse cx="85" cy="24" rx="4" ry="2" fill="#22c55e" stroke="#22c55e" />
            <g transform="translate(45, 12)">
              <ellipse cx="18" cy="18" rx="10" ry="8" transform="rotate(-15 18 18)" fill="#fff" strokeWidth="1.6" />
              <circle cx="26" cy="12" r="6" fill="#fff" strokeWidth="1.5" />
              <polygon points="32,11 38,13 32,15" fill="#ef4444" stroke="#ef4444" strokeWidth="1" />
              <circle cx="28" cy="11" r="1" fill="currentColor" />
              <path d="M 12 16 Q 18 12 22 20" strokeWidth="1.4" stroke="#ef4444" />
              <path d="M 40 8 Q 44 12 40 16" stroke="#ef4444" strokeWidth="1.2" />
            </g>
          </g>

          {/* Potted Monstera Plant */}
          <g transform="translate(80, 160)">
            <polygon points="25,100 45,100 50,65 20,65" strokeWidth="2" fill="currentColor" fillOpacity="0.05" />
            <line x1="18" y1="65" x2="52" y2="65" strokeWidth="2.5" />
            <path d="M 35 65 Q 20 40 10 30" strokeWidth="1.8" />
            <path d="M 10 30 Q 0 20 5 10 Q 20 15 10 30" fill="currentColor" fillOpacity="0.08" strokeWidth="1.4" />
            <path d="M 35 65 Q 40 30 50 15" strokeWidth="1.8" />
            <path d="M 50 15 Q 65 5 60 25 Q 45 25 50 15" fill="currentColor" fillOpacity="0.08" strokeWidth="1.4" />
          </g>
        </svg>
      </div>

      {/* Middle-Right: Seagulls over Cloud, Git Commit Tree & Water Watering Stickman */}
      <div className="absolute right-1 xl:right-6 2xl:right-12 top-[1180px] w-72 h-96 opacity-[0.085] hover:opacity-[0.2] transition-opacity duration-500 hidden lg:block doodle-f1">
        <svg viewBox="0 0 220 280" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <g transform="translate(25, 10)">
            <path d="M 10 20 Q 25 8 36 18 Q 48 8 62 20" strokeWidth="2.2" stroke="#ef4444" />
            <path d="M 50 30 Q 60 22 70 29 Q 80 22 90 30" strokeWidth="1.6" />
          </g>

          <g transform="translate(40, 50)">
            <line x1="30" y1="10" x2="30" y2="80" strokeWidth="2" />
            <path d="M 30 25 C 55 25, 55 55, 30 65" strokeWidth="1.8" stroke="#ef4444" />
            <circle cx="30" cy="15" r="3.5" fill="#fff" strokeWidth="2" />
            <circle cx="30" cy="40" r="3.5" fill="#fff" strokeWidth="2" />
            <circle cx="30" cy="75" r="3.5" fill="#fff" strokeWidth="2" />
            <circle cx="48" cy="40" r="3.5" fill="#ef4444" stroke="#ef4444" strokeWidth="2" />
            <text x="58" y="44" fontSize="9" fill="#ef4444" stroke="none" fontFamily="monospace">v2.0-ship</text>
          </g>

          <g transform="translate(80, 110)">
            <rect x="0" y="0" width="46" height="46" rx="2" fill="#fff" strokeWidth="1.5" />
            <circle cx="23" cy="4" r="2" fill="#ef4444" stroke="#ef4444" />
            <path d="M 8 16 L 12 20 L 20 12" stroke="#22c55e" strokeWidth="1.5" />
            <line x1="24" y1="16" x2="38" y2="16" strokeWidth="1.2" />
          </g>

          {/* Tiny Stickman watering plant */}
          <g transform="translate(40, 190)">
            <circle cx="20" cy="20" r="5" fill="#fff" strokeWidth="1.6" />
            <line x1="20" y1="25" x2="20" y2="48" strokeWidth="2" />
            <path d="M 20 32 L 35 34" strokeWidth="1.8" />
            <rect x="35" y="30" width="14" height="10" rx="2" fill="#fff" strokeWidth="1.3" />
            <path d="M 37 30 C 37 24, 47 24, 47 30" strokeWidth="1.2" />
            <path d="M 49 33 L 56 28" strokeWidth="1.4" />
            <circle cx="58" cy="33" r="1" fill="#38bdf8" />
            <circle cx="61" cy="38" r="1" fill="#38bdf8" />
            <path d="M 20 48 L 14 68 M 20 48 L 26 68" strokeWidth="2" />
            <line x1="10" y1="68" x2="16" y2="68" stroke="#ef4444" strokeWidth="2.5" />
            <line x1="24" y1="68" x2="30" y2="68" stroke="#ef4444" strokeWidth="2.5" />
            <path d="M 64 68 L 64 56 Q 58 50 64 46 Q 70 50 64 56" strokeWidth="1.5" stroke="#22c55e" fill="#fff" />
          </g>
        </svg>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          4. ABOUT TO CAPABILITIES REGION (y: 1800px – 2500px)
      ══════════════════════════════════════════════════════════════════════ */}

      {/* Left: 🐱 CAT LOAF ON BOOKSTACK & HEADPHONES STAND */}
      <div className="absolute left-1 xl:left-6 2xl:left-12 top-[1880px] w-72 h-96 opacity-[0.085] hover:opacity-[0.2] transition-opacity duration-500 hidden lg:block doodle-f1">
        <svg viewBox="0 0 220 280" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <g transform="translate(30, 80)">
            <rect x="0" y="70" width="80" height="18" rx="2" fill="#fff" strokeWidth="1.8" />
            <text x="12" y="83" fontSize="8" fontWeight="bold" fill="currentColor" stroke="none">TYPESCRIPT</text>
            <line x1="6" y1="70" x2="6" y2="88" strokeWidth="2" stroke="#ef4444" />
            <rect x="8" y="52" width="70" height="18" rx="2" fill="#fff" strokeWidth="1.8" />
            <text x="18" y="65" fontSize="8" fontWeight="bold" fill="#ef4444" stroke="none">AI AGENTS</text>
            <rect x="4" y="34" width="74" height="18" rx="2" fill="#fff" strokeWidth="1.8" />
            <text x="16" y="47" fontSize="8" fontWeight="bold" fill="currentColor" stroke="none">CLEAN CODE</text>

            {/* 🐱 LOAF CAT ON BOOKS */}
            <g transform="translate(18, 0)">
              <ellipse cx="26" cy="22" rx="20" ry="12" fill="#fff" strokeWidth="1.8" />
              <circle cx="10" cy="16" r="8" fill="#fff" strokeWidth="1.6" />
              <polygon points="5,10 7,4 11,9" fill="#ef4444" stroke="#ef4444" strokeWidth="1.2" />
              <polygon points="11,9 14,4 16,10" fill="#ef4444" stroke="#ef4444" strokeWidth="1.2" />
              <path d="M 7 16 Q 9 18 11 16" strokeWidth="1.2" />
              <path d="M 11 16 Q 13 18 15 16" strokeWidth="1.2" />
              <line x1="4" y1="16" x2="-2" y2="15" strokeWidth="0.9" />
              <path d="M 44 24 Q 48 30 38 32" strokeWidth="1.6" stroke="#ef4444" />
            </g>
          </g>

          <g transform="translate(125, 40)">
            <path d="M 30 110 L 30 20 M 15 110 L 45 110" strokeWidth="2.2" />
            <path d="M 12 30 C 12 10, 48 10, 48 30" strokeWidth="2.5" stroke="#ef4444" fill="none" />
            <rect x="8" y="26" width="8" height="16" rx="3" fill="#fff" strokeWidth="1.5" stroke="#ef4444" />
            <rect x="44" y="26" width="8" height="16" rx="3" fill="#fff" strokeWidth="1.5" stroke="#ef4444" />
          </g>
        </svg>
      </div>

      {/* Right: 📻 BOOMBOX / RETRO STEREO & SEAGULL PERCHED */}
      <div className="absolute right-1 xl:right-6 2xl:right-12 top-[1920px] w-72 h-96 opacity-[0.085] hover:opacity-[0.2] transition-opacity duration-500 hidden lg:block doodle-f2">
        <svg viewBox="0 0 220 280" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <g transform="translate(25, 40)">
            <path d="M 25 20 L 25 6 L 85 6 L 85 20" strokeWidth="2.2" fill="none" />
            <rect x="0" y="20" width="110" height="65" rx="5" fill="#fff" strokeWidth="2" />
            <circle cx="28" cy="55" r="18" strokeWidth="1.8" stroke="#ef4444" />
            <circle cx="28" cy="55" r="8" fill="currentColor" fillOpacity="0.1" strokeWidth="1.2" />
            <circle cx="82" cy="55" r="18" strokeWidth="1.8" stroke="#ef4444" />
            <circle cx="82" cy="55" r="8" fill="currentColor" fillOpacity="0.1" strokeWidth="1.2" />
            <rect x="44" y="38" width="22" height="30" rx="2" strokeWidth="1.2" fill="#fff" />
            <circle cx="50" cy="50" r="2.5" fill="currentColor" />
            <circle cx="60" cy="50" r="2.5" fill="currentColor" />
            <path d="M 115 40 Q 125 52 115 65" stroke="#ef4444" strokeWidth="1.8" />
            <path d="M 122 32 Q 136 52 122 72" stroke="#ef4444" strokeWidth="1.8" />
          </g>

          <g transform="translate(130, 140)">
            <rect x="20" y="45" width="16" height="55" rx="1" fill="#fff" strokeWidth="1.8" />
            <line x1="16" y1="45" x2="40" y2="45" strokeWidth="2.5" />
            <ellipse cx="28" cy="30" rx="14" ry="10" transform="rotate(-10 28 30)" fill="#fff" strokeWidth="1.8" />
            <circle cx="38" cy="22" r="7" fill="#fff" strokeWidth="1.6" />
            <polygon points="44,21 52,24 44,26" fill="#ef4444" stroke="#ef4444" strokeWidth="1.2" />
            <circle cx="40" cy="20" r="1.2" fill="currentColor" />
            <path d="M 18 28 Q 28 22 34 32" strokeWidth="1.6" stroke="#ef4444" />
            <line x1="24" y1="38" x2="24" y2="45" strokeWidth="1.8" stroke="#ef4444" />
            <line x1="32" y1="38" x2="32" y2="45" strokeWidth="1.8" stroke="#ef4444" />
          </g>
        </svg>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          5. CAPABILITIES & PROJECTS REGION (y: 2500px – 3800px)
      ══════════════════════════════════════════════════════════════════════ */}

      {/* Left: Workstation PC, Debugging Rubber Duck & Pizza */}
      <div className="absolute left-1 xl:left-6 2xl:left-12 top-[2600px] w-72 h-96 opacity-[0.085] hover:opacity-[0.2] transition-opacity duration-500 hidden lg:block doodle-f1">
        <svg viewBox="0 0 220 280" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="25" y="15" width="48" height="88" rx="4" strokeWidth="2" fill="#fff" />
          <circle cx="49" cy="28" r="3" stroke="#ef4444" strokeWidth="1.5" />
          <circle cx="49" cy="60" r="12" strokeDasharray="3 2" opacity="0.6" />
          <circle cx="49" cy="85" r="10" strokeDasharray="3 2" opacity="0.6" />

          {/* Rubber Duck */}
          <g transform="translate(95, 35)">
            <path d="M 12 25 C 5 25, 0 32, 0 40 C 0 48, 12 52, 28 52 C 40 52, 48 46, 48 38 C 48 32, 42 28, 36 28 C 36 20, 32 10, 24 10 C 18 10, 14 15, 14 20" strokeWidth="1.8" fill="#fff" />
            <path d="M 14 16 C 8 16, 5 18, 5 20 C 5 22, 10 22, 14 22" fill="#ef4444" stroke="#ef4444" strokeWidth="1.4" />
            <circle cx="20" cy="16" r="1.5" fill="#262626" />
            <text x="32" y="14" fontSize="15" fontWeight="bold" fill="#ef4444" stroke="none" fontFamily="sans-serif">?</text>
          </g>

          {/* Pizza Slice */}
          <g transform="translate(30, 130) rotate(-15)">
            <polygon points="10,10 60,30 25,65" strokeWidth="1.8" fill="#fff" />
            <path d="M 60 30 Q 42 48 25 65" strokeWidth="3.5" stroke="#ef4444" />
            <circle cx="28" cy="28" r="3.5" fill="#ef4444" stroke="#ef4444" strokeWidth="1" />
            <circle cx="40" cy="38" r="3.5" fill="#ef4444" stroke="#ef4444" strokeWidth="1" />
          </g>

          <g transform="translate(110, 130)">
            <path d="M 15 10 L 35 10 L 28 30 L 38 65 L 12 65 L 22 30 Z" strokeWidth="1.8" fill="#fff" />
            <line x1="20" y1="30" x2="30" y2="30" strokeWidth="2.5" stroke="#ef4444" />
            <circle cx="25" cy="38" r="1.2" fill="#ef4444" />
          </g>
        </svg>
      </div>

      {/* Right: Bonsai Tree, Tablet UI Wireframe & Database Barrels */}
      <div className="absolute right-1 xl:right-6 2xl:right-12 top-[2650px] w-72 h-96 opacity-[0.085] hover:opacity-[0.2] transition-opacity duration-500 hidden lg:block doodle-f2">
        <svg viewBox="0 0 220 280" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <g transform="translate(50, 10)">
            <path d="M 50 110 Q 55 85 45 70 Q 38 55 46 40 Q 52 28 48 18" strokeWidth="3" />
            <ellipse cx="48" cy="14" rx="22" ry="12" fill="#fff" strokeWidth="1.6" />
            <ellipse cx="74" cy="46" rx="16" ry="10" fill="#fff" strokeWidth="1.6" />
            <ellipse cx="18" cy="26" rx="15" ry="9" fill="#fff" strokeWidth="1.6" />
            <ellipse cx="50" cy="112" rx="28" ry="6" strokeWidth="2" fill="#fff" />
            <path d="M 24 112 L 28 122 L 72 122 L 76 112" strokeWidth="1.8" />
          </g>

          <g transform="translate(20, 140) rotate(8)">
            <rect x="0" y="0" width="56" height="74" rx="4" strokeWidth="2" fill="#fff" />
            <rect x="6" y="6" width="44" height="8" rx="1.5" fill="currentColor" fillOpacity="0.08" strokeWidth="1" />
            <rect x="6" y="18" width="44" height="24" rx="1.5" strokeDasharray="2 2" strokeWidth="1" />
            <rect x="6" y="46" width="20" height="6" rx="1.5" fill="#ef4444" stroke="#ef4444" strokeWidth="1" />
          </g>

          <g transform="translate(110, 150)">
            <ellipse cx="25" cy="15" rx="20" ry="6" strokeWidth="1.8" fill="#fff" />
            <path d="M 5 15 L 5 30 A 20 6 0 0 0 45 30 L 45 15" strokeWidth="1.8" />
            <path d="M 5 30 L 5 45 A 20 6 0 0 0 45 45 L 45 30" strokeWidth="1.8" />
            <path d="M 5 45 L 5 60 A 20 6 0 0 0 45 60 L 45 45" strokeWidth="1.8" />
            <circle cx="38" cy="22" r="1.5" fill="#22c55e" />
            <circle cx="38" cy="52" r="1.5" fill="#ef4444" />
          </g>
        </svg>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          6. PROJECTS TO TEAM REGION (y: 3300px – 4300px)
      ══════════════════════════════════════════════════════════════════════ */}

      {/* Left: 🐱 CAT STRETCHING & CHASING BUG */}
      <div className="absolute left-1 xl:left-6 2xl:left-12 top-[3400px] w-72 h-88 opacity-[0.085] hover:opacity-[0.2] transition-opacity duration-500 hidden lg:block doodle-f1">
        <svg viewBox="0 0 220 240" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <g transform="translate(25, 40)">
            <path d="M 20 50 L 5 50" strokeWidth="2" />
            <path d="M 20 46 L 8 46" strokeWidth="2" />
            <circle cx="26" cy="42" r="8" fill="#fff" strokeWidth="1.6" />
            <polygon points="22,35 24,28 28,34" fill="#ef4444" stroke="#ef4444" strokeWidth="1.2" />
            <polygon points="28,34 32,28 34,35" fill="#ef4444" stroke="#ef4444" strokeWidth="1.2" />
            <circle cx="23" cy="41" r="1" fill="currentColor" />
            <path d="M 32 40 Q 45 25 65 30 Q 75 35 70 50" strokeWidth="2" fill="#fff" />
            <path d="M 68 30 Q 74 10 70 5" strokeWidth="2.2" stroke="#ef4444" />
          </g>

          <g transform="translate(95, 30)">
            <ellipse cx="20" cy="20" rx="5" ry="7" fill="#ef4444" stroke="#dc2626" strokeWidth="1.4" />
            <path d="M 18 16 Q 8 8 16 4 Q 22 10 20 16" fill="currentColor" fillOpacity="0.1" strokeWidth="1.2" />
            <path d="M 22 16 Q 32 8 24 4 Q 18 10 20 16" fill="currentColor" fillOpacity="0.1" strokeWidth="1.2" />
            <path d="M 20 30 Q 10 40 25 50 Q 40 60 20 70" strokeDasharray="2 2" stroke="#ef4444" strokeWidth="1.2" />
          </g>

          <g transform="translate(40, 130)">
            <rect x="0" y="0" width="55" height="50" rx="3" fill="#fff" strokeWidth="1.8" />
            <circle cx="28" cy="25" r="18" strokeWidth="1.5" stroke="#ef4444" />
            <circle cx="28" cy="25" r="5" fill="#ef4444" />
          </g>
        </svg>
      </div>

      {/* Right: 🕊️ FLOCK OF FLYING BIRDS & DISCMAN WITH HEADPHONES */}
      <div className="absolute right-1 xl:right-6 2xl:right-12 top-[3450px] w-72 h-88 opacity-[0.085] hover:opacity-[0.2] transition-opacity duration-500 hidden lg:block doodle-f2">
        <svg viewBox="0 0 220 240" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <g transform="translate(30, 20)">
            <path d="M 10 15 Q 20 6 28 14 Q 36 6 46 15" strokeWidth="2" stroke="#ef4444" />
            <path d="M 55 24 Q 63 17 70 23 Q 77 17 85 24" strokeWidth="1.6" />
            <path d="M 35 34 Q 41 29 47 33 Q 53 29 59 34" strokeWidth="1.3" opacity="0.8" />
          </g>

          {/* 💿 DISCMAN PORTABLE CD PLAYER */}
          <g transform="translate(35, 80)">
            <circle cx="50" cy="50" r="42" strokeWidth="2" fill="#fff" />
            <circle cx="50" cy="50" r="28" strokeWidth="1.4" stroke="#ef4444" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="8" fill="#ef4444" />
            <rect x="25" y="16" width="28" height="12" rx="2" fill="currentColor" fillOpacity="0.08" strokeWidth="1" />
            <text x="29" y="24" fontSize="7" fontWeight="bold" fill="currentColor" stroke="none">TR 04</text>
            <circle cx="75" cy="22" r="4" strokeWidth="1.2" stroke="#ef4444" />
            <path d="M 8 50 C -10 50, -10 90, 20 100 C 40 105, 50 120, 40 135" strokeWidth="1.5" stroke="#ef4444" />
          </g>
        </svg>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          7. TEAM SECTION REGION (y: 4100px – 4800px)
      ══════════════════════════════════════════════════════════════════════ */}

      {/* Left: Filing Cabinet, Giant Power Cable Plug Stickman */}
      <div className="absolute left-1 xl:left-6 2xl:left-12 top-[4150px] w-72 h-96 opacity-[0.085] hover:opacity-[0.2] transition-opacity duration-500 hidden lg:block doodle-f2">
        <svg viewBox="0 0 220 280" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <g transform="translate(30, 20)">
            <rect x="0" y="0" width="50" height="75" rx="3" strokeWidth="2" fill="#fff" />
            <rect x="4" y="4" width="42" height="32" rx="1.5" strokeWidth="1.2" />
            <rect x="18" y="16" width="14" height="4" rx="1" fill="currentColor" fillOpacity="0.2" />
            <rect x="4" y="39" width="42" height="32" rx="1.5" strokeWidth="1.2" />
            <ellipse cx="25" cy="0" rx="10" ry="3" fill="#ef4444" stroke="#ef4444" strokeWidth="1.2" />
            <path d="M 25 0 Q 15 -15 25 -22 Q 35 -15 25 0" fill="currentColor" fillOpacity="0.08" strokeWidth="1.3" stroke="#22c55e" />
          </g>

          <g transform="translate(20, 130)">
            <circle cx="30" cy="40" r="5.5" fill="#fff" strokeWidth="1.6" />
            <path d="M 28 42 Q 30 40 32 42" strokeWidth="1" />
            <line x1="30" y1="46" x2="38" y2="70" strokeWidth="2.2" />
            <path d="M 34 52 L 48 50 M 34 56 L 46 54" strokeWidth="2" />
            <path d="M 38 70 L 24 88 M 38 70 L 48 88" strokeWidth="2.2" />
            <line x1="18" y1="88" x2="26" y2="88" stroke="#ef4444" strokeWidth="2.8" />
            <line x1="44" y1="88" x2="52" y2="88" stroke="#ef4444" strokeWidth="2.8" />

            <g transform="translate(48, 38)">
              <rect x="0" y="0" width="24" height="22" rx="3" fill="#fff" strokeWidth="1.8" stroke="#ef4444" />
              <rect x="24" y="3" width="10" height="3" rx="0.5" fill="currentColor" strokeWidth="1" />
              <rect x="24" y="15" width="10" height="3" rx="0.5" fill="currentColor" strokeWidth="1" />
              <path d="M 0 11 C -20 11, -30 35, -50 35" strokeWidth="3.5" stroke="#ef4444" />
            </g>
          </g>
        </svg>
      </div>

      {/* Right: Paper Plane, Cat in Cardboard Box & Coffee Beans */}
      <div className="absolute right-1 xl:right-6 2xl:right-12 top-[4200px] w-72 h-96 opacity-[0.085] hover:opacity-[0.2] transition-opacity duration-500 hidden lg:block doodle-f1">
        <svg viewBox="0 0 220 280" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <g transform="translate(20, 20)">
            <path d="M 20 80 C 80 0, 120 100, 70 50 C 40 10, 110 -10, 140 20" strokeDasharray="3 3" strokeWidth="1.4" opacity="0.7" />
            <g transform="translate(130, 10) rotate(25)">
              <polygon points="0,15 35,0 12,28" fill="#fff" strokeWidth="1.8" stroke="#ef4444" />
              <polygon points="12,28 35,0 18,22" fill="currentColor" fillOpacity="0.1" strokeWidth="1.2" />
            </g>
          </g>

          {/* 🐱 CAT IN CARDBOARD BOX */}
          <g transform="translate(60, 110)">
            <rect x="0" y="24" width="56" height="34" rx="2" fill="#fff" strokeWidth="1.8" />
            <polygon points="0,24 -8,12 12,24" fill="#fff" strokeWidth="1.4" />
            <polygon points="56,24 64,12 44,24" fill="#fff" strokeWidth="1.4" />
            <rect x="18" y="38" width="20" height="12" rx="1" stroke="#ef4444" strokeWidth="1" fill="currentColor" fillOpacity="0.05" />
            <path d="M 28 42 C 28 40, 26 40, 26 42 C 26 44, 28 46, 28 46 C 28 46, 30 44, 30 42 C 30 40, 28 40, 28 42 Z" fill="#ef4444" stroke="#ef4444" strokeWidth="0.8" />

            <ellipse cx="28" cy="20" rx="14" ry="12" fill="#fff" strokeWidth="1.6" />
            <polygon points="17,12 20,4 25,10" fill="#ef4444" stroke="#ef4444" strokeWidth="1.2" />
            <polygon points="31,10 36,4 39,12" fill="#ef4444" stroke="#ef4444" strokeWidth="1.2" />
            <circle cx="22" cy="18" r="2" fill="currentColor" />
            <circle cx="34" cy="18" r="2" fill="currentColor" />
            <ellipse cx="18" cy="24" rx="4" ry="2.5" fill="#fff" strokeWidth="1.2" />
            <ellipse cx="38" cy="24" rx="4" ry="2.5" fill="#fff" strokeWidth="1.2" />
          </g>

          <g transform="translate(60, 200)">
            <ellipse cx="20" cy="20" rx="4" ry="6" transform="rotate(30 20 20)" fill="currentColor" fillOpacity="0.08" strokeWidth="1.2" />
            <ellipse cx="36" cy="28" rx="4" ry="6" transform="rotate(-20 36 28)" fill="currentColor" fillOpacity="0.08" strokeWidth="1.2" />
            <ellipse cx="52" cy="18" rx="3.5" ry="5.5" transform="rotate(45 52 18)" fill="currentColor" fillOpacity="0.08" strokeWidth="1.2" stroke="#ef4444" />
          </g>
        </svg>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          8. CONTACT SECTION REGION (y: 4800px – 5600px) — FLANKING CONTACT CARD
      ══════════════════════════════════════════════════════════════════════ */}

      {/* Contact Card Left Flank: Desk with Rotary Phone, Cat in Basket & Letter Carrier Pigeon */}
      <div className="absolute left-1 xl:left-6 2xl:left-12 top-[4850px] w-76 h-96 opacity-[0.085] hover:opacity-[0.2] transition-opacity duration-500 hidden lg:block doodle-f1">
        <svg viewBox="0 0 230 280" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* 🕊️ Carrier Pigeon with Letter Envelope */}
          <g transform="translate(25, 20)">
            <ellipse cx="30" cy="30" rx="14" ry="10" transform="rotate(-20 30 30)" fill="#fff" strokeWidth="1.8" />
            <circle cx="42" cy="20" r="7" fill="#fff" strokeWidth="1.6" />
            <polygon points="48,19 55,21 48,23" fill="#ef4444" stroke="#ef4444" strokeWidth="1" />
            <circle cx="44" cy="18" r="1.2" fill="currentColor" />
            <path d="M 18 26 Q 30 18 36 32" strokeWidth="1.6" stroke="#ef4444" />
            <g transform="translate(48, 22) rotate(15)">
              <rect x="0" y="0" width="24" height="16" rx="1.5" fill="#fff" strokeWidth="1.3" stroke="#ef4444" />
              <path d="M 0 0 L 12 9 L 24 0" strokeWidth="1.2" stroke="#ef4444" />
            </g>
          </g>

          {/* 🐱 SLEEPY CAT IN WOVEN BASKET */}
          <g transform="translate(30, 95)">
            {/* Woven Basket */}
            <ellipse cx="45" cy="50" rx="36" ry="14" fill="#fff" strokeWidth="1.8" />
            <path d="M 12 50 C 14 70, 76 70, 78 50" strokeWidth="2" fill="#fff" />
            <path d="M 22 55 L 26 63 M 36 56 L 40 65 M 50 56 L 54 65 M 64 55 L 68 63" stroke="#ef4444" strokeWidth="1.2" />

            {/* Cat Head resting over rim */}
            <circle cx="34" cy="40" r="11" fill="#fff" strokeWidth="1.6" />
            <polygon points="25,32 28,24 33,31" fill="#ef4444" stroke="#ef4444" strokeWidth="1.2" />
            <polygon points="36,31 41,24 43,32" fill="#ef4444" stroke="#ef4444" strokeWidth="1.2" />
            <path d="M 28 40 Q 30 43 32 40" strokeWidth="1.2" />
            <path d="M 35 40 Q 37 43 39 40" strokeWidth="1.2" />
            <line x1="22" y1="41" x2="16" y2="40" strokeWidth="0.9" />
            <line x1="22" y1="43" x2="17" y2="44" strokeWidth="0.9" />
            {/* Paws hanging over rim */}
            <ellipse cx="26" cy="50" rx="3.5" ry="2.5" fill="#fff" strokeWidth="1.2" />
            <ellipse cx="42" cy="50" rx="3.5" ry="2.5" fill="#fff" strokeWidth="1.2" />
            {/* Zzz */}
            <text x="56" y="32" fontSize="9" fontWeight="bold" fill="#ef4444" stroke="none">z Z</text>
          </g>

          {/* Sticky Notes with Checkmark & Pin */}
          <g transform="translate(100, 185) rotate(-6)">
            <rect x="0" y="0" width="46" height="46" rx="2" fill="#fff" strokeWidth="1.6" />
            <circle cx="23" cy="4" r="2.2" fill="#ef4444" />
            <text x="8" y="20" fontSize="9" fontWeight="bold" fill="#ef4444" stroke="none">SAY HI!</text>
            <path d="M 8 28 L 12 32 L 20 24" stroke="#22c55e" strokeWidth="1.5" />
            <line x1="24" y1="28" x2="38" y2="28" strokeWidth="1.2" />
            <line x1="8" y1="36" x2="34" y2="36" strokeWidth="1.2" />
          </g>
        </svg>
      </div>

      {/* Contact Card Right Flank: Telescope Stickman, Cat Chasing Paper Plane & Walkman */}
      <div className="absolute right-1 xl:right-6 2xl:right-12 top-[4880px] w-76 h-96 opacity-[0.085] hover:opacity-[0.2] transition-opacity duration-500 hidden lg:block doodle-f2">
        <svg viewBox="0 0 230 280" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* 🔭 Stickman looking through Telescope */}
          <g transform="translate(40, 20)">
            {/* Tripod Stand */}
            <line x1="50" y1="60" x2="30" y2="110" strokeWidth="2" />
            <line x1="50" y1="60" x2="50" y2="110" strokeWidth="2" />
            <line x1="50" y1="60" x2="70" y2="110" strokeWidth="2" />
            {/* Telescope tube */}
            <polygon points="25,52 85,35 88,48 28,65" fill="#fff" strokeWidth="2" stroke="#ef4444" />
            <line x1="32" y1="50" x2="35" y2="63" strokeWidth="1.5" />
            <circle cx="86" cy="41" r="7" stroke="#ef4444" strokeWidth="1.5" />
            <line x1="90" y1="36" x2="98" y2="32" stroke="#ef4444" strokeWidth="1.4" />
            <line x1="92" y1="46" x2="100" y2="50" stroke="#ef4444" strokeWidth="1.4" />

            {/* Stickman peering into eyepiece */}
            <circle cx="16" cy="50" r="7" fill="#fff" strokeWidth="1.6" />
            <line x1="16" y1="57" x2="16" y2="85" strokeWidth="2" />
            <path d="M 16 66 L 26 58" strokeWidth="1.8" />
            <circle cx="26" cy="58" r="2.2" fill="#ef4444" />
            <path d="M 16 85 L 8 110 M 16 85 L 24 110" strokeWidth="2" />
            <line x1="2" y1="110" x2="10" y2="110" stroke="#ef4444" strokeWidth="2.5" />
            <line x1="22" y1="110" x2="30" y2="110" stroke="#ef4444" strokeWidth="2.5" />
          </g>

          {/* 🐱 CAT POUNCING AT FLYING PAPER PLANE */}
          <g transform="translate(30, 140)">
            {/* Paper plane looping */}
            <path d="M 40 40 Q 65 15 90 35 Q 110 55 135 25" strokeDasharray="3 3" strokeWidth="1.3" opacity="0.6" />
            <g transform="translate(130, 15) rotate(-15)">
              <polygon points="0,15 30,0 10,24" fill="#fff" strokeWidth="1.6" stroke="#ef4444" />
            </g>

            {/* Cat pouncing */}
            <g transform="translate(45, 45) rotate(-25)">
              <ellipse cx="30" cy="20" rx="20" ry="10" fill="#fff" strokeWidth="1.8" />
              <circle cx="48" cy="14" r="8" fill="#fff" strokeWidth="1.6" />
              <polygon points="44,8 48,2 51,7" fill="#ef4444" stroke="#ef4444" strokeWidth="1" />
              <polygon points="52,7 56,2 58,8" fill="#ef4444" stroke="#ef4444" strokeWidth="1" />
              <circle cx="49" cy="13" r="1.2" fill="currentColor" />
              <path d="M 52 18 L 64 12" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="64" cy="12" r="2.2" fill="#ef4444" />
              <path d="M 12 20 Q 2 24 6 12" strokeWidth="2" stroke="#ef4444" />
            </g>
          </g>

          {/* Floating Sparkles & Heart */}
          <g transform="translate(130, 190)">
            <text x="0" y="0" fontSize="16" fill="#ef4444" stroke="none">✦</text>
            <text x="25" y="20" fontSize="18" fill="#ef4444" stroke="none">♥</text>
          </g>
        </svg>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          9. FOOTER REGION (y: 5600px – bottom)
      ══════════════════════════════════════════════════════════════════════ */}

      {/* Footer Left: Seagulls gliding over calm water, envelope letters & paw prints */}
      <div className="absolute left-1 xl:left-6 2xl:left-12 top-[5550px] w-76 h-80 opacity-[0.085] hover:opacity-[0.2] transition-opacity duration-500 hidden lg:block doodle-f1">
        <svg viewBox="0 0 230 220" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* Flying seagulls */}
          <g transform="translate(30, 20)">
            <path d="M 20 20 Q 35 8 48 18 Q 60 8 75 20" strokeWidth="2.2" stroke="#ef4444" />
            <path d="M 65 32 Q 75 24 85 30 Q 95 24 105 32" strokeWidth="1.6" />
          </g>

          {/* Water ripples */}
          <g transform="translate(20, 90)">
            <path d="M 10 30 Q 40 25 70 30 Q 100 35 130 30" strokeWidth="1.4" strokeDasharray="3 3" opacity="0.6" />
            <path d="M 30 45 Q 60 40 90 45 Q 120 50 150 45" strokeWidth="1.4" strokeDasharray="3 3" opacity="0.6" />
            <path d="M 15 60 Q 45 55 75 60 Q 105 65 135 60" strokeWidth="1.4" strokeDasharray="3 3" opacity="0.6" />
          </g>

          {/* Paw Prints Trail */}
          <g transform="translate(100, 110)">
            <ellipse cx="20" cy="20" rx="3" ry="4" fill="#ef4444" stroke="#ef4444" />
            <circle cx="16" cy="12" r="1.2" fill="#ef4444" />
            <circle cx="20" cy="10" r="1.2" fill="#ef4444" />
            <circle cx="24" cy="12" r="1.2" fill="#ef4444" />
            <ellipse cx="38" cy="14" rx="3" ry="4" fill="currentColor" />
            <circle cx="34" cy="6" r="1.2" fill="currentColor" />
            <circle cx="38" cy="4" r="1.2" fill="currentColor" />
            <circle cx="42" cy="6" r="1.2" fill="currentColor" />
          </g>
        </svg>
      </div>

      {/* Footer Right: Music Equalizer, Vinyl Disc & Stickman Waving Goodbye */}
      <div className="absolute right-1 xl:right-6 2xl:right-12 top-[5580px] w-76 h-80 opacity-[0.085] hover:opacity-[0.2] transition-opacity duration-500 hidden lg:block doodle-f2">
        <svg viewBox="0 0 230 220" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* Music Equalizer Bars */}
          <g transform="translate(30, 20)">
            <line x1="10" y1="50" x2="10" y2="20" strokeWidth="3" stroke="#ef4444" strokeLinecap="round" />
            <line x1="18" y1="50" x2="18" y2="10" strokeWidth="3" stroke="#ef4444" strokeLinecap="round" />
            <line x1="26" y1="50" x2="26" y2="30" strokeWidth="3" stroke="#ef4444" strokeLinecap="round" />
            <line x1="34" y1="50" x2="34" y2="15" strokeWidth="3" stroke="#ef4444" strokeLinecap="round" />
            <line x1="42" y1="50" x2="42" y2="35" strokeWidth="3" stroke="#ef4444" strokeLinecap="round" />
            <line x1="50" y1="50" x2="50" y2="25" strokeWidth="3" stroke="#ef4444" strokeLinecap="round" />
          </g>

          {/* Tiny Stickman waving goodbye */}
          <g transform="translate(100, 30)">
            <circle cx="30" cy="20" r="6" fill="#fff" strokeWidth="1.8" />
            <circle cx="28" cy="19" r="1" fill="currentColor" />
            <circle cx="32" cy="19" r="1" fill="currentColor" />
            <path d="M 28 23 Q 30 25 32 23" strokeWidth="1" />
            <line x1="30" y1="26" x2="30" y2="52" strokeWidth="2.2" />
            <path d="M 30 34 L 44 24 L 48 14" strokeWidth="2" strokeLinecap="round" />
            <circle cx="48" cy="14" r="2.5" fill="#ef4444" />
            <path d="M 30 34 L 18 42" strokeWidth="2" />
            <circle cx="18" cy="42" r="2.2" fill="#ef4444" />
            <path d="M 30 52 L 22 72 M 30 52 L 38 72" strokeWidth="2.2" />
            <line x1="16" y1="72" x2="24" y2="72" stroke="#ef4444" strokeWidth="3" />
            <line x1="34" y1="72" x2="42" y2="72" stroke="#ef4444" strokeWidth="3" />
            <text x="52" y="16" fontSize="12" fill="#ef4444" stroke="none" fontFamily="sans-serif">✨</text>
          </g>

          {/* Floating Melody Notes */}
          <g transform="translate(40, 110)">
            <text x="10" y="20" fontSize="16" fill="#ef4444" stroke="none">♪</text>
            <text x="30" y="35" fontSize="14" fill="currentColor" stroke="none">♫</text>
            <text x="50" y="15" fontSize="18" fill="#ef4444" stroke="none">♬</text>
          </g>
        </svg>
      </div>
    </div>
  );
}
