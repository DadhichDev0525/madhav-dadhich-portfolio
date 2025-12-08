// Project type definition
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  color: string;
  featured: boolean;
  liveUrl?: string;
}

// Project detail type definition
export interface ProjectDetail {
  title: string;
  subtitle: string;
  description: string;
  role: string;
  duration: string;
  overview: string;
  problem: string;
  responsibilities: string[];
  technical: string[];
  challenges: string[];
  tags: string[];
  color: string;
  liveUrl?: string;
}

// Projects list for the projects page
export const projects: Project[] = [
  {
    id: "sarkari-buddy",
    title: "Sarkari Buddy",
    subtitle: "Government Exam Platform",
    description:
      "A full-fledged exam preparation SaaS platform providing real exam-like mock tests, sectional timing, question status tracking, multilingual instructions, analytics, and subscription management.",
    fullDescription:
      "Built the complete test-taking UI/UX, instruction system, SEO config utilities, and admin dashboards for coupons and transactions. Contributed backend timing updates in NestJS.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "React Query",
    ],
    color: "purple",
    featured: true,
    liveUrl: "https://stage.sarkaribuddy.in/",
  },
  {
    id: "willow-referrals",
    title: "Willow Referrals",
    subtitle: "Referral Marketing SaaS",
    description:
      "Multi-role referral marketing tool enabling business owners and promoters to manage campaign experiences.",
    fullDescription:
      "Built dashboards, dynamic campaign editors, validation-heavy forms, OAuth & billing flows, and promoter workflow improvements.",
    tags: ["React", "React Hook Form", "Stripe", "OAuth", "Redux"],
    color: "teal",
    featured: true,
    liveUrl: "https://willowreferrals.com/",
  },
  {
    id: "adtask-ai",
    title: "adTask AI Tool",
    subtitle: "AI Advertising Platform",
    description:
      "AI-powered advertising management platform with campaign creation and real-time AI chat.",
    fullDescription:
      "Contributed UI for campaign setup workflows, streaming AI chat responses, and SEO-optimized blog pages using Next.js & React Query.",
    tags: ["React Query", "WebSocket", "Next.js", "TypeScript"],
    color: "blue",
    featured: true,
    liveUrl: "https://adtaskaii.netlify.app/",
  },
  {
    id: "chugal",
    title: "Chugal.com",
    subtitle: "AI News Aggregator",
    description:
      "Frontend for AI-powered news aggregation platform with categories, trending, infinite scroll, and AI-summarized article views.",
    tags: ["React", "Infinite Scroll", "TypeScript", "API Integration"],
    color: "pink",
    featured: false,
    liveUrl: "https://chugal.com/",
  },
  {
    id: "finance-manager",
    title: "Personal Finance Manager",
    subtitle: "Budget Tracking App",
    description:
      "React & Redux budgeting tool for expenses, pots, recurring bills with persistent app state via Redux Persist.",
    tags: ["React", "Redux Toolkit", "Redux Persist", "Chart.js"],
    color: "green",
    featured: false,
    liveUrl:
      "https://personal-finance-app-madhav-dadhichs-projects.vercel.app/",
  },
  {
    id: "ourdesign",
    title: "OurDesign.in",
    subtitle: "Designer Marketplace",
    description:
      "UI for designer lead marketplace including listings, dashboards & authentication flows.",
    tags: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    color: "orange",
    featured: false,
    liveUrl: "https://ourdesign.in/",
  },
  {
    id: "todo-app",
    title: "To-Do Full Stack App",
    subtitle: "Task Management",
    description:
      "Auth-based todo manager supporting nested sub-todos with React frontend, Node.js backend, and MongoDB database.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT Auth"],
    color: "cyan",
    featured: false,
    liveUrl: "https://to-do-app-jade-ten.vercel.app",
  },
  {
    id: "vicecity-logs",
    title: "ViceCity Logs UI",
    subtitle: "Design Experiment",
    description:
      "A GTA-themed blog interface design experiment showcasing creative UI/UX with gaming aesthetics.",
    tags: ["React", "CSS3", "Framer Motion", "Animation"],
    color: "red",
    featured: false,
    liveUrl: "https://vice-city-blog-page.vercel.app/",
  },
];

