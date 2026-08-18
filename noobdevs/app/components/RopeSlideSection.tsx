"use client";

import React, { useEffect, useState } from "react";

export default function RopeSlideSection({ isLit }: { isLit?: boolean }) {
  const [slideProgress, setSlideProgress] = useState(0);
  const [ropeHeight, setRopeHeight] = useState(240);
  const [lateralAmp, setLateralAmp] = useState(64);

  useEffect(() => {
    const updateGeometry = () => {
      const aboutCard = document.getElementById("about-card");
      const capsCard = document.getElementById("capabilities-card");
      if (aboutCard && capsCard) {
        const aboutRect = aboutCard.getBoundingClientRect();
        const capsRect = capsCard.getBoundingClientRect();
        const dist = window.scrollY + capsRect.top - (window.scrollY + aboutRect.bottom);
        if (dist > 50) setRopeHeight(dist);
      }
      const W = window.innerWidth;
      setLateralAmp(Math.min(W * 0.08, 64));
    };

    updateGeometry();
    window.addEventListener("resize", updateGeometry);

    const onScroll = () => {
      const aboutCard = document.getElementById("about-card");
      const capsCard = document.getElementById("capabilities-card");
      if (!aboutCard) return;

      const aboutRect = aboutCard.getBoundingClientRect();
      const capsRect = capsCard ? capsCard.getBoundingClientRect() : null;

      // Start when about card bottom is around 80% of viewport
      const startY = window.innerHeight * 0.8;
      const endY = window.innerHeight * 0.35;

      const currentTop = aboutRect.bottom;
      const totalSpan = startY - endY;
      const prog = Math.min(Math.max((startY - currentTop) / totalSpan, 0), 1);

      setSlideProgress(prog);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("resize", updateGeometry);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Compute Fireman position on S-curve:
  // t: 0 -> 1
  const t = slideProgress;
  // S-curve bow to the right: max offset at t=0.5
  const bowX = Math.sin(t * Math.PI) * lateralAmp;
  const slideY = t * ropeHeight;
  const tiltAngle = Math.cos(t * Math.PI) * 22; // natural tilt along S-curve

  return (
    <>
      <style>{`
        @keyframes soundWave1 {
          0%, 100% { opacity: 0.2; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes soundWave2 {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.95; transform: scale(1.18); }
        }
        @keyframes soundWave3 {
          0%, 100% { opacity: 0.05; transform: scale(0.75); }
          50% { opacity: 0.85; transform: scale(1.25); }
        }
        @keyframes megaphoneBob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-2px) rotate(-3deg); }
        }
        .shout-anim { transform-origin: 20px 58px; animation: megaphoneBob 1.4s ease-in-out infinite; }
        .sw-p1 { transform-origin: 50px 30px; animation: soundWave1 1.1s ease-out infinite; }
        .sw-p2 { transform-origin: 50px 30px; animation: soundWave2 1.1s ease-out infinite 0.2s; }
        .sw-p3 { transform-origin: 50px 30px; animation: soundWave3 1.1s ease-out infinite 0.4s; }
      `}</style>

      {/* 1. SHOUTING DUDE WITH MEGAPHONE:
          Standing firmly on the bottom-left ledge of the About card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-4px] left-1/2 -translate-x-[115px] sm:-translate-x-[130px] z-30 select-none"
      >
        <svg
          className="w-24 h-24 overflow-visible"
          viewBox="0 0 90 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="shout-anim">
            {/* Ledge contact line */}
            <line x1="8" y1="62" x2="42" y2="62" stroke="#262626" strokeWidth="2.4" strokeLinecap="round" />

            {/* Head */}
            <circle cx="22" cy="18" r="9.5" fill="#ffffff" stroke="#262626" strokeWidth="1.8" />
            <path d="M 31.5 18 A 9.5 9.5 0 1 1 31.4 17" strokeWidth="0.8" opacity="0.4" />

            {/* Two Eyes focused on the rope */}
            <circle cx="25" cy="17" r="1.3" fill="#262626" />
            <circle cx="29" cy="17" r="1.3" fill="#262626" />
            {/* Wide Shouting Mouth */}
            <path d="M 26 22 Q 29 26 28 22 Z" fill="#262626" stroke="#262626" strokeWidth="0.8" />

            {/* Short Spiky Hair */}
            <path d="M 19 9 Q 14 3 9 5" stroke="#262626" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M 21 8 Q 17 2 13 4" stroke="#262626" strokeWidth="1.4" strokeLinecap="round" />

            {/* Torso leaning forward shouting */}
            <path d="M 20 27 Q 18 42 16 58" stroke="#262626" strokeWidth="2.2" strokeLinecap="round" />

            {/* Hands holding megaphone */}
            <path d="M 18 34 L 27 30 M 18 38 L 29 34" stroke="#262626" strokeWidth="1.8" strokeLinecap="round" />

            {/* Red Megaphone / Loudspeaker */}
            <polygon
              points="28,28 50,18 50,42 28,32"
              fill="#ef4444"
              stroke="#dc2626"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <rect x="25" y="28" width="3.5" height="4.5" rx="1" fill="#333333" />
            <path d="M 31 32 L 31 39" stroke="#333333" strokeWidth="2.2" strokeLinecap="round" />
            <ellipse cx="50" cy="30" rx="2.5" ry="12" fill="#ffffff" stroke="#dc2626" strokeWidth="1.4" />

            {/* Animated Sound Wave Arcs emitting towards the rope */}
            <path
              d="M 57 20 Q 64 30 57 40"
              stroke="#ef4444"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
              className="sw-p1"
            />
            <path
              d="M 65 15 Q 74 30 65 45"
              stroke="#ef4444"
              strokeWidth="2.4"
              strokeLinecap="round"
              fill="none"
              className="sw-p2"
            />
            <path
              d="M 73 10 Q 84 30 73 50"
              stroke="#262626"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              className="sw-p3"
            />

            {/* Shout burst accent lines */}
            <path d="M 52 13 L 60 7" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" className="sw-p1" />
            <path d="M 52 47 L 60 53" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" className="sw-p2" />

            {/* Legs & Shoes standing on card bottom ledge */}
            <path d="M 16 58 L 13 62" stroke="#262626" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M 16 58 L 26 62" stroke="#262626" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M 10 62 L 15 62" stroke="#262626" strokeWidth="3" strokeLinecap="round" />
            <path d="M 24 62 L 30 62" stroke="#262626" strokeWidth="3" strokeLinecap="round" />
            <path d="M 25 63.5 L 30 63.5" stroke="#ef4444" strokeWidth="1.6" />
          </g>
        </svg>
      </div>

      {/* 2. FIREFIGHTER ROPE-SLIDE DUDE:
          Slides down the S-curve rope between About card bottom and Capabilities card top in sync with scroll */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-full left-1/2 z-30 select-none transition-transform duration-75"
        style={{
          transform: `translate(calc(-50% + ${bowX}px), ${slideY}px) rotate(${tiltAngle}deg)`,
        }}
      >
        <svg
          className="w-20 h-28 -translate-x-1/2 -translate-y-6 overflow-visible"
          viewBox="-40 -35 80 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            {/* Red Firefighter Hard Hat / Helmet */}
            <ellipse cx="0" cy="-14" rx="14" ry="4" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
            <path d="M -9 -14 Q 0 -26 9 -14 Z" fill="#ef4444" stroke="#dc2626" strokeWidth="1.5" />
            <path d="M 0 -24 L 0 -14" stroke="#fbbf24" strokeWidth="1.8" />
            <polygon points="0,-22 4,-17 0,-13 -4,-17" fill="#fbbf24" stroke="#b45309" strokeWidth="0.8" />

            {/* Head */}
            <circle cx="0" cy="-6" r="8" fill="#ffffff" stroke="#262626" strokeWidth="1.8" />
            {/* Two Eyes */}
            <circle cx="-3" cy="-7" r="1.3" fill="#262626" />
            <circle cx="3" cy="-7" r="1.3" fill="#262626" />
            {/* Grinning / Determined mouth */}
            <path d="M -3 -2 Q 0 1 3 -2" stroke="#262626" strokeWidth="1.5" fill="none" strokeLinecap="round" />

            {/* Red Gloves / Hands gripping the rope tightly */}
            <ellipse cx="-4" cy="4" rx="3.5" ry="2.5" fill="#ef4444" stroke="#262626" strokeWidth="1.2" />
            <ellipse cx="4" cy="2" rx="3.5" ry="2.5" fill="#ef4444" stroke="#262626" strokeWidth="1.2" />
            {/* Arms wrapped around rope */}
            <path d="M -7 -2 Q -12 2 -4 4" stroke="#262626" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <path d="M 7 -2 Q 12 0 4 2" stroke="#262626" strokeWidth="2.2" fill="none" strokeLinecap="round" />

            {/* Torso */}
            <path d="M 0 0 L 0 20" stroke="#262626" strokeWidth="2.8" strokeLinecap="round" />

            {/* Legs wrapped around the rope (Firefighter pole/rope slide style) */}
            {/* Front wrapped leg */}
            <path d="M 0 20 Q -8 26 0 32" stroke="#262626" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Boot wrapped around rope */}
            <path d="M 0 32 Q 6 34 8 32" stroke="#262626" strokeWidth="2.6" fill="none" strokeLinecap="round" />
            <path d="M 1 33.5 L 7 33.5" stroke="#ef4444" strokeWidth="1.8" />

            {/* Back hooked leg */}
            <path d="M 0 20 Q 8 26 0 32" stroke="#262626" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8" />
            <path d="M 0 32 Q -6 34 -8 32" stroke="#262626" strokeWidth="2.4" fill="none" strokeLinecap="round" />
            <path d="M -7 33.5 L -1 33.5" stroke="#ef4444" strokeWidth="1.8" />

            {/* Speed & friction lines */}
            <path d="M -8 2 L -13 0" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
            <path d="M 8 0 L 13 -2" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
            <path d="M -6 30 L -11 34" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
            <path d="M 6 30 L 11 34" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
          </g>
        </svg>
      </div>
    </>
  );
}
