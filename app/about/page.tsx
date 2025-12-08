"use client";

import { motion } from "framer-motion";
import {
  Code,
  User,
  Rocket,
  Coffee,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { values, milestones } from "@/constants/about";
import { colorClasses } from "@/constants/theme";

export default function AboutPage() {
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
              <User className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-mono">whoami</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
                Me
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              My journey, philosophy, and passion for building great digital
              products.
            </p>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          >
            {[
              { icon: MapPin, label: "Based in", value: "India" },
              { icon: Coffee, label: "Fuel", value: "Coffee ☕" },
              { icon: GraduationCap, label: "Learning", value: "Always" },
              { icon: Rocket, label: "Status", value: "Building" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="text-center p-4 rounded-xl border border-white/10 bg-white/5 group hover:border-purple-500/50 transition-all"
                >
                  <Icon className="w-5 h-5 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-xs text-slate-500 font-mono mb-1">
                    {item.label}
                  </div>
                  <div className="text-white font-semibold">{item.value}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-12 rounded-3xl border border-purple-500/30 bg-slate-900/50 backdrop-blur-sm mb-20"
          >
            {/* Decorative code bracket */}
            <div className="absolute -top-4 left-8 px-4 py-1 bg-slate-950 border border-purple-500/30 rounded-lg">
              <span className="text-purple-400 font-mono text-sm">
                {"<Story>"}
              </span>
            </div>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                My journey into web development began in{" "}
                <span className="text-purple-400 font-semibold">
                  September 2024
                </span>
                , driven by curiosity and a desire to build real, practical
                products. In just over a year, I progressed from learning basic
                React to contributing to production-grade SaaS applications and
                exam platforms used in real environments.
              </p>

              <p>
                I&apos;ve worked across complex UI flows, performance
                optimization, multilingual test systems, SEO architecture, and
                subscription modules — experiences that shaped my mindset into a{" "}
                <span className="text-teal-400 font-semibold">
                  product-focused engineer
                </span>{" "}
                rather than just a coder.
              </p>

              <p>
                I learn by <span className="text-blue-400">building</span>,{" "}
                <span className="text-pink-400">breaking</span>,
                <span className="text-purple-400"> fixing</span>, and{" "}
                <span className="text-teal-400">improving</span> — not just
                consuming tutorials. I value clean UI, simplicity, clarity, and
                meaningful work. I&apos;m currently contributing to Sarkari
                Buddy, a full-scale government exam SaaS we&apos;re building as
                a team, which taught me ownership, collaboration, and
                problem-solving at scale.
              </p>

              <p className="text-xl font-semibold text-white">
                My goal is to build impactful digital products, collaborate with
                strong teams, and grow into a full-stack product engineer
                capable of delivering complete systems end-to-end.
              </p>
            </div>

            {/* Decorative code bracket */}
            <div className="absolute -bottom-4 right-8 px-4 py-1 bg-slate-950 border border-purple-500/30 rounded-lg">
              <span className="text-purple-400 font-mono text-sm">
                {"</Story>"}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
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
              <Code className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-teal-300 font-mono">
                core_values.ts
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What Drives <span className="text-teal-400">Me</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              const colors = colorClasses[value.color];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-2xl border ${colors.border} bg-slate-900/50 backdrop-blur-sm hover:${colors.glow} transition-all duration-500 group`}
                >
                  <div
                    className={`inline-block p-4 rounded-xl ${colors.bg} mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
              <Rocket className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-mono">
                journey.log
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              My <span className="text-blue-400">Journey</span>
            </h2>
          </motion.div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-purple-500 via-teal-500 to-blue-500" />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-4">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.event}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pt-4 md:pt-16 group"
                >
                  {/* Dot - only visible on desktop */}
                  <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-purple-500 group-hover:border-teal-400 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all" />

                  {/* Icon */}
                  <div className="text-2xl text-center mb-2">
                    {milestone.icon}
                  </div>

                  {/* Year */}
                  <div className="text-xs text-purple-400 font-mono text-center mb-2">
                    {milestone.year}
                  </div>

                  {/* Event */}
                  <div className="text-sm text-slate-300 text-center leading-tight px-2">
                    {milestone.event}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Technical <span className="text-purple-400">Skills</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Frontend Development",
                color: "purple",
                skills: [
                  "React & React Hooks",
                  "Next.js & App Router",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Responsive Design",
                ],
              },
              {
                title: "State & Data Management",
                color: "teal",
                skills: [
                  "React Query / TanStack Query",
                  "Redux Toolkit",
                  "Context API",
                  "Zustand",
                  "REST API Integration",
                  "WebSocket / Real-time",
                ],
              },
              {
                title: "Backend & Database",
                color: "blue",
                skills: [
                  "Node.js",
                  "NestJS",
                  "MongoDB",
                  "PostgreSQL",
                  "Firebase",
                  "Prisma",
                ],
              },
              {
                title: "Tools & Workflow",
                color: "pink",
                skills: [
                  "Git & GitHub",
                  "VS Code",
                  "Figma",
                  "Postman",
                  "Vercel / Netlify",
                  "ESLint / Prettier",
                ],
              },
            ].map((category, index) => {
              const colors =
                colorClasses[category.color] || colorClasses.purple;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-2xl border ${colors.border} bg-slate-900/50 backdrop-blur-sm`}
                >
                  <h3 className={`text-lg font-bold ${colors.text} mb-4`}>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-2 text-sm rounded-lg border ${colors.border} ${colors.bg} text-slate-200 font-mono`}
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

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-8 md:p-12 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 via-slate-900/50 to-teal-900/20 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to Know More?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, opportunities, or
              just having a chat about tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300"
              >
                Get in Touch
                <span className="text-xl">→</span>
              </a>
              <a
                href="/experience"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Experience
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
