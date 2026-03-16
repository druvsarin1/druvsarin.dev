"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Travelers",
    role: "AI Engineer",
    period: "Feb 2025 - Present",
    description:
      "Building AI-powered data intelligence platform using AWS Strands Agents and MCP. Evolved RAG-based SQL generation into sophisticated agentic solution for enterprise data analytics.",
    tech: ["React", "TypeScript", "AWS Bedrock", "Claude", "MCP", "Lambda"],
    highlight: "Agentic AI Platform",
  },
  {
    company: "Avyra",
    role: "Co-Founder",
    period: "Jul 2025 - Present",
    description:
      "Co-founded healthcare data interoperability platform. Built multi-agent pipeline for automated PDF-to-FHIR conversion. Applied to Y Combinator Fall 2025.",
    tech: ["Python", "FastAPI", "AWS", "Docker", "FHIR"],
    highlight: "YC Top 10%",
  },
  {
    company: "Pitney Bowes",
    role: "Machine Learning Intern",
    period: "Jun 2023 - Sep 2023",
    description:
      "Built time series forecasting models using Prophet to predict partner transactional volume.",
    tech: ["Python", "Prophet", "pandas"],
    highlight: "$6M Saved",
  },
  {
    company: "UnitedHealth Group",
    role: "Data Science Intern",
    period: "Jun 2022 - Sep 2022",
    description:
      "Optimized RDBMS structure for faster access and management of 1M+ customer records.",
    tech: ["SQL", "Python", "Data Engineering"],
    highlight: "1M+ Records",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Experience</h2>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company + exp.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative pl-8 border-l-2 border-[#222] hover:border-[#444] transition-colors"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-[#333] group-hover:border-[#ededed] transition-colors" />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-xl font-semibold text-[#ededed] group-hover:text-white transition-colors">
                  {exp.role}
                </h3>
                <p className="text-[#a1a1aa]">{exp.company}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 text-xs font-medium bg-[#1a1a1a] text-[#ededed] rounded-full border border-[#333]">
                  {exp.highlight}
                </span>
                <span className="text-sm text-[#666] whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
            </div>

            <p className="text-[#a1a1aa] mb-4 leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-mono bg-[#111] text-[#666] rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
