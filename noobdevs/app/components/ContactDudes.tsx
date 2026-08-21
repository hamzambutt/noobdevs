"use client";

import React from "react";

export default function ContactDudes() {
  return (
    <>
      <style>{`
        /* ── ANIMATIONS FOR CONTACT CARD (4 DUDES) ── */
        
        /* Dude 1: Stressed on Mobile Phone */
        @keyframes stressPace {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          25% { transform: translateX(-2.5px) rotate(-1.5deg); }
          75% { transform: translateX(2.5px) rotate(1.5deg); }
        }
        @keyframes sweatFly {
          0% { opacity: 0; transform: translate(0, 0) scale(0.6); }
          30% { opacity: 1; transform: translate(4px, -5px) scale(1); }
          80% { opacity: 0.8; transform: translate(9px, -2px) scale(0.9); }
          100% { opacity: 0; transform: translate(13px, 4px) scale(0.5); }
        }
        @keyframes stressArmFlail {
          0%, 100% { transform: rotate(0deg); }
          30% { transform: rotate(-20deg); }
          70% { transform: rotate(12deg); }
        }

        /* Dude 2: File Hugged to Chest with Falling Papers */
        @keyframes fileChestHug {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-1.5px) rotate(1.5deg); }
        }
        @keyframes paperSlip1 {
          0% { opacity: 0; transform: translate(0, 0) rotate(0deg); }
          20% { opacity: 1; }
          60% { transform: translate(-10px, 15px) rotate(-30deg); }
          100% { opacity: 0; transform: translate(-18px, 28px) rotate(-60deg); }
        }
        @keyframes paperSlip2 {
          0% { opacity: 0; transform: translate(0, 0) rotate(0deg); }
          20% { opacity: 1; }
          60% { transform: translate(8px, 16px) rotate(35deg); }
          100% { opacity: 0; transform: translate(16px, 30px) rotate(70deg); }
        }

        /* Dude 3: Headphones Coder at Desk */
        @keyframes headphoneBob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-2px) rotate(2deg); }
        }
        @keyframes contactTyping {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        @keyframes contactCodeScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-5px); }
        }
        @keyframes contactCursorBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        /* Dude 4: Landline Phone */
        @keyframes landlineGesticulate {
          0%, 100% { transform: rotate(0deg); }
          35% { transform: rotate(-16deg); }
          70% { transform: rotate(10deg); }
        }
        @keyframes cordSpring {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.16); }
        }
        @keyframes speechWaveEmit {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.95; transform: scale(1.15); }
        }

        .stress-guy-anim { transform-origin: 40px 70px; animation: stressPace 2.6s ease-in-out infinite; }
        .sweat-drop-1 { animation: sweatFly 1.8s ease-out infinite; }
        .stress-flail { transform-origin: 30px 36px; animation: stressArmFlail 1.4s ease-in-out infinite; }

        .file-hug-anim { transform-origin: 45px 70px; animation: fileChestHug 2.2s ease-in-out infinite; }
        .p-slip-1 { animation: paperSlip1 2.2s ease-in-out infinite; }
        .p-slip-2 { animation: paperSlip2 2.5s ease-in-out infinite 0.9s; }

        .hp-head-bob { transform-origin: 26px 20px; animation: headphoneBob 1.6s ease-in-out infinite; }
        .contact-type-anim { transform-origin: 44px 44px; animation: contactTyping 0.35s ease-in-out infinite; }
        .contact-code-anim { animation: contactCodeScroll 2.5s linear infinite; }
        .contact-blink { animation: contactCursorBlink 0.8s infinite; }

        .landline-arm-gest { transform-origin: 52px 38px; animation: landlineGesticulate 1.8s ease-in-out infinite; }
        .phone-cord-anim { transform-origin: 30px 56px; animation: cordSpring 1.5s ease-in-out infinite; }
        .speech-wave { transform-origin: 36px 20px; animation: speechWaveEmit 1.2s ease-out infinite; }
      `}</style>

      {/* Container flush on top border of #contact-card — with generous center clearance for the red wire */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 z-20 flex justify-between px-2 sm:px-6 md:px-10 select-none -translate-y-full"
      >
        {/* ════════════ LEFT SIDE (1 on mobile, 2 on desktop) ════════════ */}
        <div className="relative flex items-end justify-end gap-2 sm:gap-6 md:gap-10 flex-1 pr-3 sm:pr-8 md:pr-16">
          {/* ── DUDE 1: STRESSED ON MOBILE PHONE (VISIBLE ON MOBILE) ── */}
          <div className="relative flex items-end block transform scale-85 sm:scale-95 md:scale-100 transition-transform origin-bottom-right">
            <svg
              className="w-20 h-24 sm:w-24 sm:h-28 overflow-visible"
              viewBox="0 0 80 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="stress-guy-anim" strokeLinecap="round" strokeLinejoin="round">
                {/* Spiky stressed hair */}
                <path d="M 38 10 Q 34 3 29 4" stroke="#262626" strokeWidth="1.6" />
                <path d="M 41 9 Q 39 1 34 2" stroke="#262626" strokeWidth="1.5" />
                <path d="M 44 10 Q 45 2 41 3" stroke="#262626" strokeWidth="1.4" />

                {/* Head */}
                <circle cx="40" cy="18" r="9.5" fill="#ffffff" stroke="#262626" strokeWidth="1.8" />

                {/* Stressed eyebrows */}
                <path d="M 34.5 14.5 L 37.5 15.5" stroke="#262626" strokeWidth="1.1" />
                <path d="M 42.5 15.5 L 39.5 14.5" stroke="#262626" strokeWidth="1.1" />

                {/* TWO WIDE STRESSED EYES */}
                <circle cx="36" cy="17" r="1.4" fill="#262626" />
                <circle cx="41" cy="17" r="1.4" fill="#262626" />
                {/* Stressed wavy mouth */}
                <path d="M 36 23 Q 38.5 21 40 23.5 Q 41.5 21 43 23" stroke="#262626" strokeWidth="1.3" fill="none" />

                {/* Flying sweat drop */}
                <g className="sweat-drop-1">
                  <path d="M 53 11 Q 57 9 55 13 Q 53 13 53 11 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="0.8" />
                </g>

                {/* Torso */}
                <path d="M 40 27.5 L 39 52" stroke="#262626" strokeWidth="2.4" />

                {/* Right arm holding smartphone to ear */}
                <path d="M 39 34 L 47 33 L 48.5 20.5" stroke="#262626" strokeWidth="2.2" />
                {/* Red Smartphone against ear */}
                <rect
                  x="47.5"
                  y="13"
                  width="4.5"
                  height="10.5"
                  rx="1.2"
                  fill="#ef4444"
                  stroke="#dc2626"
                  strokeWidth="1"
                  transform="rotate(6 47.5 13)"
                />
                <circle cx="48.5" cy="20.5" r="2.2" fill="#ef4444" stroke="#262626" strokeWidth="1" />

                {/* Left arm flailing in stress */}
                <g className="stress-flail">
                  <path d="M 39 34 L 30 38 L 24 28" stroke="#262626" strokeWidth="2.2" />
                  <circle cx="24" cy="28" r="2.5" fill="#ef4444" stroke="#262626" strokeWidth="1.1" />
                </g>

                {/* Legs pacing on card border Y=70 */}
                <path d="M 39 52 L 33 68.5 M 39 52 L 46 68.5" stroke="#262626" strokeWidth="2.4" />
                {/* Red Shoes touching border */}
                <path d="M 28 69.5 L 35 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
                <path d="M 44 69.5 L 51 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
              </g>
            </svg>
          </div>

          {/* ── DUDE 2: HOLDING FILE HUGGED TO CHEST (HIDDEN ON MOBILE) ── */}
          <div className="relative hidden md:flex items-end transform scale-85 sm:scale-95 md:scale-100 transition-transform origin-bottom-right">
            <svg
              className="w-22 h-24 sm:w-26 sm:h-28 overflow-visible"
              viewBox="0 0 90 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="file-hug-anim" strokeLinecap="round" strokeLinejoin="round">
                {/* Hair */}
                <path d="M 43 11 Q 38 5 33 7" stroke="#262626" strokeWidth="1.6" />
                <path d="M 45 10 Q 41 4 37 5" stroke="#262626" strokeWidth="1.4" />

                {/* Head */}
                <circle cx="45" cy="18" r="9.5" fill="#ffffff" stroke="#262626" strokeWidth="1.8" />

                {/* TWO WORRIED EYES looking down at slipping papers */}
                <circle cx="43" cy="18.5" r="1.4" fill="#262626" />
                <circle cx="48" cy="18.5" r="1.4" fill="#262626" />
                {/* Worried open mouth */}
                <circle cx="45" cy="23.5" r="1.6" fill="#262626" stroke="#262626" strokeWidth="0.6" />

                {/* Torso */}
                <path d="M 45 27.5 L 45 52" stroke="#262626" strokeWidth="2.4" />

                {/* ── FILE FOLDER HUGGED TIGHT VERTICALLY TO CHEST ── */}
                {/* Manila File Folder hugged against torso */}
                <rect
                  x="36"
                  y="30"
                  width="18"
                  height="22"
                  rx="2"
                  fill="#f59e0b"
                  stroke="#d97706"
                  strokeWidth="1.3"
                  transform="rotate(-5 36 30)"
                />
                {/* Top folder tab */}
                <path d="M 37 30 L 44 30 L 45 33 L 37 33 Z" fill="#d97706" />
                {/* White document inside */}
                <rect
                  x="38"
                  y="33"
                  width="14"
                  height="17"
                  rx="1"
                  fill="#ffffff"
                  stroke="#262626"
                  strokeWidth="1"
                  transform="rotate(-5 38 33)"
                />
                <line x1="40" y1="37" x2="48" y2="36" stroke="#ef4444" strokeWidth="1" />
                <line x1="40" y1="41" x2="47" y2="40" stroke="#94a3b8" strokeWidth="0.8" />

                {/* Both Arms Wrapped Around & Hugging the File to Chest */}
                <path d="M 45 32 Q 33 34 37 42" stroke="#262626" strokeWidth="2.2" />
                <circle cx="37" cy="42" r="2.5" fill="#ef4444" stroke="#262626" strokeWidth="1.2" />
                <path d="M 45 32 Q 57 34 53 42" stroke="#262626" strokeWidth="2.2" />
                <circle cx="53" cy="42" r="2.5" fill="#ef4444" stroke="#262626" strokeWidth="1.2" />

                {/* ── LOOSE PAPERS SLIPPING & FLUTTERING DOWN ── */}
                {/* Slipping Paper 1 */}
                <g className="p-slip-1" style={{ transformOrigin: "36px 48px" }}>
                  <rect x="30" y="46" width="8" height="11" rx="0.8" fill="#ffffff" stroke="#262626" strokeWidth="1" />
                  <line x1="32" y1="49" x2="36" y2="49" stroke="#ef4444" strokeWidth="0.8" />
                  <line x1="32" y1="52" x2="35" y2="52" stroke="#94a3b8" strokeWidth="0.8" />
                </g>
                {/* Slipping Paper 2 */}
                <g className="p-slip-2" style={{ transformOrigin: "52px 48px" }}>
                  <rect x="49" y="46" width="8" height="11" rx="0.8" fill="#ffffff" stroke="#262626" strokeWidth="1" />
                  <line x1="51" y1="49" x2="55" y2="49" stroke="#4ade80" strokeWidth="0.8" />
                  <line x1="51" y1="52" x2="54" y2="52" stroke="#94a3b8" strokeWidth="0.8" />
                </g>

                {/* Legs standing on card border Y=70 */}
                <path d="M 45 52 L 39 68.5 M 45 52 L 51 68.5" stroke="#262626" strokeWidth="2.4" />
                {/* Red Shoes touching border */}
                <path d="M 34 69.5 L 41 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
                <path d="M 49 69.5 L 56 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>

        {/* ════════════ RIGHT SIDE (1 on mobile, 2 on desktop) ════════════ */}
        <div className="relative flex items-end justify-start gap-2 sm:gap-6 md:gap-10 flex-1 pl-3 sm:pl-8 md:pr-16">
          {/* ── DUDE 3: HEADPHONES CODER AT DESK & CHAIR (HIDDEN ON MOBILE) ── */}
          <div className="relative hidden md:flex items-end transform scale-85 sm:scale-95 md:scale-100 transition-transform origin-bottom-left">
            <svg
              className="w-26 h-24 sm:w-30 sm:h-28 overflow-visible"
              viewBox="0 0 100 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeLinecap="round" strokeLinejoin="round">
                {/* ── DESK & CHAIR ── */}
                {/* Office Chair */}
                <path d="M 12 36 L 14 54" stroke="#334155" strokeWidth="2.5" />
                <path d="M 14 54 L 30 54" stroke="#334155" strokeWidth="2.8" />
                <path d="M 22 54 L 22 68" stroke="#262626" strokeWidth="2.5" />
                <path d="M 14 70 L 30 70" stroke="#262626" strokeWidth="2.4" />

                {/* Desk Surface (Y=44) */}
                <rect x="40" y="44" width="44" height="3" rx="1" fill="#334155" stroke="#1e293b" strokeWidth="1.3" />
                {/* Desk Legs touching border at Y=70 */}
                <path d="M 44 47 L 44 70 M 80 47 L 80 70" stroke="#262626" strokeWidth="2.4" />
                <path d="M 44 59 L 80 59" stroke="#94a3b8" strokeWidth="1.2" opacity="0.7" />

                {/* ── GOOGLE MEET / MS TEAMS VIDEO CALL ON MONITOR ── */}
                {/* Stand */}
                <path d="M 66 44 L 66 36" stroke="#262626" strokeWidth="2.2" />
                <path d="M 61 44 L 71 44" stroke="#262626" strokeWidth="1.8" />
                {/* Monitor Frame */}
                <rect x="53" y="14" width="26" height="22" rx="2.5" fill="#0f172a" stroke="#1e293b" strokeWidth="1.4" />
                {/* Top Webcam dot with green live light */}
                <circle cx="66" cy="15.2" r="0.6" fill="#22c55e" />

                {/* Video Call Screen */}
                <rect x="54.5" y="16.5" width="23" height="17.5" rx="1.5" fill="#090d16" />

                {/* ── 2x2 VIDEO CALL PARTICIPANTS GRID ── */}
                {/* Participant 1 (Top-Left: Active Speaker with glowing green border) */}
                <rect
                  x="55.5"
                  y="17.5"
                  width="10"
                  height="7"
                  rx="1"
                  fill="#1e293b"
                  stroke="#22c55e"
                  strokeWidth="0.8"
                />
                {/* Mini avatar head */}
                <circle cx="60.5" cy="20" r="1.6" fill="#ffffff" />
                <path d="M 58 23.5 C 58 22, 63 22, 63 23.5" stroke="#ffffff" strokeWidth="0.8" fill="#38bdf8" />
                <circle cx="64" cy="18.5" r="0.5" fill="#22c55e" />

                {/* Participant 2 (Top-Right: Teams Blue tile) */}
                <rect x="66.5" y="17.5" width="10" height="7" rx="1" fill="#1e293b" stroke="#334155" strokeWidth="0.5" />
                <circle cx="71.5" cy="20" r="1.6" fill="#ffffff" />
                <path d="M 69 23.5 C 69 22, 74 22, 74 23.5" stroke="#ffffff" strokeWidth="0.8" fill="#818cf8" />

                {/* Participant 3 (Bottom-Left: Meet Coral tile) */}
                <rect x="55.5" y="25.5" width="10" height="6.5" rx="1" fill="#1e293b" stroke="#334155" strokeWidth="0.5" />
                <circle cx="60.5" cy="27.8" r="1.4" fill="#ffffff" />
                <path d="M 58.5 31 C 58.5 29.8, 62.5 29.8, 62.5 31" stroke="#ffffff" strokeWidth="0.7" fill="#f43f5e" />

                {/* Participant 4 (Bottom-Right: Self video feed) */}
                <rect x="66.5" y="25.5" width="10" height="6.5" rx="1" fill="#1e293b" stroke="#334155" strokeWidth="0.5" />
                <circle cx="71.5" cy="27.8" r="1.4" fill="#ffffff" />
                <path d="M 69.5 31 C 69.5 29.8, 73.5 29.8, 73.5 31" stroke="#ffffff" strokeWidth="0.7" fill="#f59e0b" />

                {/* Bottom Call Control Bar */}
                <rect x="58" y="32.5" width="16" height="1.4" rx="0.7" fill="#0f172a" />
                {/* Red End Call button */}
                <circle cx="70.5" cy="33.2" r="0.6" fill="#ef4444" />
                {/* Mic & Cam icons */}
                <circle cx="61.5" cy="33.2" r="0.45" fill="#94a3b8" />
                <circle cx="64.5" cy="33.2" r="0.45" fill="#94a3b8" />

                {/* Keyboard on desk */}
                <rect x="42" y="41" width="12" height="3" rx="0.8" fill="#e2e8f0" stroke="#262626" strokeWidth="1" />

                {/* ── CODER STICKMAN WITH HEADPHONES ── */}
                {/* Head with Beat Bobbing */}
                <g className="hp-head-bob">
                  {/* Spiky hair */}
                  <path d="M 23 12 Q 18 6 13 8" stroke="#262626" strokeWidth="1.6" />
                  <path d="M 25 11 Q 20 5 16 6" stroke="#262626" strokeWidth="1.4" />

                  {/* Head */}
                  <circle cx="26" cy="20" r="9.5" fill="#ffffff" stroke="#262626" strokeWidth="1.8" />

                  {/* RED HEADPHONES OVER EARS */}
                  <path d="M 17 19 C 17 9, 35 9, 35 19" stroke="#262626" strokeWidth="2" fill="none" />
                  <rect x="15" y="16" width="3.5" height="8" rx="1.5" fill="#ef4444" stroke="#262626" strokeWidth="1.2" />
                  <rect x="33.5" y="16" width="3.5" height="8" rx="1.5" fill="#ef4444" stroke="#262626" strokeWidth="1.2" />

                  {/* TWO EYES */}
                  <circle cx="27" cy="19.5" r="1.3" fill="#262626" />
                  <circle cx="32" cy="19.5" r="1.3" fill="#262626" />
                  {/* Happy focused smile */}
                  <path d="M 27 24.5 Q 30 26.5 33 24.5" stroke="#262626" strokeWidth="1.4" fill="none" />
                </g>

                {/* Torso */}
                <path d="M 26 29.5 Q 26 42 24 54" stroke="#262626" strokeWidth="2.4" />

                {/* ── CROSSED ARMS (LISTENING TO VIDEO CALL) ── */}
                <g className="hp-head-bob">
                  {/* Left & Right arms crossed over chest */}
                  <path
                    d="M 26 35 C 32 37, 36 41, 34 44 C 32 46, 21 44, 23 40"
                    stroke="#262626"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <path d="M 26 36 L 31 43" stroke="#262626" strokeWidth="2.2" />
                  {/* Red gloved hands tucked at sides of crossed arms */}
                  <circle cx="34" cy="43" r="2.2" fill="#ef4444" stroke="#262626" strokeWidth="1.1" />
                  <circle cx="23" cy="40" r="2.2" fill="#ef4444" stroke="#262626" strokeWidth="1.1" />
                </g>

                {/* Legs seated in chair */}
                <path d="M 24 54 L 32 54" stroke="#262626" strokeWidth="2.5" />
                <path d="M 32 54 L 37 68.5" stroke="#262626" strokeWidth="2.3" />
                {/* Red shoe touching card border */}
                <path d="M 36 69.5 L 43 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
                <path d="M 28 54 L 32 67" stroke="#262626" strokeWidth="1.8" opacity="0.85" />
                <path d="M 31 68 L 36 68" stroke="#ef4444" strokeWidth="2.6" strokeLinecap="round" opacity="0.85" />
              </g>
            </svg>
          </div>

          {/* ── DUDE 4: TALKING ON LANDLINE PHONE (VISIBLE ON MOBILE) ── */}
          <div className="relative flex items-end block transform scale-85 sm:scale-95 md:scale-100 transition-transform origin-bottom-left">
            <svg
              className="w-22 h-24 sm:w-26 sm:h-28 overflow-visible"
              viewBox="0 0 90 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeLinecap="round" strokeLinejoin="round">
                {/* Hair */}
                <path d="M 39 11 Q 34 5 29 7" stroke="#262626" strokeWidth="1.6" />
                <path d="M 41 10 Q 37 4 33 5" stroke="#262626" strokeWidth="1.4" />

                {/* Head */}
                <circle cx="42" cy="18" r="9.5" fill="#ffffff" stroke="#262626" strokeWidth="1.8" />

                {/* TWO ANIMATED TALKING EYES */}
                <circle cx="40" cy="17" r="1.4" fill="#262626" />
                <circle cx="45" cy="17" r="1.4" fill="#262626" />
                {/* Wide talking mouth */}
                <path d="M 39 22 Q 43 26 45 22 Z" fill="#262626" stroke="#262626" strokeWidth="0.8" />

                {/* Speech Sound Waves emitting from mouth */}
                <path d="M 50 15 Q 54 20 50 25" stroke="#ef4444" strokeWidth="1.5" fill="none" className="speech-wave" />
                <path d="M 54 12 Q 59 20 54 28" stroke="#ef4444" strokeWidth="1.6" fill="none" className="speech-wave" />

                {/* Torso */}
                <path d="M 42 27.5 L 42 52" stroke="#262626" strokeWidth="2.4" />

                {/* ── LANDLINE DESK STAND & BASE ── */}
                {/* Mini pedestal / table stand */}
                <rect x="14" y="52" width="16" height="18" rx="1.5" fill="#334155" stroke="#1e293b" strokeWidth="1.4" />
                {/* Landline telephone base */}
                <polygon points="15,52 29,52 28,45 16,45" fill="#0f172a" stroke="#1e293b" strokeWidth="1.2" />
                {/* Dial pad buttons & red indicator */}
                <rect x="18" y="48" width="7" height="3.5" rx="0.5" fill="#e2e8f0" />
                <circle cx="26" cy="46.5" r="0.7" fill="#ef4444" />

                {/* Left hand holding classic phone handset to ear */}
                <path d="M 42 34 L 34 32 L 35 19" stroke="#262626" strokeWidth="2.2" />
                {/* Classic telephone handset (receiver) */}
                <g transform="rotate(-15 35 19)">
                  <rect x="32" y="10" width="4.5" height="18" rx="2" fill="#ef4444" stroke="#dc2626" strokeWidth="1.1" />
                  <circle cx="34.2" cy="12" r="3" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
                  <circle cx="34.2" cy="26" r="3" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
                  <circle cx="34.2" cy="19" r="2.2" fill="#ef4444" stroke="#262626" strokeWidth="1.1" />
                </g>

                {/* Bouncy Spring Coiled Phone Cord */}
                <g className="phone-cord-anim">
                  <path
                    d="M 18 47 Q 22 44 20 39 Q 24 35 21 30 Q 25 26 23 21 L 30 22"
                    stroke="#ef4444"
                    strokeWidth="1.6"
                    fill="none"
                  />
                </g>

                {/* Right arm gesticulating */}
                <g className="landline-arm-gest">
                  <path d="M 42 34 L 52 36 L 60 29" stroke="#262626" strokeWidth="2.2" />
                  <circle cx="60" cy="29" r="2.5" fill="#ef4444" stroke="#262626" strokeWidth="1.2" />
                </g>

                {/* Legs standing on card border Y=70 */}
                <path d="M 42 52 L 38 68.5 M 42 52 L 48 68.5" stroke="#262626" strokeWidth="2.4" />
                {/* Red Shoes touching border line */}
                <path d="M 33 69.5 L 40 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
                <path d="M 46 69.5 L 53 69.5" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
