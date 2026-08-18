"use client";

import React from "react";

export default function TeamDudes() {
  return (
    <>
      <style>{`
        /* ── ANIMATIONS FOR TEAM POSTER DUDES ── */
        @keyframes posterHoldLeft {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-1.5deg); }
        }
        @keyframes posterHoldRight {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(1.5deg); }
        }
        @keyframes sparkleTwinkle {
          0%, 100% { transform: scale(0.7) rotate(0deg); opacity: 0.3; }
          50% { transform: scale(1.15) rotate(45deg); opacity: 1; }
        }
        @keyframes teamGuyHair {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(8deg); }
        }

        .poster-left-anim { transform-origin: 55px 70px; animation: posterHoldLeft 2.4s ease-in-out infinite; }
        .poster-right-anim { transform-origin: 55px 70px; animation: posterHoldRight 2.4s ease-in-out infinite 0.3s; }
        .sparkle-anim-1 { transform-origin: 86px 19px; animation: sparkleTwinkle 2s ease-in-out infinite; }
        .sparkle-anim-2 { transform-origin: 20px 19px; animation: sparkleTwinkle 2.2s ease-in-out infinite 0.7s; }
        .hair-wind-1 { transform-origin: 55px 12px; animation: teamGuyHair 2.6s ease-in-out infinite; }
        .hair-wind-2 { transform-origin: 55px 12px; animation: teamGuyHair 2.4s ease-in-out infinite 0.4s; }
      `}</style>

      {/* Container flush on top border of #team-card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 z-20 flex justify-between px-4 sm:px-10 md:px-16 select-none -translate-y-full"
      >
        {/* ── LEFT: STICKMAN HOLDING "MEET THE" POSTER ── */}
        <div className="relative flex items-end justify-end flex-1 pr-8 sm:pr-14 md:pr-20">
          <svg
            className="w-28 h-24 sm:w-36 sm:h-28 overflow-visible"
            viewBox="0 0 110 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="poster-left-anim" strokeLinecap="round" strokeLinejoin="round">
              {/* Head behind poster */}
              <g className="hair-wind-1">
                <path d="M 52 11 Q 47 5 41 7" stroke="#262626" strokeWidth="1.6" />
                <path d="M 54 10 Q 50 4 45 5" stroke="#262626" strokeWidth="1.4" />
                <path d="M 57 11 Q 53 6 49 7" stroke="#262626" strokeWidth="1.3" />
              </g>

              {/* Head */}
              <circle cx="55" cy="18" r="9" fill="#ffffff" stroke="#262626" strokeWidth="1.8" />

              {/* TWO HAPPY EYES looking forward */}
              <circle cx="53" cy="17" r="1.3" fill="#262626" />
              <circle cx="58" cy="17" r="1.3" fill="#262626" />
              {/* Big proud smile */}
              <path d="M 52 21.5 Q 55 24.5 58 21.5" stroke="#262626" strokeWidth="1.4" fill="none" />

              {/* Torso */}
              <path d="M 55 27 L 55 52" stroke="#262626" strokeWidth="2.4" />

              {/* Arms holding the poster board on the sides */}
              <path d="M 55 33 L 34 38 L 24 38" stroke="#262626" strokeWidth="2.2" />
              <path d="M 55 33 L 76 38 L 86 38" stroke="#262626" strokeWidth="2.2" />

              {/* ── "MEET THE" POSTER BOARD ── */}
              {/* Shadow */}
              <rect x="18" y="27" width="74" height="23" rx="4" fill="#000000" opacity="0.04" />
              {/* Board body */}
              <rect
                x="17"
                y="26"
                width="76"
                height="23"
                rx="4"
                fill="#ffffff"
                stroke="#262626"
                strokeWidth="1.8"
              />
              {/* Top red header stripe */}
              <path d="M 18 31 L 92 31" stroke="#ef4444" strokeWidth="1.5" />
              <circle cx="22" cy="28.5" r="1" fill="#ef4444" />
              <circle cx="88" cy="28.5" r="1" fill="#ef4444" />

              {/* POSTER TEXT: "MEET THE" */}
              <text
                x="55"
                y="43"
                textAnchor="middle"
                fill="#0f172a"
                fontSize="10"
                fontWeight="900"
                fontFamily="system-ui, -apple-system, sans-serif"
                letterSpacing="0.1em"
                stroke="none"
              >
                MEET THE
              </text>

              {/* Red Gloved Hands gripping poster edges */}
              <circle cx="20" cy="38" r="3" fill="#ef4444" stroke="#262626" strokeWidth="1.3" />
              <circle cx="90" cy="38" r="3" fill="#ef4444" stroke="#262626" strokeWidth="1.3" />

              {/* Sparkle accent */}
              <g className="sparkle-anim-1">
                <path d="M 86 16 L 86 22 M 83 19 L 89 19" stroke="#ef4444" strokeWidth="1.2" />
              </g>

              {/* Legs standing firmly on card border line Y=70 */}
              <path d="M 55 52 L 48 68.5 M 55 52 L 62 68.5" stroke="#262626" strokeWidth="2.4" />
              {/* Red Shoes touching border line */}
              <path d="M 43 69.5 L 50 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
              <path d="M 60 69.5 L 67 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
            </g>
          </svg>
        </div>

        {/* ── RIGHT: STICKMAN HOLDING "TEAM" POSTER ── */}
        <div className="relative flex items-end justify-start flex-1 pl-6 sm:pl-12 md:pl-18">
          <svg
            className="w-28 h-24 sm:w-36 sm:h-28 overflow-visible"
            viewBox="0 0 110 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="poster-right-anim" strokeLinecap="round" strokeLinejoin="round">
              {/* Hair tufts */}
              <g className="hair-wind-2">
                <path d="M 53 11 Q 48 5 43 7" stroke="#262626" strokeWidth="1.6" />
                <path d="M 55 10 Q 51 4 47 5" stroke="#262626" strokeWidth="1.4" />
                <path d="M 58 11 Q 54 6 50 7" stroke="#262626" strokeWidth="1.3" />
              </g>

              {/* Head */}
              <circle cx="55" cy="18" r="9" fill="#ffffff" stroke="#262626" strokeWidth="1.8" />

              {/* TWO HAPPY EYES looking forward */}
              <circle cx="52" cy="17" r="1.3" fill="#262626" />
              <circle cx="57" cy="17" r="1.3" fill="#262626" />
              {/* Big friendly smile */}
              <path d="M 52 21.5 Q 55 24.5 58 21.5" stroke="#262626" strokeWidth="1.4" fill="none" />

              {/* Torso */}
              <path d="M 55 27 L 55 52" stroke="#262626" strokeWidth="2.4" />

              {/* Arms holding the poster board */}
              <path d="M 55 33 L 36 38 L 26 38" stroke="#262626" strokeWidth="2.2" />
              <path d="M 55 33 L 74 38 L 84 38" stroke="#262626" strokeWidth="2.2" />

              {/* ── "TEAM" POSTER BOARD ── */}
              {/* Shadow */}
              <rect x="22" y="27" width="66" height="23" rx="4" fill="#000000" opacity="0.04" />
              {/* Board body */}
              <rect
                x="21"
                y="26"
                width="68"
                height="23"
                rx="4"
                fill="#ffffff"
                stroke="#262626"
                strokeWidth="1.8"
              />
              {/* Top red header stripe */}
              <path d="M 22 31 L 88 31" stroke="#ef4444" strokeWidth="1.5" />
              <circle cx="26" cy="28.5" r="1" fill="#ef4444" />
              <circle cx="84" cy="28.5" r="1" fill="#ef4444" />

              {/* POSTER TEXT: "TEAM" */}
              <text
                x="55"
                y="43"
                textAnchor="middle"
                fill="#dc2626"
                fontSize="11"
                fontWeight="900"
                fontFamily="system-ui, -apple-system, sans-serif"
                letterSpacing="0.14em"
                stroke="none"
              >
                TEAM
              </text>

              {/* Red Gloved Hands gripping poster edges */}
              <circle cx="24" cy="38" r="3" fill="#ef4444" stroke="#262626" strokeWidth="1.3" />
              <circle cx="86" cy="38" r="3" fill="#ef4444" stroke="#262626" strokeWidth="1.3" />

              {/* Sparkle accent */}
              <g className="sparkle-anim-2">
                <path d="M 20 16 L 20 22 M 17 19 L 23 19" stroke="#ef4444" strokeWidth="1.2" />
              </g>

              {/* Legs standing firmly on card border line Y=70 */}
              <path d="M 55 52 L 48 68.5 M 55 52 L 62 68.5" stroke="#262626" strokeWidth="2.4" />
              {/* Red Shoes touching border line */}
              <path d="M 43 69.5 L 50 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
              <path d="M 60 69.5 L 67 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
