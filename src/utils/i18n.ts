// Tipos para las traducciones
export type Lang = "es" | "ca" | "en";

interface LangOption {
  code: Lang;
  label: string;
}

// Definimos las traducciones directamente en el archivo para evitar problemas de importación
const translations = {
  es: {
    nav_home: "Inicio",
    nav_works: "Nuestros Trabajos",
    nav_services: "Servicios",
    nav_tips: "Consejos",
    nav_contact: "Contacto",
    hero_slogan: "Transformamos tu espacio, tu vida.",
    cta_request_quote: "¡Pide tu presupuesto!",
    work_kitchen_modern: "Cocina Moderna",
    service_reforms_title: "Reformas Generales",
    service_reforms_desc:
      "Reformamos tu hogar o local con un equipo profesional y materiales de primera calidad.",
    service_painting_title: "Pintura",
    service_painting_desc:
      "Pintura interior y exterior, decorativa y profesional.",
    service_electrical_title: "Electricidad",
    service_electrical_desc:
      "Instalaciones y reparaciones eléctricas certificadas y seguras.",
    service_plumbing_title: "Fontanería",
    service_plumbing_desc:
      "Reparaciones e instalaciones de fontanería profesionales.",
    tips_placeholder:
      "Próximamente: Artículos sobre mantenimiento del hogar y tendencias en reformas.",
    contact_call_to_action:
      "Estaremos encantados de ayudarte. Pídenos tu presupuesto sin compromiso.",
    footer_tagline: "Reformas y soluciones integrales para tu hogar o negocio.",
    footer_all_rights_reserved: "Todos los derechos reservados.",
    footer_sitemap: "Mapa del Sitio",
    footer_legal_info: "Información Legal",
    link_legal: "Aviso Legal",
    link_privacy: "Política de Privacidad",
    link_cookies: "Política de Cookies",
    works_subtitle:
      "Explora la calidad y el detalle de nuestras reformas y proyectos recientes.",
    works_showing_random:
      "Mostrando una selección aleatoria de nuestros trabajos",
    works_show_more: "Ver Más Trabajos",
    works_view_gallery: "Ver Galería Completa",
    works_close_gallery: "Cerrar Galería",
  },
  ca: {
    nav_home: "Inici",
    nav_works: "Els Nostres Treballs",
    nav_services: "Serveis",
    nav_tips: "Consells",
    nav_contact: "Contacte",
    hero_slogan: "Transformem el teu espai, la teva vida.",
    cta_request_quote: "Demana el teu pressupost!",
    work_kitchen_modern: "Cuina Moderna",
    service_reforms_title: "Reformes Generals",
    service_reforms_desc:
      "Reformem la teva llar o local amb un equip professional i materials de primera qualitat.",
    service_painting_title: "Pintura",
    service_painting_desc:
      "Pintura interior i exterior, decorativa i professional.",
    service_electrical_title: "Electricitat",
    service_electrical_desc:
      "Instal·lacions i reparacions elèctriques certificades i segures.",
    service_plumbing_title: "Fontaneria",
    service_plumbing_desc:
      "Reparacions i instal·lacions de fontaneria professionals.",
    tips_placeholder:
      "Properament: Articles sobre manteniment de la llar i tendències en reformes.",
    contact_call_to_action:
      "Estarem encantats d'ajudar-te. Demana'ns el teu pressupost sense compromís.",
    footer_tagline:
      "Reformes i solucions integrals per a la teva llar o negoci.",
    footer_all_rights_reserved: "Tots els drets reservats.",
    footer_sitemap: "Mapa del Lloc",
    footer_legal_info: "Informació Legal",
    link_legal: "Avís Legal",
    link_privacy: "Política de Privacitat",
    link_cookies: "Política de Galetes",
    works_subtitle:
      "Explora la qualitat i el detall de les nostres reformes i projectes recents.",
    works_showing_random:
      "Mostrant una selecció aleatòria dels nostres treballs",
    works_show_more: "Veure Més Treballs",
    works_view_gallery: "Veure Galeria Completa",
    works_close_gallery: "Tancar Galeria",
  },
  en: {
    nav_home: "Home",
    nav_works: "Our Works",
    nav_services: "Services",
    nav_tips: "Tips",
    nav_contact: "Contact",
    hero_slogan: "We transform your space, your life.",
    cta_request_quote: "Get your quote!",
    work_kitchen_modern: "Modern Kitchen",
    service_reforms_title: "General Reforms",
    service_reforms_desc:
      "We reform your home or premises with a professional team and top-quality materials.",
    service_painting_title: "Painting",
    service_painting_desc:
      "Interior and exterior painting, decorative and professional.",
    service_electrical_title: "Electrical",
    service_electrical_desc:
      "Certified and safe electrical installations and repairs.",
    service_plumbing_title: "Plumbing",
    service_plumbing_desc: "Professional plumbing repairs and installations.",
    tips_placeholder:
      "Coming soon: Articles on home maintenance and renovation trends.",
    contact_call_to_action:
      "We'll be happy to help you. Request your free quote.",
    footer_tagline:
      "Reforms and comprehensive solutions for your home or business.",
    footer_all_rights_reserved: "All rights reserved.",
    footer_sitemap: "Site Map",
    footer_legal_info: "Legal Information",
    link_legal: "Legal Notice",
    link_privacy: "Privacy Policy",
    link_cookies: "Cookies Policy",
    works_subtitle:
      "Explore the quality and detail of our recent reforms and projects.",
    works_showing_random: "Showing a random selection of our works",
    works_show_more: "View More Works",
    works_view_gallery: "View Full Gallery",
    works_close_gallery: "Close Gallery",
  },
} as const;

type TranslationKey = keyof typeof translations.es;

// Función para obtener la traducción
export function getTranslation(lang: Lang, key: string): string {
  // Obtener las traducciones del idioma solicitado
  const langTranslations = translations[lang];

  if (!langTranslations) {
    // Si no existe el idioma, usar español como fallback
    return translations.es[key as TranslationKey] || key;
  }

  // Retornar la traducción si existe, sino usar la clave como fallback
  return langTranslations[key as TranslationKey] || key;
} // Lista de idiomas soportados
export const supportedLangs: LangOption[] = [
  { code: "es", label: "Castellano" },
  { code: "ca", label: "Català" },
  { code: "en", label: "English" },
];
