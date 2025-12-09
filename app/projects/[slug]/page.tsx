"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle,
  Lightbulb,
  Target,
  Rocket,
  Code2,
} from "lucide-react";
import { projectsData } from "@/constants/projects";
import { projectColorClasses as colorClasses } from "@/constants/theme";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <Link
            href="/projects"
            className="text-purple-400 hover:text-purple-300"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const colors = colorClasses[project.color as keyof typeof colorClasses];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div
              className={`${colors.text} text-sm font-semibold uppercase tracking-wider mb-4`}
            >
              {project.subtitle}
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-gray-300 mb-8">{project.description}</p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div>
                <div className="text-gray-500 text-sm mb-1">Role</div>
                <div className="text-white font-medium">{project.role}</div>
              </div>
              <div>
                <div className="text-gray-500 text-sm mb-1">Duration</div>
                <div className="text-white font-medium">{project.duration}</div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-4 py-2 text-sm rounded-full border ${colors.tag}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            {project.liveUrl && (
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-500 hover:to-teal-500 rounded-full text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all`}
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Site
                </a>
              </div>
            )}
          </motion.div>

          {/* Screenshot Placeholder */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`relative h-80 md:h-[500px] rounded-3xl border ${colors.border} bg-gradient-to-br ${colors.bg} overflow-hidden mb-20`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div
                  className={`text-8xl font-black bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent mb-4`}
                >
                  {project.title
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <p className="text-gray-500">Project Screenshot</p>
              </div>
            </div>
            <div
              className={`absolute top-0 right-0 w-96 h-96 ${colors.glow} rounded-full blur-3xl opacity-50`}
            />
          </motion.div> */}

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${colors.gradient}`}
                >
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Overview</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.overview}
              </p>
            </motion.div>

            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${colors.gradient}`}
                >
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Problem & Context
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.problem}
              </p>
            </motion.div>

            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${colors.gradient}`}
                >
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  My Responsibilities
                </h2>
              </div>
              <div className="space-y-4">
                {project.responsibilities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true, amount: 0 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle
                      className={`w-6 h-6 ${colors.text} flex-shrink-0 mt-0.5`}
                    />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technical Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${colors.gradient}`}
                >
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Technical Implementation
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {project.technical.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true, amount: 0 }}
                    className={`p-4 rounded-xl border ${colors.border} bg-[#0f0f1a]/80`}
                  >
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Challenges & Learnings */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Challenges & Learnings
              </h2>
              <div className="space-y-4">
                {project.challenges.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true, amount: 0 }}
                    className={`p-5 rounded-xl border ${colors.border} bg-gradient-to-r ${colors.bg}`}
                  >
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0 }}
            className="mt-20 pt-10 border-t border-gray-800"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to All Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
