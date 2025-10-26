// src/env.d.ts - Declaraciones de tipos para Astro
/// <reference types="astro/client" />

// Declaraciones para importación de archivos JSON
declare module "*.json" {
  const content: any;
  export default content;
}

// Declaraciones para módulos Astro
declare module "*.astro" {
  const Component: any;
  export default Component;
}

// Declaraciones específicas para módulos del proyecto
declare module "../utils/i18n" {
  export type Lang = "es" | "ca" | "en";
  export function getTranslation(lang: Lang, key: string): string;
  export const supportedLangs: Lang[];
}

declare module "../utils/i18n.js" {
  export type Lang = "es" | "ca" | "en";
  export function getTranslation(lang: Lang, key: string): string;
  export const supportedLangs: Lang[];
}

declare module "../data/tips.json" {
  interface Tip {
    id: string;
    title: string;
    content: string;
    category: string;
    difficulty: string;
    estimatedTime: string;
    createdAt: string;
    tags: string[];
    translations?: {
      [key: string]: {
        title: string;
        content: string;
      };
    };
  }
  const tips: Tip[];
  export default tips;
}

declare module "../layouts/Layout.astro" {
  interface Props {
    title: string;
    description?: string;
    currentLang?: string;
  }
  const Layout: (props: Props) => any;
  export default Layout;
}

declare module "../components/Header.astro" {
  interface Props {
    currentLang?: import("../utils/i18n").Lang;
  }
  const Header: (props: Props) => any;
  export default Header;
}

declare module "../components/Footer.astro" {
  interface Props {
    currentLang?: import("../utils/i18n").Lang;
  }
  const Footer: (props: Props) => any;
  export default Footer;
}
