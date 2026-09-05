import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidad | Bnjvv09 — Estudio de Productos Digitales",
  description:
    "Política de privacidad y tratamiento de datos personales conforme a la Ley N° 19.628 de Chile para servicios de desarrollo de software.",
  alternates: {
    canonical: "https://bnjvv09.dev/privacidad",
  },
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Studio Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090e]/80 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>Volver a inicio</span>
          </Link>

          <Link href="/" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
              B9
            </span>
            <span className="text-sm font-mono font-bold tracking-wider text-slate-200">
              bnjvv09<span className="text-cyan-400">.dev</span>
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          <ShieldCheck className="w-4 h-4" />
          <span>MARCO LEGAL & TRANSPARENCIA · CHILE</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Política de Privacidad
        </h1>
        <p className="text-xs font-mono text-slate-500 mb-12">
          Última actualización: Septiembre de 2026 · Conforme a la Ley N° 19.628 de la República de Chile
        </p>

        <div className="space-y-10 text-sm text-slate-300 leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-mono">
              1. Responsable del Tratamiento
            </h2>
            <p>
              El presente sitio web y sus servicios profesionales son operados por <strong>Bnjvv09</strong>, desarrollador de software y creador de productos digitales basado en Chile. Puedes contactarme directamente en cualquier momento a través del correo electrónico: <a href="mailto:contacto.bnjvv09@gmail.com" className="text-cyan-400 underline underline-offset-4">contacto.bnjvv09@gmail.com</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-mono">
              2. Datos Recopilados y Origen
            </h2>
            <p>
              Recopilamos exclusivamente los datos que decides proporcionar de forma voluntaria al completar el formulario de contacto o al iniciar una conversación comercial:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>Nombre o razón social.</li>
              <li>Dirección de correo electrónico.</li>
              <li>Tipo de proyecto, presupuesto estimado y detalles técnicos del requerimiento.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-mono">
              3. Finalidad del Tratamiento
            </h2>
            <p>
              La información suministrada se utiliza de manera estricta para:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>Evaluar la viabilidad técnica y elaborar propuestas comerciales y cotizaciones a medida.</li>
              <li>Mantener comunicación directa respecto al desarrollo del proyecto contratado vía Email o WhatsApp.</li>
              <li>Emitir comprobantes o documentación tributaria conforme a la legislación chilena cuando corresponda.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-mono">
              4. Cero Cesión a Terceros
            </h2>
            <p>
              Bnjvv09 <strong>no vende, arrienda, cede ni transfiere</strong> bajo ninguna circunstancia tus datos de contacto a terceros con fines publicitarios, de telemarketing o comercialización externa.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-mono">
              5. Cookies y Almacenamiento Local
            </h2>
            <p>
              Este sitio web utiliza únicamente tecnologías técnicas esenciales para garantizar una navegación fluida, almacenar temporalmente preferencias de usuario (como la accesibilidad para movimiento reducido) y métricas analíticas anonimizadas sin rastreo invasivo entre sitios.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-mono">
              6. Derechos del Usuario (ARCO)
            </h2>
            <p>
              Conforme a la Ley N° 19.628 de Chile, tienes derecho a solicitar en cualquier momento el acceso, rectificación, cancelación u oposición al tratamiento de tus datos personales enviando un correo a <a href="mailto:contacto.bnjvv09@gmail.com" className="text-cyan-400 underline underline-offset-4">contacto.bnjvv09@gmail.com</a>.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 text-center text-xs font-mono text-slate-600">
        <p>© {new Date().getFullYear()} Bnjvv09 · Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
