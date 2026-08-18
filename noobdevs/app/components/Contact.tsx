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
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
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
