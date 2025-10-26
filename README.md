# 🏠 Multiservicios Emanuel

Una página web moderna y responsive para una empresa de multiservicios, construida con Astro, TypeScript y Tailwind CSS.

## ✨ Características Implementadas

### 🌍 **Sistema Multiidioma Completo (ES/CA/EN)**

- ✅ Cambio de idioma en tiempo real sin recarga de página
- ✅ Sistema de traducciones dinámico con sessionStorage
- ✅ Interfaz completamente traducida (headers, formularios, footer)
- ✅ Navegación sin efectos de scroll durante cambios de idioma

### � **Diseño Responsive y Moderno**

- ✅ Optimizado para móviles, tablets y escritorio
- ✅ Diseño con Tailwind CSS y animaciones suaves
- ✅ Navegación con indicadores de sección activa
- ✅ Contraste mejorado para accesibilidad

### 🖼️ **Galería Avanzada de Trabajos**

- ✅ Visualización de 6 trabajos aleatorios de 8 disponibles
- ✅ Modal con navegación por flechas (anterior/siguiente)
- ✅ Lazy loading e imágenes optimizadas de Unsplash
- ✅ Animaciones de carga y transiciones suaves
- ✅ Sistema de estados global para evitar conflictos JS

### 📧 **Formulario de Contacto Inteligente**

- ✅ Validación en tiempo real con indicadores visuales
- ✅ Sistema anti-spam con captcha matemático simple
- ✅ API de envío con Nodemailer integrado
- ✅ Email de confirmación automático al cliente
- ✅ Validaciones avanzadas (email, teléfono, longitud)
- ✅ Estados de envío (enviando/éxito/error) multiidioma

### 🗺️ **Mapa y Contacto**

- ✅ Google Maps embebido con ubicación Barcelona
- ✅ Información de contacto superpuesta
- ✅ Layout de dos columnas (formulario + mapa)
- ✅ Información de contacto con iconos

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18+
- pnpm (recomendado) o npm

### Configuración del Proyecto

1. **Instalar dependencias**

```bash
pnpm install
```

2. **Configurar variables de entorno para email**

```bash
cp .env.example .env
```

3. **Editar `.env` con tus credenciales SMTP:**

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-contraseña-de-aplicacion
CONTACT_EMAIL=info@multiservicios-emanuel.com
```

4. **Iniciar servidor de desarrollo**

```bash
pnpm run dev
```

## 📧 Configuración de Email (Nodemailer)

### Para Gmail:

1. Habilitar autenticación de 2 factores en tu cuenta Google
2. Generar contraseña de aplicación:
   - Google Account → Seguridad → Verificación en 2 pasos → Contraseñas de aplicaciones
   - Crear nueva para "Correo" o "Otra aplicación personalizada"
3. Usar esa contraseña (16 caracteres) en `SMTP_PASS`

### Para otros proveedores:

- **Outlook:** `smtp-mail.outlook.com:587`
- **Yahoo:** `smtp.mail.yahoo.com:587`
- **Personalizado:** Consulta tu proveedor de hosting

## 🛠️ Scripts Disponibles

```bash
pnpm run dev        # Servidor desarrollo (puerto 4321 o 4322)
pnpm run build      # Construir para producción
pnpm run preview    # Vista previa de build
pnpm run astro check # Verificar tipos TypeScript
```

## 📁 Arquitectura del Proyecto

```
src/
├── components/
│   ├── Header.astro           # Nav + selector idiomas + indicadores sección
│   ├── Contact.astro          # Formulario completo + mapa + validaciones
│   ├── WorkGalleryModal.astro # Modal galería + navegación + estados globales
│   ├── NuestrosTrabajos.astro # Grid trabajos aleatorios
│   ├── WorkCard.astro         # Cards individuales con lazy loading
│   └── Footer.astro           # Footer multiidioma
├── pages/
│   ├── index.astro           # SPA principal con todas las secciones
│   └── api/
│       └── contact.ts        # API Nodemailer + validaciones + captcha
├── data/
│   ├── works.json           # 8 trabajos con imágenes Unsplash
│   └── translations.json    # Traducciones ES/CA/EN (no usado, migrado a public/)
├── utils/
│   ├── i18n.ts             # Utilidades internacionalización
│   └── shuffle.js          # Algoritmo Fisher-Yates para aleatorización
└── styles/
    └── global.css          # Estilos globales mínimos

