export interface LabExperiment {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Interfaces" | "Animaciones" | "Roblox" | "Prototipos" | "IA";
  status: "DEMO EN VIVO" | "PROTOTIPO" | "EXPERIMENTO" | "EN DESARROLLO";
  statusColor: string;
  year: string;
  technologies: string[];
  interactiveType:
    | "qr-matrix"
    | "audio-wave"
    | "roblox-telemetry"
    | "tilt-card"
    | "ai-prompt"
    | "terminal";
  insights: string[];
}

export const labCategories = [
  "Todos",
  "Interfaces",
  "Animaciones",
  "Roblox",
  "Prototipos",
  "IA",
] as const;

export type LabCategory = (typeof labCategories)[number];

export const labExperiments: LabExperiment[] = [
  {
    id: "qr-matrix-engine",
    number: "EXP-01",
    title: "Matriz Vectorial de Código QR",
    subtitle: "Motor experimental de renderizado de códigos QR vectoriales con estilización dinámica.",
    description:
      "Exploración de generación procedural de patrones QR con bordes redondeados, gradientes cyberpunk y corrección de error de nivel H, listo para impresión física sin pixelación.",
    category: "Interfaces",
    status: "DEMO EN VIVO",
    statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    year: "2026",
    technologies: ["Canvas API", "SVG Matrix", "TypeScript", "Math"],
    interactiveType: "qr-matrix",
    insights: [
      "Permite alterar dinámicamente la paleta de colores y el radio de esquina de los módulos QR.",
      "Base de investigación utilizada para el motor central de RecuerdoQR.",
    ],
  },
  {
    id: "dynamic-audio-island",
    number: "EXP-02",
    title: "Visualizador de Audio Estilo Isla Dinámica",
    subtitle: "Cápsula flotante reactiva al ritmo sonoro con micro-interacciones elásticas.",
    description:
      "Componente experimental que expande y contrae barras ecualizadoras de frecuencia en tiempo real utilizando resortes de Framer Motion.",
    category: "Animaciones",
    status: "DEMO EN VIVO",
    statusColor: "text-pink-400 bg-pink-500/10 border-pink-500/30",
    year: "2026",
    technologies: ["Framer Motion", "Web Audio", "React Springs"],
    interactiveType: "audio-wave",
    insights: [
      "Animación física de 60fps sin sobrecargar el hilo principal de renderizado.",
      "Optimizado para pantallas táctiles con respuesta inmediata.",
    ],
  },
  {
    id: "roblox-web-telemetry",
    number: "EXP-03",
    title: "Puente en Tiempo Real Roblox Lua ⇄ Web",
    subtitle: "Puente bidireccional entre servidores de Roblox y paneles web mediante Webhooks y Supabase.",
    description:
      "Prototipo de sincronización que conecta eventos generados en un servidor de Roblox (scripts en Lua) con una interfaz web en Next.js para monitorear jugadores, economía virtual y estadísticas en vivo.",
    category: "Roblox",
    status: "PROTOTIPO",
    statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    year: "2026",
    technologies: ["Lua 5.1", "HttpService", "Supabase Realtime", "Webhooks"],
    interactiveType: "roblox-telemetry",
    insights: [
      "Latencia media menor a 200ms entre eventos in-game y actualización de dashboard web.",
      "Muestra la versatilidad de unir desarrollo de videojuegos con arquitectura web moderna.",
    ],
  },
  {
    id: "holographic-tilt-depth",
    number: "EXP-04",
    title: "Inclinación Parallax 3D & Luz Especular",
    subtitle: "Tarjeta holográfica reactiva con cálculo vectorial de luz especular.",
    description:
      "Simulador de tarjeta coleccionable digital que calcula la incidencia de la luz según la posición del cursor o la orientación del acelerómetro móvil.",
    category: "Interfaces",
    status: "DEMO EN VIVO",
    statusColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    year: "2026",
    technologies: ["CSS 3D Transforms", "Pointer Events", "Tailwind CSS"],
    interactiveType: "tilt-card",
    insights: [
      "Calcula rotaciones en 3 ejes con amortiguación suave tipo resorte.",
      "Efecto de brillo metálico dinámico sin utilizar WebGL pesado.",
    ],
  },
  {
    id: "ai-prompt-synthesizer",
    number: "EXP-05",
    title: "Controlador de Parámetros de IA",
    subtitle: "Micro-interfaz táctil para sintonizar parámetros de modelos generativos.",
    description:
      "Controlador de parámetros de inferencia (Temperatura, Top-P, Penalización) con retroalimentación visual de entropía y cálculo en tiempo real.",
    category: "IA",
    status: "EXPERIMENTO",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    year: "2026",
    technologies: ["LLM Controls", "UI Controls", "React State"],
    interactiveType: "ai-prompt",
    insights: [
      "Mapeo de controles no lineales para sensación táctil analógica precisa.",
      "Diseño de interfaz inspirado en sintetizadores modulares de audio.",
    ],
  },
  {
    id: "mini-terminal-runner",
    number: "EXP-06",
    title: "Consola de Comandos Integrada B9",
    subtitle: "Emulador de terminal Unix ultraligero con comandos personalizados y autocompletado.",
    description:
      "Consola de comandos integrada para inspeccionar las tripas del portafolio, ejecutar comandos del estudio, invocar easter eggs y ver métricas del servidor.",
    category: "Prototipos",
    status: "DEMO EN VIVO",
    statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    year: "2026",
    technologies: ["Keyboard Navigation", "Shell Parser", "TypeScript"],
    interactiveType: "terminal",
    insights: [
      "Historial navegable con comandos de estudio en español.",
      "Consumo de memoria inferior a 150KB.",
    ],
  },
];
