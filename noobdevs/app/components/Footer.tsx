import BrandLogo from "./BrandLogo";

const links = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200/80 bg-transparent overflow-visible">
      {/* Footer Left Flank: Seagulls, Reeds/Plants, Paw Prints */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-2 xl:left-8 top-1/2 -translate-y-1/2 w-48 h-20 opacity-[0.095] hover:opacity-[0.22] transition-opacity duration-500 hidden lg:block text-slate-800"
      >
        <svg viewBox="0 0 180 70" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* Seagulls */}
          <path d="M 15 18 Q 25 10 34 16 Q 43 10 52 18" strokeWidth="1.8" stroke="#ef4444" />
          <path d="M 58 26 Q 65 20 72 25 Q 79 20 86 26" strokeWidth="1.4" />
          {/* Water reeds / plant sprouts */}
          <path d="M 120 60 Q 115 35 120 20" strokeWidth="1.8" />
          <path d="M 120 40 Q 110 32 105 35" strokeWidth="1.4" stroke="#22c55e" />
          <path d="M 120 30 Q 130 22 135 25" strokeWidth="1.4" stroke="#22c55e" />
          <path d="M 128 60 Q 132 40 142 28" strokeWidth="1.5" />
          {/* Paw prints */}
          <ellipse cx="160" cy="45" rx="2.5" ry="3.5" fill="#ef4444" stroke="#ef4444" />
          <circle cx="156" cy="38" r="1" fill="#ef4444" />
          <circle cx="160" cy="36" r="1" fill="#ef4444" />
          <circle cx="164" cy="38" r="1" fill="#ef4444" />
        </svg>
      </div>

      {/* Footer Right Flank: Potted Succulent, Chirping Bird & Waving Stickman */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-2 xl:right-8 top-1/2 -translate-y-1/2 w-48 h-20 opacity-[0.095] hover:opacity-[0.22] transition-opacity duration-500 hidden lg:block text-slate-800"
      >
        <svg viewBox="0 0 180 70" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* Potted Mini Plant */}
          <g transform="translate(15, 10)">
            <polygon points="10,48 24,48 26,34 8,34" fill="#fff" strokeWidth="1.5" />
            <path d="M 17 34 Q 12 20 17 10 Q 22 20 17 34" fill="#fff" strokeWidth="1.4" />
            <path d="M 17 24 Q 24 18 28 20" strokeWidth="1.2" stroke="#22c55e" />
          </g>
          {/* 🐦 Bird on Twig */}
          <g transform="translate(55, 12)">
            <ellipse cx="14" cy="18" rx="8" ry="6" fill="#fff" strokeWidth="1.4" />
            <circle cx="20" cy="14" r="5" fill="#fff" strokeWidth="1.3" />
            <polygon points="24,13 30,15 24,17" fill="#ef4444" stroke="#ef4444" strokeWidth="1" />
            <circle cx="21" cy="13" r="1" fill="currentColor" />
            <path d="M 10 16 Q 14 14 16 20" strokeWidth="1.2" stroke="#ef4444" />
            <text x="28" y="10" fontSize="10" fill="#ef4444" stroke="none">♪</text>
          </g>
          {/* Waving Stickman */}
          <g transform="translate(115, 5)">
            <circle cx="20" cy="14" r="5" fill="#fff" strokeWidth="1.5" />
            <line x1="20" y1="19" x2="20" y2="40" strokeWidth="1.8" />
            <path d="M 20 25 L 30 18 L 34 10" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="34" cy="10" r="2" fill="#ef4444" />
            <path d="M 20 40 L 14 56 M 20 40 L 26 56" strokeWidth="1.8" />
            <line x1="10" y1="56" x2="16" y2="56" stroke="#ef4444" strokeWidth="2.2" />
            <line x1="24" y1="56" x2="30" y2="56" stroke="#ef4444" strokeWidth="2.2" />
            <text x="38" y="12" fontSize="10" fill="#ef4444" stroke="none">✨</text>
          </g>
        </svg>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-red-200">
            <BrandLogo className="h-full w-full" />
          </div>
          <span className="text-[15px] font-bold tracking-tight text-slate-900">
            Noob
            <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
              Devs
            </span>
          </span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-red-600"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-slate-400">
          © 2026 NoobDevs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
