"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  FolderGit2,
  Sparkles,
  Layers,
  MessageCircle,
  Mail,
  Home,
  User,
  Cpu,
  Code2,
  X,
  CornerDownLeft,
  Terminal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { analytics } from "@/lib/analytics";

interface PaletteItem {
  id: string;
  title: string;
  category: "Navegación" | "Servicios" | "Proyectos" | "Contacto" | "Estudio" | "Secretos";
  icon: React.ReactNode;
  href?: string;
  external?: boolean;
}

const PALETTE_ITEMS: PaletteItem[] = [
  // Estudio & Nuevas Páginas
  {
    id: "studio-about",
    title: "Sobre mí — Fundador, Manifiesto & Filosofía",
    category: "Estudio",
    icon: <User className="w-4 h-4 text-cyan-400" />,
    href: "/about",
  },
  {
    id: "studio-lab",
    title: "B9 Lab — Experimentos, Interfaces & Prototipos",
    category: "Estudio",
    icon: <Sparkles className="w-4 h-4 text-purple-400" />,
    href: "/lab",
  },
  {
    id: "studio-status",
    title: "Estado del Sistema — Monitor de Disponibilidad & Uptime",
    category: "Estudio",
    icon: <Layers className="w-4 h-4 text-emerald-400" />,
    href: "/status",
  },
  {
    id: "studio-changelog",
    title: "Registro de Cambios — Historial de Versiones & Lanzamientos",
    category: "Estudio",
    icon: <FolderGit2 className="w-4 h-4 text-pink-400" />,
    href: "/changelog",
  },

  // Secret Easter Eggs
  {
    id: "easter-b9",
    title: "⚡ B9 Overdrive — Lanzar Confeti & Activar Modo Fundador",
    category: "Secretos",
    icon: <Sparkles className="w-4 h-4 text-yellow-400" />,
  },
  {
    id: "easter-matrix",
    title: "🟢 Modo Matrix — Despierta, Neo... Sigue al conejo blanco",
    category: "Secretos",
    icon: <Terminal className="w-4 h-4 text-emerald-400" />,
  },
  {
    id: "easter-roblox",
    title: "🎮 Legado Roblox — print('Puente Lua 5.1 HttpService Conectado')",
    category: "Secretos",
    icon: <Code2 className="w-4 h-4 text-amber-400" />,
  },

  // Proyectos
  {
    id: "case-study-recuerdoqr",
    title: "RecuerdoQR — Caso de Estudio 2026",
    category: "Proyectos",
    icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
    href: "/proyectos/recuerdoqr",
  },
  {
    id: "all-projects",
    title: "Catálogo de Proyectos & Archivo",
    category: "Proyectos",
    icon: <FolderGit2 className="w-4 h-4 text-purple-400" />,
    href: "/proyectos",
  },

  // Servicios
  {
    id: "service-web",
    title: "Desarrollo Web a Medida",
    category: "Servicios",
    icon: <Layers className="w-4 h-4 text-purple-400" />,
    href: "/servicios/desarrollo-web",
  },
  {
    id: "service-ecommerce",
    title: "E-Commerce & Pagos con Mercado Pago",
    category: "Servicios",
    icon: <Layers className="w-4 h-4 text-cyan-400" />,
    href: "/servicios/ecommerce",
  },
  {
    id: "service-web-apps",
    title: "Web Apps & Sistemas SaaS",
    category: "Servicios",
    icon: <Layers className="w-4 h-4 text-emerald-400" />,
    href: "/servicios/web-apps",
  },
  {
    id: "service-maintenance",
    title: "Mantención, Actualizaciones & Soporte de Tiendas / Webs",
    category: "Servicios",
    icon: <Layers className="w-4 h-4 text-amber-400" />,
    href: "/servicios/mantenimiento-actualizaciones",
  },

  // Navegación
  {
    id: "nav-home",
    title: "Inicio",
    category: "Navegación",
    icon: <Home className="w-4 h-4 text-slate-300" />,
    href: "/",
  },
  {
    id: "nav-about",
    title: "Sobre mí & Filosofía",
    category: "Navegación",
    icon: <User className="w-4 h-4 text-slate-300" />,
    href: "/#sobre-mi",
  },
  {
    id: "nav-stack",
    title: "Stack Tecnológico",
    category: "Navegación",
    icon: <Cpu className="w-4 h-4 text-slate-300" />,
    href: "/#stack",
  },

  // Contacto
  {
    id: "contact-form",
    title: "¿Qué vamos a construir? (Formulario)",
    category: "Contacto",
    icon: <MessageCircle className="w-4 h-4 text-emerald-400" />,
    href: "/#contacto",
  },
  {
    id: "contact-whatsapp",
    title: "Hablar por WhatsApp Directo (+56 9 4430 2556)",
    category: "Contacto",
    icon: <MessageCircle className="w-4 h-4 text-emerald-400" />,
    href: "https://wa.me/56944302556?text=Hola%20Bnjvv09,%20quiero%20cotizar%20un%20proyecto.",
    external: true,
  },
  {
    id: "contact-email",
    title: "Enviar Correo (contacto.bnjvv09@gmail.com)",
    category: "Contacto",
    icon: <Mail className="w-4 h-4 text-cyan-400" />,
    href: "mailto:contacto.bnjvv09@gmail.com",
    external: true,
  },
];

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        analytics.trackCommandPaletteOpen();
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
      analytics.trackCommandPaletteOpen();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, []);

  // Filtrar items según búsqueda (memoizado)
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return PALETTE_ITEMS;
    return PALETTE_ITEMS.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  const handleSelect = (item: PaletteItem) => {
    analytics.trackCommandPaletteAction(item.id);
    setIsOpen(false);

    if (item.id === "easter-b9" || item.id === "easter-party") {
      import("canvas-confetti").then((confettiModule) => {
        const confetti = confettiModule.default;
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.3 },
          colors: ["#00f0ff", "#ff007f", "#7928ca", "#ffffff"],
        });
      });
      return;
    }

    if (item.id === "easter-matrix") {
      alert("Despierta, Neo... Matrix te tiene. Bienvenido a B9 Studio.");
      return;
    }

    if (item.id === "easter-roblox") {
      alert("🎮 Telemetría Lua B9: print('¡Hola desde Roblox Lua 5.1!')");
      return;
    }

    if (!item.href) return;

    if (item.external) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.href);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? filtered.length - 1 : prev - 1
      );
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/75 backdrop-blur-md">
          {/* Backdrop Click */}
          <div
            className="fixed inset-0"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Buscador del estudio"
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-xl rounded-2xl bg-[#090d16] border border-white/10 shadow-2xl shadow-black/90 overflow-hidden z-10"
          >
            {/* Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08] bg-black/40">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                aria-label="Buscar en el estudio"
                placeholder="Buscar en el estudio... (ej: proyectos, servicios, contacto)"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
                className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-sans"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 rounded text-slate-500 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-white/[0.04] border border-white/[0.08]">
                ESC
              </kbd>
            </div>

            {/* List Results */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/[0.04] no-scrollbar">
              {filtered.length === 0 ? (
                <div className="py-10 text-center text-xs font-mono text-slate-500">
                  No se encontraron resultados para &ldquo;{query}&rdquo;
                </div>
              ) : (
                filtered.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-150 ${
                        isSelected
                          ? "bg-white/[0.08] text-white"
                          : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs font-medium leading-none">
                            {item.title}
                          </p>
                          <span className="text-[10px] font-mono text-slate-500 mt-0.5 block">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {isSelected && (
                        <div className="flex items-center gap-1 text-[10px] font-mono text-cyan-400">
                          <span>Ir</span>
                          <CornerDownLeft className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer Bar */}
            <div className="flex items-center justify-between px-4 py-2 border-t border-white/[0.06] bg-black/60 text-[10px] font-mono text-slate-500">
              <span>Bnjvv09 · Estudio de Productos Digitales</span>
              <div className="flex items-center gap-3">
                <span>↑↓ Navegar</span>
                <span>↵ Seleccionar</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
