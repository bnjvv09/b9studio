"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  labExperiments,
  labCategories,
  type LabCategory,
  type LabExperiment,
} from "@/data/labExperiments";
import {
  ArrowLeft,
  ArrowRight,
  FlaskConical,
  Sparkles,
  Volume2,
  VolumeX,
  RefreshCw,
  Terminal,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const LabDirectory = () => {
  const [selectedCategory, setSelectedCategory] = useState<LabCategory>("Todos");

  // State for interactive micro-demos
  const [qrStyle, setQrStyle] = useState<"cyan" | "pink" | "emerald">("cyan");
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);
  const [aiTemp, setAiTemp] = useState(0.7);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Kernel B9 v2.1 iniciado.",
    "Escribe 'ayuda' o 'estado'...",
  ]);
  const [telemetryPing, setTelemetryPing] = useState(42);

  const filteredExperiments = useMemo(
    () =>
      selectedCategory === "Todos"
        ? labExperiments
        : labExperiments.filter((exp) => exp.category === selectedCategory),
    [selectedCategory]
  );

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let response = "";
    if (cmd === "ayuda" || cmd === "help") {
      response = "Comandos: ayuda, estado, proyectos, limpiar, ping, matrix";
    } else if (cmd === "estado" || cmd === "status") {
      response = "Todos los sistemas 100% OPERATIVOS. 0 errores detectados.";
    } else if (cmd === "proyectos" || cmd === "projects") {
      response = "Proyectos activos: RecuerdoQR, B9 Studio OS, Pulse Commerce.";
    } else if (cmd === "ping") {
      response = `¡Pong! Latencia del estudio: ${Math.floor(Math.random() * 20 + 10)}ms`;
    } else if (cmd === "matrix") {
      response = "Despierta, Neo... B9 te está observando.";
    } else if (cmd === "limpiar" || cmd === "clear") {
      setTerminalLogs([]);
      setTerminalInput("");
      return;
    } else {
      response = `Comando '${cmd}' no reconocido. Escribe 'ayuda'.`;
    }

    setTerminalLogs((prev) => [...prev.slice(-4), `> ${cmd}`, response]);
    setTerminalInput("");
  };

  const cycleQrStyle = () => {
    const next = qrStyle === "cyan" ? "pink" : qrStyle === "pink" ? "emerald" : "cyan";
    setQrStyle(next);
  };

  const refreshTelemetry = () => {
    setTelemetryPing(Math.floor(Math.random() * 25 + 35));
  };

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 selection:bg-cyan-500 selection:text-black relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-24 left-1/3 w-[650px] h-[650px] bg-cyan-600/[0.07] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-96 right-10 w-[600px] h-[600px] bg-purple-600/[0.07] rounded-full blur-[150px] pointer-events-none" />

      {/* TOP STUDIO BAR */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#06080d]/80 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
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

          <div className="flex items-center gap-3">
            <Link
              href="/proyectos"
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors hidden sm:inline"
            >
              Proyectos
            </Link>
            <Link
              href="/about"
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors hidden sm:inline"
            >
              Sobre mí
            </Link>
            <Link
              href="/#contacto"
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white transition-all"
            >
              Iniciar proyecto
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        
        {/* HERO HEADER */}
        <section className="mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 tracking-widest uppercase">
            <FlaskConical className="w-3.5 h-3.5 text-cyan-400" />
            <span>B9 / LABORATORIO & EXPERIMENTOS</span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Laboratorio de Interfaces & Exploración
            </h1>
            <p className="text-lg sm:text-2xl text-slate-300 font-normal leading-relaxed">
              Un archivo de prototipos, micro-interacciones, experimentos de IA, sistemas en tiempo real y componentes UI interactivos.
            </p>
          </div>

          {/* Statement Badge */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-transparent border border-white/[0.08] max-w-2xl text-xs sm:text-sm font-mono text-cyan-300">
            “No solamente trabajo para clientes; también experimento, pruebo límites y construyo cosas por curiosidad pura.”
          </div>
        </section>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-white/[0.06] mb-12">
          {labCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-white text-black shadow-lg shadow-white/10 scale-105"
                    : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]"
                }`}
              >
                {category}
                {category === "Todos" && ` (${labExperiments.length})`}
              </button>
            );
          })}
        </div>

        {/* EXPERIMENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredExperiments.map((exp) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group"
              >
                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {exp.number}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                        {exp.category}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${exp.statusColor}`}
                    >
                      {exp.status}
                    </span>
                  </div>

                  {/* Interactive Micro-Demo Viewport */}
                  <div className="h-48 rounded-2xl bg-[#04060b] border border-white/[0.06] p-4 flex flex-col items-center justify-center relative overflow-hidden mb-6 select-none">
                    
                    {/* EXP 01: QR Vector Matrix Demo */}
                    {exp.interactiveType === "qr-matrix" && (
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <div
                          onClick={cycleQrStyle}
                          className={`w-24 h-24 rounded-2xl p-2.5 cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                            qrStyle === "cyan"
                              ? "bg-cyan-950/40 border-cyan-400 shadow-lg shadow-cyan-500/20"
                              : qrStyle === "pink"
                              ? "bg-pink-950/40 border-pink-400 shadow-lg shadow-pink-500/20"
                              : "bg-emerald-950/40 border-emerald-400 shadow-lg shadow-emerald-500/20"
                          }`}
                          title="Clic para cambiar color del QR"
                        >
                          <div className="flex justify-between">
                            <div className="w-5 h-5 rounded-sm border-2 border-current" />
                            <div className="w-5 h-5 rounded-sm border-2 border-current" />
                          </div>
                          <div className="flex justify-center items-center">
                            <div className="w-3 h-3 rounded-full bg-current animate-pulse" />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-5 h-5 rounded-sm border-2 border-current" />
                            <div className="w-3 h-3 bg-current rounded-sm" />
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                          <RefreshCw className="w-3 h-3 text-cyan-400" />
                          <span>Clic para alternar tema</span>
                        </span>
                      </div>
                    )}

                    {/* EXP 02: Dynamic Audio Island Demo */}
                    {exp.interactiveType === "audio-wave" && (
                      <div className="flex flex-col items-center justify-center space-y-3 w-full px-4">
                        <div
                          onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                          className="px-5 py-2.5 rounded-full bg-black border border-white/20 hover:border-pink-400 flex items-center gap-3 cursor-pointer shadow-xl transition-all group/island"
                        >
                          {isPlayingAudio ? (
                            <Volume2 className="w-4 h-4 text-pink-400" />
                          ) : (
                            <VolumeX className="w-4 h-4 text-slate-500" />
                          )}
                          <div className="flex items-end gap-1 h-5">
                            {[16, 24, 12, 20, 28, 14, 22].map((height, i) => (
                              <span
                                key={i}
                                className={`w-1 rounded-full transition-all duration-200 ${
                                  isPlayingAudio
                                    ? "bg-pink-400 animate-pulse"
                                    : "bg-slate-700 h-1.5"
                                }`}
                                style={{
                                  height: isPlayingAudio ? `${height}px` : "4px",
                                  animationDelay: `${i * 100}ms`,
                                }}
                              />
                            ))}
                          </div>
                          <span className="text-[10px] font-mono text-slate-300">
                            {isPlayingAudio ? "01:42" : "PAUSADO"}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500">
                          {isPlayingAudio ? "Clic para pausar" : "Clic para reanudar"}
                        </span>
                      </div>
                    )}

                    {/* EXP 03: Roblox Telemetry Bridge Demo */}
                    {exp.interactiveType === "roblox-telemetry" && (
                      <div className="w-full space-y-2 font-mono text-[11px]">
                        <div className="flex items-center justify-between pb-1 border-b border-white/[0.06]">
                          <span className="text-amber-400">RBX ⇄ NEXTJS</span>
                          <button
                            onClick={refreshTelemetry}
                            className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1"
                          >
                            <RefreshCw className="w-2.5 h-2.5" />
                            <span>Ping</span>
                          </button>
                        </div>
                        <div className="text-slate-400 flex justify-between">
                          <span>Latencia:</span>
                          <span className="text-emerald-400">{telemetryPing} ms</span>
                        </div>
                        <div className="text-slate-400 flex justify-between">
                          <span>Lua HttpService:</span>
                          <span className="text-cyan-400">CONECTADO</span>
                        </div>
                        <div className="text-slate-400 flex justify-between">
                          <span>Paquetes:</span>
                          <span className="text-slate-200">1,248 / min</span>
                        </div>
                      </div>
                    )}

                    {/* EXP 04: 3D Parallax Tilt Demo */}
                    {exp.interactiveType === "tilt-card" && (
                      <div className="w-32 h-24 rounded-xl bg-gradient-to-tr from-purple-600/30 via-cyan-500/20 to-transparent border border-white/20 flex flex-col items-center justify-center text-center p-2 shadow-xl hover:scale-105 transition-transform">
                        <Layers className="w-6 h-6 text-purple-400 mb-1" />
                        <span className="text-[10px] font-mono text-slate-300">
                          Brillo Especular
                        </span>
                        <span className="text-[9px] font-mono text-slate-500">
                          Shader de Profundidad
                        </span>
                      </div>
                    )}

                    {/* EXP 05: AI Prompt Parameter Demo */}
                    {exp.interactiveType === "ai-prompt" && (
                      <div className="w-full space-y-2.5 font-mono text-[11px]">
                        <div className="flex justify-between items-center text-slate-300">
                          <span>Temperatura</span>
                          <span className="text-emerald-400 font-bold">{aiTemp.toFixed(2)}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.05"
                          value={aiTemp}
                          onChange={(e) => setAiTemp(parseFloat(e.target.value))}
                          className="w-full accent-emerald-400 bg-slate-800 cursor-pointer h-1.5 rounded-lg"
                        />
                        <div className="flex justify-between text-[10px] text-slate-500">
                          <span>0.0 (Estricto)</span>
                          <span>Entropía: {Math.round(aiTemp * 100)}%</span>
                          <span>1.0 (Creativo)</span>
                        </div>
                      </div>
                    )}

                    {/* EXP 06: Mini In-Browser Shell Demo */}
                    {exp.interactiveType === "terminal" && (
                      <div className="w-full h-full flex flex-col justify-between font-mono text-[10px]">
                        <div className="space-y-1 overflow-hidden text-slate-400">
                          {terminalLogs.slice(-2).map((log, idx) => (
                            <p key={idx} className="truncate text-cyan-300/80">
                              {log}
                            </p>
                          ))}
                        </div>
                        <form onSubmit={handleTerminalSubmit} className="flex items-center gap-1.5 pt-1 border-t border-white/[0.08]">
                          <span className="text-cyan-400">$</span>
                          <input
                            type="text"
                            value={terminalInput}
                            onChange={(e) => setTerminalInput(e.target.value)}
                            placeholder="escribe ayuda..."
                            className="bg-transparent text-white text-[10px] focus:outline-none w-full"
                          />
                        </form>
                      </div>
                    )}

                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {exp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Bullet Insights */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-300 font-normal">
                    {exp.insights.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 shrink-0 mt-0.5">•</span>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Chips */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono text-slate-400 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* LAB BOTTOM CALLOUT */}
        <section className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/20 via-[#070b14] to-cyan-950/20 border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              ¿Tienes una idea o prototipo que quieras explorar?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-normal">
              Me encanta experimentar con nuevas APIs, integraciones y flujos de usuario no convencionales.
            </p>
          </div>

          <Link
            href="/#contacto"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-bold text-xs sm:text-sm hover:bg-cyan-400 transition-all shadow-xl"
          >
            <span>Hablemos de tu idea</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

      </main>

      {/* Minimal Studio Footer */}
      <footer className="border-t border-white/[0.06] py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
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
};
