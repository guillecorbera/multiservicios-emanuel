#!/usr/bin/env node

/**
 * Script para generar traducciones automáticas para consejos
 *
 * Este script:
 * 1. Lee los consejos desde tips.json
 * 2. Identifica consejos sin traducciones
 * 3. Genera traducciones usando una API de traducción (simulada)
 * 4. Actualiza el archivo tips.json
 *
 * Uso: node scripts/generate-translations.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rutas de archivos
const tipsFilePath = path.join(__dirname, "../src/data/tips.json");
const backupFilePath = path.join(__dirname, "../src/data/tips.backup.json");

// Configuración de idiomas
const targetLanguages = ["ca", "en"];
const sourceLanguage = "es";

// Simulador de API de traducción (en producción usar Google Translate API, DeepL, etc.)
async function translateText(text, targetLang) {
  // Simulación de traducciones (reemplazar con API real)
  const translations = {
    // Traducción básica catalán
    ca: {
      "Cómo preparar las paredes antes de pintar":
        "Com preparar les parets abans de pintar",
      "Antes de aplicar pintura, es fundamental limpiar bien las paredes, lijar las imperfecciones y aplicar una imprimación adecuada. Esto garantizará un acabado profesional y duradero.":
        "Abans d'aplicar pintura, és fonamental netejar bé les parets, polir les imperfeccions i aplicar una emprimació adequada. Això garantirà un acabat professional i durador.",
      "Mantenimiento básico de grifos y tuberías":
        "Manteniment bàsic de grifs i canonades",
      "Revisa regularmente los grifos en busca de goteos y limpia los filtros cada 6 meses. Mantén las tuberías libres de obstrucciones usando agua caliente y bicarbonato de sodio mensualmente.":
        "Revisa regularment els grifs cercant degotalls i neteja els filtres cada 6 mesos. Mantén les canonades lliures d'obstruccions usant aigua calenta i bicarbonat de sodi mensualment.",
      "Señales de que necesitas revisar tu instalación eléctrica":
        "Senyals que necessites revisar la teva instal·lació elèctrica",
      "Si notas luces que parpadean, enchufes que se calientan, o el cuadro eléctrico salta frecuentemente, es hora de llamar a un profesional. La seguridad eléctrica no es negociable.":
        "Si notes llums que parpellegen, endolls que s'escalfen, o el quadre elèctric salta freqüentment, és hora de trucar a un professional. La seguretat elèctrica no és negociable.",
    },
    // Traducción básica inglés
    en: {
      "Cómo preparar las paredes antes de pintar":
        "How to prepare walls before painting",
      "Antes de aplicar pintura, es fundamental limpiar bien las paredes, lijar las imperfecciones y aplicar una imprimación adecuada. Esto garantizará un acabado profesional y duradero.":
        "Before applying paint, it's essential to clean the walls thoroughly, sand imperfections, and apply appropriate primer. This will ensure a professional and long-lasting finish.",
      "Mantenimiento básico de grifos y tuberías":
        "Basic maintenance for faucets and pipes",
      "Revisa regularmente los grifos en busca de goteos y limpia los filtros cada 6 meses. Mantén las tuberías libres de obstrucciones usando agua caliente y bicarbonato de sodio mensualmente.":
        "Regularly check faucets for leaks and clean filters every 6 months. Keep pipes free of blockages using hot water and baking soda monthly.",
      "Señales de que necesitas revisar tu instalación eléctrica":
        "Signs you need to check your electrical installation",
      "Si notas luces que parpadean, enchufes que se calientan, o el cuadro eléctrico salta frecuentemente, es hora de llamar a un profesional. La seguridad eléctrica no es negociable.":
        "If you notice flickering lights, heating outlets, or the electrical panel trips frequently, it's time to call a professional. Electrical safety is non-negotiable.",
    },
  };

  // Simular delay de API
  await new Promise((resolve) => setTimeout(resolve, 100));

  return (
    translations[targetLang]?.[text] ||
    `[AUTO-TRANSLATED-${targetLang.toUpperCase()}] ${text}`
  );
}

// Función principal
async function generateTranslations() {
  try {
    console.log("🔄 Iniciando generación de traducciones...");

    // Leer archivo de consejos
    if (!fs.existsSync(tipsFilePath)) {
      console.error("❌ No se encontró el archivo tips.json");
      process.exit(1);
    }

    const tipsData = JSON.parse(fs.readFileSync(tipsFilePath, "utf8"));

    // Crear backup
    fs.writeFileSync(backupFilePath, JSON.stringify(tipsData, null, 2));
    console.log("💾 Backup creado en tips.backup.json");

    let translationsGenerated = 0;
    let totalTips = tipsData.length;

    // Procesar cada consejo
    for (const tip of tipsData) {
      console.log(`\n📝 Procesando: "${tip.title}"`);

      // Inicializar translations si no existe
      if (!tip.translations) {
        tip.translations = {};
      }

      // Generar traducciones faltantes
      for (const targetLang of targetLanguages) {
        if (
          !tip.translations[targetLang] ||
          !tip.translations[targetLang].title ||
          !tip.translations[targetLang].content
        ) {
          console.log(
            `   🌐 Generando traducción para ${targetLang.toUpperCase()}...`
          );

          const translatedTitle = await translateText(tip.title, targetLang);
          const translatedContent = await translateText(
            tip.content,
            targetLang
          );

          tip.translations[targetLang] = {
            title: translatedTitle,
            content: translatedContent,
          };

          translationsGenerated++;
          console.log(
            `   ✅ Traducción ${targetLang.toUpperCase()} completada`
          );
        } else {
          console.log(
            `   ⏭️  Traducción ${targetLang.toUpperCase()} ya existe`
          );
        }
      }
    }

    // Guardar archivo actualizado
    fs.writeFileSync(tipsFilePath, JSON.stringify(tipsData, null, 2));

    console.log("\n🎉 ¡Proceso completado!");
    console.log(`📊 Estadísticas:`);
    console.log(`   - Total de consejos: ${totalTips}`);
    console.log(`   - Nuevas traducciones generadas: ${translationsGenerated}`);
    console.log(`   - Idiomas objetivo: ${targetLanguages.join(", ")}`);
    console.log(`\n💡 Consejos para mejorar las traducciones:`);
    console.log(`   1. Revisa manualmente las traducciones en tips.json`);
    console.log(`   2. Considera usar Google Translate API para mejor calidad`);
    console.log(`   3. El backup está disponible en tips.backup.json`);
  } catch (error) {
    console.error(
      "❌ Error durante la generación de traducciones:",
      error.message
    );
    process.exit(1);
  }
}

// Función para agregar un nuevo consejo (solo en español)
function addNewTip() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("\n📝 Agregar nuevo consejo");
  console.log("Responde las siguientes preguntas:");

  const questions = [
    "Título del consejo: ",
    "Contenido del consejo: ",
    "Categoría (pintura/fontaneria/electricidad/reforma): ",
    "Dificultad (fácil/medio/difícil/información): ",
    "Tiempo estimado: ",
    "Tags (separados por comas): ",
  ];

  let answers = [];
  let currentQuestion = 0;

  function askQuestion() {
    if (currentQuestion < questions.length) {
      rl.question(questions[currentQuestion], (answer) => {
        answers.push(answer.trim());
        currentQuestion++;
        askQuestion();
      });
    } else {
      // Crear nuevo consejo
      const tipsData = JSON.parse(fs.readFileSync(tipsFilePath, "utf8"));
      const newId = Math.max(...tipsData.map((tip) => tip.id)) + 1;

      const newTip = {
        id: newId,
        category: answers[2],
        title: answers[0],
        content: answers[1],
        tags: answers[5].split(",").map((tag) => tag.trim()),
        difficulty: answers[3],
        estimatedTime: answers[4],
        createdAt: new Date().toISOString().split("T")[0],
        translations: {},
      };

      tipsData.push(newTip);
      fs.writeFileSync(tipsFilePath, JSON.stringify(tipsData, null, 2));

      console.log("\n✅ Nuevo consejo agregado exitosamente");
      console.log(
        "🔄 Ejecuta 'pnpm run tips:translate' para generar las traducciones automáticamente"
      );
      rl.close();
    }
  }

  askQuestion();
}

// Manejo de argumentos de línea de comandos
const command = process.argv[2];

switch (command) {
  case "translate":
    generateTranslations();
    break;
  case "add":
    addNewTip();
    break;
  default:
    console.log("📋 Scripts disponibles para gestión de consejos:");
    console.log("");
    console.log("🌐 node scripts/generate-translations.js translate");
    console.log(
      "   Genera traducciones automáticas para consejos sin traducir"
    );
    console.log("");
    console.log("➕ node scripts/generate-translations.js add");
    console.log("   Agrega un nuevo consejo interactivamente");
    console.log("");
    console.log("💡 Ejemplo de uso:");
    console.log("   pnpm run tips:translate  # Generar traducciones");
    console.log("   pnpm run tips:add        # Agregar nuevo consejo");
    break;
}
