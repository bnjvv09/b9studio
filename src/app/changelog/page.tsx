import { Metadata } from "next";
import Link from "next/link";
import { changelogData } from "@/data/changelog";
import {
  ArrowLeft,
  GitCommit,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "B9 / REGISTRO DE CAMBIOS — Historial de Lanzamientos & Versiones | Bnjvv09",
  description:
    "Registro público de versiones, mejoras, lanzamientos de productos y experimentos técnicos desarrollados en B9 Studio.",
  alternates: {
    canonical: "https://bnjvv09.dev/changelog",
  },
  openGraph: {
    title: "B9 / REGISTRO DE CAMBIOS — Historial de Versiones & Lanzamientos",
    description:
      "Registro cronológico de lanzamientos e iteraciones de productos de B9 Studio.",
    url: "https://bnjvv09.dev/changelog",
    siteName: "B9 Studio",
    locale: "es_CL",
    type: "website",
  },
};

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-[#05070c] text-slate-100 selection:bg-cyan-500 selection:text-black relative overflow-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/3 w-[650px] h-[650px] bg-purple-600/[0.06] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-96 right-1/4 w-[600px] h-[600px] bg-cyan-600/[0.06] rounded-full blur-[150px] pointer-events-none" />

      {/* TOP STUDIO BAR */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#05070c]/85 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>Volver al inicio</span>
          </Link>

          <Link href="/" className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
              B9
            </span>
            <span className="text-sm font-mono font-bold tracking-wider text-slate-200 hidden sm:inline">
              bnjvv09<span className="text-cyan-400">.dev</span>
            </span>
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono">
            <Link href="/proyectos" className="text-slate-400 hover:text-white hidden sm:inline">
              Proyectos
            </Link>
            <Link href="/lab" className="text-slate-400 hover:text-white hidden sm:inline">
              Lab
            </Link>
            <Link href="/status" className="text-emerald-400 hover:underline">
              Estado ●
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 space-y-16">
        
        {/* HEADER */}
        <section className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 tracking-widest uppercase">
            <GitCommit className="w-3.5 h-3.5 text-cyan-400" />
            <span>B9 / REGISTRO PÚBLICO DE CAMBIOS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Historial de Versiones & Lanzamientos
          </h1>

          <p className="text-base sm:text-lg text-slate-400 font-normal max-w-2xl leading-relaxed">
            Evolución continua del estudio, lanzamiento de nuevos productos digitales, experimentos técnicos y mejoras de rendimiento.
          </p>
        </section>

        {/* RELEASES TIMELINE */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-16">
          {changelogData.map((release) => (
            <article key={release.version} className="relative group">
              {/* Timeline marker icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#05070c] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-lg shadow-cyan-500/30">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Release Card */}
              <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 space-y-6 shadow-xl">
                
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md border tracking-wider text-white bg-white/[0.05] border-white/10">
                      v{release.version}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${release.badgeColor}`}
                    >
                      {release.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{release.date}</span>
                  </div>
                </div>

                {/* Title & Summary */}
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {release.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                    {release.summary}
                  </p>
                </div>

                {/* Categorized Changes List */}
                <div className="space-y-4 pt-2">
                  {release.changes.map((group) => (
                    <div key={group.category} className="space-y-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                        {group.category}
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-400 font-normal">
                        {group.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-slate-500 mt-0.5">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Bottom Tags & Related Link */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {release.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-slate-500 bg-white/[0.02] border border-white/[0.05] px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {release.relatedProject && (
                    <Link
                      href={release.relatedProject.href}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>{release.relatedProject.label}</span>
                    </Link>
                  )}
                </div>

              </div>
            </article>
          ))}
        </div>

      </main>

      {/* Minimal Studio Footer */}
      <footer className="border-t border-white/[0.06] py-8 mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Bnjvv09 · Estudio de Productos Digitales</p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/" className="hover:text-cyan-300">Inicio</Link>
            <Link href="/proyectos" className="hover:text-cyan-300">Proyectos</Link>
            <Link href="/about" className="hover:text-cyan-300">Sobre mí</Link>
            <Link href="/status" className="hover:text-cyan-300">Estado</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
