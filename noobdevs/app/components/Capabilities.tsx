"use client";

import { useEffect, useState } from "react";
import { Reveal } from "../lib/ui";
import SliderAndShouter from "./SliderAndShouter";

const caps = [
  {
    title: "OSINT & Data Pipelines",
    desc: "Automated open-source intelligence gathering, entity extraction, and high-volume stream ingestion.",
    icon: (
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V17a1 1 0 11-2 0v-.07A7.003 7.003 0 015.07 11H5a1 1 0 110-2h.07A7.003 7.003 0 0111 5.07V5a1 1 0 112 0v.07A7.003 7.003 0 0118.93 11H19a1 1 0 110 2h-.07A7.003 7.003 0 0113 16.93zM12 9a3 3 0 100 6 3 3 0 000-6z" />
    ),
  },
  {
    title: "Computer Vision & AI",
    desc: "Custom CV models, object detection, segmentation, and real-time video analytics running at scale.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      </>
    ),
  },
  {
    title: "Mobile Applications",
    desc: "Fast, native-feeling iOS and Android experiences with seamless offline-first architectures.",
    icon: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="3" />
        <circle cx="12" cy="18" r="1" />
      </>
    ),
  },
  {
    title: "Modern Websites & Platforms",
    desc: "High-performance web applications built for speed, SEO, conversion, and global reach.",
    icon: <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 6l-2 12" />,
  },
  {
    title: "DevOps & Cloud Infrastructure",
    desc: "Automated CI/CD, Kubernetes orchestration, and multi-region cloud systems with 99.99% uptime.",
    icon: (
      <path d="M17.5 19a4.5 4.5 0 100-9 6 6 0 00-11.3 2A3.5 3.5 0 007 19h10.5z" />
    ),
  },
  {
    title: "Security & Reliability",
    desc: "Hardened systems, end-to-end encryption, automated backups, and real-time observability.",
    icon: (
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3zM9 12l2 2 4-4" />
    ),
  },
];

