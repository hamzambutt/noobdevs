export default function Hero() {
  return (
    <section id="top" className="relative pt-24 md:pt-36 pb-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 text-center">
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
