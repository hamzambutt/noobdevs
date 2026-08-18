"use client";

import React from "react";

export default function ProjectsDudes() {
  return (
    <>
      <style>{`
        /* ── STICKMAN 1: PHONE SCROLLER IN CHAIR ── */
        @keyframes thumbFlick {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          20% { transform: translateY(-2.5px) rotate(-7deg); }
          40% { transform: translateY(1px) rotate(3deg); }
          60% { transform: translateY(-3.5px) rotate(-9deg); }
          80% { transform: translateY(-0.5px) rotate(2deg); }
        }
        @keyframes screenFeedScroll {
          0% { transform: translateY(0px); opacity: 0.9; }
          50% { transform: translateY(-5px); opacity: 1; }
          100% { transform: translateY(-10px); opacity: 0.7; }
        }
        @keyframes phoneScreenGlow {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(56, 189, 248, 0.4)); }
          50% { filter: drop-shadow(0 0 5px rgba(56, 189, 248, 0.85)); }
        }
        @keyframes phoneGuyLegSwing {
          0%, 100% { transform: rotate(-8deg); }
          50% { transform: rotate(10deg); }
        }
        @keyframes phoneGuyHeadBob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          45% { transform: translateY(-1.2px) rotate(1.2deg); }
          80% { transform: translateY(0.4px) rotate(-0.8deg); }
        }

        /* ── STICKMAN 2: BUSY DESK WORKER ── */
        @keyframes fastTypingLeft {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-2px) rotate(3deg); }
          50% { transform: translateY(1px) rotate(-2deg); }
          75% { transform: translateY(-2.5px) rotate(2deg); }
        }
        @keyframes fastTypingRight {
          0%, 100% { transform: translateY(-1px) rotate(0deg); }
          25% { transform: translateY(1.5px) rotate(-2deg); }
          50% { transform: translateY(-2.5px) rotate(3deg); }
          75% { transform: translateY(0.5px) rotate(-1.5deg); }
        }
        @keyframes codeCursorBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes codeLineStream {
          0% { transform: translateY(0); }
          50% { transform: translateY(-2.5px); }
          100% { transform: translateY(-5px); }
        }
        @keyframes coffeeSteam {
          0% { opacity: 0; transform: translateY(0) scaleX(0.8); }
          40% { opacity: 0.8; transform: translateY(-3px) scaleX(1.1); }
          80% { opacity: 0.4; transform: translateY(-6px) scaleX(1.3); }
          100% { opacity: 0; transform: translateY(-9px) scaleX(1.5); }
        }
        @keyframes deskGuyHeadFocus {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          35% { transform: translateY(1px) rotate(1deg); }
          75% { transform: translateY(-0.8px) rotate(-0.8deg); }
        }
        @keyframes deskFootTap {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-6deg); }
        }

        .phone-thumb-anim { transform-origin: 38px 42px; animation: thumbFlick 1.6s ease-in-out infinite; }
        .phone-feed-anim { animation: screenFeedScroll 2s linear infinite; }
        .phone-glow-anim { animation: phoneScreenGlow 2.5s ease-in-out infinite; }
        .phone-leg-anim { transform-origin: 32px 54px; animation: phoneGuyLegSwing 2.5s ease-in-out infinite; }
        .phone-head-bob { transform-origin: 28px 20px; animation: phoneGuyHeadBob 3s ease-in-out infinite; }

        .type-hand-l { transform-origin: 36px 44px; animation: fastTypingLeft 0.32s ease-in-out infinite; }
        .type-hand-r { transform-origin: 44px 44px; animation: fastTypingRight 0.35s ease-in-out infinite; }
        .code-blink { animation: codeCursorBlink 0.8s infinite; }
        .code-scroll { animation: codeLineStream 3s linear infinite; }
        .steam-rise { animation: coffeeSteam 2.2s ease-out infinite; }
        .desk-head-focus { transform-origin: 30px 20px; animation: deskGuyHeadFocus 2.5s ease-in-out infinite; }
        .desk-foot-tap { transform-origin: 28px 54px; animation: deskFootTap 0.45s ease-in-out infinite; }
      `}</style>

      {/* Container flush on top border of #projects-card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 z-20 flex justify-between px-4 sm:px-10 md:px-16 select-none -translate-y-full"
      >
        {/* ── LEFT: STICKMAN IN LOUNGE CHAIR SCROLLING PHONE ── */}
        <div className="relative flex items-end justify-end flex-1 pr-8 sm:pr-14 md:pr-20">
          <svg
            className="w-24 h-24 sm:w-28 sm:h-28 overflow-visible"
            viewBox="0 0 90 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeLinecap="round" strokeLinejoin="round">
              {/* ── THE COMFY CHAIR ── */}
              {/* Chair Backrest */}
              <path d="M 16 28 C 15 40, 17 50, 19 54" stroke="#334155" strokeWidth="2.8" />
              <path d="M 14 26 L 19 28" stroke="#334155" strokeWidth="2.5" />
              {/* Chair Seat Cushion */}
              <path d="M 19 54 L 38 54" stroke="#334155" strokeWidth="3" />
              {/* Chair Center Pedestal / Stem */}
              <path d="M 28 54 L 28 67" stroke="#262626" strokeWidth="2.6" />
              {/* Chair Swivel Base legs touching card border at Y=70 */}
              <path d="M 16 70 L 40 70" stroke="#262626" strokeWidth="2.6" />
              <circle cx="16" cy="69" r="1.4" fill="#334155" />
              <circle cx="40" cy="69" r="1.4" fill="#334155" />
              <circle cx="28" cy="67" r="1.6" fill="#262626" />

              {/* ── STICKMAN LOUNGING IN CHAIR ── */}
              {/* Head with tilted phone focus */}
              <g className="phone-head-bob">
                {/* Spiky hair */}
                <path d="M 25 12 Q 20 6 15 8" stroke="#262626" strokeWidth="1.6" />
                <path d="M 27 11 Q 23 5 18 6" stroke="#262626" strokeWidth="1.4" />
                <path d="M 30 12 Q 26 7 22 8" stroke="#262626" strokeWidth="1.3" />

                {/* Head */}
                <circle cx="28" cy="20" r="9.5" fill="#ffffff" stroke="#262626" strokeWidth="1.8" />

                {/* TWO DISTINCT EYES looking down at phone */}
                <circle cx="29" cy="20" r="1.3" fill="#262626" />
                <circle cx="34" cy="19.5" r="1.3" fill="#262626" />
                {/* Cheerful relaxed smile */}
                <path d="M 29 24.5 Q 32 26.5 35 24" stroke="#262626" strokeWidth="1.4" fill="none" />
              </g>

              {/* Torso leaning back in chair */}
              <path d="M 28 29.5 Q 26 44 23 54" stroke="#262626" strokeWidth="2.4" />

              {/* Arms holding smartphone */}
              <path d="M 26 38 L 33 46 L 39 44" stroke="#262626" strokeWidth="2" />
              <path d="M 26 38 L 30 48 L 36 46" stroke="#262626" strokeWidth="2" />

              {/* ── SMARTPHONE ── */}
              <g className="phone-glow-anim">
                <rect
                  x="38"
                  y="34"
                  width="11"
                  height="19"
                  rx="2.5"
                  fill="#1e293b"
                  stroke="#0f172a"
                  strokeWidth="1.3"
                  transform="rotate(10 38 34)"
                />
                <g transform="rotate(10 38 34)" clipPath="url(#projPhoneClip)">
                  <rect x="39.5" y="36" width="8" height="15" rx="1.2" fill="#0284c7" />
                  {/* Scrolling Feed Lines */}
                  <g className="phone-feed-anim">
                    <rect x="41" y="37" width="5.5" height="1.6" rx="0.4" fill="#ffffff" />
                    <rect x="41" y="40" width="4" height="1" rx="0.3" fill="#e0f2fe" opacity="0.8" />
                    <rect x="41" y="42.5" width="5.5" height="2.5" rx="0.5" fill="#ef4444" />
                    <rect x="41" y="46.5" width="4.5" height="1.2" rx="0.3" fill="#ffffff" />
                    <rect x="41" y="49" width="3.5" height="1" rx="0.3" fill="#e0f2fe" opacity="0.8" />
                    <rect x="41" y="51.5" width="5.5" height="2.5" rx="0.5" fill="#38bdf8" />
                  </g>
                </g>
                <clipPath id="projPhoneClip">
                  <rect x="39.5" y="36" width="8" height="15" rx="1.2" />
                </clipPath>
              </g>

              {/* Scrolling Thumb (animated flicking over phone screen) */}
              <g className="phone-thumb-anim">
                <path d="M 37 44 Q 40 40 42 42" stroke="#262626" strokeWidth="2" strokeLinecap="round" />
                <circle cx="42" cy="42" r="1.5" fill="#ef4444" stroke="#262626" strokeWidth="1" />
              </g>

              {/* Legs seated in chair */}
              <path d="M 23 54 L 33 54" stroke="#262626" strokeWidth="2.5" />
              {/* Dangling & swinging leg with red shoes */}
              <g className="phone-leg-anim">
                <path d="M 33 54 Q 38 61 41 69" stroke="#262626" strokeWidth="2.2" />
                {/* Red shoe resting right on card border Y=70 */}
                <path d="M 40 69.5 L 47 69.5" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
              </g>
              {/* Second resting leg */}
              <path d="M 27 54 Q 30 62 33 69" stroke="#262626" strokeWidth="1.9" opacity="0.85" />
              <path d="M 32 69.5 L 38 69.5" stroke="#ef4444" strokeWidth="2.8" strokeLinecap="round" opacity="0.85" />
            </g>
          </svg>
        </div>

        {/* ── RIGHT: STICKMAN BUSY WORKING AT DESK ── */}
        <div className="relative flex items-end justify-start flex-1 pl-8 sm:pl-14 md:pl-20">
          <svg
            className="w-28 h-24 sm:w-32 sm:h-28 overflow-visible"
            viewBox="0 0 110 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeLinecap="round" strokeLinejoin="round">
              {/* ── THE DESK SETUP ── */}
              {/* Office Chair */}
              <path d="M 14 36 L 16 54" stroke="#334155" strokeWidth="2.5" />
              <path d="M 16 54 L 32 54" stroke="#334155" strokeWidth="2.8" />
              <path d="M 24 54 L 24 68" stroke="#262626" strokeWidth="2.5" />
              <path d="M 16 70 L 32 70" stroke="#262626" strokeWidth="2.4" />

              {/* Desk Surface (flush with card top border) */}
              <rect x="42" y="44" width="46" height="3" rx="1" fill="#334155" stroke="#1e293b" strokeWidth="1.3" />
              {/* Desk Legs touching card border at Y=70 */}
              <path d="M 46 47 L 46 70 M 84 47 L 84 70" stroke="#262626" strokeWidth="2.4" />
              {/* Desk Crossbar */}
              <path d="M 46 60 L 84 60" stroke="#94a3b8" strokeWidth="1.2" opacity="0.7" />

              {/* ── DESKTOP COMPUTER / MONITOR ── */}
              {/* Monitor Stand */}
              <path d="M 68 44 L 68 36" stroke="#262626" strokeWidth="2.2" />
              <path d="M 63 44 L 73 44" stroke="#262626" strokeWidth="1.8" />
              {/* Monitor Frame */}
              <rect x="54" y="14" width="28" height="22" rx="2.5" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" />
              {/* Glowing Code Screen */}
              <rect x="56" y="16" width="24" height="18" rx="1.5" fill="#020617" />
              {/* Code lines streaming */}
              <g className="code-scroll" clipPath="url(#projMonitorClip)">
                <path d="M 58 19 L 65 19" stroke="#38bdf8" strokeWidth="1.1" />
                <path d="M 58 22 L 71 22" stroke="#ef4444" strokeWidth="1.1" />
                <path d="M 60 25 L 75 25" stroke="#4ade80" strokeWidth="1.1" />
                <path d="M 60 28 L 68 28" stroke="#fbbf24" strokeWidth="1.1" />
                <path d="M 58 31 L 67 31" stroke="#38bdf8" strokeWidth="1.1" />
                <path d="M 58 34 L 73 34" stroke="#4ade80" strokeWidth="1.1" />
              </g>
              <clipPath id="projMonitorClip">
                <rect x="56" y="16" width="24" height="18" rx="1.5" />
              </clipPath>
              {/* Blinking red cursor */}
              <rect x="69" y="30.5" width="1.4" height="1.8" fill="#ef4444" className="code-blink" />

              {/* Keyboard on desk */}
              <rect x="44" y="41" width="13" height="3" rx="0.8" fill="#e2e8f0" stroke="#262626" strokeWidth="1" />

              {/* Steaming Coffee Mug */}
              <rect x="80" y="37" width="6.5" height="7" rx="1.5" fill="#ffffff" stroke="#262626" strokeWidth="1.2" />
              <path d="M 86.5 39 Q 89 40.5 86.5 42" stroke="#262626" strokeWidth="1" />
              <circle cx="83.2" cy="40.5" r="1" fill="#ef4444" />
              {/* Coffee steam rising */}
              <path
                d="M 83 35 C 82 32, 85 30, 83 27"
                stroke="#ef4444"
                strokeWidth="1.1"
                fill="none"
                className="steam-rise"
              />

              {/* ── BUSY DEVELOPER STICKMAN ── */}
              {/* Head with intense focus */}
              <g className="desk-head-focus">
                {/* Spiky hair */}
                <path d="M 23 12 Q 18 6 13 8" stroke="#262626" strokeWidth="1.6" />
                <path d="M 25 11 Q 20 5 16 6" stroke="#262626" strokeWidth="1.4" />
                <path d="M 28 12 Q 24 6 20 8" stroke="#262626" strokeWidth="1.3" />

                {/* Head */}
                <circle cx="26" cy="20" r="9.5" fill="#ffffff" stroke="#262626" strokeWidth="1.8" />

                {/* TWO DISTINCT EYES looking intently at the monitor */}
                <circle cx="28" cy="19.5" r="1.3" fill="#262626" />
                <circle cx="33" cy="19.5" r="1.3" fill="#262626" />
                {/* Dual Red Glasses across BOTH eyes */}
                <circle cx="28" cy="19.5" r="2.8" stroke="#ef4444" strokeWidth="1" fill="none" />
                <circle cx="33" cy="19.5" r="2.8" stroke="#ef4444" strokeWidth="1" fill="none" />
                <path d="M 30.8 19.5 L 30.2 19.5" stroke="#ef4444" strokeWidth="1" />

                {/* Determined grin */}
                <path d="M 27 25 Q 30 27 33 25" stroke="#262626" strokeWidth="1.4" fill="none" />
              </g>

              {/* Torso sitting on chair */}
              <path d="M 26 29.5 Q 26 42 24 54" stroke="#262626" strokeWidth="2.4" />

              {/* ── ANIMATED TYPING HANDS ── */}
              {/* Left Typing Arm */}
              <g className="type-hand-l">
                <path d="M 26 38 L 38 43 L 47 41.5" stroke="#262626" strokeWidth="2.2" />
                <circle cx="47" cy="41.5" r="2" fill="#ef4444" stroke="#262626" strokeWidth="1" />
              </g>
              {/* Right Typing Arm */}
              <g className="type-hand-r">
                <path d="M 26 38 L 40 45 L 51 42" stroke="#262626" strokeWidth="2.2" />
                <circle cx="51" cy="42" r="2" fill="#ef4444" stroke="#262626" strokeWidth="1" />
              </g>

              {/* Legs seated in chair */}
              <path d="M 24 54 L 32 54" stroke="#262626" strokeWidth="2.5" />
              {/* Front Leg & Foot tapping on card border line Y=70 */}
              <g className="desk-foot-tap">
                <path d="M 32 54 L 37 68.5" stroke="#262626" strokeWidth="2.3" />
                {/* Red shoe touching card border line at Y=70 */}
                <path d="M 36 69.5 L 43 69.5" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
              </g>
              {/* Back Leg resting on chair base */}
              <path d="M 28 54 L 32 67" stroke="#262626" strokeWidth="1.8" opacity="0.85" />
              <path d="M 31 68 L 36 68" stroke="#ef4444" strokeWidth="2.6" strokeLinecap="round" opacity="0.85" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
