import React from "react";

type TechItem = {
  name: string;
  category?: string;
  icon: React.ReactNode;
};

const technologies: TechItem[] = [
  {
    name: "PyTorch",
    icon: (
      <svg className="h-5 w-5 text-[#EE4C2C]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.2 0a8.8 8.8 0 0 0-4.1.9l2.1 2.1a6.6 6.6 0 1 1-5.7 3.3L3.4 4.2A9 9 0 1 0 13.2 0zm3.8 6.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg className="h-5 w-5 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.2 17.5l-6.8-9v8.3h-1.8V7.2h1.6l7 9.3v-9h1.8v10z" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path
          fill="#3776AB"
          d="M11.9 1.1c-4.3 0-4 .9-4 1.8v1.8h4.1v.6H5.2C3.4 5.3 2 6.8 2 8.7c0 1.9 1.2 3.1 3 3.1h1.4V10c0-1.8 1.5-3.3 3.3-3.3h5.6c1.6 0 3-1.3 3-3 0-1.5-1.4-2.6-6.4-2.6z"
        />
        <path
          fill="#FFD43B"
          d="M12.1 22.9c4.3 0 4-.9 4-1.8v-1.8H12v-.6h6.8c1.8 0 3.2-1.5 3.2-3.4 0-1.9-1.2-3.1-3-3.1h-1.4v1.8c0 1.8-1.5 3.3-3.3 3.3H8.7c-1.6 0-3 1.3-3 3 0 1.5 1.4 2.6 6.4 2.6z"
        />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg className="h-5 w-5 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor">
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1.8" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg className="h-5 w-5 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path fill="#ffffff" d="M10.8 13.6h-2.1V7.5H6.2V5.8h7.2v1.7h-2.6v6.1zm4.1.3c.9.5 2 .8 3.1.8 1.4 0 2.2-.6 2.2-1.5 0-1-.8-1.4-2.2-1.9-1.8-.7-2.9-1.6-2.9-3.2 0-1.8 1.4-3.1 3.8-3.1 1.2 0 2.2.3 2.9.7l-.6 1.6c-.6-.4-1.4-.7-2.3-.7-1.3 0-2 .6-2 1.4 0 .9.8 1.3 2.2 1.8 1.9.7 2.9 1.7 2.9 3.3 0 1.9-1.5 3.3-4.1 3.3-1.4 0-2.6-.4-3.5-.9l.5-1.6z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg className="h-5 w-5 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.9 8.2h2.2v2.2h-2.2zm-2.8 0h2.2v2.2h-2.2zm-2.8 0h2.2v2.2H8.3zm8.4 2.8h2.2v2.2h-2.2zm-2.8 0h2.2v2.2h-2.2zm-2.8 0h2.2v2.2h-2.2zm-2.8 0h2.2v2.2H8.3zm-2.8 0h2.2v2.2H5.5zm18.3 1.2c-.3-.2-2.3-1.4-4.8-.4-.2-.8-.7-1.5-1.4-2.1l-.8.6c.6.6.9 1.3 1 2.2-1.2.6-2.9.5-3.8.4H.4C.2 13.7.1 14.5.1 15.3c0 4.1 3.3 7.5 9.7 7.5 7.6 0 11.8-4.3 13.9-9.1.5-.1.8-.3 1-.5l-.9-1.4z" />
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    icon: (
      <svg className="h-5 w-5 text-[#326CE5]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.2l8.5 4.9v9.8L12 21.8 3.5 16.9V7.1L12 2.2zm0 2.3L5.3 8.3v7.4L12 19.5l6.7-3.8V8.3L12 4.5zm0 3.2a4.3 4.3 0 1 1 0 8.6 4.3 4.3 0 0 1 0-8.6zm0 1.8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg className="h-5 w-5 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.8 9.5l1.6 4.6h1.7L6.9 6h-1L2.7 14.1h1.7l1.5-4.6h.9zm8.5 4.6V6h-1.6v5.8l-2.4-5.8H10v8.1h1.6V8.3l2.4 5.8h1.3zm3.5-5.6c-.6 0-1.1.2-1.5.5V6h-1.6v8.1h1.6v-.6c.4.4.9.6 1.5.6 1.4 0 2.4-1.2 2.4-2.8s-1-2.8-2.4-2.8zm-.2 4.3c-.7 0-1.2-.5-1.2-1.5s.5-1.5 1.2-1.5 1.2.5 1.2 1.5-.5 1.5-1.2 1.5zM2 18.5c4.7 2.6 10.3 2.6 15 0 .4-.2.2-.6-.2-.4-4.3 2.3-9.5 2.3-14 0-.4-.2-.6.2-.8.4zm16.5-1.5l1.4-.4-1.1-1.3-.3 1.7z" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    icon: (
      <svg className="h-5 w-5 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.2 9.4a5.9 5.9 0 0 0-.5-4.8 6 6 0 0 0-5.8-2.9 6 6 0 0 0-4.6-2.1A6 6 0 0 0 6 2.5a5.9 5.9 0 0 0-4.2 3A6 6 0 0 0 .5 10.7a5.9 5.9 0 0 0 .5 4.8 6 6 0 0 0 5.8 2.9 6 6 0 0 0 4.6 2.1 6 6 0 0 0 5.3-2.9 5.9 5.9 0 0 0 4.2-3 6 6 0 0 0 1.3-5.2zm-9 12.3a4.2 4.2 0 0 1-2.9-1.2l.1-.1 4.7-2.7a.9.9 0 0 0 .5-.8v-6.3l2 .1v6.2a4.2 4.2 0 0 1-4.4 4.8zm-9.3-4.5a4.2 4.2 0 0 1-.8-3.1l.1.1 4.7 2.7a.9.9 0 0 0 .9 0l5.5-3.2v2.3l-5.4 3.1a4.2 4.2 0 0 1-5-1.9zm-1.8-9.8a4.2 4.2 0 0 1 2.2-2l.1.1v5.5a.9.9 0 0 0 .4.8l5.5 3.2-2 1.2-5.4-3.1a4.2 4.2 0 0 1-.8-5.7zm15.7 3.5l-4.7-2.7a.9.9 0 0 0-.9 0L7 9.4V7.1l5.4-3.1a4.2 4.2 0 0 1 6.5 4.5l-.7 2.4zm2.6 4.1a4.2 4.2 0 0 1-2.2 2l-.1-.1v-5.5a.9.9 0 0 0-.4-.8l-5.5-3.2 2-1.2 5.4 3.1a4.2 4.2 0 0 1 .8 5.7zM9.5 13.6l2.5-1.5 2.5 1.5v3l-2.5 1.5-2.5-1.5v-3z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg className="h-5 w-5 text-[#4169E1]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1.6 4.4c1.1 0 2 .9 2 2 0 .4-.1.7-.3 1l1.7 1c.4-.6.6-1.3.6-2 0-2.2-1.8-4-4-4-.8 0-1.5.2-2.1.6l1.2 1.4c.3-.1.6-.1.9 0zm-5.4 3.2c0-1.7 1.4-3.1 3.1-3.1.5 0 1 .1 1.4.3l-1.1 1.4c-.1 0-.2-.1-.3-.1-.9 0-1.6.7-1.6 1.6v.3l-1.5-.4zm1.9 8.2c-.3-.5-.4-1.1-.4-1.7 0-1.9 1.6-3.5 3.5-3.5h.4v1.5h-.4c-1.1 0-2 .9-2 2 0 .4.1.7.3 1l-1.4.7zm6.7-.4c-.9.9-2.1 1.4-3.4 1.4-1.3 0-2.5-.5-3.4-1.4l1.1-1.1c.6.6 1.4 1 2.3 1s1.7-.4 2.3-1l1.1 1.1z" />
      </svg>
    ),
  },
  {
    name: "Redis",
    icon: (
      <svg className="h-5 w-5 text-[#DC382D]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm-7.6 6l7.6-3.8 7.6 3.8L12 11.8 4.4 8zm0 2.2l6.6 3.3v6.7L4.4 17V10.2zm8.6 10v-6.7l6.6-3.3V17l-6.6 3.2z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className="h-5 w-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "FastAPI",
    icon: (
      <svg className="h-5 w-5 text-[#009688]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.9 4.8h3.3l-4.2 7.2h3.6l-5.7 7.2 2.1-6.6H7.2l3.9-7.8z" />
      </svg>
    ),
  },
];

export default function Marquee() {
  const row = [...technologies, ...technologies];
  return (
    <div id="tech-marquee" className="relative overflow-hidden border-y border-red-100/70 bg-gradient-to-r from-red-50/20 via-white/80 to-red-50/20 py-4 backdrop-blur-sm">
      <div className="marquee-track flex w-max items-center gap-6 whitespace-nowrap pr-6">
        {row.map((tech, i) => (
          <div
            key={i}
            className="group flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:border-red-300 hover:bg-white hover:text-slate-900 hover:shadow-md hover:shadow-red-500/5"
          >
            <span className="flex h-5 w-5 items-center justify-center transition-transform duration-300 group-hover:scale-110">
              {tech.icon}
            </span>
            <span className="tracking-tight">{tech.name}</span>
            <span className="ml-1 text-[10px] text-red-500 opacity-60">✦</span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/90 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/90 to-transparent" />
    </div>
  );
}
