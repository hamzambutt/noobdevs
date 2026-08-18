"use client";

import React from "react";

export default function SittingDudes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-[68px] inset-x-0 z-20 flex justify-between px-1 sm:px-4 md:px-8 select-none"
    >
      {/* Embedded SVG keyframe styles for smooth hardware-accelerated animations */}
      <style>{`
        @keyframes dudeHairBlow {
          0%, 100% { transform: rotate(0deg) skewX(0deg); }
          25% { transform: rotate(8deg) skewX(6deg) scaleY(0.96); }
          55% { transform: rotate(16deg) skewX(12deg) scaleY(1.03); }
          80% { transform: rotate(6deg) skewX(4deg); }
        }
        @keyframes dudeLegSwingA {
          0%, 100% { transform: rotate(-16deg); }
          50% { transform: rotate(18deg); }
        }
        @keyframes dudeLegSwingB {
          0%, 100% { transform: rotate(18deg); }
          50% { transform: rotate(-14deg); }
        }
        @keyframes dudeHeadBob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-2px) rotate(2deg); }
        }
        @keyframes dudeArmWave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-18deg); }
          50% { transform: rotate(4deg); }
          75% { transform: rotate(-14deg); }
        }
        .d-hair-1 { transform-origin: 40px 14px; animation: dudeHairBlow 2.2s ease-in-out infinite; }
        .d-hair-2 { transform-origin: 40px 14px; animation: dudeHairBlow 1.9s ease-in-out infinite 0.3s; }
        .d-hair-3 { transform-origin: 40px 14px; animation: dudeHairBlow 2.5s ease-in-out infinite 0.6s; }
        .d-hair-4 { transform-origin: 40px 14px; animation: dudeHairBlow 2.0s ease-in-out infinite; }
        .d-hair-5 { transform-origin: 40px 14px; animation: dudeHairBlow 2.3s ease-in-out infinite 0.4s; }
        .d-hair-6 { transform-origin: 40px 14px; animation: dudeHairBlow 1.8s ease-in-out infinite 0.2s; }
        .d-leg-a1 { transform-origin: 47px 68px; animation: dudeLegSwingA 2.4s ease-in-out infinite; }
        .d-leg-b1 { transform-origin: 43px 68px; animation: dudeLegSwingB 2.8s ease-in-out infinite 0.4s; }
        .d-leg-a2 { transform-origin: 43px 68px; animation: dudeLegSwingA 2.6s ease-in-out infinite 0.2s; }
        .d-leg-b2 { transform-origin: 48px 68px; animation: dudeLegSwingB 3.1s ease-in-out infinite; }
        .d-leg-a3 { transform-origin: 44px 68px; animation: dudeLegSwingA 2.2s ease-in-out infinite 0.5s; }
        .d-leg-b3 { transform-origin: 38px 68px; animation: dudeLegSwingB 3.4s ease-in-out infinite 0.1s; }
        .d-leg-a4 { transform-origin: 38px 68px; animation: dudeLegSwingA 1.6s ease-in-out infinite 0.4s; }
        .d-leg-b4 { transform-origin: 32px 68px; animation: dudeLegSwingB 1.6s ease-in-out infinite; }
        .d-leg-a5 { transform-origin: 32px 68px; animation: dudeLegSwingA 2.5s ease-in-out infinite 0.3s; }
        .d-leg-b5 { transform-origin: 38px 68px; animation: dudeLegSwingB 2.9s ease-in-out infinite 0.7s; }
        .d-leg-a6 { transform-origin: 35px 68px; animation: dudeLegSwingA 2.0s ease-in-out infinite 0.1s; }
        .d-leg-b6 { transform-origin: 41px 68px; animation: dudeLegSwingB 2.3s ease-in-out infinite 0.6s; }
        .d-head-4 { transform-origin: 40px 22px; animation: dudeHeadBob 1.6s ease-in-out infinite; }
        .d-arm-5 { transform-origin: 39px 44px; animation: dudeArmWave 2.4s ease-in-out infinite; }
      `}</style>

      {/* LEFT SITTING DUDES (3 Dudes on left of the central line) */}
      <div className="flex items-end justify-end gap-3 sm:gap-6 md:gap-10 pr-6 sm:pr-10 md:pr-14 flex-1">
        {/* Dude 1: Coder with Laptop (2 eyes, short hair, red power dot) */}
        <div className="relative transform scale-90 sm:scale-100 transition-transform">
          <svg
            className="w-16 h-24 sm:w-20 sm:h-28 overflow-visible"
            viewBox="0 0 80 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#262626" strokeLinecap="round" strokeLinejoin="round">
              {/* Short neat hair tufts blowing in wind */}
              <g className="d-hair-1">
                <path d="M 38 12 Q 33 6 27 7" strokeWidth="1.6" />
                <path d="M 40 11 Q 35 4 30 6" strokeWidth="1.4" />
                <path d="M 43 12 Q 38 7 34 8" strokeWidth="1.3" />
              </g>

              {/* Head */}
              <circle cx="40" cy="22" r="11" fill="#ffffff" strokeWidth="1.8" />
              <path d="M 51 22 A 11 11 0 1 1 50.9 21" strokeWidth="0.8" opacity="0.4" />

              {/* Two Eyes */}
              <circle cx="37" cy="21" r="1.4" fill="#262626" stroke="none" />
              <circle cx="44" cy="21" r="1.4" fill="#262626" stroke="none" />
              {/* Smile */}
              <path d="M 38 27 Q 41 29 44 27" strokeWidth="1.4" />

              {/* Torso */}
              <path d="M 40 33 Q 39 50 37 68" strokeWidth="2.2" />

              {/* Arms holding laptop */}
              <path d="M 39 42 L 48 54 L 56 50" strokeWidth="1.8" />

              {/* Laptop with subtle red accent */}
              <path d="M 46 56 L 60 56" strokeWidth="2" stroke="#333" />
              <path d="M 52 56 L 62 44" strokeWidth="1.8" stroke="#333" />
              {/* Minor red accent: glowing red Apple/Noobdevs dot */}
              <circle cx="57" cy="50" r="1.2" fill="#ef4444" stroke="none" />

              {/* Upper Thighs sitting flush on line Y=68 */}
              <path d="M 37 68 L 47 68" strokeWidth="2.4" />

              {/* Dangling Legs */}
              <g className="d-leg-a1">
                <path d="M 47 68 Q 48 81 46 94" strokeWidth="2" />
                <path d="M 46 94 Q 51 96 55 94" strokeWidth="2.2" />
              </g>
              <g className="d-leg-b1">
                <path d="M 43 68 Q 42 81 40 94" strokeWidth="1.8" opacity="0.85" />
                <path d="M 40 94 Q 44 96 48 94" strokeWidth="2" />
              </g>
            </g>
          </svg>
        </div>

        {/* Dude 2: AI Engineer with Red Specs & Coffee */}
        <div className="relative transform scale-90 sm:scale-100 transition-transform">
          <svg
            className="w-16 h-24 sm:w-20 sm:h-28 overflow-visible"
            viewBox="0 0 80 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#262626" strokeLinecap="round" strokeLinejoin="round">
              {/* Short neat hair tufts blowing in wind */}
              <g className="d-hair-2">
                <path d="M 39 12 Q 33 5 28 7" strokeWidth="1.6" />
                <path d="M 41 11 Q 36 4 31 5" strokeWidth="1.4" />
                <path d="M 43 13 Q 39 7 35 9" strokeWidth="1.3" />
              </g>

              {/* Head */}
              <circle cx="40" cy="22" r="11" fill="#ffffff" strokeWidth="1.8" />
              <path d="M 51 22 A 11 11 0 1 1 50.9 21" strokeWidth="0.8" opacity="0.4" />

              {/* Red Specs over Two Eyes (Minor red accent) */}
              <circle cx="36" cy="21" r="3.2" stroke="#ef4444" strokeWidth="1.3" fill="none" />
              <circle cx="44" cy="21" r="3.2" stroke="#ef4444" strokeWidth="1.3" fill="none" />
              <path d="M 39.2 21 L 40.8 21" stroke="#ef4444" strokeWidth="1.2" />
              {/* Two Pupils */}
              <circle cx="36" cy="21" r="1.2" fill="#262626" stroke="none" />
              <circle cx="44" cy="21" r="1.2" fill="#262626" stroke="none" />

              {/* Smirk */}
              <path d="M 38 27 Q 41 29 44 27" strokeWidth="1.4" />

              {/* Torso */}
              <path d="M 40 33 Q 40 50 39 68" strokeWidth="2.2" />

              {/* Arms holding coffee mug */}
              <path d="M 40 42 Q 47 48 45 54" strokeWidth="1.8" />
              <path d="M 40 42 Q 34 49 41 54" strokeWidth="1.6" />
              {/* Coffee mug */}
              <rect x="42" y="50" width="7" height="8" rx="1.5" fill="#ffffff" stroke="#262626" strokeWidth="1.4" />
              <path d="M 49 52 Q 52 54 49 56" strokeWidth="1.2" />
              {/* Steam wisp with minor red tint */}
              <path d="M 45 47 Q 47 44 45 42" stroke="#ef4444" strokeWidth="1" opacity="0.7" />

              {/* Upper Thighs sitting flush on line Y=68 */}
              <path d="M 39 68 L 48 68" strokeWidth="2.4" />

              {/* Dangling Legs */}
              <g className="d-leg-b2">
                <path d="M 48 68 Q 49 81 50 94" strokeWidth="2" />
                <path d="M 50 94 Q 55 96 59 94" strokeWidth="2.2" />
              </g>
              <g className="d-leg-a2">
                <path d="M 43 68 Q 40 81 38 94" strokeWidth="1.8" opacity="0.85" />
                <path d="M 38 94 Q 42 96 46 94" strokeWidth="2" />
              </g>
            </g>
          </svg>
        </div>

        {/* Dude 3: Lounging Thinker leaning on arm (2 eyes, short hair, red wristband) */}
        <div className="relative transform scale-90 sm:scale-100 transition-transform">
          <svg
            className="w-16 h-24 sm:w-20 sm:h-28 overflow-visible"
            viewBox="0 0 80 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#262626" strokeLinecap="round" strokeLinejoin="round">
              {/* Short messy hair tufts blowing in wind */}
              <g className="d-hair-3">
                <path d="M 37 12 Q 31 5 25 7" strokeWidth="1.6" />
                <path d="M 39 11 Q 34 3 29 5" strokeWidth="1.4" />
                <path d="M 42 12 Q 37 6 33 8" strokeWidth="1.3" />
              </g>

              {/* Head */}
              <circle cx="39" cy="22" r="11" fill="#ffffff" strokeWidth="1.8" />
              <path d="M 50 22 A 11 11 0 1 1 49.9 21" strokeWidth="0.8" opacity="0.4" />

              {/* Two Eyes */}
              <circle cx="36" cy="21" r="1.4" fill="#262626" stroke="none" />
              <circle cx="43" cy="21" r="1.4" fill="#262626" stroke="none" />
              {/* Happy mouth */}
              <path d="M 37 27 Q 41 29 44 26" strokeWidth="1.4" />

              {/* Torso leaning back */}
              <path d="M 39 33 Q 36 50 33 68" strokeWidth="2.2" />

              {/* Support arm braced on ledge line */}
              <path d="M 36 43 L 24 58 L 22 68" strokeWidth="1.8" />

              {/* Front arm resting casually on knee */}
              <path d="M 37 43 Q 43 51 45 61" strokeWidth="1.8" />
              {/* Minor red accent: red wristband */}
              <path d="M 43.5 57 L 46.5 58" stroke="#ef4444" strokeWidth="2.2" />

              {/* Upper Thighs sitting flush on line Y=68 */}
              <path d="M 33 68 L 44 68" strokeWidth="2.4" />

              {/* Dangling Legs */}
              <g className="d-leg-a3">
                <path d="M 44 68 Q 46 81 47 94" strokeWidth="2" />
                <path d="M 47 94 Q 52 96 56 94" strokeWidth="2.2" />
              </g>
              <g className="d-leg-b3">
                <path d="M 38 68 Q 36 81 35 94" strokeWidth="1.8" opacity="0.85" />
                <path d="M 35 94 Q 39 96 43 94" strokeWidth="2" />
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* RIGHT SITTING DUDES (3 Dudes on right of the central line) */}
      <div className="flex items-end justify-start gap-3 sm:gap-6 md:gap-10 pl-6 sm:pl-10 md:pl-14 flex-1">
        {/* Dude 4: DevOps with Red Headphones (2 eyes, short hair) */}
        <div className="relative transform scale-90 sm:scale-100 transition-transform">
          <svg
            className="w-16 h-24 sm:w-20 sm:h-28 overflow-visible"
            viewBox="0 0 80 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#262626" strokeLinecap="round" strokeLinejoin="round">
              {/* Short neat hair tufts blowing in wind */}
              <g className="d-hair-4">
                <path d="M 41 12 Q 47 5 53 7" strokeWidth="1.6" />
                <path d="M 39 11 Q 44 4 49 5" strokeWidth="1.4" />
                <path d="M 37 13 Q 41 7 46 8" strokeWidth="1.3" />
              </g>

              {/* Head with rhythmic beat bob */}
              <g className="d-head-4">
                <circle cx="40" cy="22" r="11" fill="#ffffff" strokeWidth="1.8" />
                <path d="M 51 22 A 11 11 0 1 1 50.9 21" strokeWidth="0.8" opacity="0.4" />

                {/* Headphone Band over head */}
                <path d="M 29 20 C 29 10, 51 10, 51 20" stroke="#333" strokeWidth="2" fill="none" />
                {/* Red Headphone Ear Cups (Minor red accent) */}
                <rect x="27" y="17" width="4.5" height="9" rx="2" fill="#ef4444" stroke="#262626" strokeWidth="1.2" />
                <rect x="48.5" y="17" width="4.5" height="9" rx="2" fill="#ef4444" stroke="#262626" strokeWidth="1.2" />

                {/* Two Eyes */}
                <circle cx="36" cy="21" r="1.4" fill="#262626" stroke="none" />
                <circle cx="43" cy="21" r="1.4" fill="#262626" stroke="none" />
                {/* Smile */}
                <path d="M 37 27 Q 40 29 43 27" strokeWidth="1.4" />
              </g>

              {/* Torso */}
              <path d="M 40 33 Q 41 50 41 68" strokeWidth="2.2" />

              {/* Hands resting on knees, tapping */}
              <path d="M 40 42 Q 33 54 35 66" strokeWidth="1.8" />
              <path d="M 40 42 Q 47 54 45 66" strokeWidth="1.8" />

              {/* Upper Thighs sitting flush on line Y=68 */}
              <path d="M 41 68 L 31 68" strokeWidth="2.4" />

              {/* Dangling Legs */}
              <g className="d-leg-b4">
                <path d="M 32 68 Q 31 81 30 94" strokeWidth="2" />
                <path d="M 30 94 Q 25 96 21 94" strokeWidth="2.2" />
              </g>
              <g className="d-leg-a4">
                <path d="M 37 68 Q 40 81 41 94" strokeWidth="1.8" opacity="0.85" />
                <path d="M 41 94 Q 37 96 33 94" strokeWidth="2" />
              </g>
            </g>
          </svg>
        </div>

        {/* Dude 5: Cheerful Waving Stickman (2 eyes, short hair, red bowtie) */}
        <div className="relative transform scale-90 sm:scale-100 transition-transform">
          <svg
            className="w-16 h-24 sm:w-20 sm:h-28 overflow-visible"
            viewBox="0 0 80 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#262626" strokeLinecap="round" strokeLinejoin="round">
              {/* Short neat hair tufts blowing in wind */}
              <g className="d-hair-5">
                <path d="M 41 12 Q 47 5 53 7" strokeWidth="1.6" />
                <path d="M 39 11 Q 44 4 49 6" strokeWidth="1.4" />
                <path d="M 37 13 Q 41 7 45 9" strokeWidth="1.3" />
              </g>

              {/* Head */}
              <circle cx="40" cy="22" r="11" fill="#ffffff" strokeWidth="1.8" />
              <path d="M 51 22 A 11 11 0 1 1 50.9 21" strokeWidth="0.8" opacity="0.4" />

              {/* Two Cheerful Eyes */}
              <circle cx="36" cy="21" r="1.4" fill="#262626" stroke="none" />
              <circle cx="44" cy="21" r="1.4" fill="#262626" stroke="none" />
              {/* Big friendly smile */}
              <path d="M 35 26 Q 40 30 45 26" strokeWidth="1.5" />

              {/* Red Bow Tie (Minor red accent) */}
              <path d="M 40 33 L 35 30 L 36 36 Z" fill="#ef4444" stroke="#dc2626" strokeWidth="0.8" />
              <path d="M 40 33 L 45 30 L 44 36 Z" fill="#ef4444" stroke="#dc2626" strokeWidth="0.8" />
              <circle cx="40" cy="33" r="1.3" fill="#b91c1c" stroke="none" />

              {/* Torso */}
              <path d="M 40 33 Q 40 50 40 68" strokeWidth="2.2" />

              {/* Left hand braced on ledge line */}
              <path d="M 40 42 L 48 56 L 51 68" strokeWidth="1.8" />

              {/* Right Waving Arm */}
              <g className="d-arm-5">
                <path d="M 39 42 Q 28 35 24 24" strokeWidth="1.8" />
                <path d="M 24 24 Q 20 18 22 14 Q 26 14 27 20" strokeWidth="1.5" />
              </g>

              {/* Upper Thighs sitting flush on line Y=68 */}
              <path d="M 40 68 L 31 68" strokeWidth="2.4" />

              {/* Dangling Legs */}
              <g className="d-leg-a5">
                <path d="M 32 68 Q 30 81 28 94" strokeWidth="2" />
                <path d="M 28 94 Q 23 96 19 94" strokeWidth="2.2" />
              </g>
              <g className="d-leg-b5">
                <path d="M 38 68 Q 40 81 41 94" strokeWidth="1.8" opacity="0.85" />
                <path d="M 41 94 Q 37 96 33 94" strokeWidth="2" />
              </g>
            </g>
          </svg>
        </div>

        {/* Dude 6: Foot-kicking Chill Dev (2 eyes, short hair, red sneaker soles) */}
        <div className="relative transform scale-90 sm:scale-100 transition-transform">
          <svg
            className="w-16 h-24 sm:w-20 sm:h-28 overflow-visible"
            viewBox="0 0 80 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#262626" strokeLinecap="round" strokeLinejoin="round">
              {/* Short spiky hair tufts blowing in wind */}
              <g className="d-hair-6">
                <path d="M 41 12 Q 47 5 53 7" strokeWidth="1.6" />
                <path d="M 39 11 Q 44 4 49 5" strokeWidth="1.4" />
                <path d="M 37 13 Q 41 7 46 9" strokeWidth="1.3" />
              </g>

              {/* Head */}
              <circle cx="40" cy="22" r="11" fill="#ffffff" strokeWidth="1.8" />
              <path d="M 51 22 A 11 11 0 1 1 50.9 21" strokeWidth="0.8" opacity="0.4" />

              {/* Two Eyes */}
              <circle cx="36" cy="21" r="1.4" fill="#262626" stroke="none" />
              <circle cx="43" cy="21" r="1.4" fill="#262626" stroke="none" />
              {/* Smile */}
              <path d="M 36 27 Q 40 29 44 27" strokeWidth="1.4" />

              {/* Torso */}
              <path d="M 40 33 Q 42 50 44 68" strokeWidth="2.2" />

              {/* Hands holding the edge line */}
              <path d="M 40 42 L 33 55 L 32 68" strokeWidth="1.8" />
              <path d="M 41 42 L 50 55 L 51 68" strokeWidth="1.8" />

              {/* Upper Thighs sitting flush on line Y=68 */}
              <path d="M 44 68 L 34 68" strokeWidth="2.4" />

              {/* Dangling Legs with Red Sneaker Soles (Minor red accent) */}
              <g className="d-leg-a6">
                <path d="M 35 68 Q 32 81 29 94" strokeWidth="2" />
                <path d="M 29 94 Q 23 95 19 93" strokeWidth="2" />
                {/* Red sole */}
                <path d="M 20 94.5 L 28 95.5" stroke="#ef4444" strokeWidth="1.8" />
              </g>
              <g className="d-leg-b6">
                <path d="M 41 68 Q 43 81 45 94" strokeWidth="1.8" opacity="0.85" />
                <path d="M 45 94 Q 39 95 35 93" strokeWidth="2" />
                {/* Red sole */}
                <path d="M 36 94.5 L 44 95.5" stroke="#ef4444" strokeWidth="1.8" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
