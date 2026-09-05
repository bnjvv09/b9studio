/**
 * Lightweight, privacy-friendly event tracking utility.
 * Ready for Google Analytics (gtag), PostHog, Plausible, or custom endpoints.
 */

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}

type EventName =
  | "whatsapp_click"
  | "email_click"
  | "project_view"
  | "service_view"
  | "form_submit"
  | "command_palette_open"
  | "command_palette_action";

export interface AnalyticsPayload {
  [key: string]: string | number | boolean | undefined;
}

export const trackEvent = (name: EventName, properties?: AnalyticsPayload) => {
  if (typeof window === "undefined") return;

  // Development logging
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] ${name}`, properties || {});
  }

  // Google Analytics / gtag bridge (if initialized)
  if (typeof window.gtag === "function") {
    window.gtag("event", name, properties);
  }

  // Plausible / Custom dispatch
  window.dispatchEvent(
    new CustomEvent("studio_analytics", {
      detail: { name, properties, timestamp: new Date().toISOString() },
    })
  );
};

export const analytics = {
  trackWhatsApp: (source: string) =>
    trackEvent("whatsapp_click", { source }),
  trackEmail: (source: string) =>
    trackEvent("email_click", { source }),
  trackProjectView: (slug: string) =>
    trackEvent("project_view", { slug }),
  trackServiceView: (slug: string) =>
    trackEvent("service_view", { slug }),
  trackFormSubmit: (projectType: string, budget: string) =>
    trackEvent("form_submit", { projectType, budget }),
  trackCommandPaletteOpen: () =>
    trackEvent("command_palette_open"),
  trackCommandPaletteAction: (actionId: string) =>
    trackEvent("command_palette_action", { actionId }),
};
