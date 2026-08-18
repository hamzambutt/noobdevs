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
    <section id="team" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
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
