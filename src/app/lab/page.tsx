import { Metadata } from "next";
import { LabDirectory } from "@/components/LabDirectory";

export const metadata: Metadata = {
  title: "B9 Lab / Experiments — Interfaces, Prototipos & Exploración | Bnjvv09",
  description:
    "Laboratorio de experimentos técnicos, micro-interacciones, interfaces con Canvas, bridges de tiempo real y prototipos construidos por Bnjvv09.",
  alternates: {
    canonical: "https://bnjvv09.dev/lab",
  },
  openGraph: {
    title: "B9 Lab / Experiments — Interfaces & Prototipos | Bnjvv09",
    description:
      "Explora experimentos con IA, micro-animaciones, componentes UI y sistemas en tiempo real de Bnjvv09.",
    url: "https://bnjvv09.dev/lab",
    siteName: "Bnjvv09 Studio",
    locale: "es_CL",
    type: "website",
  },
};

export default function LabPage() {
  return <LabDirectory />;
}
