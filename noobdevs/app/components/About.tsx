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
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
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
