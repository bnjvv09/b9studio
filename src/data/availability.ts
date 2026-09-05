export type AvailabilityStatus = "AVAILABLE" | "LIMITED" | "BOOKED";

export interface AvailabilityConfig {
  status: AvailabilityStatus;
  badge: string;
  headline: string;
  description: string;
  dotColor: string;
  badgeClass: string;
  currentFocus: string;
  slotsRemaining: number;
  nextOpenSlot: string;
  lastUpdated: string;
}

// Fuente única de disponibilidad del estudio para todo el sitio web.
export const studioAvailability: AvailabilityConfig = {
  status: "AVAILABLE",
  badge: "DISPONIBLE PARA TRABAJAR",
  headline: "Disponible para nuevos proyectos",
  description:
    "Aceptando proyectos seleccionados de desarrollo web a medida, plataformas e-commerce y experiencias interactivas.",
  dotColor: "bg-emerald-400",
  badgeClass:
    "bg-emerald-500/10 border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/40",
  currentFocus: "RecuerdoQR · Producto Digital",
  slotsRemaining: 2,
  nextOpenSlot: "Inmediato · Septiembre 2026",
  lastUpdated: "04 SEP 2026",
};

export const AVAILABILITY_STATES: Record<
  AvailabilityStatus,
  {
    badge: string;
    headline: string;
    dotColor: string;
    badgeClass: string;
  }
> = {
  AVAILABLE: {
    badge: "DISPONIBLE PARA TRABAJAR",
    headline: "Disponible para nuevos proyectos",
    dotColor: "bg-emerald-400",
    badgeClass:
      "bg-emerald-500/10 border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/40",
  },
  LIMITED: {
    badge: "DISPONIBILIDAD LIMITADA",
    headline: "Disponibilidad limitada (1 cupo)",
    dotColor: "bg-amber-400",
    badgeClass:
      "bg-amber-500/10 border-amber-500/25 text-amber-400 hover:bg-amber-500/20 hover:border-amber-500/40",
  },
  BOOKED: {
    badge: "AGENDA COMPLETA",
    headline: "Agenda completa por el momento",
    dotColor: "bg-rose-400",
    badgeClass:
      "bg-rose-500/10 border-rose-500/25 text-rose-400 hover:bg-rose-500/20 hover:border-rose-500/40",
  },
};

export const getAvailability = (): AvailabilityConfig => {
  const meta = AVAILABILITY_STATES[studioAvailability.status] || AVAILABILITY_STATES.AVAILABLE;
  return {
    ...studioAvailability,
    ...meta,
  };
};
