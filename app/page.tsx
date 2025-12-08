"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Zap,
  Code2,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { stats, techStack, caseStudies, processSteps } from "@/constants/home";

// Helper Components
function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 backdrop-blur flex flex-col">
      <span className="text-xl font-semibold text-slate-50">{number}</span>
      <span className="text-xs text-slate-400">{label}</span>
    </div>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-500 hover:to-teal-500 rounded-full text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
      >
        {children}
      </Link>
    </motion.div>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-6 py-3 border border-purple-500/50 hover:border-purple-400 rounded-full text-purple-300 hover:text-white font-semibold transition-all hover:bg-purple-500/10 bg-transparent"
      >
        {children}
      </Link>
    </motion.div>
  );
}

function GhostButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-teal-300 hover:text-white font-semibold border border-teal-500/40 hover:border-teal-400/70 bg-teal-500/5 hover:bg-teal-500/15 transition-all duration-300 shadow-sm hover:shadow-teal-500/20"
      >
        <Zap className="w-4 h-4" />
        {children}
      </Link>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="relative">
      {/* ========================================
          HERO SECTION - Unique Two Column Layout
          ======================================== */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center overflow-hidden py-20 lg:py-28"
      >
        {/* Background layers */}
        {/* <div className="absolute inset-0 bg-[#020617]" /> */}

        {/* Purple/Teal radial gradient blobs */}
        <div className="absolute top-0 left-1/12 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/12 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Subtle matrix/code overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 92, 246, 0.1) 2px, rgba(139, 92, 246, 0.1) 4px)`,
          }}
        />

        {/* Main content container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* ===== LEFT SIDE - Text Content ===== */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, staggerChildren: 0.1 }}
              className="flex-1 max-w-xl text-center lg:text-left"
            >
              {/* 1. Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium bg-white/5 border border-purple-500/40 text-purple-200 backdrop-blur mb-6 mx-auto lg:mx-0"
              >
                <span className="text-base">✨</span>
                Available for Remote / Work From Home roles
              </motion.div>

              {/* 2. Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
              >
                <span className="text-white">Hi, I&apos;m</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-sky-400 to-teal-300 text-transparent bg-clip-text">
                  Madhav Dadhich
                </span>
              </motion.h1>

              {/* 3. Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl text-slate-300 font-medium mb-4"
              >
                Frontend & React Developer — building production-ready SaaS
                dashboards, exam platforms, and AI-driven applications.
              </motion.p>

              {/* 4. Intro Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed"
              >
                I build fast, scalable, modern web applications with thoughtful
                UI engineering and performance-focused development. I enjoy
                turning complex ideas into clean, usable products that people
                actually rely on.
              </motion.p>

              {/* 5. CTA Buttons Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6"
              >
                <PrimaryButton href="/projects">
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </PrimaryButton>
                <SecondaryButton href="/contact">
                  <Download className="w-4 h-4" />
                  Get Resume
                </SecondaryButton>
                <GhostButton href="/contact">Hire Me</GhostButton>
              </motion.div>

              {/* 6. Signature */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-5 text-sm text-slate-500 italic"
              >
                — Madhav Dadhich
              </motion.p>

              {/* 7. Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0"
              >
                <StatCard number="3+" label="Company Experiences" />
                <StatCard number="5+" label="Production Projects" />
                <StatCard number="1Y+" label="Development Journey" />
              </motion.div>
            </motion.div>

            {/* ===== RIGHT SIDE - Portrait Image ===== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-shrink-0 lg:-mt-6"
            >
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 group">
                {/* Breathing glow aura - stronger */}
                <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-purple-500/70 via-sky-400/50 to-teal-400/70 blur-2xl opacity-70 animate-breathGlow" />

                {/* Secondary glow layer - enhanced */}
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-bl from-teal-500/40 via-purple-500/30 to-sky-500/40 blur-3xl opacity-50 animate-pulse-slow" />

                {/* Soft shadow for depth */}
                <div className="absolute inset-0 rounded-[2.5rem] shadow-2xl shadow-purple-500/30" />

                {/* Image container */}
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-2 border-white/15 bg-slate-900/60 backdrop-blur group-hover:border-purple-400/50 transition-all duration-500 shadow-xl">
                  <Image
                    src="/images/hero/me-hero.png"
                    alt="Madhav Dadhich portrait"
                    fill
                    sizes="(min-width: 1024px) 20rem, 16rem"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>

                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-purple-500/50 rounded-tl-xl" />
                <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-teal-500/50 rounded-tr-xl" />
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-teal-500/50 rounded-bl-xl" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-purple-500/50 rounded-br-xl" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-2.5 bg-purple-400 rounded-full" />
          </motion.div>
        </motion.div> */}
      </section>

      {/* ========================================
          HOW I BUILD PRODUCTS SECTION
          ======================================== */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        {/* Diagonal section divider */}
        {/* <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0a0a0f]" /> */}

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How I{" "}
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                Build Products
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A systematic approach to turning complex requirements into
              production-ready applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  {/* Connection line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-8 w-6 h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
                  )}

                  <div className="h-full p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-500/5 to-transparent group-hover:border-purple-500/40 transition-all">
                    {/* Step number */}
                    <div className="absolute top-4 right-4 text-6xl font-black text-purple-500/10">
                      0{index + 1}
                    </div>

                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-teal-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================
          TECH STACK SECTION
          ======================================== */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0f] via-purple-950/10 to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tech{" "}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Stack
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Modern technologies I use to build scalable, performant
              applications.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Skill Bars */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {techStack.map((tech, index) => (
                <div key={tech.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300 font-medium">
                      {tech.name}
                    </span>
                    <span className="text-purple-400">{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-purple-500/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-purple-500 to-teal-500 rounded-full shadow-lg shadow-purple-500/50"
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Tech Icons Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
            >
              {[
                {
                  name: "React",
                  logo: "/assets/logos/react.svg",
                  color: "#61DAFB",
                },
                {
                  name: "Next.js",
                  logo: "/assets/logos/nextdotjs.svg",
                  color: "#ffffff",
                },
                {
                  name: "TypeScript",
                  logo: "/assets/logos/typescript.svg",
                  color: "#3178C6",
                },
                {
                  name: "Tailwind",
                  logo: "/assets/logos/tailwindcss.svg",
                  color: "#06B6D4",
                },
                {
                  name: "Node.js",
                  logo: "/assets/logos/nodedotjs.svg",
                  color: "#5FA04E",
                },
                {
                  name: "MongoDB",
                  logo: "/assets/logos/mongodb.svg",
                  color: "#47A248",
                },
              ].map((tech) => {
                return (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-4 sm:p-6 rounded-2xl border border-purple-500/20 bg-[#0f0f1a]/80 text-center group hover:border-purple-500/40 transition-all duration-300"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span
                      className="text-xs sm:text-sm font-medium"
                      style={{ color: tech.color }}
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================
          CASE STUDIES SECTION
          ======================================== */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Case{" "}
                <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  Studies
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                Deep dives into projects I've built and problems I've solved.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Asymmetric Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured Case Study - Large */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:row-span-2"
            >
              <Link
                href={`/projects/${caseStudies[0].id}`}
                className="block h-full group"
              >
                <div className="relative h-full p-8 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent overflow-hidden group-hover:border-purple-500/40 transition-all">
                  {/* Background glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />

                  <div className="relative z-10">
                    <div className="text-purple-400 text-sm font-medium mb-4 uppercase tracking-wider">
                      Featured Project
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {caseStudies[0].title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {caseStudies[0].subtitle}
                    </p>

                    <p className="text-gray-300 mb-8 leading-relaxed">
                      {caseStudies[0].description}
                    </p>

                    <div className="space-y-4 mb-8">
                      <div>
                        <span className="text-teal-400 text-sm font-medium">
                          Challenge:
                        </span>
                        <p className="text-gray-400 text-sm">
                          {caseStudies[0].challenge}
                        </p>
                      </div>
                      <div>
                        <span className="text-green-400 text-sm font-medium">
                          Result:
                        </span>
                        <p className="text-gray-400 text-sm">
                          {caseStudies[0].result}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {caseStudies[0].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all">
                      Read Case Study
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Smaller Case Studies */}
            {caseStudies.slice(1).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/projects/${study.id}`} className="block group">
                  <div
                    className={`p-6 rounded-2xl border border-${
                      study.color === "teal" ? "teal" : "blue"
                    }-500/20 bg-gradient-to-br from-${
                      study.color === "teal" ? "teal" : "blue"
                    }-500/5 to-transparent group-hover:border-${
                      study.color === "teal" ? "teal" : "blue"
                    }-500/40 transition-all`}
                  >
                    <div
                      className={`text-${
                        study.color === "teal" ? "teal" : "blue"
                      }-400 text-sm font-medium mb-3`}
                    >
                      {study.subtitle}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                      {study.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {study.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 text-teal-400 text-sm font-medium group-hover:gap-3 transition-all">
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          CTA SECTION
          ======================================== */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-12 md:p-16 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 via-transparent to-teal-500/10 overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-600 to-teal-600 flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Build Something{" "}
                <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  Amazing
                </span>
              </h2>

              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                I'm currently available for remote opportunities. Whether you
                have a project in mind or just want to chat, I'd love to hear
                from you.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-500 hover:to-teal-500 rounded-full text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
                  >
                    Get in Touch
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-500/50 hover:border-purple-400 rounded-full text-purple-400 hover:text-white font-semibold transition-all hover:bg-purple-500/10"
                  >
                    View Projects
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
