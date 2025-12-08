import { Lightbulb, Target, Zap } from "lucide-react";

// Core values displayed on the about page
export const values = [
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "I learn by building, breaking, fixing, and improving. Not just consuming tutorials, but creating real projects.",
    color: "purple",
  },
  {
    icon: Target,
    title: "Product-Focused",
    description:
      "I write code that matters. Clean UI, simplicity, clarity — and meaningful work that users genuinely benefit from.",
    color: "teal",
  },
  {
    icon: Zap,
    title: "Scalable Solutions",
    description:
      "Building systems that grow. From performance optimization to architecture design, thinking about scale from day one.",
    color: "blue",
  },
];

// Career milestones for the journey timeline
export const milestones = [
  {
    year: "September 2024",
    event: "Started web development journey",
    icon: "🚀",
  },
  { year: "November 2024", event: "First internship at News2Day", icon: "💼" },
  {
    year: "April 2025",
    event: "Joined Humanity Founders as intern",
    icon: "📈",
  },
  {
    year: "June 2025",
    event: "Internship to contract role transition",
    icon: "⭐",
  },
  {
    year: "October 2025",
    event: "Core developer at Sarkari Buddy",
    icon: "🎯",
  },
];

// Technical skills organized by category
export const technicalSkills = [
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
];
