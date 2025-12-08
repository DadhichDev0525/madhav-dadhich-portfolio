// Shared color classes used across multiple pages
export const colorClasses: Record<
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
  pink: {
    border: "border-pink-500/50",
    glow: "shadow-[0_0_30px_rgba(236,72,153,0.3)]",
    text: "text-pink-400",
    bg: "bg-pink-500/20",
  },
  green: {
    border: "border-green-500/50",
    glow: "shadow-[0_0_30px_rgba(34,197,94,0.3)]",
    text: "text-green-400",
    bg: "bg-green-500/20",
  },
  orange: {
    border: "border-orange-500/50",
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.3)]",
    text: "text-orange-400",
    bg: "bg-orange-500/20",
  },
  cyan: {
    border: "border-cyan-500/50",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    text: "text-cyan-400",
    bg: "bg-cyan-500/20",
  },
  red: {
    border: "border-red-500/50",
    glow: "shadow-[0_0_30px_rgba(239,68,68,0.3)]",
    text: "text-red-400",
    bg: "bg-red-500/20",
  },
};

// Extended color classes for projects page with additional properties
export const projectColorClasses = {
  purple: {
    border: "border-purple-500/30 hover:border-purple-500/60",
    bg: "from-purple-500/10 to-purple-500/5",
    text: "text-purple-400",
    tag: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    glow: "bg-purple-500/20",
    gradient: "from-purple-600 to-purple-400",
  },
  teal: {
    border: "border-teal-500/30 hover:border-teal-500/60",
    bg: "from-teal-500/10 to-teal-500/5",
    text: "text-teal-400",
    tag: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    glow: "bg-teal-500/20",
    gradient: "from-teal-600 to-teal-400",
  },
  blue: {
    border: "border-blue-500/30 hover:border-blue-500/60",
    bg: "from-blue-500/10 to-blue-500/5",
    text: "text-blue-400",
    tag: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    glow: "bg-blue-500/20",
    gradient: "from-blue-600 to-blue-400",
  },
  pink: {
    border: "border-pink-500/30 hover:border-pink-500/60",
    bg: "from-pink-500/10 to-pink-500/5",
    text: "text-pink-400",
    tag: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    glow: "bg-pink-500/20",
    gradient: "from-pink-600 to-pink-400",
  },
  green: {
    border: "border-green-500/30 hover:border-green-500/60",
    bg: "from-green-500/10 to-green-500/5",
    text: "text-green-400",
    tag: "bg-green-500/20 text-green-300 border-green-500/30",
    glow: "bg-green-500/20",
    gradient: "from-green-600 to-green-400",
  },
  orange: {
    border: "border-orange-500/30 hover:border-orange-500/60",
    bg: "from-orange-500/10 to-orange-500/5",
    text: "text-orange-400",
    tag: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    glow: "bg-orange-500/20",
    gradient: "from-orange-600 to-orange-400",
  },
  cyan: {
    border: "border-cyan-500/30 hover:border-cyan-500/60",
    bg: "from-cyan-500/10 to-cyan-500/5",
    text: "text-cyan-400",
    tag: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    glow: "bg-cyan-500/20",
    gradient: "from-cyan-600 to-cyan-400",
  },
  red: {
    border: "border-red-500/30 hover:border-red-500/60",
    bg: "from-red-500/10 to-red-500/5",
    text: "text-red-400",
    tag: "bg-red-500/20 text-red-300 border-red-500/30",
    glow: "bg-red-500/20",
    gradient: "from-red-600 to-red-400",
  },
};
