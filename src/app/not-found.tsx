"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, Terminal, Sparkles, CornerDownLeft } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const [cmdInput, setCmdInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Kernel B9 v2.1: Página no encontrada en el sector actual.",
    "Escribe 'ayuda' para ver los comandos disponibles.",
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const command = cmdInput.trim().toLowerCase();
    if (!command) return;

    let response = "";

    if (command === "ayuda" || command === "help") {
      response = "Disponibles: inicio, proyectos, lab, sobre-mi, estado, fiesta, matrix, limpiar";
    } else if (command === "inicio" || command === "home") {
      router.push("/");
      return;
    } else if (command === "proyectos" || command === "projects") {
      router.push("/proyectos");
      return;
    } else if (command === "lab") {
      router.push("/lab");
      return;
    } else if (command === "sobre-mi" || command === "about") {
      router.push("/about");
      return;
    } else if (command === "estado" || command === "status") {
      router.push("/status");
      return;
    } else if (command === "fiesta" || command === "party") {
      import("canvas-confetti").then((confettiModule) => {
        const confetti = confettiModule.default;
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.5 },
        });
      });
      response = "🎉 ¡Confeti activado! Modo celebración en curso.";
    } else if (command === "matrix") {
      response = "Despierta, Neo... Matrix te tiene. Sigue al conejo blanco.";
    } else if (command === "sudo") {
      response = "El usuario no está en el archivo sudoers. Este incidente será reportado a Bnjvv09.";
    } else if (command === "limpiar" || command === "clear") {
      setHistory([]);
      setCmdInput("");
      return;
    } else {
      response = `Comando '${command}' no encontrado. Escribe 'ayuda' para ver opciones.`;
    }

    setHistory((prev) => [...prev.slice(-5), `$ ${cmdInput}`, response]);
    setCmdInput("");
  };

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-black">
      {/* Header */}
      <header className="p-6 max-w-7xl w-full mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
            B9
          </span>
          <span className="text-sm font-mono font-bold tracking-wider text-slate-200">
            bnjvv09<span className="text-cyan-400">.dev</span>
          </span>
        </Link>

        <Link
          href="/"
          className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Inicio</span>
        </Link>
      </header>

      {/* Main 404 Display */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-xl w-full">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase block">
            ERROR 404 · RUTA NO ENCONTRADA
          </span>

          <h1 className="text-7xl sm:text-9xl font-black text-white tracking-tighter">
            404
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-medium">
            Esta página no existe o ha sido movida en el estudio.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-xs sm:text-sm hover:bg-slate-200 transition-all shadow-xl hover:scale-[1.02]"
            >
              <Home className="w-4 h-4" />
              <span>Volver al inicio</span>
            </Link>

            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] text-xs font-mono transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Ver proyectos</span>
            </Link>

            <Link
              href="/lab"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-cyan-300 hover:text-cyan-200 border border-white/[0.08] text-xs font-mono transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explorar Lab</span>
            </Link>
          </div>

          {/* Interactive Mini Terminal Easter Egg */}
          <div className="pt-6 text-left">
            <div className="rounded-2xl bg-[#090d16] border border-white/10 shadow-2xl overflow-hidden">
              <div className="px-4 py-2.5 bg-black/60 border-b border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-slate-300 text-[11px]">b9-rescue-shell ~ v2.1</span>
                </div>
                <span className="text-[10px] text-slate-500">consola interactiva</span>
              </div>

              <div className="p-4 font-mono text-xs space-y-1.5 min-h-[100px] max-h-[160px] overflow-y-auto">
                {history.map((line, i) => (
                  <p
                    key={i}
                    className={
                      line.startsWith("$")
                        ? "text-cyan-300 font-bold"
                        : "text-slate-400 text-[11px]"
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>

              <form
                onSubmit={handleCommand}
                className="px-4 py-2.5 bg-black/40 border-t border-white/[0.06] flex items-center gap-2 font-mono text-xs"
              >
                <span className="text-cyan-400 font-bold">b9@studio:~$</span>
                <input
                  type="text"
                  value={cmdInput}
                  onChange={(e) => setCmdInput(e.target.value)}
                  placeholder="escribe ayuda, inicio, lab, matrix..."
                  className="bg-transparent text-white focus:outline-none w-full text-xs font-mono placeholder-slate-600"
                />
                <button
                  type="submit"
                  className="p-1 text-slate-400 hover:text-cyan-400 transition-colors"
                  title="Ejecutar comando"
                >
                  <CornerDownLeft className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-white/[0.06] py-6 text-center text-xs font-mono text-slate-600">
        <p>© {new Date().getFullYear()} Bnjvv09 · Estudio de Productos Digitales</p>
      </footer>
    </div>
  );
}