export default function Capabilities() {
  const [isLit, setIsLit] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const card = document.getElementById("capabilities-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      setIsLit(rect.top <= window.innerHeight * 0.72 && rect.bottom >= window.innerHeight * 0.15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="capabilities" className="relative scroll-mt-24 py-20 md:py-28 overflow-hidden">
      {/* ── LEFT FLANK: PC Tower, Rubber Duck, Pizza, Coffee Chemex ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-2 xl:left-6 2xl:left-14 top-1/2 -translate-y-1/2 w-64 xl:w-76 z-0 opacity-[0.095] hover:opacity-[0.22] transition-opacity duration-500 hidden lg:block text-slate-800"
      >
        <svg viewBox="0 0 240 320" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* Workstation PC Tower */}
          <rect x="25" y="15" width="48" height="88" rx="4" strokeWidth="2" fill="#fff" />
          <circle cx="49" cy="28" r="3" stroke="#ef4444" strokeWidth="1.5" />
          <circle cx="49" cy="60" r="12" strokeDasharray="3 2" opacity="0.6" />
          <circle cx="49" cy="85" r="10" strokeDasharray="3 2" opacity="0.6" />

          {/* Rubber Duck */}
          <g transform="translate(95, 35)">
            <path d="M 12 25 C 5 25, 0 32, 0 40 C 0 48, 12 52, 28 52 C 40 52, 48 46, 48 38 C 48 32, 42 28, 36 28 C 36 20, 32 10, 24 10 C 18 10, 14 15, 14 20" strokeWidth="1.8" fill="#fff" />
            <path d="M 14 16 C 8 16, 5 18, 5 20 C 5 22, 10 22, 14 22" fill="#ef4444" stroke="#ef4444" strokeWidth="1.4" />
            <circle cx="20" cy="16" r="1.5" fill="#262626" />
            <text x="32" y="14" fontSize="15" fontWeight="bold" fill="#ef4444" stroke="none">?</text>
          </g>

          {/* 🌿 Potted Desk Plant with Bird */}
          <g transform="translate(30, 125)">
            <polygon points="15,65 45,65 50,45 10,45" fill="#fff" strokeWidth="1.8" />
            <line x1="6" y1="45" x2="54" y2="45" strokeWidth="2.2" />
            <path d="M 30 45 Q 20 25 30 10 Q 40 25 30 45" fill="#fff" strokeWidth="1.6" />
            <path d="M 30 35 Q 15 25 18 18 Q 28 24 30 35" fill="#fff" strokeWidth="1.4" stroke="#22c55e" />
            <path d="M 30 35 Q 45 25 42 18 Q 32 24 30 35" fill="#fff" strokeWidth="1.4" stroke="#22c55e" />

            {/* 🐦 Bird perched */}
            <g transform="translate(38, 2)">
              <ellipse cx="10" cy="10" rx="6" ry="4" fill="#fff" strokeWidth="1.3" />
              <circle cx="15" cy="7" r="3.5" fill="#fff" strokeWidth="1.2" />
              <polygon points="18,6 22,8 18,9" fill="#ef4444" stroke="#ef4444" strokeWidth="0.8" />
              <text x="24" y="6" fontSize="9" fill="#ef4444" stroke="none">♪</text>
            </g>
          </g>

          {/* Pizza Slice */}
          <g transform="translate(105, 140) rotate(-15)">
            <polygon points="10,10 60,30 25,65" strokeWidth="1.8" fill="#fff" />
            <path d="M 60 30 Q 42 48 25 65" strokeWidth="3.5" stroke="#ef4444" />
            <circle cx="28" cy="28" r="3.5" fill="#ef4444" stroke="#ef4444" strokeWidth="1" />
            <circle cx="40" cy="38" r="3.5" fill="#ef4444" stroke="#ef4444" strokeWidth="1" />
          </g>
        </svg>
      </div>

      {/* ── RIGHT FLANK: 🕊️ Birds, 🐱 Cat Loaf on Books & Boombox ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-2 xl:right-6 2xl:right-14 top-1/2 -translate-y-1/2 w-64 xl:w-76 z-0 opacity-[0.095] hover:opacity-[0.22] transition-opacity duration-500 hidden lg:block text-slate-800"
      >
        <svg viewBox="0 0 240 320" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* Flying Seagulls */}
          <g transform="translate(30, 15)">
            <path d="M 20 20 Q 35 10 48 18 Q 60 10 75 20" strokeWidth="2" stroke="#ef4444" />
            <path d="M 80 32 Q 88 25 96 30 Q 104 25 112 32" strokeWidth="1.6" />
          </g>

          {/* 🐱 Cat Loaf on Tech Books */}
          <g transform="translate(45, 60)">
            <rect x="0" y="70" width="80" height="18" rx="2" fill="#fff" strokeWidth="1.8" />
            <text x="12" y="83" fontSize="8" fontWeight="bold" fill="currentColor" stroke="none">TYPESCRIPT</text>
            <rect x="8" y="52" width="70" height="18" rx="2" fill="#fff" strokeWidth="1.8" />
            <text x="18" y="65" fontSize="8" fontWeight="bold" fill="#ef4444" stroke="none">AI AGENTS</text>
            <rect x="4" y="34" width="74" height="18" rx="2" fill="#fff" strokeWidth="1.8" />
            <text x="16" y="47" fontSize="8" fontWeight="bold" fill="currentColor" stroke="none">CLEAN CODE</text>

            <g transform="translate(18, 0)">
              <ellipse cx="26" cy="22" rx="20" ry="12" fill="#fff" strokeWidth="1.8" />
              <circle cx="10" cy="16" r="8" fill="#fff" strokeWidth="1.6" />
              <polygon points="5,10 7,4 11,9" fill="#ef4444" stroke="#ef4444" strokeWidth="1.2" />
              <polygon points="11,9 14,4 16,10" fill="#ef4444" stroke="#ef4444" strokeWidth="1.2" />
              <path d="M 7 16 Q 9 18 11 16" strokeWidth="1.2" />
              <path d="M 11 16 Q 13 18 15 16" strokeWidth="1.2" />
              <path d="M 44 24 Q 48 30 38 32" strokeWidth="1.6" stroke="#ef4444" />
            </g>
          </g>

          {/* 📻 Retro Boombox */}
          <g transform="translate(30, 185)">
            <rect x="0" y="20" width="110" height="65" rx="5" fill="#fff" strokeWidth="2" />
            <circle cx="28" cy="55" r="18" strokeWidth="1.8" stroke="#ef4444" />
            <circle cx="82" cy="55" r="18" strokeWidth="1.8" stroke="#ef4444" />
            <rect x="44" y="38" width="22" height="30" rx="2" strokeWidth="1.2" fill="#fff" />
            <path d="M 115 40 Q 125 52 115 65" stroke="#ef4444" strokeWidth="1.8" />
          </g>
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div
          id="capabilities-card"
          className={`relative rounded-3xl border bg-white p-8 sm:p-12 md:p-16 transition-all duration-700 ${
            isLit
              ? "border-red-400/90 shadow-[0_0_40px_-5px_rgba(239,68,68,0.22)] ring-1 ring-red-400/40"
              : "border-slate-200 shadow-xs"
          }`}
        >
          {/* Section 2: Shouting Megaphone Dude & Red Construction Hard-Hat Slider Dude */}
          <SliderAndShouter />

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

          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-red-600">
              What we do
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Engineer OSINT pipelines, mobile applications, CV models, websites, and more.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 max-w-2xl mx-auto">
              One specialized team across all the disciplines that matter, ensuring
              nothing gets lost between design, architecture, deployment, and scale.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caps.map((c, i) => (
              <Reveal
                key={c.title}
                delay={(i % 3) * 90}
                className="group h-full rounded-2xl border border-slate-200/80 bg-slate-50/70 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-red-200 hover:bg-white hover:shadow-xl hover:shadow-red-500/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-rose-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/25">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {c.icon}
                  </svg>
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
