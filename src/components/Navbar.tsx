"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { getAvailability } from "@/data/availability";
import { Menu, X, ArrowUpRight, MessageCircle, Search, Zap, Sparkles } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const lastClickTimeRef = useRef(0);
  const [overdrive, setOverdrive] = useState(false);
  const [overdriveToast, setOverdriveToast] = useState(false);

  const availability = getAvailability();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastClickTimeRef.current < 600) {
      const nextCount = clickCount + 1;
      setClickCount(nextCount);
      if (nextCount >= 5) {
        setOverdrive(true);
        setOverdriveToast(true);
        import("canvas-confetti").then((confettiModule) => {
          const confetti = confettiModule.default;
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.15 },
            colors: ["#00f0ff", "#ff007f", "#7928ca", "#ffffff"],
          });
        });
        setTimeout(() => setOverdriveToast(false), 5000);
        setTimeout(() => setOverdrive(false), 12000);
        setClickCount(0);
      }
    } else {
      setClickCount(1);
    }
    lastClickTimeRef.current = now;
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3.5 shadow-2xl shadow-black/80"
          : "bg-transparent py-5"
      }`}
    >
      {/* Overdrive Secret Toast */}
      {overdriveToast && (
        <div className="max-w-xl mx-auto px-4 mb-3 animate-in slide-in-from-top-4 duration-300">
          <div className="p-3 rounded-2xl bg-gradient-to-r from-pink-500/20 via-purple-500/30 to-cyan-500/20 border border-cyan-400 text-center shadow-2xl shadow-cyan-500/30 backdrop-blur-xl flex items-center justify-center gap-2 font-mono text-xs text-white">
            <Zap className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span className="font-bold text-cyan-300 tracking-wider">
              MODO OVERDRIVE DESBLOQUEADO: PRIVILEGIOS DE FUNDADOR ACTIVADOS
            </span>
            <Sparkles className="w-4 h-4 text-pink-400 animate-spin" />
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo B9 + Brand Bnjvv09 with cyber gradient + Secret Click Easter Egg */}
          <div
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 group focus:outline-none cursor-pointer select-none"
            aria-label="Bnjvv09 (Clic secreto)"
            title={overdrive ? "⚡ MODO OVERDRIVE ACTIVO ⚡" : "Bnjvv09"}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm text-white transition-all duration-300 ${
                overdrive
                  ? "bg-gradient-to-r from-pink-500 via-cyan-400 to-yellow-400 shadow-lg shadow-cyan-400/80 animate-bounce scale-110"
                  : "bg-gradient-to-tr from-cyber-purple via-purple-600 to-cyber-cyan shadow-md shadow-purple-500/30 group-hover:scale-105 group-hover:shadow-cyan-500/40"
              }`}
            >
              {overdrive ? "⚡" : portfolioData.developer.monogram}
            </div>
            <Link
              href="/"
              className="font-bold text-sm tracking-tight text-white group-hover:text-cyber-cyan transition-colors flex items-center gap-1.5"
            >
              {portfolioData.developer.name}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {portfolioData.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-cyber-purple to-cyber-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Right Status Badge, Command Palette & WhatsApp CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Command Palette Trigger */}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-cyan-500/40 text-slate-400 hover:text-white text-xs font-mono transition-all group"
              title="Buscar o navegar (⌘K o Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[11px] text-slate-400 group-hover:text-slate-200">⌘K</span>
            </button>

            {/* Studio Availability Badge linked to /status */}
            <Link
              href="/status"
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${availability.badgeClass}`}
              title="Ver monitor de estado del estudio (/status)"
            >
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${availability.dotColor}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${availability.dotColor}`}></span>
              </span>
              <span>{availability.headline}</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10"
              aria-label="Abrir buscador"
            >
              <Search className="w-4 h-4 text-cyan-400" />
            </button>

            <Link
              href="/status"
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border ${availability.badgeClass}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${availability.dotColor}`} />
              <span>Estado</span>
            </Link>

            <button
              onClick={toggleMenu}
              type="button"
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10 focus:outline-none"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X className="w-5 h-5 text-cyber-cyan" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden glass-nav border-b border-white/10 px-5 pt-3 pb-6 animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-1 mt-2">
            {portfolioData.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-cyber-cyan font-mono">→</span>
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={portfolioData.developer.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyber-purple via-purple-600 to-cyber-cyan text-white font-semibold text-xs transition-all shadow-lg shadow-purple-900/40"
              >
                <MessageCircle className="w-4 h-4 text-cyber-cyan" />
                <span>Hablar por WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
