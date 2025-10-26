# Archivos de Respaldo

Este directorio contiene archivos obsoletos que fueron reemplazados durante la migración a la nueva arquitectura de componentes.

## Archivos incluidos:

- `old-lang.astro`: Versión anterior del archivo [lang].astro con getStaticPaths
- `lang-backup.astro`: Otras versiones de respaldo

## ¿Por qué se movieron aquí?

Los archivos `[lang].astro` con getStaticPaths() causaban advertencias en el modo desarrollo porque Astro los detectaba como páginas dinámicas sin prerender.

## Nueva arquitectura:

- Página principal: `src/pages/index.astro` con componentes integrados
- Componentes: `src/components/Servicios.astro`, `src/components/Consejos.astro`
- Redirección simple: nuevo archivo `[lang].astro` que solo redirige a `/`
- Sistema de traducciones: dinámico en el cliente, sin necesidad de múltiples páginas estáticas
