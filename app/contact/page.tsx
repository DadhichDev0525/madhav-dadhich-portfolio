"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  MessageSquare,
  MessageCircle,
  Terminal,
  Zap,
  ExternalLink,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mgoekpgd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Failed to send message. Please try again or use another contact method."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Gmail",
      value: "madhavdadheech57@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=madhavdadheech57@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Madhav,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!",
      color: "purple",
      description: "Best for formal inquiries",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "/in/madhavdadhich",
      href: "https://www.linkedin.com/in/madhavdadhich",
      color: "blue",
      description: "Let's connect professionally",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@DadhichDev0525",
      href: "https://github.com/DadhichDev0525",
      color: "teal",
      description: "Check out my code",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 8094774472",
      href: "https://wa.me/918094774472?text=Hi%20Madhav!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
      color: "green",
      description: "Quick chat & queries",
    },
  ];

  const colorClasses: Record<
    string,
    { border: string; glow: string; text: string; bg: string }
  > = {
    purple: {
      border: "border-purple-500/50",
      glow: "shadow-[0_0_30px_rgba(139,92,246,0.3)]",
      text: "text-purple-400",
      bg: "bg-purple-500/20",
    },
    teal: {
      border: "border-teal-500/50",
      glow: "shadow-[0_0_30px_rgba(20,184,166,0.3)]",
      text: "text-teal-400",
      bg: "bg-teal-500/20",
    },
    blue: {
      border: "border-blue-500/50",
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
      text: "text-blue-400",
      bg: "bg-blue-500/20",
    },
    green: {
      border: "border-green-500/50",
      glow: "shadow-[0_0_30px_rgba(34,197,94,0.3)]",
      text: "text-green-400",
      bg: "bg-green-500/20",
    },
  };

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
              <MessageSquare className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-mono">
                contact.init()
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Get in </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Got an opportunity or project? I&apos;d love to hear from you!
              Let&apos;s discuss how we can work together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const colors = colorClasses[method.color];
              return (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group relative p-5 md:p-6 rounded-2xl border ${colors.border} bg-slate-900/50 backdrop-blur-sm hover:${colors.glow} hover:border-opacity-100 transition-all duration-300`}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl ${colors.bg} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-2.5 md:p-3 rounded-xl ${colors.bg} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon
                          className={`w-5 h-5 md:w-6 md:h-6 ${colors.text}`}
                        />
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors ml-auto" />
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {method.title}
                    </h3>
                    <p
                      className={`${colors.text} font-mono text-xs md:text-sm mb-2 truncate`}
                    >
                      {method.value}
                    </p>
                    <p className="text-slate-500 text-xs md:text-sm">
                      {method.description}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
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
                send_message.sh
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Send a <span className="text-teal-400">Message</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-12 rounded-3xl border border-purple-500/30 bg-slate-900/50 backdrop-blur-sm"
          >
            {/* Decorative terminal header */}
            <div className="absolute -top-4 left-8 flex items-center gap-2 px-4 py-2 bg-slate-950 border border-purple-500/30 rounded-lg">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-slate-400 font-mono text-xs ml-2">
                message.form
              </span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(20,184,166,0.5)]">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-400 mb-4">
                  Thanks for reaching out. I&apos;ll get back to you soon!
                </p>
                <div className="font-mono text-sm text-green-400">
                  {">"} response.status = 200 ✓
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-mono text-purple-400 mb-2"
                  >
                    {">"} name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all font-mono"
                    placeholder="Your name..."
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-mono text-teal-400 mb-2"
                  >
                    {">"} email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:shadow-[0_0_20px_rgba(20,184,166,0.2)] transition-all font-mono"
                    placeholder="your@email.com..."
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-mono text-blue-400 mb-2"
                  >
                    {">"} message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all font-mono resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span className="font-mono">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span className="font-mono">Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
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
              Available for Opportunities
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Looking for full-time roles, exciting projects, or collaboration
              opportunities. Let&apos;s build something amazing together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 rounded-full border border-green-500/50 bg-green-500/10 text-green-400 font-mono text-sm">
                ● Open to Work
              </span>
              <span className="px-4 py-2 rounded-full border border-purple-500/50 bg-purple-500/10 text-purple-400 font-mono text-sm">
                Remote Preferred
              </span>
              <span className="px-4 py-2 rounded-full border border-teal-500/50 bg-teal-500/10 text-teal-400 font-mono text-sm">
                Full-time / Contract
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
