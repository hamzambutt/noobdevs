"use client";

import React, { useEffect, useState } from "react";

export default function SliderAndShouter() {
  const [t, setT] = useState(0); // 0 = at about-card bottom, 1 = at caps-card top
  const [H, setH] = useState(200); // vertical gap between about-card bottom and caps-card top
  const [lateralAmp, setLateralAmp] = useState(60); // horizontal bulge

  useEffect(() => {
    // Measure the gap once and on resize
    const measure = () => {
      const about = document.getElementById("about-card");
      const caps = document.getElementById("capabilities-card");
      const W = window.innerWidth;
      setLateralAmp(Math.min(W * 0.08, 64));
      if (!about || !caps) return;
      const aRect = about.getBoundingClientRect();
      const cRect = caps.getBoundingClientRect();
      const gap = window.scrollY + cRect.top - (window.scrollY + aRect.bottom);
      if (gap > 40) setH(gap);
    };

    measure();
    window.addEventListener("resize", measure);

    // Scroll handler – drives t from 0→1 as the rope segment scrolls into view
    const onScroll = () => {
      const about = document.getElementById("about-card");
      const caps = document.getElementById("capabilities-card");
      if (!about || !caps) return;

      const aRect = about.getBoundingClientRect();
      const cRect = caps.getBoundingClientRect();

      // Mirror exactly what PageScrollLine uses for the "about-to-caps" arc
      const yAboutBottom = window.scrollY + aRect.bottom;
      const yCapsTop = window.scrollY + cRect.top;
      const startSY = yAboutBottom - window.innerHeight * 0.8;
      const endSY = yCapsTop - window.innerHeight * 0.65;
      const span = Math.max(1, endSY - startSY);
      const prog = Math.min(Math.max((window.scrollY - startSY) / span, 0), 1);
      setT(prog);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // ─── S-curve position (matches PageScrollLine arcs) ───────────────────────
  // Arc goes: (0, aboutBottom) → bows right by lateralAmp → (0, capsTop)
  // We express position as offset from capsTop, i.e., Y = 0 means capsTop.
  // At t=0  → wireY = -H  (at about-card bottom, H px above capsTop)
  // At t=1  → wireY =  0  (at caps-card top border)
  const bow = H * 0.45;
  let wireX: number;
  let wireY: number;
  let dX: number;
  let dY: number;

  if (t <= 0.5) {
    const u = t / 0.5;
    const u2 = u * u, u3 = u2 * u, mu = 1 - u, mu2 = mu * mu, mu3 = mu2 * mu;
    wireX = mu3 * 0 + 3 * mu2 * u * 0 + 3 * mu * u2 * lateralAmp + u3 * lateralAmp;
    wireY = -H + (mu3 * 0 + 3 * mu2 * u * bow + 3 * mu * u2 * (H / 2 - bow / 2) + u3 * (H / 2));
    dX = 3 * mu2 * (0 - 0) + 6 * mu * u * (lateralAmp - 0) + 3 * u2 * (lateralAmp - lateralAmp);
    dY = 3 * mu2 * (bow - 0) + 6 * mu * u * (H / 2 - bow / 2 - bow) + 3 * u2 * (H / 2 - (H / 2 - bow / 2));
  } else {
    const u = (t - 0.5) / 0.5;
    const u2 = u * u, u3 = u2 * u, mu = 1 - u, mu2 = mu * mu, mu3 = mu2 * mu;
    wireX = mu3 * lateralAmp + 3 * mu2 * u * lateralAmp + 3 * mu * u2 * 0 + u3 * 0;
    wireY = -H + (mu3 * (H / 2) + 3 * mu2 * u * (H / 2 + bow / 2) + 3 * mu * u2 * (H - bow) + u3 * H);
    dX = 3 * mu2 * (lateralAmp - lateralAmp) + 6 * mu * u * (0 - lateralAmp) + 3 * u2 * (0 - 0);
    dY = 3 * mu2 * (H / 2 + bow / 2 - H / 2) + 6 * mu * u * (H - bow - H / 2 - bow / 2) + 3 * u2 * (H - (H - bow));
  }

  const slopeDeg = (Math.atan2(dX, dY) * 180) / Math.PI;

  // ─── Landing transition ───────────────────────────────────────────────────
  // When wire reaches card border (t→1), transition from "hanging from wire"
  // to "standing on card border". The figure is 70px tall (feet at SVG y=70).
  // During slide: anchor div is at wireX, wireY (in CSS px from card top-left center).
  // On landing: shift figure UP so feet (y=70 in SVG) sit exactly at wireY.
  // SVG scale: viewBox width=80 units → element width=96px → scale = 96/80 = 1.2
  // SVG now uses 1:1 user-unit → CSS-px mapping (no viewport scaling)
  // Landed feet sit at SVG y=62, so we need to lift the anchor 62px so feet
  // land exactly on the card top border (anchorY=0 in card-relative coords)
  const feetPx = 62;

  const landFactor = Math.min(Math.max((t - 0.82) / 0.18, 0), 1);
  const smooth = landFactor * landFactor * (3 - 2 * landFactor);
  const isLanded = t >= 0.9;

  // During slide: y-offset of anchor div from cap-card top-left
  //   → wireY (negative = above card, 0 = at card top)
  // After landing: lift figure so feet rest on wireY (which is ~0)
  const anchorY = wireY - feetPx * smooth;
  const tilt = isLanded ? 0 : slopeDeg * (1 - smooth);

  return (
    <>
      <style>{`
        @keyframes sw1 {
          0%,100%{opacity:.2;transform:scale(.85)} 50%{opacity:1;transform:scale(1.12)}
        }
        @keyframes sw2 {
          0%,100%{opacity:.1;transform:scale(.8)} 50%{opacity:.95;transform:scale(1.2)}
        }
        @keyframes sw3 {
          0%,100%{opacity:.05;transform:scale(.75)} 50%{opacity:.85;transform:scale(1.28)}
        }
        @keyframes sbob {
          0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-3px) rotate(-2deg)}
        }
        @keyframes legA {
          0%,100%{transform:rotate(-14deg)} 50%{transform:rotate(16deg)}
        }
        @keyframes legB {
          0%,100%{transform:rotate(12deg)} 50%{transform:rotate(-12deg)}
        }
        @keyframes whistleNote1 {
          0% { opacity: 0; transform: translate(0, 0) scale(0.5) rotate(-10deg); }
          25% { opacity: 0.95; }
          75% { opacity: 0.85; }
          100% { opacity: 0; transform: translate(16px, -26px) scale(1.1) rotate(20deg); }
        }
        @keyframes whistleNote2 {
          0% { opacity: 0; transform: translate(0, 0) scale(0.4) rotate(10deg); }
          25% { opacity: 0.9; }
          75% { opacity: 0.8; }
          100% { opacity: 0; transform: translate(24px, -36px) scale(1.25) rotate(-25deg); }
        }
        @keyframes whistlerIdle {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-1.5px) rotate(1deg); }
        }
        .sb-bob { transform-origin: 18px 62px; animation: sbob 1.5s ease-in-out infinite }
        .sw1 { transform-origin: 46px 24px; animation: sw1 1.1s ease-out infinite }
        .sw2 { transform-origin: 46px 24px; animation: sw2 1.1s ease-out infinite .22s }
        .sw3 { transform-origin: 46px 24px; animation: sw3 1.1s ease-out infinite .44s }
        .legA { transform-origin: 0px 0px; animation: legA 1.2s ease-in-out infinite }
        .legB { transform-origin: 0px 0px; animation: legB 1.5s ease-in-out infinite .25s }
        .whistle-idle { transform-origin: 0px 60px; animation: whistlerIdle 2.2s ease-in-out infinite; }
        .wn-1 { animation: whistleNote1 2.2s ease-out infinite; }
        .wn-2 { animation: whistleNote2 2.2s ease-out infinite 1s; }
      `}</style>

      {/* ── 1. SHOUTING GUY ── stands on top border of capabilities card, to the left ── */}
      {/* -translate-y-full puts its bottom edge flush with top:0 of the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 left-1/2 z-30"
        style={{ transform: "translateX(-145px) translateY(-100%)" }}
      >
        <svg width="90" height="72" viewBox="0 0 90 72" fill="none" overflow="visible">
          <g className="sb-bob">
            {/* Head */}
            <circle cx="20" cy="16" r="10" fill="#fff" stroke="#222" strokeWidth="1.8" />
            {/* Eyes – looking right toward rope */}
            <circle cx="23" cy="15" r="1.4" fill="#222" />
            <circle cx="27" cy="15" r="1.4" fill="#222" />
            {/* Mouth – wide open shout */}
            <path d="M24 20 Q27 24 26 20Z" fill="#222" stroke="#222" strokeWidth=".8" />
            {/* Spiky hair */}
            <path d="M17 7 Q12 1 7 4" stroke="#222" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M20 6 Q16 0 11 3" stroke="#222" strokeWidth="1.4" strokeLinecap="round" />
            {/* Torso */}
            <path d="M18 26 Q16 42 14 60" stroke="#222" strokeWidth="2.2" strokeLinecap="round" />
            {/* Arms → megaphone */}
            <path d="M16 32 L24 24 M16 37 L26 29" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
            {/* Megaphone (red) */}
            <polygon points="25,22 48,11 48,35 25,27" fill="#ef4444" stroke="#dc2626" strokeWidth="1.4" strokeLinejoin="round" />
            <ellipse cx="48" cy="23" rx="2.5" ry="12" fill="#fff" stroke="#dc2626" strokeWidth="1.3" />
            {/* Sound waves */}
            <path d="M55 13 Q62 23 55 33" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" fill="none" className="sw1" />
            <path d="M63 8 Q72 23 63 38" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" fill="none" className="sw2" />
            <path d="M71 3 Q82 23 71 43" stroke="#333" strokeWidth="1.8" strokeLinecap="round" fill="none" className="sw3" />
            <path d="M50 6 L57 0" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" className="sw1" />
            <path d="M50 40 L57 46" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" className="sw2" />
            {/* Legs – feet at y=70, which is at the card top border */}
            <path d="M14 60 L11 68" stroke="#222" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M14 60 L23 68" stroke="#222" strokeWidth="2.4" strokeLinecap="round" />
            {/* Red shoes resting exactly on the card top border (y=70) */}
            <path d="M7 70 L14 70" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
            <path d="M20 70 L28 70" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      {/* ── 2. SLIDING FIREMAN ──────────────────────────────────────────────────
          The anchor div is a 0×0 point sitting at (wireX, anchorY) relative to
          the capabilities card's top-left corner. The SVG is drawn with its
          coordinate origin (0,0) at the wire contact point (HANDS), so the wire
          always passes through the hands.  overflow:visible lets the figure
          extend above/below its 0×0 bounding box. */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 z-30"
        style={{
          // left:50% centres on the beacon. wireX offsets horizontally along curve.
          left: `calc(50% + ${wireX}px)`,
          top: `${anchorY}px`,
          width: 0,
          height: 0,
          transform: `rotate(${tilt}deg)`,
          transformOrigin: "0px 0px",
        }}
      >
        {/* SVG origin (0,0) = wire contact point (the hand gripping the rope).
            Figure body is offset ~24px to the LEFT so head + hat are clearly
            visible while the right arm reaches diagonally to the rope grip.
            SVG viewBox spans x:-50→+20, y:-5→+80 to contain the whole figure.
            Position: left=-50px so SVG x=0 aligns with the div anchor. */}
        <svg
          width="70"
          height="85"
          viewBox="-50 -5 70 85"
          fill="none"
          overflow="visible"
          style={{ position: "absolute", left: "-50px", top: "-5px" }}
        >
          <g strokeLinecap="round" strokeLinejoin="round">
            {!isLanded ? (
              <>
                {/* ── GRIPPING HAND on the rope at (0, 2) ── */}
                <circle cx="0" cy="2" r="4.5" fill="#ef4444" stroke="#222" strokeWidth="1.6" />
                {/* Knuckle lines */}
                <path d="M-2 0 Q0-2 2 0" stroke="#fff" strokeWidth="1.1" fill="none" />
                {/* Small second hand slightly lower for realism */}
                <circle cx="1" cy="8" r="3.5" fill="#ef4444" stroke="#222" strokeWidth="1.4" />

                {/* ── RIGHT ARM — from grip (0,6) diagonally DOWN-LEFT to shoulder (-20, 26) ── */}
                <path d="M0 6 C-4 12 -14 18 -20 26" stroke="#222" strokeWidth="2.6" fill="none" />

                {/* ── HEAD — clearly visible to the LEFT at (-24, 22) ── */}
                <circle cx="-24" cy="22" r="9.5" fill="#fff" stroke="#222" strokeWidth="1.8" />
                {/* Eyes looking up-right toward rope */}
                <circle cx="-21" cy="20" r="1.3" fill="#222" />
                <circle cx="-16" cy="19" r="1.3" fill="#222" />
                {/* Grin */}
                <path d="M-23 25 Q-19 28 -16 25" stroke="#222" strokeWidth="1.4" fill="none" />

                {/* ── RED CONSTRUCTION HARD HAT ── */}
                {/* Dome — sits on top of head at (-24, 22) */}
                <path d="M-35 16 C-36 8-30 3-24 3 C-18 3-12 8-13 16 Z"
                  fill="#ef4444" stroke="#dc2626" strokeWidth="1.5" />
                {/* Crown ridge */}
                <path d="M-26 3 Q-24 0-22 3 L-22 13 Q-24 12-26 13 Z"
                  fill="#b91c1c" stroke="#991b1b" strokeWidth=".8" />
                {/* Brim */}
                <path d="M-37 16 C-32 14-16 14-11 16 C-12 19-36 19-37 16 Z"
                  fill="#f87171" stroke="#dc2626" strokeWidth="1.3" />
                <path d="M-36 16 Q-24 18-12 16" stroke="#991b1b" strokeWidth="1" fill="none" />
                {/* Shine */}
                <path d="M-31 8 C-29 4-26 3-22 6" stroke="#fff" strokeWidth="1.3" fill="none" opacity=".85" />

                {/* ── TORSO — from neck (-24, 31) down to hip (-24, 50) ── */}
                <path d="M-24 31 L-24 50" stroke="#222" strokeWidth="2.5" />

                {/* ── LEFT ARM — hangs free, swings in the wind ── */}
                <path d="M-24 36 Q-34 42-36 52" stroke="#222" strokeWidth="2.2" fill="none" />
                <circle cx="-36" cy="53" r="3.5" fill="#ef4444" stroke="#222" strokeWidth="1.4" />

                {/* Speed/friction lines near grip */}
                <path d="M3 1 L10-1" stroke="#ef4444" strokeWidth="1.4" opacity=".8" />
                <path d="M3 5 L10 4" stroke="#ef4444" strokeWidth="1.2" opacity=".6" />

                {/* ── LEGS swinging ── */}
                <g className="legA" style={{ transformOrigin: "-24px 50px" }}>
                  <path d="M-24 50 Q-32 58-36 66" stroke="#222" strokeWidth="2.2" />
                  <path d="M-42 67 L-34 68" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                </g>
                <g className="legB" style={{ transformOrigin: "-24px 50px" }}>
                  <path d="M-24 50 Q-16 58-14 66" stroke="#222" strokeWidth="2.2" />
                  <path d="M-20 67 L-12 68" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                </g>
              </>
            ) : (
              /* ── LANDED — STANDING ON CARD BORDER WITH BOTH HANDS ON HIPS & WHISTLING ── */
              <g className="whistle-idle">
                {/* ── FLOATING ANIMATED MUSICAL WHISTLE NOTES ── */}
                <g className="wn-1" style={{ transformOrigin: "6px 12px" }}>
                  {/* Single Eighth Note ♪ */}
                  <ellipse cx="6" cy="12" rx="2.2" ry="1.6" fill="#ef4444" transform="rotate(-15 6 12)" />
                  <line x1="7.8" y1="11.5" x2="7.8" y2="4.5" stroke="#ef4444" strokeWidth="1.2" />
                  <path d="M 7.8 4.5 Q 11 6 10 9" stroke="#ef4444" strokeWidth="1.2" fill="none" />
                </g>
                <g className="wn-2" style={{ transformOrigin: "8px 10px" }}>
                  {/* Beamed Eighth Notes ♫ */}
                  <ellipse cx="6" cy="10" rx="1.8" ry="1.4" fill="#ef4444" transform="rotate(-15 6 10)" />
                  <ellipse cx="11" cy="9" rx="1.8" ry="1.4" fill="#ef4444" transform="rotate(-15 11 9)" />
                  <line x1="7.4" y1="9.5" x2="7.4" y2="3.5" stroke="#ef4444" strokeWidth="1.1" />
                  <line x1="12.4" y1="8.5" x2="12.4" y2="2.5" stroke="#ef4444" strokeWidth="1.1" />
                  <line x1="7.4" y1="3.5" x2="12.4" y2="2.5" stroke="#ef4444" strokeWidth="1.5" />
                </g>

                {/* ── HEAD ── */}
                <circle cx="0" cy="10" r="9.5" fill="#fff" stroke="#222" strokeWidth="1.8" />
                
                {/* Cheerful happy/whistling eyes (curved happy crescents) */}
                <path d="M -5 8.5 Q -3 6.5 -1 8.5" stroke="#222" strokeWidth="1.4" fill="none" />
                <path d="M 1 8.5 Q 3 6.5 5 8.5" stroke="#222" strokeWidth="1.4" fill="none" />

                {/* Puckered whistling mouth (small circular "o") */}
                <circle cx="3.5" cy="13.5" r="1.5" fill="#222" stroke="#222" strokeWidth="0.6" />
                {/* Whistle cheek sound ripple */}
                <path d="M 6.5 12 Q 8 13.5 6.5 15" stroke="#ef4444" strokeWidth="1" fill="none" opacity="0.8" />

                {/* ── RED HARD HAT ── */}
                <path d="M-11 4 C-12-4-7-9 0-9 C7-9 12-4 11 4 Z"
                  fill="#ef4444" stroke="#dc2626" strokeWidth="1.5" />
                <path d="M-2-9 Q0-12 2-9 L2 2 Q0 1-2 2 Z"
                  fill="#b91c1c" stroke="#991b1b" strokeWidth=".8" />
                <path d="M-14 4 C-9 2 9 2 14 4 C13 7-13 7-14 4 Z"
                  fill="#f87171" stroke="#dc2626" strokeWidth="1.3" />
                <path d="M-13 4 Q0 6 13 4" stroke="#991b1b" strokeWidth="1" fill="none" />
                <path d="M-6-2 C-4-6-1-6 1-3" stroke="#fff" strokeWidth="1.2" fill="none" opacity=".85" />

                {/* ── TORSO ── */}
                <path d="M0 19 L0 40" stroke="#222" strokeWidth="2.5" />

                {/* ── BOTH HANDS ON HIPS (AKIMBO) ── */}
                {/* Left arm: shoulder (0,21) -> elbow (-11, 28) -> hip (-5, 34) */}
                <path d="M -1 21 C -9 24 -12 30 -5 34" stroke="#222" strokeWidth="2.4" fill="none" />
                {/* Left red glove on hip */}
                <circle cx="-5" cy="34" r="3.2" fill="#ef4444" stroke="#222" strokeWidth="1.3" />

                {/* Right arm: shoulder (0,21) -> elbow (11, 28) -> hip (5, 34) */}
                <path d="M 1 21 C 9 24 12 30 5 34" stroke="#222" strokeWidth="2.4" fill="none" />
                {/* Right red glove on hip */}
                <circle cx="5" cy="34" r="3.2" fill="#ef4444" stroke="#222" strokeWidth="1.3" />

                {/* ── LEGS ── */}
                <path d="M0 40 L-7 58 M0 40 L7 58" stroke="#222" strokeWidth="2.2" />
                {/* Red shoes firmly on card border */}
                <path d="M-13 62 L-4 62" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
                <path d="M4 62 L13 62" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
              </g>
            )}
          </g>
        </svg>
      </div>
    </>
  );
}


