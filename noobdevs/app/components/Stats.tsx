import { Counter, Reveal } from "../lib/ui";

const stats = [
  { value: 6, suffix: "", label: "Specialists on the team" },
  { value: 4, suffix: "", label: "Core disciplines" },
  { value: 100, suffix: "%", label: "End-to-end ownership" },
  { value: 24, suffix: "/7", label: "Support & responsiveness" },
];

export default function Stats() {
  return (
    <section className="border-b border-slate-100/80 bg-white/70 backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 px-6 py-16 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 90}
            className="flex flex-col items-center gap-2 px-4 text-center"
          >
            <span className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-red-600 via-rose-600 to-red-500 bg-clip-text text-transparent">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
            </span>
            <span className="text-sm font-medium text-slate-600">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
