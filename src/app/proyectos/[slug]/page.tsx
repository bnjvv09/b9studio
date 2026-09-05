import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolioData";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Proyecto No Encontrado | Bnjvv09",
    };
  }

  const title = `${project.title} — Caso de Estudio | Bnjvv09`;
  const description =
    `Descubre cómo Bnjvv09 desarrolló ${project.title}, su arquitectura técnica, diseño y solución de software.`;
  const url = `https://bnjvv09.dev/proyectos/${project.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Bnjvv09",
      locale: "es_CL",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
}
