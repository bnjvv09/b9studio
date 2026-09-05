/**
 * Utilidad centralizada para generar URLs de WhatsApp.
 * Número de contacto: +56 9 4430 2556
 */

const WHATSAPP_PHONE = "56944302556";

export const getWhatsAppUrl = (message?: string): string => {
  if (!message) return `https://wa.me/${WHATSAPP_PHONE}`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

export const WHATSAPP_PHONE_DISPLAY = "+56 9 4430 2556";
