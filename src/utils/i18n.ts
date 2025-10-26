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
    services_title: "Nuestros Servicios",
    services_subtitle:
      "Ofrecemos una amplia gama de servicios profesionales para tu hogar",
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
    works_title: "Nuestros Trabajos",
    works_subtitle:
      "Explora la calidad y el detalle de nuestras reformas y proyectos recientes.",
    works_showing_random:
      "Mostrando una selección aleatoria de nuestros trabajos",
    works_show_more: "Ver Más Trabajos",
    works_view_gallery: "Ver Galería Completa",
    works_close_gallery: "Cerrar Galería",
    tips_subtitle:
      "Descubre consejos profesionales y técnicas para mantener tu hogar en perfecto estado",
    tips_preview_title: "Consejos Profesionales",
    tips_preview_description:
      "Accede a nuestra completa biblioteca de consejos, técnicas y guías profesionales para el mantenimiento del hogar, reformas y mejoras.",
    tips_view_all: "Ver Todos los Consejos",
    filter_all: "Todos",
    no_tips_found: "No se encontraron consejos para esta categoría",
    tips_cta_title: "¿Necesitas ayuda profesional?",
    tips_cta_subtitle:
      "Nuestro equipo está listo para ayudarte con cualquier proyecto",
    tips_cta_button: "Contactar Ahora",
    contact_info_phone: "Teléfono",
    contact_info_email: "Email",
    contact_info_location: "Ubicación",
  },
  ca: {
    nav_home: "Inici",
    nav_works: "Els Nostres Treballs",
    nav_services: "Serveis",
    nav_tips: "Consells",
    nav_contact: "Contacte",
    hero_slogan: "Transformem el teu espai, la teva vida.",
    cta_request_quote: "Demana el teu pressupost!",
    services_title: "Els Nostres Serveis",
    services_subtitle:
      "Oferim una àmplia gamma de serveis professionals per a la teva llar",
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
    works_title: "Els Nostres Treballs",
    works_subtitle:
      "Explora la qualitat i el detall de les nostres reformes i projectes recents.",
    works_showing_random:
      "Mostrant una selecció aleatòria dels nostres treballs",
    works_show_more: "Veure Més Treballs",
    works_view_gallery: "Veure Galeria Completa",
    works_close_gallery: "Tancar Galeria",
    tips_subtitle:
      "Descobreix consells professionals i tècniques per mantenir la teva llar en perfecte estat",
    tips_preview_title: "Consells Professionals",
    tips_preview_description:
      "Accedeix a la nostra completa biblioteca de consells, tècniques i guies professionals per al manteniment de la llar, reformes i millores.",
    tips_view_all: "Veure Tots els Consells",
    filter_all: "Tots",
    no_tips_found: "No s'han trobat consells per a aquesta categoria",
    tips_cta_title: "Necessites ajuda professional?",
    tips_cta_subtitle:
      "El nostre equip està llest per ajudar-te amb qualsevol projecte",
    tips_cta_button: "Contactar Ara",
    contact_info_phone: "Telèfon",
    contact_info_email: "Email",
    contact_info_location: "Ubicació",
  },
  en: {
    nav_home: "Home",
    nav_works: "Our Works",
    nav_services: "Services",
    nav_tips: "Tips",
    nav_contact: "Contact",
    hero_slogan: "We transform your space, your life.",
    cta_request_quote: "Get your quote!",
    services_title: "Our Services",
    services_subtitle:
      "We offer a wide range of professional services for your home",
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
    works_title: "Our Works",
    works_subtitle:
      "Explore the quality and detail of our recent reforms and projects.",
    works_showing_random: "Showing a random selection of our works",
    works_show_more: "View More Works",
    works_view_gallery: "View Full Gallery",
    works_close_gallery: "Close Gallery",
    tips_subtitle:
      "Discover professional tips and techniques to keep your home in perfect condition",
    tips_preview_title: "Professional Tips",
    tips_preview_description:
      "Access our complete library of tips, techniques and professional guides for home maintenance, renovations and improvements.",
    tips_view_all: "View All Tips",
    filter_all: "All",
    no_tips_found: "No tips found for this category",
    tips_cta_title: "Need professional help?",
    tips_cta_subtitle: "Our team is ready to help you with any project",
    tips_cta_button: "Contact Now",
    contact_info_phone: "Phone",
    contact_info_email: "Email",
    contact_info_location: "Location",
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
