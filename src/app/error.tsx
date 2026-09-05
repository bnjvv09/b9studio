"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log non-intrusively to developer console
    console.error("Studio error boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 relative">
      <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center mb-6">
        <AlertTriangle className="w-7 h-7 text-amber-400" />
      </div>

      <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase block mb-3">
        OCURRIÓ UN DETALLE INESPERADO
      </span>

      <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
        No se pudo cargar la vista solicitada
      </h1>

      <p className="text-sm text-slate-400 max-w-md mb-8 leading-relaxed font-normal">
        Hemos registrado el evento. Puedes reintentar la operación o volver a la página principal de manera segura.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-bold text-xs hover:bg-slate-200 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reintentar</span>
        </button>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] text-xs font-mono transition-all"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Volver al inicio</span>
        </Link>
      </div>
    </div>
  );
}
