"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  ChevronRight,
  Code2,
  Layers,
  Zap,
} from "lucide-react";
import { projects } from "@/constants/projects";
import { projectColorClasses as colorClasses } from "@/constants/theme";

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium mb-6"
            >
              <Code2 className="w-4 h-4" />
              Production-Grade Work
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of production applications, SaaS platforms, and
              experiments built with modern web technologies.
            </p>
          </motion.div>

          {/* Featured Projects - Asymmetric Grid */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <Zap className="w-6 h-6 text-purple-400" />
              Featured Case Studies
            </motion.h2>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Large Featured Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="lg:col-span-2 lg:row-span-2"
              >
                <Link
                  href={`/projects/${featuredProjects[0].id}`}
                  className="block h-full group"
                >
                  <div
                    className={`relative h-full p-8 md:p-10 rounded-3xl border ${
                      colorClasses[
                        featuredProjects[0].color as keyof typeof colorClasses
                      ].border
                    } bg-gradient-to-br ${
                      colorClasses[
                        featuredProjects[0].color as keyof typeof colorClasses
                      ].bg
                    } backdrop-blur-sm overflow-hidden transition-all duration-300`}
                  >
                    {/* Glow effect */}
                    <div
                      className={`absolute top-0 right-0 w-96 h-96 ${
                        colorClasses[
                          featuredProjects[0].color as keyof typeof colorClasses
                        ].glow
                      } rounded-full blur-3xl opacity-50`}
                    />

                    <div className="relative z-10 h-full flex flex-col">
                      <div
                        className={`${
                          colorClasses[
                            featuredProjects[0]
                              .color as keyof typeof colorClasses
                          ].text
                        } text-sm font-semibold uppercase tracking-wider mb-4`}
                      >
                        {featuredProjects[0].subtitle}
                      </div>

                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                        {featuredProjects[0].title}
                      </h3>

                      <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                        {featuredProjects[0].description}
                      </p>

                      <p className="text-gray-400 mb-8">
                        {featuredProjects[0].fullDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {featuredProjects[0].tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 text-sm rounded-full border ${
                              colorClasses[
                                featuredProjects[0]
                                  .color as keyof typeof colorClasses
                              ].tag
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex flex-wrap items-center gap-4">
                        {featuredProjects[0].liveUrl && (
                          <a
                            href={featuredProjects[0].liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-500 hover:to-teal-500 rounded-full text-white font-semibold transition-all"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Site
                          </a>
                        )}
                        <span
                          className={`inline-flex items-center gap-2 ${
                            colorClasses[
                              featuredProjects[0]
                                .color as keyof typeof colorClasses
                            ].text
                          } font-semibold group-hover:gap-4 transition-all`}
                        >
                          View Case Study
                          <ChevronRight className="w-5 h-5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Smaller Featured Cards */}
              {featuredProjects.slice(1).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/projects/${project.id}`}
                    className="block h-full group"
                  >
                    <div
                      className={`relative h-full p-6 rounded-2xl border ${
                        colorClasses[project.color as keyof typeof colorClasses]
                          .border
                      } bg-gradient-to-br ${
                        colorClasses[project.color as keyof typeof colorClasses]
                          .bg
                      } backdrop-blur-sm overflow-hidden transition-all duration-300`}
                    >
                      <div
                        className={`${
                          colorClasses[
                            project.color as keyof typeof colorClasses
                          ].text
                        } text-xs font-semibold uppercase tracking-wider mb-3`}
                      >
                        {project.subtitle}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1 text-sm ${
                              colorClasses[
                                project.color as keyof typeof colorClasses
                              ].text
                            } hover:text-white transition-colors`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live
                          </a>
                        )}
                        <span
                          className={`inline-flex items-center gap-2 text-sm ${
                            colorClasses[
                              project.color as keyof typeof colorClasses
                            ].text
                          } font-medium group-hover:gap-3 transition-all`}
                        >
                          Learn More
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Projects - Asymmetric Masonry-style Grid */}
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <Layers className="w-6 h-6 text-teal-400" />
              More Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="group"
                >
                  <div
                    className={`relative h-full p-6 rounded-2xl border ${
                      colorClasses[project.color as keyof typeof colorClasses]
                        .border
                    } bg-[#0f0f1a]/80 backdrop-blur-sm overflow-hidden transition-all duration-300`}
                  >
                    <div
                      className={`${
                        colorClasses[project.color as keyof typeof colorClasses]
                          .text
                      } text-xs font-semibold uppercase tracking-wider mb-3`}
                    >
                      {project.subtitle}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1 text-sm ${
                            colorClasses[
                              project.color as keyof typeof colorClasses
                            ].text
                          } hover:text-white transition-colors`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Site
                        </a>
                      )}
                      <Link
                        href={`/projects/${project.id}`}
                        className={`inline-flex items-center gap-1 text-sm ${
                          colorClasses[
                            project.color as keyof typeof colorClasses
                          ].text
                        } hover:text-white transition-colors`}
                      >
                        Details
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative p-12 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 via-transparent to-teal-500/10 overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Interested in My Work?
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Let's discuss how I can contribute to your next project.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-500 hover:to-teal-500 rounded-full text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
              >
                Get in Touch
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
