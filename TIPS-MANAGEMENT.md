# 📝 Gestión de Consejos - Multiservicios Emanuel

Este documento explica cómo usar el sistema de consejos implementado para la página web.

## 📋 Estructura del Sistema

### Archivos principales:

- `src/data/tips.json` - Base de datos de consejos
- `src/pages/consejos.astro` - Página de visualización
- `scripts/generate-translations.js` - Script de traducciones
- `package.json` - Scripts pnpm configurados

## 🗃️ Estructura de Datos (tips.json)

Cada consejo tiene la siguiente estructura:

```json
{
  "id": 1,
  "category": "pintura",
  "title": "Título en español",
  "content": "Contenido detallado en español...",
  "tags": ["pintura", "preparación", "paredes"],
  "difficulty": "fácil",
  "estimatedTime": "2-3 horas",
  "createdAt": "2025-01-15",
  "translations": {
    "ca": {
      "title": "Títol en català",
      "content": "Contingut detallat en català..."
    },
    "en": {
      "title": "Title in English",
      "content": "Detailed content in English..."
    }
  }
}
```

### Campos explicados:

- **id**: Identificador único numérico
- **category**: Categoría del consejo (`pintura`, `fontaneria`, `electricidad`, `reforma`)
- **title**: Título del consejo (siempre en español primero)
- **content**: Contenido completo del consejo
- **tags**: Array de etiquetas para filtrado
- **difficulty**: Nivel de dificultad (`fácil`, `medio`, `difícil`, `información`)
- **estimatedTime**: Tiempo estimado de ejecución
- **createdAt**: Fecha de creación (formato YYYY-MM-DD)
- **translations**: Objeto con traducciones a otros idiomas

## 🚀 Comandos Disponibles

### 1. Agregar Nuevo Consejo

```bash
pnpm run tips:add
```

- Ejecuta un asistente interactivo
- Pide información paso a paso
- Genera automáticamente el ID y fecha
- Guarda solo en español inicialmente

### 2. Generar Traducciones

```bash
pnpm run tips:translate
```

- Analiza consejos sin traducciones
- Genera traducciones automáticas
- Crea backup automático
- Actualiza tips.json con nuevas traducciones

### 3. Ver Ayuda

```bash
pnpm run tips:help
```

- Muestra todos los comandos disponibles
- Explica el uso de cada script

## 📝 Flujo de Trabajo Recomendado

### Para agregar un nuevo consejo:

1. **Crear el consejo base**:

```bash
pnpm run tips:add
```

2. **Completar información**:

   - Título descriptivo y claro
   - Contenido detallado con instrucciones paso a paso
   - Categoría apropiada
   - Dificultad realista
   - Tiempo estimado

3. **Generar traducciones**:

```bash
pnpm run tips:translate
```

4. **Revisar y mejorar** (opcional):

   - Abrir `src/data/tips.json`
   - Revisar traducciones automáticas
   - Corregir manualmente si es necesario

5. **Probar en desarrollo**:

```bash
pnpm run dev
```

- Visitar `/consejos`
- Verificar que aparece correctamente
- Probar filtros por categoría

## 🎯 Categorías Disponibles

### `pintura`

- Consejos de pintura y decoración
- Preparación de superficies
- Técnicas de aplicación
- Elección de materiales

### `fontaneria`

- Mantenimiento de grifos
- Reparaciones básicas
- Prevención de obstrucciones
- Instalaciones sanitarias

### `electricidad`

- Seguridad eléctrica
- Detección de problemas
- Mantenimiento básico
- Cuándo llamar a un profesional

### `reforma`

- Planificación de reformas
- Consejos de organización
- Selección de materiales
- Gestión de proyectos

## 🔧 Personalización Avanzada

### Modificar el sistema de traducción:

1. **Editar `scripts/generate-translations.js`**
2. **Reemplazar función `translateText()`**:

```javascript
// Ejemplo con Google Translate API
async function translateText(text, targetLang) {
  const response = await fetch(`https://api.googletranslate.com/...`);
  return await response.json();
}
```

### Agregar nuevos idiomas:

1. **Actualizar `targetLanguages`** en el script
2. **Agregar traducciones** en `public/translations.json`
3. **Modificar tipo `Lang`** en `src/utils/i18n.ts`

### Cambiar diseño de la página:

1. **Editar `src/pages/consejos.astro`**
2. **Modificar estilos CSS** en la sección `<style>`
3. **Ajustar layout** en el HTML

## 🛠️ Mantenimiento

### Backup automático:

- Cada ejecución de `tips:translate` crea `tips.backup.json`
- Recuperar con: `cp src/data/tips.backup.json src/data/tips.json`

### Validación de datos:

```bash
# Verificar formato JSON
cat src/data/tips.json | jq .

# Contar consejos
cat src/data/tips.json | jq 'length'

# Listar categorías
cat src/data/tips.json | jq '.[].category' | sort | uniq
```

## 📊 Estadísticas Útiles

### Consejos por categoría:

```bash
cat src/data/tips.json | jq 'group_by(.category) | map({category: .[0].category, count: length})'
```

### Consejos sin traducciones:

```bash
cat src/data/tips.json | jq 'map(select(.translations | length == 0)) | length'
```

## 🚨 Solución de Problemas

### Error "Module not found":

- Verificar que estás en la raíz del proyecto
- Ejecutar `pnpm install` si es necesario

### Traducciones no aparecen:

- Verificar formato JSON en `tips.json`
- Comprobar que `translations` tiene la estructura correcta
- Revisar que el idioma está en `targetLanguages`

### Página no carga:

- Verificar sintaxis en `consejos.astro`
- Comprobar que `tips.json` es válido
- Revisar logs del servidor de desarrollo

## 📞 Soporte

Para problemas técnicos:

1. Revisar logs en la consola del navegador
2. Verificar sintaxis JSON con validador online
3. Comprobar que todos los archivos existen
4. Restaurar desde backup si es necesario

---

**💡 Tip**: Siempre crear consejos en español primero y usar el sistema automático de traducciones como base, luego revisar manualmente para mayor calidad.
