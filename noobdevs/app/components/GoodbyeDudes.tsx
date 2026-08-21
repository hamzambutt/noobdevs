"use client";

import React from "react";

export default function GoodbyeDudes() {
  return (
    <>
      <style>{`
        /* ── ANIMATED WAVING ARMS FOR THE 6 GOODBYE DUDES ── */
        @keyframes waveA {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-24deg); }
        }
        @keyframes waveB {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(20deg); }
        }
        @keyframes waveC {
          0%, 100% { transform: rotate(15deg); }
          50% { transform: rotate(-18deg); }
        }
        @keyframes waveBothL {
          0%, 100% { transform: rotate(-8deg); }
          50% { transform: rotate(16deg); }
        }
        @keyframes waveBothR {
          0%, 100% { transform: rotate(8deg); }
          50% { transform: rotate(-16deg); }
        }
        @keyframes goodbyeBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        @keyframes byeHeartFloat {
          0% { opacity: 0; transform: translate(0, 0) scale(0.6); }
          30% { opacity: 1; transform: translate(4px, -6px) scale(1); }
          80% { opacity: 0.8; transform: translate(8px, -14px) scale(1.1); }
          100% { opacity: 0; transform: translate(12px, -20px) scale(0.7); }
        }

        .wave-1 { transform-origin: 32px 34px; animation: waveA 1.1s ease-in-out infinite; }
        .wave-2 { transform-origin: 34px 34px; animation: waveB 1.2s ease-in-out infinite 0.15s; }
        .wave-3 { transform-origin: 32px 34px; animation: waveC 1.0s ease-in-out infinite 0.3s; }
        .wave-4-l { transform-origin: 26px 34px; animation: waveBothL 1.3s ease-in-out infinite; }
        .wave-4-r { transform-origin: 38px 34px; animation: waveBothR 1.3s ease-in-out infinite; }
        .wave-5 { transform-origin: 34px 34px; animation: waveB 1.15s ease-in-out infinite 0.2s; }
        .wave-6 { transform-origin: 32px 34px; animation: waveA 1.25s ease-in-out infinite 0.4s; }
        .goodbye-group-bob { animation: goodbyeBob 2.5s ease-in-out infinite; }
        .bye-heart { animation: byeHeartFloat 2.2s ease-out infinite; }
      `}</style>

      {/* 6 DUDES STANDING & WAVING GOODBYE FLUSH ON BOTTOM BORDER OF CONTACT CARD */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 z-20 flex justify-center items-end px-1 sm:px-4 select-none"
      >
        <div className="goodbye-group-bob relative flex items-end justify-between gap-1 sm:gap-4 md:gap-8 max-w-4xl w-full">
          {/* ── DUDE 1: HARD HAT BUILDER WAVING (always visible) ── */}
          <div className="relative transform scale-75 sm:scale-90 md:scale-100 origin-bottom-left">
            <svg className="w-16 h-24 sm:w-20 sm:h-28 overflow-visible" viewBox="0 0 70 70" fill="none">
              <g strokeLinecap="round" strokeLinejoin="round">
                {/* Head */}
                <circle cx="32" cy="20" r="9.5" fill="#ffffff" stroke="#262626" strokeWidth="1.8" />
                <circle cx="29" cy="19.5" r="1.3" fill="#262626" />
                <circle cx="35" cy="19.5" r="1.3" fill="#262626" />
                <path d="M 29 24 Q 32 26.5 35 24" stroke="#262626" strokeWidth="1.4" fill="none" />

                {/* Red Construction Hard Hat */}
                <path d="M 21 14 C 20 6, 25 1, 32 1 C 39 1, 44 6, 43 14 Z" fill="#ef4444" stroke="#dc2626" strokeWidth="1.4" />
                <path d="M 30 1 Q 32 -2 34 1 L 34 11 Q 32 10 30 11 Z" fill="#b91c1c" stroke="#991b1b" strokeWidth="0.8" />
                <path d="M 18 14 C 23 12, 41 12, 46 14 C 45 17, 19 17, 18 14 Z" fill="#f87171" stroke="#dc2626" strokeWidth="1.2" />

                {/* Torso */}
                <path d="M 32 29.5 L 32 52" stroke="#262626" strokeWidth="2.4" />

                {/* Left hand on hip */}
                <path d="M 32 34 L 24 38 L 26 44" stroke="#262626" strokeWidth="2" />
                <circle cx="26" cy="44" r="2.4" fill="#ef4444" stroke="#262626" strokeWidth="1.1" />

                {/* Right Waving Arm (Open Waving Palm 👋) */}
                <g className="wave-1">
                  <path d="M 32 34 L 42 24 L 46 12" stroke="#262626" strokeWidth="2.2" />
                  {/* Palm */}
                  <circle cx="46" cy="12" r="3.2" fill="#ef4444" stroke="#262626" strokeWidth="1.2" />
                  {/* Spread waving fingers */}
                  <path d="M 43 9.5 L 42 6 M 45 9 L 45.5 5.5 M 47.5 9.5 L 49 6.5 M 49 11 L 52 9" stroke="#262626" strokeWidth="1.2" />
                </g>

                {/* Legs standing on card border Y=70 */}
                <path d="M 32 52 L 26 68.5 M 32 52 L 38 68.5" stroke="#262626" strokeWidth="2.4" />
                <path d="M 21 69.5 L 28 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
                <path d="M 36 69.5 L 43 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
              </g>
            </svg>
          </div>

          {/* ── DUDE 2: DEVOPS WITH RED HEADPHONES WAVING PEACE ✌️ (hidden on mobile) ── */}
          <div className="relative hidden sm:block transform scale-90 sm:scale-100">
            <svg className="w-16 h-24 sm:w-20 sm:h-28 overflow-visible" viewBox="0 0 70 70" fill="none">
              <g strokeLinecap="round" strokeLinejoin="round">
                {/* Spiky hair */}
                <path d="M 31 11 Q 26 5 21 7" stroke="#262626" strokeWidth="1.6" />

                {/* Head */}
                <circle cx="34" cy="20" r="9.5" fill="#ffffff" stroke="#262626" strokeWidth="1.8" />
                {/* Red Headphones */}
                <path d="M 25 19 C 25 9, 43 9, 43 19" stroke="#262626" strokeWidth="2" fill="none" />
                <rect x="23" y="16" width="3.5" height="8" rx="1.5" fill="#ef4444" stroke="#262626" strokeWidth="1.2" />
                <rect x="41.5" y="16" width="3.5" height="8" rx="1.5" fill="#ef4444" stroke="#262626" strokeWidth="1.2" />

                <circle cx="31" cy="19.5" r="1.3" fill="#262626" />
                <circle cx="37" cy="19.5" r="1.3" fill="#262626" />
                <path d="M 31 24.5 Q 34 27 37 24.5" stroke="#262626" strokeWidth="1.4" fill="none" />

                {/* Torso */}
                <path d="M 34 29.5 L 34 52" stroke="#262626" strokeWidth="2.4" />

                {/* Left hand relaxed */}
                <path d="M 34 34 L 26 42 L 28 48" stroke="#262626" strokeWidth="2" />
                <circle cx="28" cy="48" r="2.2" fill="#ef4444" stroke="#262626" strokeWidth="1" />

                {/* Right Waving Peace Hand */}
                <g className="wave-2">
                  <path d="M 34 34 L 44 26 L 47 13" stroke="#262626" strokeWidth="2.2" />
                  <circle cx="47" cy="13" r="2.8" fill="#ef4444" stroke="#262626" strokeWidth="1.2" />
                  {/* Peace sign fingers */}
                  <path d="M 45 10 L 44 6 M 48 10 L 49 6" stroke="#262626" strokeWidth="1.6" />
                </g>

                {/* Legs */}
                <path d="M 34 52 L 28 68.5 M 34 52 L 40 68.5" stroke="#262626" strokeWidth="2.4" />
                <path d="M 23 69.5 L 30 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
                <path d="M 38 69.5 L 45 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
              </g>
            </svg>
          </div>

          {/* ── DUDE 3: RED GLASSES & COFFEE TOAST ☕ (hidden on mobile) ── */}
          <div className="relative hidden sm:block transform scale-90 sm:scale-100">
            <svg className="w-16 h-24 sm:w-20 sm:h-28 overflow-visible" viewBox="0 0 70 70" fill="none">
              <g strokeLinecap="round" strokeLinejoin="round">
                {/* Hair */}
                <path d="M 29 11 Q 24 5 19 7" stroke="#262626" strokeWidth="1.6" />
                {/* Head */}
                <circle cx="32" cy="20" r="9.5" fill="#ffffff" stroke="#262626" strokeWidth="1.8" />
                {/* Red Glasses */}
                <circle cx="28" cy="19.5" r="2.8" stroke="#ef4444" strokeWidth="1.1" fill="none" />
                <circle cx="36" cy="19.5" r="2.8" stroke="#ef4444" strokeWidth="1.1" fill="none" />
                <line x1="30.8" y1="19.5" x2="33.2" y2="19.5" stroke="#ef4444" strokeWidth="1" />
                <circle cx="28" cy="19.5" r="1.2" fill="#262626" />
                <circle cx="36" cy="19.5" r="1.2" fill="#262626" />
                <path d="M 29 24.5 Q 32 27 35 24.5" stroke="#262626" strokeWidth="1.4" fill="none" />

                {/* Torso */}
                <path d="M 32 29.5 L 32 52" stroke="#262626" strokeWidth="2.4" />

                {/* Left hand holding coffee mug in toast */}
                <path d="M 32 34 L 22 36 L 19 30" stroke="#262626" strokeWidth="2" />
                <rect x="15" y="25" width="6" height="7" rx="1.2" fill="#ffffff" stroke="#262626" strokeWidth="1.2" />
                <path d="M 15 27 Q 13 28.5 15 30" stroke="#262626" strokeWidth="1" />
                <circle cx="18" cy="28.5" r="0.8" fill="#ef4444" />

                {/* Right Waving Hand */}
                <g className="wave-3">
                  <path d="M 32 34 L 42 25 L 46 14" stroke="#262626" strokeWidth="2.2" />
                  <circle cx="46" cy="14" r="3" fill="#ef4444" stroke="#262626" strokeWidth="1.2" />
                </g>

                {/* Legs */}
                <path d="M 32 52 L 26 68.5 M 32 52 L 38 68.5" stroke="#262626" strokeWidth="2.4" />
                <path d="M 21 69.5 L 28 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
                <path d="M 36 69.5 L 43 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
              </g>
            </svg>
          </div>

          {/* ── DUDE 4: RED BOWTIE WAVING BOTH ARMS WITH HEARTS 💕 (hidden on mobile) ── */}
          <div className="relative hidden sm:block transform scale-90 sm:scale-100">
            <svg className="w-16 h-24 sm:w-20 sm:h-28 overflow-visible" viewBox="0 0 70 70" fill="none">
              <g strokeLinecap="round" strokeLinejoin="round">
                {/* Floating Heart */}
                <g className="bye-heart" style={{ transformOrigin: "32px 6px" }}>
                  <path
                    d="M 32 4 C 32 1.5, 28.5 1.5, 28.5 4 C 28.5 6.5, 32 9, 32 9 C 32 9, 35.5 6.5, 35.5 4 C 35.5 1.5, 32 1.5, 32 4 Z"
                    fill="#ef4444"
                    stroke="#dc2626"
                    strokeWidth="0.8"
                  />
                </g>

                {/* Head */}
                <circle cx="32" cy="20" r="9.5" fill="#ffffff" stroke="#262626" strokeWidth="1.8" />
                <circle cx="28" cy="19.5" r="1.3" fill="#262626" />
                <circle cx="36" cy="19.5" r="1.3" fill="#262626" />
                {/* Big happy smile */}
                <path d="M 27 24 Q 32 28 37 24" stroke="#262626" strokeWidth="1.5" fill="none" />

                {/* Red Bow Tie */}
                <path d="M 32 30 L 27 27 L 28 33 Z" fill="#ef4444" stroke="#dc2626" strokeWidth="0.8" />
                <path d="M 32 30 L 37 27 L 36 33 Z" fill="#ef4444" stroke="#dc2626" strokeWidth="0.8" />
                <circle cx="32" cy="30" r="1.2" fill="#b91c1c" />

                {/* Torso */}
                <path d="M 32 30 L 32 52" stroke="#262626" strokeWidth="2.4" />

                {/* Both Arms Waving High */}
                <g className="wave-4-l">
                  <path d="M 32 34 L 21 24 L 17 12" stroke="#262626" strokeWidth="2.2" />
                  <circle cx="17" cy="12" r="3" fill="#ef4444" stroke="#262626" strokeWidth="1.2" />
                </g>
                <g className="wave-4-r">
                  <path d="M 32 34 L 43 24 L 47 12" stroke="#262626" strokeWidth="2.2" />
                  <circle cx="47" cy="12" r="3" fill="#ef4444" stroke="#262626" strokeWidth="1.2" />
                </g>

                {/* Legs */}
                <path d="M 32 52 L 26 68.5 M 32 52 L 38 68.5" stroke="#262626" strokeWidth="2.4" />
                <path d="M 21 69.5 L 28 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
                <path d="M 36 69.5 L 43 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
              </g>
            </svg>
          </div>

          {/* ── DUDE 5: PHONE IN HAND WAVING (hidden on mobile) ── */}
          <div className="relative hidden sm:block transform scale-90 sm:scale-100">
            <svg className="w-16 h-24 sm:w-20 sm:h-28 overflow-visible" viewBox="0 0 70 70" fill="none">
              <g strokeLinecap="round" strokeLinejoin="round">
                {/* Hair */}
                <path d="M 31 11 Q 26 5 21 7" stroke="#262626" strokeWidth="1.6" />
                {/* Head */}
                <circle cx="34" cy="20" r="9.5" fill="#ffffff" stroke="#262626" strokeWidth="1.8" />
                <circle cx="31" cy="19.5" r="1.3" fill="#262626" />
                <circle cx="37" cy="19.5" r="1.3" fill="#262626" />
                <path d="M 31 24.5 Q 34 27 37 24.5" stroke="#262626" strokeWidth="1.4" fill="none" />

                {/* Torso */}
                <path d="M 34 29.5 L 34 52" stroke="#262626" strokeWidth="2.4" />

                {/* Left hand holding phone */}
                <path d="M 34 34 L 24 38 L 22 46" stroke="#262626" strokeWidth="2" />
                <rect x="18" y="42" width="6" height="10" rx="1.5" fill="#1e293b" stroke="#0f172a" strokeWidth="1" />
                <rect x="19.5" y="44" width="3" height="6" rx="0.5" fill="#38bdf8" />

                {/* Right Waving Arm */}
                <g className="wave-5">
                  <path d="M 34 34 L 44 24 L 48 12" stroke="#262626" strokeWidth="2.2" />
                  <circle cx="48" cy="12" r="3" fill="#ef4444" stroke="#262626" strokeWidth="1.2" />
                </g>

                {/* Legs */}
                <path d="M 34 52 L 28 68.5 M 34 52 L 40 68.5" stroke="#262626" strokeWidth="2.4" />
                <path d="M 23 69.5 L 30 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
                <path d="M 38 69.5 L 45 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
              </g>
            </svg>
          </div>

          {/* ── DUDE 6: CHILL DEV WAVING HIGH (always visible) ── */}
          <div className="relative transform scale-75 sm:scale-90 md:scale-100 origin-bottom-right">
            <svg className="w-16 h-24 sm:w-20 sm:h-28 overflow-visible" viewBox="0 0 70 70" fill="none">
              <g strokeLinecap="round" strokeLinejoin="round">
                {/* Hair */}
                <path d="M 29 11 Q 24 5 19 7" stroke="#262626" strokeWidth="1.6" />
                {/* Head */}
                <circle cx="32" cy="20" r="9.5" fill="#ffffff" stroke="#262626" strokeWidth="1.8" />
                <circle cx="28" cy="19.5" r="1.3" fill="#262626" />
                <circle cx="35" cy="19.5" r="1.3" fill="#262626" />
                <path d="M 29 24.5 Q 32 27 35 24.5" stroke="#262626" strokeWidth="1.4" fill="none" />

                {/* Torso */}
                <path d="M 32 29.5 L 32 52" stroke="#262626" strokeWidth="2.4" />

                {/* Left hand in pocket/relaxed */}
                <path d="M 32 34 L 24 40 L 26 46" stroke="#262626" strokeWidth="2" />
                <circle cx="26" cy="46" r="2.2" fill="#ef4444" stroke="#262626" strokeWidth="1" />

                {/* Right Waving Arm */}
                <g className="wave-6">
                  <path d="M 32 34 L 42 24 L 46 12" stroke="#262626" strokeWidth="2.2" />
                  <circle cx="46" cy="12" r="3" fill="#ef4444" stroke="#262626" strokeWidth="1.2" />
                </g>

                {/* Legs */}
                <path d="M 32 52 L 26 68.5 M 32 52 L 38 68.5" stroke="#262626" strokeWidth="2.4" />
                <path d="M 21 69.5 L 28 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
                <path d="M 36 69.5 L 43 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
