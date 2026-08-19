"use client";

import { useEffect, useState } from "react";
import ContactDudes from "./ContactDudes";
import GoodbyeDudes from "./GoodbyeDudes";

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [isLit, setIsLit] = useState(false);

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const card = document.getElementById("contact-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      // Light up card when the line reaches the top edge of the card
      const reached = rect.top <= window.innerHeight * 0.72;
      setIsLit(reached);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 md:py-32 overflow-hidden">
      {/* ── LEFT FLANK BACKGROUND DOODLES (Plants, Carrier Bird, Sleepy Cat) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-2 xl:left-6 2xl:left-14 top-1/2 -translate-y-1/2 w-64 xl:w-76 z-0 opacity-[0.095] hover:opacity-[0.22] transition-opacity duration-500 hidden lg:block text-slate-800"
      >
        <svg viewBox="0 0 240 320" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* 🌿 Tall Potted Plant with Leaves & Perched Bird */}
          <g transform="translate(20, 20)">
            {/* Geo Pot */}
            <polygon points="25,110 55,110 60,75 20,75" fill="#fff" strokeWidth="2" />
            <line x1="16" y1="75" x2="64" y2="75" strokeWidth="2.5" />
            {/* Stems */}
            <path d="M 40 75 Q 25 45 15 25" strokeWidth="2" />
            <path d="M 15 25 Q 5 15 12 5 Q 28 10 15 25" fill="#fff" strokeWidth="1.5" />
            <path d="M 40 75 Q 50 35 65 15" strokeWidth="2" />
            <path d="M 65 15 Q 80 5 75 25 Q 60 25 65 15" fill="#fff" strokeWidth="1.5" />
            <path d="M 40 75 Q 58 55 70 60" strokeWidth="1.8" />
            <path d="M 70 60 Q 82 55 78 68 Q 65 70 70 60" fill="#fff" strokeWidth="1.5" />

            {/* 🐦 Little Bird Perched on Left Leaf */}
            <g transform="translate(5, 5)">
              <ellipse cx="14" cy="12" rx="7" ry="5" transform="rotate(-15 14 12)" fill="#fff" strokeWidth="1.5" />
              <circle cx="20" cy="8" r="4.5" fill="#fff" strokeWidth="1.4" />
              <polygon points="24,7 29,9 24,11" fill="#ef4444" stroke="#ef4444" strokeWidth="1" />
              <circle cx="21" cy="7" r="1" fill="currentColor" />
              <path d="M 10 10 Q 14 8 16 14" strokeWidth="1.2" stroke="#ef4444" />
              <path d="M 7 14 L 2 16" strokeWidth="1.4" />
              {/* Little Musical Notes from Bird */}
              <text x="32" y="6" fontSize="10" fill="#ef4444" stroke="none">♪</text>
            </g>
          </g>

          {/* 🕊️ Carrier Pigeon with Letter Envelope */}
          <g transform="translate(110, 30)">
            <ellipse cx="30" cy="30" rx="14" ry="10" transform="rotate(-20 30 30)" fill="#fff" strokeWidth="1.8" />
            <circle cx="42" cy="20" r="7" fill="#fff" strokeWidth="1.6" />
            <polygon points="48,19 55,21 48,23" fill="#ef4444" stroke="#ef4444" strokeWidth="1" />
            <circle cx="44" cy="18" r="1.2" fill="currentColor" />
            <path d="M 18 26 Q 30 18 36 32" strokeWidth="1.6" stroke="#ef4444" />
            <g transform="translate(48, 22) rotate(15)">
              <rect x="0" y="0" width="24" height="16" rx="1.5" fill="#fff" strokeWidth="1.3" stroke="#ef4444" />
              <path d="M 0 0 L 12 9 L 24 0" strokeWidth="1.2" stroke="#ef4444" />
            </g>
          </g>

          {/* 🐱 SLEEPY CAT IN WOVEN BASKET */}
          <g transform="translate(35, 145)">
            <ellipse cx="45" cy="50" rx="36" ry="14" fill="#fff" strokeWidth="1.8" />
            <path d="M 12 50 C 14 70, 76 70, 78 50" strokeWidth="2" fill="#fff" />
            <path d="M 22 55 L 26 63 M 36 56 L 40 65 M 50 56 L 54 65 M 64 55 L 68 63" stroke="#ef4444" strokeWidth="1.2" />
            <circle cx="34" cy="40" r="11" fill="#fff" strokeWidth="1.6" />
            <polygon points="25,32 28,24 33,31" fill="#ef4444" stroke="#ef4444" strokeWidth="1.2" />
            <polygon points="36,31 41,24 43,32" fill="#ef4444" stroke="#ef4444" strokeWidth="1.2" />
            <path d="M 28 40 Q 30 43 32 40" strokeWidth="1.2" />
            <path d="M 35 40 Q 37 43 39 40" strokeWidth="1.2" />
            <ellipse cx="26" cy="50" rx="3.5" ry="2.5" fill="#fff" strokeWidth="1.2" />
            <ellipse cx="42" cy="50" rx="3.5" ry="2.5" fill="#fff" strokeWidth="1.2" />
            <text x="56" y="32" fontSize="10" fontWeight="bold" fill="#ef4444" stroke="none">z Z</text>
          </g>

          {/* Pinned Sticky Note & Sparkles */}
          <g transform="translate(115, 235) rotate(-6)">
            <rect x="0" y="0" width="46" height="46" rx="2" fill="#fff" strokeWidth="1.6" />
            <circle cx="23" cy="4" r="2.2" fill="#ef4444" />
            <text x="8" y="20" fontSize="9" fontWeight="bold" fill="#ef4444" stroke="none">SAY HI!</text>
            <path d="M 8 28 L 12 32 L 20 24" stroke="#22c55e" strokeWidth="1.5" />
            <line x1="24" y1="28" x2="38" y2="28" strokeWidth="1.2" />
            <line x1="8" y1="36" x2="34" y2="36" strokeWidth="1.2" />
          </g>
          <text x="25" y="295" fontSize="16" fill="#ef4444" stroke="none">✦</text>
          <text x="75" y="305" fontSize="13" fill="currentColor" stroke="none">✨</text>
        </svg>
      </div>

      {/* ── RIGHT FLANK BACKGROUND DOODLES (Potted Fiddle Fig, Birds, Telescope, Cat) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-2 xl:right-6 2xl:right-14 top-1/2 -translate-y-1/2 w-64 xl:w-76 z-0 opacity-[0.095] hover:opacity-[0.22] transition-opacity duration-500 hidden lg:block text-slate-800"
      >
        <svg viewBox="0 0 240 320" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* 🔭 Stickman looking through Telescope at Stars */}
          <g transform="translate(45, 15)">
            <line x1="50" y1="60" x2="30" y2="110" strokeWidth="2" />
            <line x1="50" y1="60" x2="50" y2="110" strokeWidth="2" />
            <line x1="50" y1="60" x2="70" y2="110" strokeWidth="2" />
            <polygon points="25,52 85,35 88,48 28,65" fill="#fff" strokeWidth="2" stroke="#ef4444" />
            <line x1="32" y1="50" x2="35" y2="63" strokeWidth="1.5" />
            <circle cx="86" cy="41" r="7" stroke="#ef4444" strokeWidth="1.5" />
            <circle cx="16" cy="50" r="7" fill="#fff" strokeWidth="1.6" />
            <line x1="16" y1="57" x2="16" y2="85" strokeWidth="2" />
            <path d="M 16 66 L 26 58" strokeWidth="1.8" />
            <circle cx="26" cy="58" r="2.2" fill="#ef4444" />
            <path d="M 16 85 L 8 110 M 16 85 L 24 110" strokeWidth="2" />
            <line x1="2" y1="110" x2="10" y2="110" stroke="#ef4444" strokeWidth="2.5" />
            <line x1="22" y1="110" x2="30" y2="110" stroke="#ef4444" strokeWidth="2.5" />
          </g>

          {/* 🌿 Potted Snake Plant / Houseplant */}
          <g transform="translate(135, 90)">
            <rect x="15" y="55" width="28" height="30" rx="3" fill="#fff" strokeWidth="1.8" />
            <line x1="10" y1="55" x2="48" y2="55" strokeWidth="2.2" />
            {/* Leaves growing tall */}
            <path d="M 22 55 Q 16 25 22 5 Q 28 25 24 55" fill="#fff" strokeWidth="1.6" />
            <path d="M 29 55 Q 32 15 36 0 Q 40 15 33 55" fill="#fff" strokeWidth="1.6" />
            <path d="M 35 55 Q 45 30 42 12 Q 38 30 36 55" fill="#fff" strokeWidth="1.6" />
            <path d="M 22 25 L 22 35 M 34 20 L 34 32" stroke="#ef4444" strokeWidth="1.2" />
          </g>

          {/* 🐱 CAT POUNCING AT FLYING PAPER PLANE */}
          <g transform="translate(25, 150)">
            <path d="M 40 40 Q 65 15 90 35 Q 110 55 135 25" strokeDasharray="3 3" strokeWidth="1.3" opacity="0.6" />
            <g transform="translate(130, 15) rotate(-15)">
              <polygon points="0,15 30,0 10,24" fill="#fff" strokeWidth="1.6" stroke="#ef4444" />
            </g>
            <g transform="translate(45, 45) rotate(-25)">
              <ellipse cx="30" cy="20" rx="20" ry="10" fill="#fff" strokeWidth="1.8" />
              <circle cx="48" cy="14" r="8" fill="#fff" strokeWidth="1.6" />
              <polygon points="44,8 48,2 51,7" fill="#ef4444" stroke="#ef4444" strokeWidth="1" />
              <polygon points="52,7 56,2 58,8" fill="#ef4444" stroke="#ef4444" strokeWidth="1" />
              <circle cx="49" cy="13" r="1.2" fill="currentColor" />
              <path d="M 52 18 L 64 12" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="64" cy="12" r="2.2" fill="#ef4444" />
              <path d="M 12 20 Q 2 24 6 12" strokeWidth="2" stroke="#ef4444" />
            </g>
          </g>

          {/* 🕊️ Little Bird Chirping & Sparkles */}
          <g transform="translate(135, 230)">
            <ellipse cx="14" cy="12" rx="8" ry="6" fill="#fff" strokeWidth="1.5" />
            <circle cx="20" cy="8" r="5" fill="#fff" strokeWidth="1.4" />
            <polygon points="24,7 30,9 24,11" fill="#ef4444" stroke="#ef4444" strokeWidth="1" />
            <circle cx="21" cy="7" r="1" fill="currentColor" />
            <path d="M 10 10 Q 14 8 16 14" strokeWidth="1.2" stroke="#ef4444" />
            <text x="32" y="8" fontSize="12" fill="#ef4444" stroke="none">♪</text>
          </g>
          <text x="35" y="295" fontSize="16" fill="#ef4444" stroke="none">✦</text>
          <text x="75" y="305" fontSize="18" fill="#ef4444" stroke="none">♥</text>
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div
          id="contact-card"
          className={`relative rounded-3xl border bg-white p-8 sm:p-12 md:p-16 pb-28 sm:pb-32 md:pb-36 transition-all duration-700 ${
            isLit
              ? "border-red-400/90 shadow-[0_0_40px_-5px_rgba(239,68,68,0.25)] ring-1 ring-red-400/40"
              : "border-slate-200 shadow-xs"
          }`}
        >
          {/* Animated Stickmen: Stressed Phone guy, Falling Papers guy, and Landline guy */}
          <ContactDudes />

          {/* 6 Goodbye Stickmen Waving at bottom border */}
          <GoodbyeDudes />

          {/* Subtle top indicator glow dot where line docks */}
          <div
            className={`absolute left-1/2 top-0 h-1.5 w-12 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-red-500 to-transparent transition-opacity duration-700 ${
              isLit ? "opacity-100" : "opacity-0"
            }`}
          />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-red-600 shadow-xs">
                Contact
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Let&apos;s build something great.
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
                Tell us about your project, your timeline, and where you want
                to go. We&apos;ll tell you how we&apos;d get there.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:hello@noobdevs.com"
                  className="group flex items-center gap-3 text-sm font-medium text-slate-700 transition-colors hover:text-red-600"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-red-600 transition-colors group-hover:border-red-200 group-hover:bg-red-50">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  hello@noobdevs.com
                </a>

                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-400">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  We reply within 24 hours
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit} action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              <input type="hidden" name="access_key" value="1e1b18e7-8ca8-4955-a4c5-efa09bc8ce7c" />
              <input type="hidden" name="subject" value="New Lead from NoobDevs Studio!" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={update("name")}
                  className={`mt-1.5 ${inputClass}`}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={update("email")}
                  className={`mt-1.5 ${inputClass}`}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={update("message")}
                  className={`mt-1.5 ${inputClass}`}
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-600 bg-[length:200%_auto] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all duration-300 hover:bg-right hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-600/35 active:translate-y-0"
              >
                {sent ? "Message sent!" : "Send message"}
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
