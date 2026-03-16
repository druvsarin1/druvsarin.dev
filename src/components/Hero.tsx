"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["AI Engineer", "Northeastern CS '24"];

// Typewriter effect component
function TypeWriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          // Keep cursor blinking after typing
        }
      }, 80);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {displayText}
      <span
        className={`inline-block w-[3px] h-[1em] bg-blue-400 ml-1 align-middle ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
        style={{ boxShadow: "0 0 10px #60a5fa, 0 0 20px #60a5fa" }}
      />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-5xl mx-auto relative z-10 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Profile picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="relative w-28 h-28 md:w-32 md:h-32"
        >
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-md opacity-50"
          />
          <img
            src="/profile.png"
            alt="Druv Sarin"
            className="relative rounded-full object-cover border-2 border-[#333] w-full h-full"
          />
        </motion.div>

        {/* Terminal-style greeting */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <span className="text-green-400 font-mono">❯</span>
          <span className="text-[#a1a1aa] font-mono">Hi, I&apos;m</span>
        </motion.div>

        {/* Name with glow effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          <span
            className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text"
            style={{
              textShadow: "0 0 40px rgba(96, 165, 250, 0.3)",
            }}
          >
            <TypeWriter text="Druv Sarin" delay={500} />
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="text-xl md:text-2xl text-[#a1a1aa] max-w-2xl leading-relaxed"
        >
          Software engineer building{" "}
          <span className="text-[#ededed] font-medium">production-grade AI systems</span>{" "}
          and agentic platforms. I specialize in turning complex problems into
          scalable, reliable software — from orchestration and deployment to
          real-world integration.
        </motion.p>

        {/* Role badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="flex flex-wrap gap-3 pt-4"
        >
          {roles.map((role, index) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                borderColor: "#60a5fa",
                boxShadow: "0 0 15px rgba(96, 165, 250, 0.3)"
              }}
              className="px-4 py-2 rounded-full border border-[#333] text-sm text-[#a1a1aa] hover:text-[#ededed] transition-all cursor-default"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
          className="flex flex-wrap gap-4 pt-8"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-[#ededed] text-[#0a0a0a] rounded-full font-medium transition-all"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              borderColor: "#60a5fa",
              boxShadow: "0 0 15px rgba(96, 165, 250, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 border border-[#333] rounded-full font-medium hover:bg-[#111] transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>

    </section>
  );
}
