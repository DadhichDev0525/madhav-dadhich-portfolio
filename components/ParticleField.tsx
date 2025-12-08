"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  xOffset: number;
}

export function ParticleField() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on the client side to avoid hydration mismatch
    const generatedParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      xOffset: Math.random() * 20 - 10,
    }));
    setParticles(generatedParticles);
  }, []);

  // Don't render anything on server / initial render
  if (particles.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background:
              particle.id % 3 === 0
                ? "rgba(139, 92, 246, 0.6)"
                : particle.id % 3 === 1
                ? "rgba(20, 184, 166, 0.6)"
                : "rgba(59, 130, 246, 0.6)",
            boxShadow:
              particle.id % 3 === 0
                ? "0 0 10px rgba(139, 92, 246, 0.8)"
                : particle.id % 3 === 1
                ? "0 0 10px rgba(20, 184, 166, 0.8)"
                : "0 0 10px rgba(59, 130, 246, 0.8)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
