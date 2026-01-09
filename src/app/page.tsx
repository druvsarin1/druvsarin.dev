import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import BinaryRain from "@/components/BinaryRain";
import FloatingCode from "@/components/FloatingCode";

export default function Home() {
  return (
    <main className="relative">
      <BinaryRain />
      <FloatingCode />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-[#222]">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="#" className="font-bold text-lg">
            DS
          </a>
          <div className="flex gap-8">
            <a
              href="#experience"
              className="text-[#a1a1aa] hover:text-[#ededed] transition-colors text-sm"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-[#a1a1aa] hover:text-[#ededed] transition-colors text-sm"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-[#a1a1aa] hover:text-[#ededed] transition-colors text-sm"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-[#a1a1aa] hover:text-[#ededed] transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
