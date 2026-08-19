export default function Hero() {
  return (
    <section id="top" className="relative pt-24 md:pt-36 pb-20 overflow-hidden">
      {/* ── LEFT FLANK: Monitor with Sleeping Cat, Coffee Steam & Plant ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-2 xl:left-6 2xl:left-14 top-1/2 -translate-y-1/2 w-64 xl:w-76 z-0 opacity-[0.095] hover:opacity-[0.22] transition-opacity duration-500 hidden lg:block text-slate-800"
      >
        <svg viewBox="0 0 220 260" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* Main Monitor */}
          <rect x="52" y="70" width="76" height="50" rx="3" fill="#fff" />
          <rect x="56" y="74" width="68" height="42" rx="1.5" strokeDasharray="2 2" opacity="0.5" />
          <path d="M 74 90 L 66 95 L 74 100" strokeWidth="1.9" stroke="#ef4444" />
          <path d="M 80 88 L 76 102" strokeWidth="1.6" />
          <path d="M 82 90 L 90 95 L 82 100" strokeWidth="1.9" stroke="#ef4444" />
          <path d="M 90 120 L 90 128 M 78 128 L 102 128" strokeWidth="2" />

          {/* 🐱 Sleeping Cat on Monitor */}
          <g transform="translate(68, 52)">
            <path d="M 12 18 C 12 8, 38 8, 38 18 C 38 24, 30 24, 12 18 Z" fill="#fff" strokeWidth="1.6" />
            <ellipse cx="10" cy="16" rx="6" ry="5.5" fill="#fff" strokeWidth="1.5" />
            <polygon points="6,12 8,7 11,11" fill="currentColor" fillOpacity="0.15" strokeWidth="1.2" />
            <polygon points="11,11 14,7 16,12" fill="currentColor" fillOpacity="0.15" strokeWidth="1.2" />
            <path d="M 7 16 Q 9 18 11 16" strokeWidth="1.1" />
            <path d="M 11 16 Q 13 18 15 16" strokeWidth="1.1" />
            <path d="M 38 18 Q 44 24 42 32 Q 40 36 43 38" strokeWidth="1.6" stroke="#ef4444" />
            <text x="26" y="6" fontSize="8" fontWeight="bold" fill="#ef4444" stroke="none">z Z</text>
          </g>

          {/* 🌿 Potted Desk Succulent with 🐦 Perched Bird */}
          <g transform="translate(145, 80)">
            <polygon points="10,50 30,50 34,35 6,35" fill="#fff" strokeWidth="1.5" />
            <path d="M 20 35 Q 12 20 20 5 Q 28 20 20 35" fill="#fff" strokeWidth="1.4" />
            <path d="M 20 25 Q 10 18 12 12" stroke="#22c55e" strokeWidth="1.2" />
            {/* 🐦 Bird */}
            <g transform="translate(24, 4)">
              <ellipse cx="8" cy="8" rx="5" ry="3.5" fill="#fff" strokeWidth="1.2" />
              <circle cx="12" cy="5" r="3" fill="#fff" strokeWidth="1" />
              <polygon points="14,4 18,5 14,7" fill="#ef4444" stroke="#ef4444" strokeWidth="0.8" />
              <text x="18" y="4" fontSize="8" fill="#ef4444" stroke="none">♪</text>
            </g>
          </g>

          {/* Desk Surface & Legs */}
          <line x1="12" y1="140" x2="180" y2="140" strokeWidth="2.8" />
          <line x1="24" y1="140" x2="24" y2="210" strokeWidth="2.2" />
          <line x1="168" y1="140" x2="168" y2="210" strokeWidth="2.2" />

          {/* Coffee Mug with Steam */}
          <rect x="34" y="130" width="9" height="10" rx="1.5" fill="#fff" />
          <path d="M 43 133 C 46 133, 46 137, 43 137" />
          <path d="M 37 127 Q 39 122 37 117" stroke="#ef4444" strokeWidth="1.2" />
        </svg>
      </div>

      {/* ── RIGHT FLANK: 🕊️ Soaring Flock of Seagulls, CD & Lightbulb ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-2 xl:right-6 2xl:right-14 top-1/2 -translate-y-1/2 w-64 xl:w-76 z-0 opacity-[0.095] hover:opacity-[0.22] transition-opacity duration-500 hidden lg:block text-slate-800"
      >
        <svg viewBox="0 0 230 260" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* Flying Seagulls */}
          <g transform="translate(25, 20)">
            <path d="M 20 20 Q 32 10 42 18 Q 52 10 65 20" strokeWidth="2" stroke="#ef4444" />
            <path d="M 68 32 Q 76 25 84 30 Q 92 25 100 32" strokeWidth="1.6" />
            <path d="M 45 42 Q 51 37 57 41 Q 63 37 69 42" strokeWidth="1.3" opacity="0.8" />
          </g>

          {/* Idea Lightbulb */}
          <line x1="175" y1="0" x2="175" y2="28" strokeWidth="1.2" />
          <path d="M 167 28 C 160 33, 160 43, 167 50 C 170 53, 171 56, 171 60 L 179 60 C 179 56, 180 53, 183 50 C 190 43, 190 33, 183 28 Z" fill="#fff" />
          <path d="M 173 43 L 175 36 L 177 43" stroke="#ef4444" strokeWidth="1.3" />

          {/* 💿 Retro CD with Music Notes */}
          <g transform="translate(110, 90)">
            <circle cx="35" cy="35" r="30" strokeWidth="2" fill="#fff" />
            <circle cx="35" cy="35" r="22" strokeDasharray="3 3" opacity="0.4" />
            <circle cx="35" cy="35" r="10" strokeWidth="1.5" stroke="#ef4444" />
            <circle cx="35" cy="35" r="4.5" fill="#ef4444" />
            <text x="68" y="24" fontSize="16" fill="#ef4444" stroke="none">♪</text>
            <text x="75" y="44" fontSize="14" fill="currentColor" stroke="none">♫</text>
          </g>

          {/* 🌿 Hanging Plant Vine */}
          <g transform="translate(30, 100)">
            <path d="M 20 20 Q 10 45 18 70 Q 25 95 18 120" strokeWidth="1.8" stroke="#22c55e" />
            <ellipse cx="18" cy="50" rx="4" ry="2.5" fill="#fff" stroke="#22c55e" strokeWidth="1.2" />
            <ellipse cx="22" cy="75" rx="4" ry="2.5" fill="#fff" stroke="#22c55e" strokeWidth="1.2" />
            <ellipse cx="16" cy="100" rx="4" ry="2.5" fill="#fff" stroke="#22c55e" strokeWidth="1.2" />
          </g>
        </svg>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 text-center relative z-10">
        {/* Hero Title */}
        <h1
          className="animate-fade-up text-5xl font-extrabold leading-[1.06] tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: "60ms" }}
        >
          We build software
          <br />
          that{" "}
          <span className="bg-gradient-to-r from-red-600 via-rose-600 to-red-500 bg-clip-text text-transparent">
            thinks.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-up mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
          style={{ animationDelay: "180ms" }}
        >
          NoobDevs is a six-person collective of software, AI/ML, and DevOps
          engineers. We design, build, and ship intelligent products from first
          commit to global production.
        </p>
      </div>
    </section>
  );
}
