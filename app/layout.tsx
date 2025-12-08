import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingHireButton } from "@/components/FloatingHireButton";
import { MatrixRain } from "@/components/MatrixRain";
import { ParticleField } from "@/components/ParticleField";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Madhav Dadhich | Frontend & React Developer",
  description:
    "Production-grade SaaS dashboards, exam platforms, and AI-driven applications. Building the future of web, one component at a time.",
  keywords: [
    "React",
    "Next.js",
    "Frontend Developer",
    "TypeScript",
    "SaaS",
    "Web Developer",
    "UI Engineer",
  ],
  openGraph: {
    title: "Madhav Dadhich | Frontend & React Developer",
    description:
      "Building modern, scalable digital products with precision and passion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-[#0a0a0f] text-white`}
      >
        {/* Background Effects */}
        <div className="gradient-wave-bg" />
        <MatrixRain />
        <ParticleField />
        <div className="grid-pattern fixed inset-0 pointer-events-none z-0" />

        {/* Main Content */}
        <div className="relative z-10">
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>

        {/* Floating Elements */}
        {/* <FloatingHireButton /> */}
      </body>
    </html>
  );
}
