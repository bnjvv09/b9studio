import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bnjvv09.dev"),
  alternates: {
    canonical: "/",
  },
  title: "Bnjvv09 — Desarrollador Full-Stack & Creador Digital",
  description:
    "Desarrollador Full-Stack especializado en crear aplicaciones web, e-commerce y experiencias digitales interactivas.",
  keywords: [
    "Desarrollador Full Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Desarrollo Web",
    "E-commerce",
    "Supabase",
    "Mercado Pago",
    "Chile",
    "Desarrollador Freelance",
  ],
  authors: [{ name: "Bnjvv09", url: "https://bnjvv09.dev" }],
  creator: "Bnjvv09",
  openGraph: {
    title: "Bnjvv09 — Desarrollador Full-Stack & Creador Digital",
    description:
      "Desarrollador Full-Stack especializado en crear aplicaciones web, e-commerce y experiencias digitales interactivas.",
    url: "https://bnjvv09.dev",
    siteName: "Bnjvv09",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bnjvv09 — Desarrollador Full-Stack & Creador Digital",
    description:
      "Desarrollador Full-Stack especializado en crear aplicaciones web, e-commerce y experiencias digitales interactivas.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

import dynamic from "next/dynamic";

const CustomCursor = dynamic(
  () => import("@/components/CustomCursor").then((m) => m.CustomCursor),
  { ssr: false }
);

const CommandPalette = dynamic(
  () => import("@/components/CommandPalette").then((m) => m.CommandPalette),
  { ssr: false }
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${sans.variable} ${mono.variable} scroll-smooth`}>
      <body className="bg-obsidian-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-black relative min-h-screen overflow-x-hidden">
        {/* Subtle Desktop Custom Cursor (lazy, client-only) */}
        <CustomCursor />

        {/* Studio Command Palette ⌘K / Ctrl+K (lazy, client-only) */}
        <CommandPalette />

        {/* Background Ambient Glows & Grid */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="glow-spot-purple -top-24 -left-24 opacity-60 animate-pulse-slow" />
          <div className="glow-spot-cyan top-1/3 -right-36 opacity-50 animate-pulse-slow" />
          <div className="glow-spot-purple bottom-10 left-1/4 opacity-40 animate-pulse-slow" />
          <div className="absolute inset-0 bg-subtle-grid opacity-25 pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
