"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, Rss, Sparkles } from "lucide-react";

export default function BlogPage() {
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
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-mono">blog.md</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">The </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Thoughts, learnings, and insights from my journey as a developer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-12 md:p-16 rounded-3xl border border-purple-500/30 bg-slate-900/50 backdrop-blur-sm text-center"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-teal-600 flex items-center justify-center shadow-[0_0_60px_rgba(139,92,246,0.5)]">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-20" />
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-lg mx-auto">
                I&apos;m currently working on some amazing content. Blog posts
                about React, Next.js, TypeScript, and building great products
                are on the way!
              </p>

              {/* Placeholder cards */}
              <div className="grid gap-4 mb-8">
                {[
                  {
                    title: "Building Scalable React Applications",
                    tag: "React",
                  },
                  {
                    title: "TypeScript Tips for Better Code",
                    tag: "TypeScript",
                  },
                  {
                    title: "From Intern to Core Developer in 1 Year",
                    tag: "Career",
                  },
                ].map((post, index) => (
                  <motion.div
                    key={post.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 text-left"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <div className="flex-1">
                      <div className="text-white font-medium">{post.title}</div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="w-3 h-3" />
                        Coming soon
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono border border-purple-500/30 bg-purple-500/10 text-purple-400">
                      {post.tag}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Subscribe hint */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm">
                <Rss className="w-4 h-4" />
                <span className="font-mono">Stay tuned for updates</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topics Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Topics I&apos;ll Be{" "}
              <span className="text-teal-400">Writing About</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Performance",
              "State Management",
              "API Design",
              "Developer Experience",
              "Career Growth",
              "Best Practices",
              "UI/UX",
              "Accessibility",
            ].map((topic, index) => (
              <motion.span
                key={topic}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 font-mono text-sm hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-300 transition-all cursor-default"
              >
                {topic}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
