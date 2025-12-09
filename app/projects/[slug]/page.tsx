import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/constants/projects";
import ProjectDetailContent from "./ProjectDetailContent";

// Generate static params for all project slugs
export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }));
}

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} slug={slug} />;
}
