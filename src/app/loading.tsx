export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center relative">
      <div className="relative flex items-center justify-center">
        {/* Soft pulsing glow */}
        <div className="absolute w-20 h-20 rounded-full bg-cyan-500/20 blur-xl animate-pulse" />

        {/* Monogram Box */}
        <div className="w-12 h-12 rounded-xl bg-[#0b0f17] border border-white/10 flex items-center justify-center font-mono font-black text-base text-white shadow-2xl relative z-10">
          <span className="text-gradient-cyber">B9</span>
        </div>
      </div>

      <span className="mt-4 text-[11px] font-mono tracking-widest text-slate-500 uppercase">
        Cargando...
      </span>
    </div>
  );
}
