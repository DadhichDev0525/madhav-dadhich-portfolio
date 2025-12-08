"use client";

import { motion } from "framer-motion";
import { CheckCircle, Terminal, Zap, Briefcase, Calendar } from "lucide-react";
import { experiences } from "@/constants/experience";
import { colorClasses } from "@/constants/theme";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
              <Briefcase className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-mono">
                career.log
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Work </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A journey of continuous learning, impactful contributions, and
              evolving from intern to core developer in under a year.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          >
            {[
              { value: "3+", label: "Companies" },
              { value: "1+", label: "Years Experience" },
              { value: "5+", label: "Projects Shipped" },
              { value: "100%", label: "Remote Work" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl border border-white/10 bg-white/5"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-teal-500 to-blue-500 transform md:-translate-x-1/2" />

            {/* Experience items */}
            <div className="space-y-16">
              {experiences.map((exp, index) => {
                const colors = colorClasses[exp.color];
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={`${exp.company}-${exp.period}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative grid md:grid-cols-2 gap-8 md:gap-16 ${
                      isEven ? "" : "md:direction-rtl"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-2 md:left-1/2 top-0 transform -translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          delay: index * 0.1,
                        }}
                        viewport={{ once: true }}
                        className={`w-4 h-4 rounded-full ${colors.bg} border-2 ${colors.border} ${colors.glow}`}
                      >
                        {exp.status === "current" && (
                          <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-50" />
                        )}
                      </motion.div>
                    </div>

                    {/* Content - alternates sides */}
                    <div
                      className={`ml-10 md:ml-0 ${
                        isEven ? "md:pr-16" : "md:pl-16 md:col-start-2"
                      }`}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                        className={`p-6 rounded-2xl border ${colors.border} bg-slate-900/50 backdrop-blur-sm hover:${colors.glow} transition-all duration-500 group`}
                      >
                        {/* Status badge */}
                        {exp.status === "current" && (
                          <div
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-xs font-mono mb-4`}
                          >
                            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                            ACTIVE
                          </div>
                        )}

                        {/* Period */}
                        <div
                          className={`flex items-center gap-2 ${colors.text} text-sm font-mono mb-2`}
                        >
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>

                        {/* Title & Company */}
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                          {exp.title}
                        </h3>
                        <div className={`${colors.text} font-semibold mb-4`}>
                          @ {exp.company}
                        </div>

                        {/* Description */}
                        <p className="text-slate-400 mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-2 mb-6">
                          {exp.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle
                                className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`}
                              />
                              <span className="text-sm text-slate-300">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-slate-300 font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div
                      className={`hidden md:block ${
                        isEven
                          ? "md:col-start-2"
                          : "md:col-start-1 md:row-start-1"
                      }`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 mb-6">
              <Terminal className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-teal-300 font-mono">
                skills.json
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Technical <span className="text-teal-400">Arsenal</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: "Frontend",
                icon: "⚛️",
                color: "purple",
                skills: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                ],
              },
              {
                category: "State & Data",
                icon: "🔄",
                color: "teal",
                skills: [
                  "React Query",
                  "Redux Toolkit",
                  "Context API",
                  "Zustand",
                  "REST APIs",
                ],
              },
              {
                category: "Backend & Tools",
                icon: "🛠️",
                color: "blue",
                skills: [
                  "Node.js",
                  "NestJS",
                  "MongoDB",
                  "PostgreSQL",
                  "Firebase",
                  "Git",
                ],
              },
            ].map((skillSet, index) => {
              const colors = colorClasses[skillSet.color];
              return (
                <motion.div
                  key={skillSet.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-2xl border ${colors.border} bg-slate-900/50 backdrop-blur-sm hover:${colors.glow} transition-all duration-500 group`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{skillSet.icon}</span>
                    <h3 className={`text-xl font-bold ${colors.text}`}>
                      {skillSet.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-2 text-sm rounded-lg border ${colors.border} ${colors.bg} text-slate-200 font-mono group-hover:scale-105 transition-transform`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-8 md:p-12 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 via-slate-900/50 to-teal-900/20 backdrop-blur-sm"
          >
            <Zap className="w-12 h-12 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for the Next Challenge
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Looking to join a team where I can contribute to meaningful
              products, continue growing as a developer, and help build
              something impactful.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300"
            >
              Let&apos;s Connect
              <span className="text-xl">→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