// Detailed project data for individual project pages
export const projectsData: Record<string, ProjectDetail> = {
  "sarkari-buddy": {
    title: "Sarkari Buddy",
    subtitle: "Government Exam Platform",
    description:
      "A full-fledged exam preparation SaaS platform providing real exam-like mock tests.",
    role: "Core Frontend Developer",
    duration: "October 2025 – Present",
    overview:
      "Sarkari Buddy is a comprehensive government exam preparation platform designed to provide students with realistic mock test experiences. The platform handles sectional timing, question navigation, performance analytics, multilingual tests, and subscription management.",
    problem:
      "Government exam aspirants needed a platform that could simulate real exam conditions with accurate timing, question tracking, and analytics. Existing solutions lacked the sophistication needed for serious preparation.",
    responsibilities: [
      "Built the complete test-taking UI/UX with real exam-like interface",
      "Implemented sectional timing logic with accurate countdown and auto-submission",
      "Created mobile-first navigation patterns for question selection",
      "Designed and built the instruction system with multilingual support",
      "Implemented SEO metadata utilities using Next.js Metadata API",
      "Built admin dashboards for coupons and transactions with search, filters, and pagination",
      "Contributed backend timing updates in NestJS services",
    ],
    technical: [
      "React & Next.js for performant, SEO-friendly frontend",
      "TypeScript for type-safe development across the codebase",
      "React Query for efficient server state management",
      "Tailwind CSS for rapid, consistent styling",
      "NestJS backend integration for timing services",
      "MongoDB for flexible data storage",
    ],
    challenges: [
      "Handling complex timer state across sections with accurate synchronization",
      "Building accessible question navigation for mobile devices",
      "Implementing real-time updates without impacting performance",
      "Creating a scalable admin dashboard with complex filtering logic",
    ],
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "React Query",
      "Tailwind CSS",
    ],
    color: "purple",
    liveUrl: "https://stage.sarkaribuddy.in/",
  },
  "willow-referrals": {
    title: "Willow Referrals",
    subtitle: "Referral Marketing SaaS",
    description:
      "Multi-role referral marketing tool for business owners and promoters.",
    role: "Frontend Developer (Intern + Contract)",
    duration: "April 2025 – June 2025 (Intern), November 2025 (Contract)",
    overview:
      "Willow Referrals is a SaaS platform that enables businesses to create and manage referral campaigns. It supports multiple user roles including business owners, promoters, and administrators, each with tailored dashboards and workflows.",
    problem:
      "Businesses needed a flexible referral system that could handle complex campaign rules, multiple user types, and integrate with payment processors for commission payouts.",
    responsibilities: [
      "Built role-based dashboards for different user types",
      "Developed dynamic campaign editors with real-time preview",
      "Implemented complex form validation using React Hook Form",
      "Integrated Google OAuth authentication flows",
      "Built Stripe billing and payment UI components",
      "Enhanced promoter workflows during contract phase",
    ],
    technical: [
      "React with TypeScript for component development",
      "React Hook Form for complex form management",
      "Redux for global state management",
      "OAuth 2.0 for secure authentication",
      "Stripe Elements for payment integration",
      "Tailwind CSS for responsive styling",
    ],
    challenges: [
      "Managing complex form state with nested validation rules",
      "Implementing secure OAuth flows with proper token handling",
      "Building responsive dashboards that work across all device sizes",
      "Integrating Stripe with proper error handling and loading states",
    ],
    tags: [
      "React",
      "React Hook Form",
      "Stripe",
      "OAuth",
      "Redux",
      "TypeScript",
    ],
    color: "teal",
    liveUrl: "https://willowreferrals.com/",
  },
  "adtask-ai": {
    title: "adTask AI Tool",
    subtitle: "AI Advertising Platform",
    description:
      "AI-powered advertising management with real-time chat and campaign creation.",
    role: "Frontend Developer",
    duration: "June 2025 – September 2025",
    overview:
      "adTask is an AI-powered advertising platform that helps businesses create and manage ad campaigns with the assistance of an intelligent chatbot. The platform features real-time AI responses and comprehensive campaign management tools.",
    problem:
      "Advertisers needed an intuitive way to create campaigns with AI assistance, requiring real-time streaming responses and a modern, responsive interface.",
    responsibilities: [
      "Implemented campaign creation UI and management flows",
      "Built real-time AI chat interface using WebSockets",
      "Developed streaming response handling for smooth UX",
      "Created SEO-friendly blog pages for content marketing",
      "Improved API state handling with React Query",
      "Enhanced overall application performance",
    ],
    technical: [
      "Next.js for server-side rendering and SEO",
      "WebSocket integration for real-time streaming",
      "React Query for efficient data fetching and caching",
      "TypeScript for type safety",
      "Framer Motion for smooth animations",
    ],
    challenges: [
      "Implementing smooth streaming text animation for AI responses",
      "Managing WebSocket connection state reliably",
      "Optimizing render performance for real-time updates",
      "Building SEO-optimized pages with dynamic content",
    ],
    tags: [
      "React Query",
      "WebSocket",
      "Next.js",
      "TypeScript",
      "Framer Motion",
    ],
    color: "blue",
    liveUrl: "https://adtaskaii.netlify.app/",
  },
  chugal: {
    title: "Chugal.com",
    subtitle: "AI News Aggregator",
    description:
      "AI-powered news aggregation platform with smart summaries and infinite scroll.",
    role: "Frontend Developer",
    duration: "Personal Project",
    overview:
      "Chugal.com is an AI-powered news aggregation platform that curates and summarizes news from various sources. Features include category-based browsing, trending articles, infinite scroll, and AI-generated article summaries for quick consumption.",
    problem:
      "News consumption is time-consuming. Users needed a way to quickly browse and understand news without reading full articles, with smart categorization and personalized feeds.",
    responsibilities: [
      "Built the complete frontend interface with Next.js",
      "Implemented infinite scroll for seamless content loading",
      "Created category-based navigation and filtering",
      "Integrated AI summary display components",
      "Designed trending and featured article sections",
    ],
    technical: [
      "Next.js for SSR and SEO optimization",
      "TypeScript for type-safe development",
      "Infinite scroll with intersection observer",
      "REST API integration for news data",
      "Tailwind CSS for responsive design",
    ],
    challenges: [
      "Optimizing performance with large amounts of content",
      "Implementing smooth infinite scroll without jank",
      "Building an intuitive category navigation system",
    ],
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "API Integration",
      "Infinite Scroll",
    ],
    color: "pink",
    liveUrl: "https://chugal.com/",
  },
  "finance-manager": {
    title: "Personal Finance Manager",
    subtitle: "Budget Tracking App",
    description:
      "Comprehensive budgeting tool with expense tracking and financial analytics.",
    role: "Full Stack Developer",
    duration: "Personal Project",
    overview:
      "A React-based personal finance application that helps users track their budgets, manage savings pots, and monitor recurring bills. Features persistent state management and visual analytics.",
    problem:
      "Managing personal finances requires tracking multiple aspects - expenses, budgets, savings goals, and recurring payments. Users needed an all-in-one solution with data persistence.",
    responsibilities: [
      "Designed and built the complete application architecture",
      "Implemented budget tracking with category management",
      "Created savings pots feature with goal tracking",
      "Built recurring bills management system",
      "Added data visualization with charts",
    ],
    technical: [
      "React for component-based UI",
      "Redux Toolkit for state management",
      "Redux Persist for local data storage",
      "Chart.js for financial visualizations",
      "Tailwind CSS for modern styling",
    ],
    challenges: [
      "Designing an intuitive UX for complex financial data",
      "Implementing reliable data persistence",
      "Building accurate budget calculations and projections",
    ],
    tags: [
      "React",
      "Redux Toolkit",
      "Redux Persist",
      "Chart.js",
      "Tailwind CSS",
    ],
    color: "green",
    liveUrl:
      "https://personal-finance-app-madhav-dadhichs-projects.vercel.app/",
  },
  ourdesign: {
    title: "OurDesign.in",
    subtitle: "Designer Marketplace",
    description:
      "Lead management platform connecting designers with potential clients.",
    role: "Frontend Developer",
    duration: "Freelance Project",
    overview:
      "OurDesign.in is a marketplace platform that connects interior designers with potential clients. Features include designer profiles, lead management dashboards, and authentication flows.",
    problem:
      "Designers needed a platform to showcase their work and manage incoming leads efficiently, while clients needed an easy way to find and connect with designers.",
    responsibilities: [
      "Built designer listing and profile pages",
      "Created lead management dashboard",
      "Implemented user authentication flows",
      "Designed responsive UI components",
      "Integrated REST APIs for data management",
    ],
    technical: [
      "React for frontend development",
      "Firebase for authentication",
      "Node.js backend integration",
      "Tailwind CSS for styling",
      "REST API consumption",
    ],
    challenges: [
      "Building a scalable listing system",
      "Implementing secure authentication",
      "Creating an intuitive lead management workflow",
    ],
    tags: ["React", "Node.js", "Firebase", "Tailwind CSS", "REST API"],
    color: "orange",
    liveUrl: "https://ourdesign.in/",
  },
  "todo-app": {
    title: "Full-Stack To-Do App",
    subtitle: "Task Management",
    description:
      "Auth-based task manager with nested sub-todos and full CRUD operations.",
    role: "Full Stack Developer",
    duration: "Personal Project",
    overview:
      "A comprehensive task management application featuring user authentication, nested sub-todos, and full CRUD operations. Built with React frontend and Node.js/MongoDB backend.",
    problem:
      "Simple todo apps lack important features like nested tasks and user accounts. This project aimed to create a more robust solution for personal task management.",
    responsibilities: [
      "Designed the full application architecture",
      "Built React frontend with modern patterns",
      "Created Node.js/Express backend API",
      "Implemented JWT authentication",
      "Set up MongoDB database schema",
    ],
    technical: [
      "React for interactive frontend",
      "Node.js and Express for backend API",
      "MongoDB for data persistence",
      "JWT for secure authentication",
      "bcrypt for password hashing",
    ],
    challenges: [
      "Implementing nested todo structure efficiently",
      "Securing the API with proper authentication",
      "Managing complex state for nested items",
    ],
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT Auth"],
    color: "cyan",
    liveUrl: "https://to-do-app-jade-ten.vercel.app",
  },
  "vicecity-logs": {
    title: "ViceCity Logs UI",
    subtitle: "Design Experiment",
    description:
      "GTA Vice City themed blog interface showcasing creative UI design.",
    role: "UI Designer & Developer",
    duration: "Design Experiment",
    overview:
      "A creative UI experiment inspired by GTA Vice City aesthetics. This project explores 80s Miami vibes, neon colors, and retro-futuristic design patterns applied to a modern blog interface.",
    problem:
      "Wanted to push creative boundaries and experiment with unconventional design themes while maintaining usability and modern development practices.",
    responsibilities: [
      "Conceptualized the retro-futuristic design direction",
      "Created custom CSS animations and effects",
      "Built themed UI components",
      "Implemented smooth page transitions",
      "Designed responsive layouts with the theme in mind",
    ],
    technical: [
      "React for component architecture",
      "CSS3 for custom animations",
      "Framer Motion for page transitions",
      "Custom color palette and typography",
      "Responsive design patterns",
    ],
    challenges: [
      "Balancing creative theme with usability",
      "Creating cohesive retro-futuristic aesthetics",
      "Implementing complex CSS animations performantly",
    ],
    tags: ["React", "CSS3", "Framer Motion", "Animation", "UI Design"],
    color: "red",
    liveUrl: "https://vice-city-blog-page.vercel.app/",
  },
};
