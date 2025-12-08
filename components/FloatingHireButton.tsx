"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap } from "lucide-react";

export function FloatingHireButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Link href="/contact">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 animate-ping opacity-20" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />

          {/* Button */}
          <div className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-500 hover:to-teal-500 rounded-full text-white font-bold shadow-2xl shadow-purple-500/30 transition-all">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Zap className="w-5 h-5" />
            </motion.div>
            <span className="hidden sm:inline">Hire Me</span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
