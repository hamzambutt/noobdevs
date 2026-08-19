"use client";

import { useEffect, useState } from "react";
import { Reveal } from "../lib/ui";
import SittingDudes from "./SittingDudes";

const values = [
  {
    title: "Senior by default",
    desc: "Every engineer owns their stack end to end, with no hand-offs or gaps.",
    icon: (
      <path d="M12 2l2.4 4.8 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 8.6l5.4-.8L12 2z" />
    ),
  },
  {
    title: "AI-native",
    desc: "Machine learning is woven into what we build, not bolted on at the end.",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9zM9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
      </>
    ),
  },
  {
    title: "Production-first",
    desc: "We ship, deploy, and monitor real systems, not just demos.",
    icon: (
      <>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </>
    ),
  },
  {
    title: "Business-aligned",
    desc: "Engineering that serves the customer, the brand, and the bottom line.",
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-6" />
      </>
    ),
  },
];

export default function About() {
  const [isLit, setIsLit] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const card = document.getElementById("about-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      setIsLit(rect.top <= window.innerHeight * 0.72 && rect.bottom >= window.innerHeight * 0.15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="relative scroll-mt-24 py-20 md:py-28 overflow-hidden">
      {/* ── LEFT FLANK: CPU AI Chip, Potted Monstera & Perched Chirping Bird ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-2 xl:left-6 2xl:left-14 top-1/2 -translate-y-1/2 w-64 xl:w-76 z-0 opacity-[0.095] hover:opacity-[0.22] transition-opacity duration-500 hidden lg:block text-slate-800"
      >
        <svg viewBox="0 0 240 320" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* AI Microchip */}
          <g transform="translate(45, 10)">
            <rect x="20" y="20" width="52" height="52" rx="4" strokeWidth="2" stroke="#ef4444" fill="#fff" />
            <rect x="28" y="28" width="36" height="36" rx="2" strokeWidth="1.2" fill="currentColor" fillOpacity="0.04" />
            <text x="33" y="50" fontSize="11" fontWeight="bold" fill="#ef4444" stroke="none" fontFamily="monospace">AI·ML</text>
            <path d="M 30 20 L 30 12 M 40 20 L 40 12 M 50 20 L 50 12 M 60 20 L 60 12" strokeWidth="1.5" />
            <path d="M 30 72 L 30 80 M 40 72 L 40 80 M 50 72 L 50 80 M 60 72 L 60 80" strokeWidth="1.5" />
            <path d="M 20 30 L 12 30 M 20 40 L 12 40 M 20 50 L 12 50 M 20 60 L 12 60" strokeWidth="1.5" />
            <path d="M 72 30 L 80 30 M 72 40 L 80 40 M 72 50 L 80 50 M 72 60 L 80 60" strokeWidth="1.5" />
          </g>

          {/* 🌿 Potted Monstera with 🐦 Perched Bird */}
          <g transform="translate(40, 95)">
            <path d="M 10 40 Q 45 35 90 42 Q 120 40 140 45" strokeWidth="2.2" strokeLinecap="round" />
            <ellipse cx="85" cy="24" rx="4" ry="2" fill="#22c55e" stroke="#22c55e" />
            <g transform="translate(45, 12)">
              <ellipse cx="18" cy="18" rx="10" ry="8" transform="rotate(-15 18 18)" fill="#fff" strokeWidth="1.6" />
              <circle cx="26" cy="12" r="6" fill="#fff" strokeWidth="1.5" />
              <polygon points="32,11 38,13 32,15" fill="#ef4444" stroke="#ef4444" strokeWidth="1" />
              <circle cx="28" cy="11" r="1" fill="currentColor" />
              <path d="M 12 16 Q 18 12 22 20" strokeWidth="1.4" stroke="#ef4444" />
              <text x="40" y="8" fontSize="11" fill="#ef4444" stroke="none">♪</text>
            </g>
          </g>

          {/* Monstera Pot */}
          <g transform="translate(70, 165)">
            <polygon points="25,90 55,90 60,60 20,60" strokeWidth="2" fill="#fff" />
            <line x1="16" y1="60" x2="64" y2="60" strokeWidth="2.5" />
            <path d="M 40 60 Q 20 35 10 25" strokeWidth="1.8" />
            <path d="M 10 25 Q 0 15 5 5 Q 20 10 10 25" fill="#fff" strokeWidth="1.4" stroke="#22c55e" />
            <path d="M 40 60 Q 45 25 55 10" strokeWidth="1.8" />
            <path d="M 55 10 Q 70 0 65 20 Q 50 20 55 10" fill="#fff" strokeWidth="1.4" stroke="#22c55e" />
          </g>
        </svg>
      </div>

      {/* ── RIGHT FLANK: 🕊️ Seagulls, Git Tree & Stickman Watering Sprout ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-2 xl:right-6 2xl:right-14 top-1/2 -translate-y-1/2 w-64 xl:w-76 z-0 opacity-[0.095] hover:opacity-[0.22] transition-opacity duration-500 hidden lg:block text-slate-800"
      >
        <svg viewBox="0 0 240 320" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* Seagulls */}
          <g transform="translate(30, 15)">
            <path d="M 10 20 Q 25 8 36 18 Q 48 8 62 20" strokeWidth="2.2" stroke="#ef4444" />
            <path d="M 50 30 Q 60 22 70 29 Q 80 22 90 30" strokeWidth="1.6" />
          </g>

          {/* Git Branch Tree */}
          <g transform="translate(50, 60)">
            <line x1="30" y1="10" x2="30" y2="80" strokeWidth="2" />
            <path d="M 30 25 C 55 25, 55 55, 30 65" strokeWidth="1.8" stroke="#ef4444" />
            <circle cx="30" cy="15" r="3.5" fill="#fff" strokeWidth="2" />
            <circle cx="30" cy="40" r="3.5" fill="#fff" strokeWidth="2" />
            <circle cx="30" cy="75" r="3.5" fill="#fff" strokeWidth="2" />
            <circle cx="48" cy="40" r="3.5" fill="#ef4444" stroke="#ef4444" strokeWidth="2" />
            <text x="58" y="44" fontSize="9" fill="#ef4444" stroke="none" fontFamily="monospace">v2.0-ship</text>
          </g>

          {/* Stickman watering flower sprout */}
          <g transform="translate(45, 190)">
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

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div
          id="about-card"
          className={`relative rounded-3xl border bg-white p-8 sm:p-12 md:p-16 transition-all duration-700 ${
            isLit
              ? "border-red-400/90 shadow-[0_0_40px_-5px_rgba(239,68,68,0.22)] ring-1 ring-red-400/40"
              : "border-slate-200 shadow-xs"
          }`}
        >
          {/* Sitting SVG Dudes flanking the glowing red line */}
          <SittingDudes />

          {/* Top docking beacon */}
          <div
            className={`absolute left-1/2 top-0 h-1.5 w-12 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-red-500 to-transparent transition-opacity duration-700 ${
              isLit ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* Bottom departure beacon */}
          <div
            className={`absolute left-1/2 bottom-0 h-1.5 w-12 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-red-500 to-transparent transition-opacity duration-700 ${
              isLit ? "opacity-100" : "opacity-0"
            }`}
          />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-red-200/80 bg-red-50/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-red-600">
                  Why NoobDevs
                </span>
                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                  Six senior minds.
                  <br />
                  One unified delivery.
                </h2>
                <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
                  We&apos;re a compact, senior team that covers the full arc of
                  modern software: architecture, intelligence, infrastructure, and
                  the product story. Small enough to move fast, deep enough to ship
                  what you actually need.
                </p>
                <a
                  href="#contact"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-red-600 transition-colors"
                >
                  Start a conversation
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-red-600 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </Reveal>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal
                  key={v.title}
                  delay={i * 90}
                  className="group h-full rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-xl hover:shadow-red-500/10"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-rose-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {v.icon}
                    </svg>
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{v.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
