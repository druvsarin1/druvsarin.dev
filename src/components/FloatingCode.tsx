"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeSnippets = [
  "const ai =",
  "async fn",
  "import torch",
  "def train():",
  "fetch(api)",
  "useState()",
  "=> {",
  "};",
  "class Agent",
  "model.fit()",
  "return data",
  "await llm",
  "<Component",
  "/>",
  "pip install",
  "npm run",
  "git push",
  "docker build",
  "lambda x:",
  "for i in",
  "if __name__",
  ".then(res)",
  "export default",
  "interface {}",
  "type Props",
  "SELECT *",
  "CREATE TABLE",
  "useEffect",
  "onClick={}",
  "className=",
];

interface FloatingItem {
  id: number;
  text: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
  size: number;
}

export default function FloatingCode() {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    const generateItems = () => {
      const newItems: FloatingItem[] = [];
      const numItems = 20;

      for (let i = 0; i < numItems; i++) {
        newItems.push({
          id: i,
          text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: Math.random() * 20 + 30,
          delay: Math.random() * 10,
          size: Math.random() * 0.3 + 0.6,
        });
      }
      return newItems;
    };

    setItems(generateItems());
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute font-mono text-[10px] whitespace-nowrap"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            opacity: 0.07,
            fontSize: `${item.size}rem`,
            color: "#64b5f6",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.text}
        </motion.div>
      ))}
    </div>
  );
}
