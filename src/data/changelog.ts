export interface ChangelogItem {
  version: string;
  date: string;
  title: string;
  summary: string;
  badge: "IMPORTANTE" | "LANZAMIENTO" | "FUNCIONALIDAD" | "EXPERIMENTO" | "MAJOR" | "RELEASE" | "FEATURE" | "EXPERIMENT";
  badgeColor: string;
  tags: string[];
  changes: {
    category: "Funcionalidades" | "Diseño" | "Rendimiento" | "Sistemas" | "Features" | "Performance";
    items: string[];
  }[];
  relatedProject?: {
    label: string;
    href: string;
  };
}

export const changelogData: ChangelogItem[] = [
  {
    version: "2.1.0",
    date: "04.09.2026",
    title: "B9 Studio Suite & Navigation Architecture",
    summary:
      "Transformación editorial del ecosistema digital: nueva navegación entre proyectos tipo estudio, B9 Lab de experimentos, página personal de fundador, monitor de estado del sistema y changelog público.",
    badge: "IMPORTANTE",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    tags: ["Studio OS", "Lab", "Navegación", "Rendimiento", "Estado"],
    changes: [
      {
        category: "Funcionalidades",
        items: [
          "Navegación secuencial editorial entre proyectos (← Anterior / Siguiente →) con bloque SIGUIENTE PROYECTO al cierre de cada caso de estudio.",
          "Lanzamiento de /lab: laboratorio de componentes, interfaces interactivas, micro-animaciones y experimentos con IA y Roblox.",
          "Lanzamiento de /about: página de presentación personal de fundador y product builder con manifiesto, principios y timeline interactiva.",
          "Lanzamiento de /status: panel técnico en tiempo real del estado de los servicios, base de datos y disponibilidad del estudio.",
          "Sistema de disponibilidad inteligente centralizado (availability.ts) con sincronización global.",
          "Changelog público editorial (/changelog) con registro de versiones.",
          "Easter eggs y comandos ocultos interactivos en la Command Palette (⌘K) y en la página 404.",
        ],
      },
      {
        category: "Diseño",
        items: [
          "Módulo 'CONSTRUIDO CON' interactivo en el footer con tooltips explicativos animados por tecnología.",
          "Micro-interacción de click secreto en el logo B9 con activación de modo overdrive y confetti.",
          "Paleta cromática refinada con acentos cian, violeta y grafito en todas las nuevas rutas.",
        ],
      },
      {
        category: "Rendimiento",
        items: [
          "Optimización de Core Web Vitals y prevención estricta de Layout Shifts (CLS 0).",
          "Actualización automática del Sitemap XML con todas las rutas editoriales indexables.",
        ],
      },
    ],
  },
  {
    version: "2.0.0",
    date: "02.09.2026",
    title: "RecuerdoQR — E-Commerce & Experiencia Multimedia Interactiva",
    summary:
      "Lanzamiento oficial de RecuerdoQR como producto digital insignia de B9 Studio. Experiencia sensorial completa de obsequios digitales con pagos automatizados en CLP.",
    badge: "LANZAMIENTO",
    badgeColor: "text-pink-400 bg-pink-500/10 border-pink-500/30",
    tags: ["RecuerdoQR", "E-Commerce", "Mercado Pago", "Supabase", "PWA"],
    relatedProject: {
      label: "Ver Caso de Estudio RecuerdoQR →",
      href: "/proyectos/recuerdoqr",
    },
    changes: [
      {
        category: "Funcionalidades",
        items: [
          "Checkout automatizado con Mercado Pago en pesos chilenos y confirmación instantánea vía Webhook HMAC.",
          "Personalizador multimedia en tiempo real con 12 temáticas visuales para parejas, aniversarios y amistades.",
          "Bóveda digital de privacidad protegida por teclado numérico y PIN de 4 dígitos.",
          "Reproductor de música de fondo sincronizado y contadores dinámicos de fechas.",
          "Motor vectorial para compilación y exportación de códigos QR en ultra alta fidelidad.",
        ],
      },
      {
        category: "Sistemas",
        items: [
          "Integración de Supabase Cloud para persistencia de dedicatorias y storage multimedia.",
          "Arquitectura sin fricción: cero descarga de aplicaciones requerida para los destinatarios.",
        ],
      },
    ],
  },
  {
    version: "1.5.0",
    date: "28.08.2026",
    title: "Directorio Editorial de Proyectos & Command Palette (⌘K)",
    summary:
      "Rediseño integral del catálogo de proyectos con filtros dinámicos y buscador global por atajo de teclado.",
    badge: "FUNCIONALIDAD",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    tags: ["Directorio", "Command Palette", "UX"],
    relatedProject: {
      label: "Explorar Proyectos →",
      href: "/proyectos",
    },
    changes: [
      {
        category: "Funcionalidades",
        items: [
          "Command Palette accesible desde cualquier punto con ⌘K o Ctrl+K para navegación ultrarrápida.",
          "Directorio de proyectos con filtros por categoría (Desarrollo Web, E-Commerce, Productos Digitales) y ordenamiento.",
          "Animaciones fluidas con Framer Motion respetando preferencias de accesibilidad.",
        ],
      },
    ],
  },
  {
    version: "1.0.0",
    date: "15.08.2026",
    title: "Lanzamiento Inicial del Portafolio Bnjvv09",
    summary:
      "Primera versión oficial de la presencia digital de Bnjvv09, estructurada con Next.js 14, Tailwind CSS y TypeScript.",
    badge: "LANZAMIENTO",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    tags: ["Fundación", "Next.js", "Tailwind CSS"],
    changes: [
      {
        category: "Funcionalidades",
        items: [
          "Landing page con secciones Hero, Estadísticas, Servicios profesionales, Proceso de trabajo y Formulario de contacto.",
          "Integración de canal de contacto directo por WhatsApp.",
          "Configuración inicial de SEO técnico, OpenGraph y diseño 100% responsivo.",
        ],
      },
    ],
  },
];
