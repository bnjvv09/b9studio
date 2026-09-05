"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ProjectItem, portfolioData, projects } from "@/data/portfolioData";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  QrCode,
  Sparkles,
  Music,
  Heart,
  ShieldCheck,
  Lock,
  Clock,
  MessageSquare,
  Image as ImageIcon,
  Palette,
  CreditCard,
  Smartphone,
  CheckCircle2,
  Maximize2,
  X,
  Layers,
  Terminal,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

interface ProjectCaseStudyProps {
  project: ProjectItem;
}

export const ProjectCaseStudy = ({ project }: ProjectCaseStudyProps) => {
  const { developer } = portfolioData;
  const { caseStudy } = project;
  const prefersReduced = useReducedMotion();

  // Navigation between projects
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const safeCurrentIndex = currentIndex !== -1 ? currentIndex : 0;
  const totalProjects = projects.length;
  const prevIndex = (safeCurrentIndex - 1 + totalProjects) % totalProjects;
  const nextIndex = (safeCurrentIndex + 1) % totalProjects;
  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];

  // Selected module for lightbox preview modal
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  // Parallax subtle cursor tilt for the Hero Visual mockup
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 25 });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    prefersReduced ? ["0deg", "0deg"] : ["4deg", "-4deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    prefersReduced ? ["0deg", "0deg"] : ["-4deg", "4deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "Music":
        return <Music className="w-5 h-5 text-cyan-400" />;
      case "Clock":
        return <Clock className="w-5 h-5 text-pink-400" />;
      case "MessageSquare":
        return <MessageSquare className="w-5 h-5 text-purple-400" />;
      case "Image":
        return <ImageIcon className="w-5 h-5 text-emerald-400" />;
      case "Lock":
        return <Lock className="w-5 h-5 text-amber-400" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-cyan-300" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-pink-300" />;
      case "CreditCard":
        return <CreditCard className="w-5 h-5 text-emerald-300" />;
      case "QrCode":
        return <QrCode className="w-5 h-5 text-purple-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 selection:bg-cyan-500 selection:text-black relative overflow-hidden">
      {/* Background ambient lighting orbs */}
      <div className="absolute top-20 left-1/4 w-[650px] h-[650px] bg-purple-600/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-96 right-1/4 w-[650px] h-[650px] bg-cyan-600/[0.08] rounded-full blur-[140px] pointer-events-none" />

      {/* TOP STUDIO BAR */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#06080d]/80 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link
            href="/proyectos"
            className="group flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>Todos los proyectos</span>
          </Link>

          <Link href="/" className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
              {developer.monogram}
            </span>
            <span className="text-sm font-mono font-bold tracking-wider text-slate-200 hidden sm:inline">
              bnjvv09<span className="text-cyan-400">.dev</span>
            </span>
          </Link>

          <Link
            href="/#contacto"
            className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white transition-all"
          >
            <span>Trabajemos juntos</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* STUDIO SEQUENTIAL SUB-NAVIGATION */}
        <div className="border-t border-white/[0.05] bg-black/40 px-4 sm:px-8 py-2.5">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono">
            {totalProjects > 1 ? (
              <>
                <Link
                  href={prevProject.href}
                  className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                  title={`Ver ${prevProject.title}`}
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
                  <span>
                    <span className="text-slate-500 hidden sm:inline">← Anterior: </span>
                    <span className="text-slate-300 group-hover:text-cyan-300 font-medium">{prevProject.title}</span>
                  </span>
                </Link>

                <span className="text-[11px] text-slate-600 hidden md:inline px-3 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.05]">
                  PROYECTO {project.number} / {String(totalProjects).padStart(2, "0")}
                </span>

                <Link
                  href={nextProject.href}
                  className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                  title={`Ver ${nextProject.title}`}
                >
                  <span>
                    <span className="text-slate-500 hidden sm:inline">Siguiente: </span>
                    <span className="text-slate-300 group-hover:text-cyan-300 font-medium">{nextProject.title}</span>
                    <span className="text-slate-500 hidden sm:inline"> →</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/proyectos"
                  className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-slate-300 group-hover:text-cyan-300 font-medium">Todos los proyectos</span>
                </Link>

                <span className="text-[11px] text-cyan-400/80 px-3 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  PRODUCTO INSIGNIA EN PRODUCCIÓN
                </span>

                <Link
                  href="/lab"
                  className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <span className="text-slate-300 group-hover:text-cyan-300 font-medium">Ver Lab & Experimentos</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* HERO SECTION */}
        <section className="mb-16 sm:mb-24">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
              {project.projectNumber}
            </span>
            <span className="text-slate-700">•</span>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              {project.category}
            </span>
            <span className="text-slate-700">•</span>
            <span className="text-xs font-mono text-slate-500">
              {project.year}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-5"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-xl sm:text-2xl lg:text-3xl text-gradient-cyber font-bold tracking-tight mb-6 max-w-3xl"
          >
            {project.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-2 mb-8 text-xs font-mono text-slate-400"
          >
            <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300">
              NEXT.JS
            </span>
            <span className="text-slate-600">·</span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300">
              REACT
            </span>
            <span className="text-slate-600">·</span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300">
              SUPABASE
            </span>
            <span className="text-slate-600">·</span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300">
              MERCADO PAGO
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-bold text-xs sm:text-sm hover:bg-slate-200 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Visitar {project.title}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/[0.08] hover:border-cyan-500/40 text-xs sm:text-sm font-medium transition-all"
            >
              <span>Cotizar proyecto similar</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </motion.div>
        </section>

        {/* HERO PROTAGONIST VISUAL MOCKUP */}
        <section className="mb-24 sm:mb-32">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="w-full rounded-[28px] bg-gradient-to-b from-[#0e1322] via-[#090d18] to-[#060810] border border-white/[0.08] p-6 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Window bar */}
            <div className="flex items-center justify-between pb-5 border-b border-white/[0.07] mb-8">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-3 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  recuerdoqr.cl
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {project.status}
              </span>
            </div>

            {/* Visual Canvas Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Side: Capabilities & Product Specs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="p-6 rounded-2xl bg-black/50 border border-white/[0.06] space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-semibold">
                    <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400 animate-pulse" />
                    <span>Experiencia Multimedia Interactiva</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-white/[0.06]">
                    <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <Music className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Música en vivo</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <Clock className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                      <span>Contador dinámico</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>PIN Secreto</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Mercado Pago</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-500 px-2">
                  <span>Stack: Next.js 14 · React 18 · Supabase</span>
                  <span>Producción verificada</span>
                </div>
              </div>

              {/* Right Side: QR Scanner Device Mockup */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-black/70 border border-white/[0.08] text-center relative overflow-hidden shadow-inner">
                <div className="w-32 h-32 rounded-2xl bg-white p-3 shadow-2xl mb-4 relative">
                  <QrCode className="w-full h-full text-black" />
                  <div className="absolute left-2 right-2 h-0.5 bg-cyan-400 shadow-md shadow-cyan-400 animate-pulse" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 mb-1">
                  <Smartphone className="w-4 h-4 text-cyan-400" />
                  <span>Escaneo instantáneo sin apps</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  Cámara nativa iOS & Android
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 01 — OVERVIEW */}
        <section className="mb-24 sm:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase block mb-2">
                {caseStudy.overview.title}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                El Producto
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed">
                {caseStudy.overview.statement}
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                {caseStudy.overview.details}
              </p>
            </div>
          </div>
        </section>

        {/* 02 — THE CHALLENGE */}
        <section className="mb-24 sm:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono font-bold tracking-widest text-rose-400 uppercase block mb-2">
                {caseStudy.challenge.title}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                El Reto
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed">
                {caseStudy.challenge.statement}
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                {caseStudy.challenge.details}
              </p>

              {/* Challenge Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {caseStudy.challenge.points.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3"
                  >
                    <span className="font-mono text-xs font-bold text-rose-400 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="text-xs text-slate-300 leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 03 — THE SOLUTION */}
        <section className="mb-24 sm:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase block mb-2">
                {caseStudy.solution.title}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                La Solución
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed">
                {caseStudy.solution.statement}
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                {caseStudy.solution.details}
              </p>

              {/* Solution Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {caseStudy.solution.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/20 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-xs text-slate-200 leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 04 — HOW IT WORKS */}
        <section className="mb-24 sm:mb-32">
          <div className="mb-10">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase block mb-2">
              {caseStudy.howItWorks.title}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Flujo de Trabajo Paso a Paso
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {caseStudy.howItWorks.steps.map((step, idx) => (
              <div
                key={step.number}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-mono font-black text-cyan-400 block mb-2">
                    {step.number}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-2">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 05 — FEATURES */}
        <section className="mb-24 sm:mb-32">
          <div className="mb-10">
            <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase block mb-2">
              {caseStudy.features.title}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Funcionalidades de Producto
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {caseStudy.features.items.map((item) => (
              <div
                key={item.name}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-all flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] shrink-0">
                  {getFeatureIcon(item.icon)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 06 — TECHNOLOGY */}
        <section className="mb-24 sm:mb-32">
          <div className="mb-10">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase block mb-2">
              {caseStudy.technology.title}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Arquitectura & Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudy.technology.groups.map((group) => (
              <div
                key={group.category}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
              >
                <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-3">
                  {group.category}
                </span>
                <ul className="space-y-2">
                  {group.items.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs font-mono text-slate-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 07 — EXPERIENCE */}
        <section className="mb-24 sm:mb-32">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.08]">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase block mb-2">
              {caseStudy.experience.title}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
              La Experiencia del Usuario
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mb-8 leading-relaxed">
              {caseStudy.experience.statement}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.experience.flow.map((step, idx) => (
                <div
                  key={step.step}
                  className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <span className="font-mono font-bold text-xs text-cyan-400">
                      0{step.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {step.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 08 — GALLERY (Interactive Lightbox & Asset slots) */}
        <section className="mb-24 sm:mb-32">
          <div className="mb-10">
            <span className="text-xs font-mono font-bold tracking-widest text-pink-400 uppercase block mb-2">
              {caseStudy.gallery.title}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Módulos del Sistema
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Haz clic en cualquier módulo para abrir la vista ampliada.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {caseStudy.gallery.modules.map((mod, index) => (
              <div
                key={mod.title}
                onClick={() => setSelectedModule(index)}
                className="group cursor-pointer rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-cyan-500/40 p-6 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                    {mod.tag}
                  </span>
                  <Maximize2 className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <div className="h-44 rounded-xl bg-black/60 border border-white/[0.05] p-4 flex flex-col items-center justify-center text-center relative overflow-hidden mb-4">
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${mod.color} opacity-40`}
                  />
                  <Layers className="w-8 h-8 text-slate-400 mb-2 relative z-10" />
                  <span className="text-xs font-mono text-slate-300 relative z-10">
                    {mod.title}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mb-1">
                  {mod.title}
                </h3>
                <p className="text-xs text-slate-400 font-normal">
                  {mod.subtitle}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* EDITORIAL BANNER: NEXT PROJECT OR LAB */}
        <section className="mb-24 sm:mb-32">
          {totalProjects > 1 ? (
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c121e] via-[#080c14] to-[#05070c] border border-white/10 p-8 sm:p-14 hover:border-cyan-500/40 transition-all duration-300 shadow-2xl group">
              {/* Ambient subtle glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-500/15 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="space-y-4 max-w-xl">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
                      SIGUIENTE PROYECTO · {nextProject.number}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                      {nextProject.category}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {nextProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                    {nextProject.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {nextProject.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-slate-400 bg-white/[0.03] border border-white/[0.05] px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 pt-2 md:pt-0">
                  <Link
                    href={nextProject.href}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-bold text-sm sm:text-base hover:bg-cyan-400 transition-all duration-200 shadow-2xl hover:scale-105 active:scale-95 group/btn"
                  >
                    <span>Ver proyecto</span>
                    <ArrowRight className="w-4 h-4 text-black group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c121e] via-[#080c14] to-[#05070c] border border-white/10 p-8 sm:p-14 hover:border-cyan-500/40 transition-all duration-300 shadow-2xl group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-500/15 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="space-y-4 max-w-xl">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
                      LABORATORIO & EXPERIMENTOS
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      EN DESARROLLO
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    Explora el Lab de Prototipos
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                    Experimentos de interfaz, animaciones interactivas, componentes y prototipos en los que estoy trabajando activamente.
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {["Framer Motion", "Canvas Confetti", "Audio API", "React"].map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-slate-400 bg-white/[0.03] border border-white/[0.05] px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 pt-2 md:pt-0">
                  <Link
                    href="/lab"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-bold text-sm sm:text-base hover:bg-cyan-400 transition-all duration-200 shadow-2xl hover:scale-105 active:scale-95 group/btn"
                  >
                    <span>Ver experimentos en el Lab</span>
                    <ArrowRight className="w-4 h-4 text-black group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 09 — SIGUIENTE PASO (Conversion CTA) */}
        <section className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-cyan-950/20 via-[#0b101c] to-purple-950/20 border border-white/[0.08] text-center space-y-6">
          <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase block">
            09 — SIGUIENTE PASO
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight max-w-2xl mx-auto">
            {caseStudy.nextStep.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto font-normal leading-relaxed">
            {caseStudy.nextStep.subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href={caseStudy.nextStep.ctaHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-bold text-xs sm:text-sm transition-all duration-200 hover:bg-slate-200 hover:scale-[1.02] shadow-xl"
            >
              <span>{caseStudy.nextStep.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] text-xs sm:text-sm font-medium transition-all"
            >
              <span>← Todos los proyectos</span>
            </Link>
          </div>
        </section>

      </main>

      {/* Lightbox Modal for Gallery */}
      <AnimatePresence>
        {selectedModule !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedModule(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full rounded-2xl bg-[#0b0e17] border border-white/10 p-6 space-y-4 relative shadow-2xl"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-cyan-400">
                  {caseStudy.gallery.modules[selectedModule].tag}
                </span>
                <button
                  onClick={() => setSelectedModule(null)}
                  className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="h-64 rounded-xl bg-black/80 border border-white/[0.06] flex flex-col items-center justify-center p-6 text-center">
                <Layers className="w-12 h-12 text-cyan-400/60 mb-3" />
                <h3 className="text-base font-bold text-white mb-1">
                  {caseStudy.gallery.modules[selectedModule].title}
                </h3>
                <p className="text-xs text-slate-400 max-w-md">
                  {caseStudy.gallery.modules[selectedModule].subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Studio Minimal Footer */}
      <footer className="border-t border-white/[0.06] py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Bnjvv09. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Estudio de Productos Digitales</span>
          </p>
        </div>
      </footer>
    </div>
  );
};
