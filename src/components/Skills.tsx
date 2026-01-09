"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI / ML",
    skills: ["LLMs", "RAG", "Multi-Agent Systems", "AWS Strands", "AWS AgentCore", "NLP", "spaCy", "Transformers"],
  },
  {
    title: "Backend",
    skills: ["Python", "FastAPI", "Node.js", "Express", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Frontend",
    skills: ["React", "React Native", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Terraform", "Vercel", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
        <p className="text-[#a1a1aa] text-lg mb-16 max-w-2xl">
          Tools I use to build intelligent systems from concept to production.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="p-6 rounded-xl border border-[#222] hover:border-[#333] transition-colors"
          >
            <h3 className="text-lg font-semibold mb-4 text-[#ededed]">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 text-sm bg-[#1a1a1a] text-[#a1a1aa] rounded-lg hover:text-[#ededed] hover:bg-[#222] transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
