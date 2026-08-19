"use client";

import { useEffect, useState } from "react";
import { team } from "../data/team";
import { Reveal } from "../lib/ui";
import TeamDudes from "./TeamDudes";
import { TeamEmoteAvatar } from "./TeamEmotes";

export default function Team() {
  const [isLit, setIsLit] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const card = document.getElementById("team-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      setIsLit(rect.top <= window.innerHeight * 0.72 && rect.bottom >= window.innerHeight * 0.15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="team" className="relative scroll-mt-24 py-20 md:py-28 overflow-visible">
      {/* ── LEFT FLANK: Hanging Ivy Plant, Perched Birds & Filing Cabinet ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-2 xl:left-6 2xl:left-14 top-1/2 -translate-y-1/2 w-64 xl:w-76 z-0 opacity-[0.095] hover:opacity-[0.22] transition-opacity duration-500 hidden lg:block text-slate-800"
      >
        <svg viewBox="0 0 240 320" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* Hanging Planter with Cascading Ivy Vines */}
          <g transform="translate(40, 15)">
            <line x1="30" y1="0" x2="30" y2="35" strokeWidth="1.4" />
            <polygon points="12,35 48,35 40,55 20,55" fill="#fff" strokeWidth="1.8" />
            {/* Vines spilling down */}
            <path d="M 20 45 Q 8 65 14 85 Q 22 105 16 125" strokeWidth="1.8" stroke="#22c55e" />
            <path d="M 30 50 Q 38 75 32 100 Q 25 120 30 140" strokeWidth="1.8" stroke="#22c55e" />
            <path d="M 40 45 Q 52 70 46 95 Q 40 115 48 135" strokeWidth="1.8" stroke="#22c55e" />
            {/* Leaves on vines */}
            <ellipse cx="14" cy="70" rx="4" ry="2.5" fill="#fff" stroke="#22c55e" strokeWidth="1.2" />
            <ellipse cx="34" cy="80" rx="4" ry="2.5" fill="#fff" stroke="#22c55e" strokeWidth="1.2" />
            <ellipse cx="48" cy="85" rx="4" ry="2.5" fill="#fff" stroke="#22c55e" strokeWidth="1.2" />
            <ellipse cx="16" cy="110" rx="4" ry="2.5" fill="#fff" stroke="#22c55e" strokeWidth="1.2" />
            <ellipse cx="30" cy="125" rx="4" ry="2.5" fill="#fff" stroke="#22c55e" strokeWidth="1.2" />

            {/* 🐦 Bird perched on the hanging rim */}
            <g transform="translate(44, 20)">
              <ellipse cx="12" cy="12" rx="7" ry="5" fill="#fff" strokeWidth="1.4" />
              <circle cx="18" cy="8" r="4" fill="#fff" strokeWidth="1.3" />
              <polygon points="22,7 26,9 22,11" fill="#ef4444" stroke="#ef4444" strokeWidth="1" />
              <circle cx="19" cy="7" r="1" fill="currentColor" />
              <path d="M 8 10 Q 12 8 14 14" strokeWidth="1.2" stroke="#ef4444" />
              <text x="28" y="6" fontSize="10" fill="#ef4444" stroke="none">♪</text>
            </g>
          </g>

          {/* Tiny Stickman pulling giant plug */}
          <g transform="translate(25, 170)">
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

      {/* ── RIGHT FLANK: Cat in Box, Seagulls & Potted Plant ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-2 xl:right-6 2xl:right-14 top-1/2 -translate-y-1/2 w-64 xl:w-76 z-0 opacity-[0.095] hover:opacity-[0.22] transition-opacity duration-500 hidden lg:block text-slate-800"
      >
        <svg viewBox="0 0 240 320" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* Flying Seagulls */}
          <g transform="translate(30, 20)">
            <path d="M 20 20 Q 32 10 42 18 Q 52 10 65 20" strokeWidth="2" stroke="#ef4444" />
            <path d="M 68 32 Q 76 25 84 30 Q 92 25 100 32" strokeWidth="1.6" />
          </g>

          {/* 🐱 Cat in Cardboard Delivery Box */}
          <g transform="translate(50, 75)">
            <rect x="0" y="24" width="56" height="34" rx="2" fill="#fff" strokeWidth="1.8" />
            <polygon points="0,24 -8,12 12,24" fill="#fff" strokeWidth="1.4" />
            <polygon points="56,24 64,12 44,24" fill="#fff" strokeWidth="1.4" />
            <rect x="18" y="38" width="20" height="12" rx="1" stroke="#ef4444" strokeWidth="1" fill="currentColor" fillOpacity="0.05" />
            <ellipse cx="28" cy="20" rx="14" ry="12" fill="#fff" strokeWidth="1.6" />
            <polygon points="17,12 20,4 25,10" fill="#ef4444" stroke="#ef4444" strokeWidth="1.2" />
            <polygon points="31,10 36,4 39,12" fill="#ef4444" stroke="#ef4444" strokeWidth="1.2" />
            <circle cx="22" cy="18" r="2" fill="currentColor" />
            <circle cx="34" cy="18" r="2" fill="currentColor" />
            <ellipse cx="18" cy="24" rx="4" ry="2.5" fill="#fff" strokeWidth="1.2" />
            <ellipse cx="38" cy="24" rx="4" ry="2.5" fill="#fff" strokeWidth="1.2" />
          </g>

          {/* 🌿 Potted Bonsai Tree with Leafy Canopy & Perched Bird */}
          <g transform="translate(60, 170)">
            <path d="M 40 90 Q 45 65 35 50 Q 28 35 36 20" strokeWidth="2.5" />
            <ellipse cx="36" cy="16" rx="22" ry="12" fill="#fff" strokeWidth="1.6" />
            <ellipse cx="58" cy="38" rx="14" ry="9" fill="#fff" strokeWidth="1.5" />
            <ellipse cx="40" cy="92" rx="24" ry="6" strokeWidth="1.8" fill="#fff" />
            <path d="M 18 92 L 22 102 L 58 102 L 62 92" strokeWidth="1.6" />

            {/* 🐦 Bird on bonsai branch */}
            <g transform="translate(54, 24)">
              <ellipse cx="10" cy="10" rx="6" ry="4" fill="#fff" strokeWidth="1.3" />
              <circle cx="15" cy="7" r="3.5" fill="#fff" strokeWidth="1.2" />
              <polygon points="18,6 22,8 18,9" fill="#ef4444" stroke="#ef4444" strokeWidth="0.8" />
              <text x="24" y="6" fontSize="9" fill="#ef4444" stroke="none">♪</text>
            </g>
          </g>
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div
          id="team-card"
          className={`relative rounded-3xl border bg-white p-8 sm:p-12 md:p-16 transition-all duration-700 ${
            isLit
              ? "border-red-400/90 shadow-[0_0_40px_-5px_rgba(239,68,68,0.22)] ring-1 ring-red-400/40"
              : "border-slate-200 shadow-xs"
          }`}
        >
          {/* Animated Poster Stickmen: "MEET THE" on left & "TEAM" on right */}
          <TeamDudes />

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

          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-red-600 shadow-xs">
              The team
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              The people behind the products.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Six specialists across software, AI/ML, DevOps, and product,
              collaborating as one senior team.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 90} className="h-full">
                <article className="group relative z-10 flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/70 p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-red-300 hover:bg-white hover:shadow-xl hover:shadow-red-500/10">
                  {/* Top Edge Indicator */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${m.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${m.gradient} shadow-md shadow-red-500/20 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <TeamEmoteAvatar index={i} />
                    </div>
                    <span className="flex h-2 w-2 rounded-full bg-slate-200 transition-colors duration-300 group-hover:bg-red-500" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-red-600">
                    {m.role}
                  </p>
                  <p className="mt-3.5 flex-1 text-sm leading-6 text-slate-600">
                    {m.bio}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {m.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-slate-200/80 bg-white px-3 py-1 text-xs font-medium text-slate-600 transition-colors duration-300 group-hover:border-red-200 group-hover:bg-red-50/70 group-hover:text-red-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
