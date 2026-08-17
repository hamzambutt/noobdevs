import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PageScrollLine from "./components/PageScrollLine";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-red-100 selection:text-red-900">
      <Navbar />
      <div className="relative">
        <PageScrollLine />
        <main className="relative z-10">
          <Hero />
          <Marquee />
          <About />
          <Capabilities />
          <Projects />
          <Team />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}
