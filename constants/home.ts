import {
  Layers,
  Rocket,
  GitBranch,
  Lightbulb,
  Target,
  Code2,
} from "lucide-react";

// Stats displayed in the hero section
export const stats = [
  { number: "3+", label: "Company Experiences", icon: Layers },
  { number: "5+", label: "Production Projects", icon: Rocket },
  { number: "1Y+", label: "Journey in Web Dev", icon: GitBranch },
];

// Tech stack with proficiency levels
export const techStack = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 70 },
];

// Case studies displayed on the home page
export const caseStudies = [
  {
    id: "sarkari-buddy",
    title: "Sarkari Buddy",
    subtitle: "Government Exam Platform",
    description:
      "Full-scale exam preparation SaaS with real exam simulation, sectional timing, and analytics.",
    challenge:
      "Build a production-grade exam platform handling thousands of concurrent users.",
    result:
      "Delivered complete test UI/UX, timer logic, SEO system, and admin dashboards.",
    tags: ["React", "Next.js", "NestJS", "TypeScript"],
    color: "purple",
  },
  {
    id: "willow-referrals",
    title: "Willow Referrals",
    subtitle: "Referral Marketing SaaS",
    description:
      "Multi-role referral marketing tool with role-based dashboards and campaign management.",
    challenge:
      "Create complex form workflows with validation and multi-tier authentication.",
    result:
      "Built OAuth flows, Stripe billing UI, and promoter workflow improvements.",
    tags: ["React", "React Hook Form", "Stripe", "OAuth"],
    color: "teal",
  },
  {
    id: "adtask-ai",
    title: "adTask AI",
    subtitle: "AI Advertising Platform",
    description:
      "AI-powered advertising management with real-time chat and campaign creation.",
    challenge:
      "Implement real-time streaming AI responses with WebSocket integration.",
    result:
      "Delivered streaming chatbot UI, campaign flows, and SEO-optimized blog pages.",
    tags: ["React Query", "WebSocket", "Next.js"],
    color: "blue",
  },
];

// Process steps displayed on the home page
export const processSteps = [
  {
    icon: Lightbulb,
    title: "Understand",
    description: "Deep dive into requirements, user needs, and business goals.",
  },
  {
    icon: Target,
    title: "Architect",
    description: "Design scalable component structure and data flow patterns.",
  },
  {
    icon: Code2,
    title: "Build",
    description:
      "Write clean, performant code with TypeScript and modern React.",
  },
  {
    icon: Rocket,
    title: "Ship",
    description: "Deploy, monitor, and iterate based on real user feedback.",
  },
];
