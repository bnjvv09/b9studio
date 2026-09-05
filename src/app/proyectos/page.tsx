import { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectsDirectory } from "@/components/projects/ProjectsDirectory";

export const metadata: Metadata = {
  title: "Selected Work — Proyectos & Productos Digitales | Bnjvv09",
  description:
    "Catálogo y archivo de productos digitales, experiencias web interactivas y sistemas construidos por Bnjvv09.",
  alternates: {
    canonical: "https://bnjvv09.dev/proyectos",
  },
  openGraph: {
    title: "Selected Work — Proyectos & Productos Digitales | Bnjvv09",
    description:
      "Catálogo y archivo de productos digitales, experiencias web interactivas y sistemas construidos por Bnjvv09.",
    url: "https://bnjvv09.dev/proyectos",
    siteName: "Bnjvv09",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Work — Proyectos & Productos Digitales | Bnjvv09",
    description:
      "Catálogo y archivo de productos digitales y arquitecturas creadas por Bnjvv09.",
  },
};

export default function ProyectosPage() {
  return <ProjectsDirectory initialProjects={projects} />;
}
