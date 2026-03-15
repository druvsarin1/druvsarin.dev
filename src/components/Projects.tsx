"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Avyra (v2)",
    subtitle: "Retrospective Chart Extraction",
    description:
      "Agentic tool that extracts clinical variables from Epic EHR data using FHIR APIs and Claude. Runs an autonomous extraction loop — fetching structured patient data, searching clinical documents, and returning results with source citations and confidence scores.",
    problem: "Clinical research teams spend weeks manually pulling variables from EHR records for retrospective studies.",
    tech: ["Python", "Claude", "Epic FHIR API", "Streamlit", "SMART Backend Services"],
    link: "https://github.com/druvsarin1/avyra-pt2",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Avyra (v1)",
    subtitle: "Healthcare Document Intelligence",
    description:
      "Multi-agent pipeline that transforms unstructured medical documents into FHIR-compliant structured data. 6 specialized AI agents handle OCR, entity extraction, and medical coding.",
    problem: "80% of healthcare data is unstructured, costing hospitals thousands of hours in manual transcription.",
    tech: ["Python", "FastAPI", "Claude 3.5", "AWS Textract", "spaCy", "Docker"],
    link: "https://github.com/druvsarin1/avyra",
    gradient: "from-teal-500/20 to-blue-500/20",
  },
  {
    title: "Synced Ticketing Platform",
    subtitle: "Built for My Event Company",
    description:
      "I run an event company (@synced_official) and built this platform from scratch to cut out third-party ticketing fees. Handles tiered ticket sales with access codes, Stripe checkout, QR code generation, and real-time check-in scanning backed by Supabase.",
    problem: "Platforms like Eventbrite and Ticketmaster take a significant cut of every ticket sold — so I built my own.",
    tech: ["Next.js", "TypeScript", "Stripe", "Supabase", "QR Code", "Resend"],
    link: "https://github.com/druvsarin1/synced-ticketing-platform",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Voxa",
    subtitle: "AI Voice Receptionist",
    description:
      "Voice AI system that handles business phone calls using local LLM inference. Full speech-to-speech pipeline with privacy-first architecture.",
    problem: "Small businesses miss calls and can't afford 24/7 reception staff.",
    tech: ["React Native", "Express.js", "Twilio", "Ollama", "TypeScript"],
    link: "https://github.com/druvsarin1/Voxa",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "NBA Salary Predictor",
    subtitle: "ML Classification Model",
    description:
      "Machine learning model predicting NBA player salaries from performance statistics. Achieved 72% accuracy with tuned Random Forest classifier.",
    problem: "NBA teams need data-driven approaches to evaluate fair market value during contract negotiations.",
    tech: ["Python", "scikit-learn", "pandas", "GridSearchCV"],
    link: "https://github.com/druvsarin1/NBA-Predictive-Model",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-[#a1a1aa] text-lg mb-16 max-w-2xl">
          Building AI systems that solve real problems with production-grade engineering.
        </p>
      </motion.div>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="block group"
          >
            <div
              className={`relative p-8 rounded-2xl border border-[#222] hover:border-[#333] transition-all duration-300 overflow-hidden bg-gradient-to-br ${project.gradient} hover:scale-[1.02]`}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} blur-3xl`} />
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#a1a1aa] font-medium">{project.subtitle}</p>
                  </div>
                  <motion.span
                    className="mt-4 md:mt-0 text-[#a1a1aa] group-hover:text-white group-hover:translate-x-1 transition-all"
                  >
                    View Project →
                  </motion.span>
                </div>

                {/* Problem callout */}
                <div className="mb-6 p-4 bg-[#0a0a0a]/50 rounded-lg border border-[#222]">
                  <p className="text-sm text-[#a1a1aa]">
                    <span className="text-[#ededed] font-medium">The Problem: </span>
                    {project.problem}
                  </p>
                </div>

                {/* Description */}
                <p className="text-[#a1a1aa] mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-[#1a1a1a] text-[#a1a1aa] rounded-full border border-[#333]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
