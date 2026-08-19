import React from "react";

type TechItem = {
  name: string;
  src: string;
};

const technologies: TechItem[] = [
  { name: "Python", src: "/logos/python.svg" },
  { name: "FastAPI", src: "/logos/fastapi.svg" },
  { name: "PyTorch", src: "/logos/pytorch.svg" },
  { name: "Next.js", src: "/logos/nextjs.svg" },
  { name: "React", src: "/logos/react.svg" },
  { name: "TypeScript", src: "/logos/typescript.svg" },
  { name: "Docker", src: "/logos/docker.svg" },
  { name: "Kubernetes", src: "/logos/kubernetes.svg" },
  { name: "AWS", src: "/logos/aws.svg" },
  { name: "OpenAI", src: "/logos/openai.svg" },
  { name: "PostgreSQL", src: "/logos/postgresql.svg" },
  { name: "Redis", src: "/logos/redis.svg" },
  { name: "Tailwind CSS", src: "/logos/tailwindcss.svg" },
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
              <img
                src={tech.src}
                alt={tech.name}
                className="h-5 w-5 object-contain"
                loading="eager"
              />
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