public/
├── translations.json       # Sistema traducciones dinámico (fetch)
└── .env.example           # Variables entorno documentadas

astro.config.mjs           # Config Astro + Node.js adapter + server mode
```

## 🔧 Personalización

### Cambiar información empresa:

- **Logo/Nombre:** `src/components/Header.astro` y `public/translations.json`
- **Servicios:** `src/pages/index.astro` sección servicios + traducciones
- **Trabajos:** Actualizar `src/data/works.json` con nuevas URLs de Unsplash
- **Contacto:** Modificar datos en `src/components/Contact.astro`

### Personalizar mapa ubicación:

1. Ir a [Google Maps](https://maps.google.com) → buscar ubicación
2. Compartir → Incorporar mapa → Copiar iframe
3. Reemplazar iframe en `src/components/Contact.astro`

### Agregar nuevos idiomas:

1. Extender `public/translations.json` con nuevo código idioma
2. Actualizar selector en `src/components/Header.astro`
3. Modificar tipo `Lang` en `src/utils/i18n.ts`

## 🚀 Despliegue en Producción

### Vercel (Recomendado para Astro + Node.js)

```bash
npm i -g vercel
vercel
# Configurar variables entorno en dashboard Vercel
```

### Netlify

- Build command: `pnpm run build`
- Publish directory: `dist`
- **Nota:** Puede requerir configuración adicional para API routes

### Servidor VPS/Dedicado

```bash
pnpm run build
# Archivos en ./dist/ - Subir a servidor con Node.js
```

## ⚡ Funcionalidades Técnicas Avanzadas

### Sistema de Estados Global

- `window.galleryState` evita conflictos entre modales
- Gestión centralized de eventos del DOM

### Validaciones Inteligentes

- Regex para email y teléfono con feedback visual
- Captcha matemático regenerativo anti-spam
- Validación dual: frontend + backend

### Optimizaciones de Rendimiento

- Lazy loading de imágenes con Intersection Observer
- Debounce en validaciones en tiempo real
- Carga diferida de Google Maps

### Sistema de Traducciones SPA

- Fetch dinámico desde `public/translations.json`
- SessionStorage para persistencia sin URL
- Interpolación de variables en traducciones

## 🐛 Solución de Problemas Comunes

### ❌ Error SMTP "Authentication failed"

**Solución:** Verificar contraseña de aplicación, no usar contraseña normal de Google

### ❌ API contact no funciona en desarrollo

**Solución:** Astro en modo server requiere `output: 'server'` en config

### ❌ Galería no abre o errores JS

**Solución:** Revisar `window.galleryState` en DevTools, reload página

### ❌ Traducciones no cargan

**Solución:** Verificar que `public/translations.json` esté accesible vía fetch

### ❌ Formulario no envía

**Solución:** Revisar variables .env, verificar captcha correcto, comprobar logs API

## 📊 Estado del Proyecto

| Funcionalidad           | Estado | Notas                                 |
| ----------------------- | ------ | ------------------------------------- |
| Multiidioma SPA         | ✅     | Sistema completo ES/CA/EN             |
| Galería modal           | ✅     | Con navegación y lazy loading         |
| Formulario + Nodemailer | ✅     | Validaciones + captcha + confirmación |
| Responsive design       | ✅     | Mobile-first, optimizado              |
| Navegación activa       | ✅     | Indicadores sección actual            |
| Anti-spam               | ✅     | Captcha matemático simple             |
| Mapa integrado          | ✅     | Google Maps Barcelona                 |
| API backend             | ✅     | Node.js + Astro server mode           |

## 🎯 Próximas Mejoras Sugeridas

- [ ] Google Analytics integración
- [ ] Optimización SEO avanzada
- [ ] PWA capabilities
- [ ] Testimonios de clientes
- [ ] Blog/noticias sección
- [ ] Calculadora presupuestos
- [ ] WhatsApp chat widget

---

**Tecnologías:** Astro 5.14.7 • TypeScript • Tailwind CSS • Nodemailer • Node.js

**Licencia:** MIT
