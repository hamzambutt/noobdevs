"use client";

import React from "react";

/**
 * Expressive Stickman Emoji Faces for Team Avatars
 * 
 * 0: Ahmad Hassan    - Smart AI/ML stickman face (Tech glasses/visor, antenna spark, cool smirk)
 * 1: Ali Tayyab      - Dev coder stickman face (Square developer glasses, cheeky smile)
 * 2: Hamza Masud     - Cool backend stickman face (Slick sunglasses/shades, confident grin)
 * 3: Muzammail Haider- MLOps stickman face (Dev headset with mic, enthusiastic happy eyes)
 * 4: Talha Niazi     - Deep Learning stickman face (Round spectacles, starry curious wink/eyes)
 * 5: Wajahat Ali     - Joyful App Creator stickman face (Starry eyes, big bright open smile, blush)
 */

export function TeamEmoteAvatar({ index }: { index: number }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-1 select-none">
      <style>{`
        @keyframes faceBob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-1.5px) rotate(2deg); }
        }
        @keyframes antennaBlink {
          0%, 100% { transform: scale(0.85); opacity: 0.5; }
          50% { transform: scale(1.25); opacity: 1; filter: drop-shadow(0 0 3px #ef4444); }
        }
        @keyframes eyesBlink {
          0%, 94%, 100% { transform: scaleY(1); }
          97% { transform: scaleY(0.1); }
        }
        @keyframes starTwinkle {
          0%, 100% { transform: scale(0.85) rotate(0deg); opacity: 0.7; }
          50% { transform: scale(1.2) rotate(45deg); opacity: 1; }
        }
        @keyframes glassesGlint {
          0%, 80%, 100% { opacity: 0; transform: translateX(-4px); }
          90% { opacity: 0.9; transform: translateX(4px); }
        }

        .stick-face { transform-origin: center; animation: faceBob 3s ease-in-out infinite; }
        .blink-eyes { transform-origin: center; animation: eyesBlink 4s ease-in-out infinite; }
        .ahmad-antenna { transform-origin: 24px 6px; animation: antennaBlink 1.4s ease-in-out infinite; }
        .star-spark { transform-origin: center; animation: starTwinkle 2s ease-in-out infinite; }
      `}</style>

      {/* ── 0: AHMAD HASSAN (AI/ML · DevOps) ── */}
      {index === 0 && (
        <svg
          className="w-11 h-11 sm:w-12 sm:h-12 overflow-visible stick-face"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* AI Antenna on top of head */}
          <path d="M 24 9 L 24 5" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
          <circle className="ahmad-antenna" cx="24" cy="4" r="2.2" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />

          {/* Stickman Head */}
          <circle cx="24" cy="25" r="16" fill="#ffffff" stroke="#0f172a" strokeWidth="2.6" />

          {/* Futuristic Cyber Visor / Tech Glasses */}
          <rect x="13" y="19.5" width="22" height="8.5" rx="3.5" fill="#0f172a" stroke="#0f172a" strokeWidth="1" />
          {/* Glowing visor lens */}
          <rect x="15" y="21" width="18" height="5.5" rx="2" fill="#ef4444" />
          <line x1="17" y1="23.5" x2="31" y2="23.5" stroke="#fecaca" strokeWidth="1.2" strokeLinecap="round" />

          {/* Smart Smirk */}
          <path d="M 20 32.5 Q 24 35.5 28 32" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          {/* Little Cheek Blush */}
          <circle cx="12" cy="29" r="1.5" fill="#fca5a5" opacity="0.8" />
          <circle cx="36" cy="29" r="1.5" fill="#fca5a5" opacity="0.8" />
        </svg>
      )}

      {/* ── 1: ALI TAYYAB (Software Engineer · DevOps) ── */}
      {index === 1 && (
        <svg
          className="w-11 h-11 sm:w-12 sm:h-12 overflow-visible stick-face"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hair tuft */}
          <path d="M 21 9 Q 23 5 27 6" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
          <path d="M 24 8 Q 27 4 30 6" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />

          {/* Stickman Head */}
          <circle cx="24" cy="25" r="16" fill="#ffffff" stroke="#0f172a" strokeWidth="2.6" />

          {/* Dev Glasses (Bold Black Frames) */}
          <rect x="14" y="20" width="8.5" height="7" rx="2" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
          <rect x="25.5" y="20" width="8.5" height="7" rx="2" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
          <line x1="22.5" y1="23.5" x2="25.5" y2="23.5" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />

          {/* Eyes behind glasses */}
          <circle className="blink-eyes" cx="18.2" cy="23.5" r="1.6" fill="#0f172a" />
          <circle className="blink-eyes" cx="29.7" cy="23.5" r="1.6" fill="#0f172a" />

          {/* Cheeky coder grin */}
          <path d="M 19 32 Q 24 36 29 32" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        </svg>
      )}

      {/* ── 2: HAMZA MASUD (Backend Developer · Data Engineer) ── */}
      {index === 2 && (
        <svg
          className="w-11 h-11 sm:w-12 sm:h-12 overflow-visible stick-face"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stickman Head */}
          <circle cx="24" cy="25" r="16" fill="#ffffff" stroke="#0f172a" strokeWidth="2.6" />

          {/* Cool Black Sunglasses / Shades */}
          <path d="M 13 21.5 L 35 21.5 L 33 27.5 Q 29 28.5 25.5 27.5 L 24 23 L 22.5 27.5 Q 19 28.5 15 27.5 Z" fill="#0f172a" />
          {/* Shades Glint */}
          <line x1="16" y1="23" x2="21" y2="26" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
          <line x1="27" y1="23" x2="32" y2="26" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />

          {/* Confident Wide Smile */}
          <path d="M 18 32 Q 24 37 30 32" stroke="#0f172a" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          <path d="M 29.5 31.5 L 31 33" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}

      {/* ── 3: MUZAMMAIL HAIDER (AI/ML Engineer · DevOps) ── */}
      {index === 3 && (
        <svg
          className="w-11 h-11 sm:w-12 sm:h-12 overflow-visible stick-face"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Headset Arc over Head */}
          <path d="M 10 22 Q 24 7 38 22" stroke="#0f172a" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          {/* Ear pads */}
          <rect x="7.5" y="19" width="3.5" height="9" rx="1.7" fill="#ef4444" stroke="#0f172a" strokeWidth="1.5" />
          <rect x="37" y="19" width="3.5" height="9" rx="1.7" fill="#ef4444" stroke="#0f172a" strokeWidth="1.5" />
          {/* Microphone boom */}
          <path d="M 10 26 Q 13 34 20 33" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <circle cx="21" cy="33" r="1.8" fill="#ef4444" />

          {/* Stickman Head */}
          <circle cx="24" cy="25" r="16" fill="#ffffff" stroke="#0f172a" strokeWidth="2.6" />

          {/* Determined, Happy Eyes */}
          <circle className="blink-eyes" cx="19" cy="22" r="2" fill="#0f172a" />
          <circle className="blink-eyes" cx="29" cy="22" r="2" fill="#0f172a" />
          {/* Eyebrows */}
          <path d="M 17 18 Q 19.5 16.5 22 18" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M 26 18 Q 28.5 16.5 31 18" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" fill="none" />

          {/* Big Open Happy Smile */}
          <path d="M 19 28 Q 24 35 29 28 Z" fill="#ef4444" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      )}

      {/* ── 4: TALHA NIAZI (AI/ML Engineer · DevOps) ── */}
      {index === 4 && (
        <svg
          className="w-11 h-11 sm:w-12 sm:h-12 overflow-visible stick-face"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stickman Head */}
          <circle cx="24" cy="25" r="16" fill="#ffffff" stroke="#0f172a" strokeWidth="2.6" />

          {/* Round Smart Spectacles */}
          <circle cx="18" cy="22" r="4.5" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
          <circle cx="30" cy="22" r="4.5" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
          <line x1="22.5" y1="22" x2="25.5" y2="22" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />

          {/* Left Eye: Curious Spark */}
          <circle cx="18" cy="22" r="1.6" fill="#0f172a" />
          {/* Right Eye: Star Twinkle */}
          <g className="star-spark">
            <path d="M 30 19.5 L 30 24.5 M 27.5 22 L 32.5 22" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* Thinker Expression Smile */}
          <path d="M 20 31.5 Q 24 34.5 28 31.5" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          {/* Little Blush Marks */}
          <line x1="12" y1="27" x2="14" y2="29" stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="34" y1="27" x2="36" y2="29" stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}

      {/* ── 5: WAJAHAT ALI (Application · AI) ── */}
      {index === 5 && (
        <svg
          className="w-11 h-11 sm:w-12 sm:h-12 overflow-visible stick-face"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Magic Sparkle on top right */}
          <g className="star-spark">
            <path d="M 37 6 L 37 12 M 34 9 L 40 9" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Stickman Head */}
          <circle cx="24" cy="25" r="16" fill="#ffffff" stroke="#0f172a" strokeWidth="2.6" />

          {/* Joyful Crescent Happy Eyes */}
          <path className="blink-eyes" d="M 16 21 Q 19 17 22 21" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path className="blink-eyes" d="M 26 21 Q 29 17 32 21" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Big Open Joyful Mouth */}
          <path d="M 18 27 Q 24 36 30 27 Z" fill="#ef4444" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round" />

          {/* Cute Rosy Cheeks */}
          <circle cx="13" cy="27" r="2.2" fill="#fca5a5" />
          <circle cx="35" cy="27" r="2.2" fill="#fca5a5" />
        </svg>
      )}

      {/* Fallback for any other index */}
      {index > 5 && (
        <svg
          className="w-11 h-11 sm:w-12 sm:h-12 overflow-visible stick-face"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="16" fill="#ffffff" stroke="#0f172a" strokeWidth="2.6" />
          <circle cx="19" cy="21" r="2" fill="#0f172a" />
          <circle cx="29" cy="21" r="2" fill="#0f172a" />
          <path d="M 19 29 Q 24 34 29 29" stroke="#0f172a" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        </svg>
      )}
    </div>
  );
}