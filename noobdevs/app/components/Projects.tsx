"use client";

import { useEffect, useState } from "react";
import { projects, type Project } from "../data/projects";
import { Reveal } from "../lib/ui";

const categories = ["All", "AI / ML", "DevOps & Cloud", "Full-Stack"] as const;

function VideoPlayerCard({ project }: { project: Project }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-red-200 hover:shadow-xl hover:shadow-red-500/10">
      {/* Top Chrome / Window Header */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/90" />
          <span className="h-3 w-3 rounded-full bg-amber-400/90" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
        </div>
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-0.5 text-[11px] font-semibold text-slate-700 shadow-2xs">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
          <span>{project.category}</span>
        </div>
        <div className="text-[11px] font-mono text-slate-400">demo.mp4</div>
      </div>

      {/* Video Viewport */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950 text-white">
        {project.videoUrl ? (
          <video
            src={project.videoUrl}
            controls
            playsInline
            className="h-full w-full object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        ) : (
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden p-6 text-center">
            {/* Dark background */}
            <div className="absolute inset-0 bg-slate-900" />

            {/* Glowing Play Trigger */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-xl shadow-red-500/40 transition-all duration-300 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 translate-x-0.5"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-medium text-slate-200 backdrop-blur-md">
                Plug video in <code className="text-red-300 font-semibold">projects.ts</code>
              </div>
            </div>

            {/* Live Metric Badge */}
            {project.metrics && (
              <div className="absolute bottom-3 right-3 rounded-lg border border-white/10 bg-black/60 px-3 py-1 text-[11px] font-mono font-medium text-emerald-400 backdrop-blur-md">
                ⚡ {project.metrics}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Project Meta */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-xs font-bold uppercase tracking-wider text-red-600">
            {project.subtitle}
          </p>
        </div>

        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 transition-colors group-hover:border-red-200 group-hover:bg-red-50/70 group-hover:text-red-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
          <a
            href={project.liveUrl || "#contact"}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-red-600"
          >
            Discuss architecture
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
          <span className="text-xs font-mono text-slate-400">Production Ready</span>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isLit, setIsLit] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const card = document.getElementById("projects-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      setIsLit(rect.top <= window.innerHeight * 0.72 && rect.bottom >= window.innerHeight * 0.15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div
          id="projects-card"
          className={`relative overflow-hidden rounded-3xl border bg-white p-8 sm:p-12 md:p-16 transition-all duration-700 ${
            isLit
              ? "border-red-400/90 shadow-[0_0_40px_-5px_rgba(239,68,68,0.22)] ring-1 ring-red-400/40"
              : "border-slate-200 shadow-xs"
          }`}
        >
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
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/80 px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-red-600 shadow-xs">
              Featured Projects & Video Demos
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Watch our systems in action.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              From intelligent multi-agent pipelines to high-throughput cloud infrastructure,
              explore video walkthroughs of software we have engineered and shipped.
            </p>

            {/* Segmented Filter Pills */}
            <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 p-1.5 shadow-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`cursor-pointer rounded-full px-5 py-2 text-xs font-bold transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-sm shadow-red-500/25"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Project Video Showcase Grid */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {filtered.map((proj, i) => (
              <Reveal key={proj.id} delay={(i % 2) * 120} className="h-full">
                <VideoPlayerCard project={proj} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
