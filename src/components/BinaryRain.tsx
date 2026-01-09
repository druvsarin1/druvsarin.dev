"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BinaryColumn {
  id: number;
  x: number;
  delay: number;
  duration: number;
  characters: string[];
}

export default function BinaryRain() {
  const [columns, setColumns] = useState<BinaryColumn[]>([]);

  useEffect(() => {
    // Generate columns on client side only
    const generateColumns = () => {
      const cols: BinaryColumn[] = [];
      const numColumns = Math.floor(window.innerWidth / 40); // Column every 40px

      for (let i = 0; i < numColumns; i++) {
        // Generate random binary string
        const chars: string[] = [];
        const length = Math.floor(Math.random() * 15) + 8;
        for (let j = 0; j < length; j++) {
          chars.push(Math.random() > 0.5 ? "1" : "0");
        }

        cols.push({
          id: i,
          x: i * 40 + Math.random() * 20,
          delay: Math.random() * 20,
          duration: Math.random() * 15 + 20,
          characters: chars,
        });
      }
      return cols;
    };

    setColumns(generateColumns());

    const handleResize = () => {
      setColumns(generateColumns());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {columns.map((column) => (
        <motion.div
          key={column.id}
          className="absolute top-0 flex flex-col font-mono text-xs"
          style={{ left: column.x }}
          initial={{ y: "-100%" }}
          animate={{ y: "100vh" }}
          transition={{
            duration: column.duration,
            delay: column.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {column.characters.map((char, idx) => (
            <span
              key={idx}
              className="leading-5"
              style={{
                color: idx === 0
                  ? "rgba(100, 200, 255, 0.6)"
                  : `rgba(100, 200, 255, ${0.15 - idx * 0.01})`,
                textShadow: idx === 0 ? "0 0 8px rgba(100, 200, 255, 0.5)" : "none",
              }}
            >
              {char}
            </span>
          ))}
        </motion.div>
      ))}

      {/* Gradient overlay to fade effect at top and bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
    </div>
  );
}
