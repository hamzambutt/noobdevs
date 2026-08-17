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
    <footer className="border-t border-slate-200/80 bg-white">
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
