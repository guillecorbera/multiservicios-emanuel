/**
 * Algoritmo de Fisher-Yates para mezclar arrays.
 * @param {Array} array - El array a mezclar.
 * @returns {Array} Un array nuevo y mezclado.
 */
export function shuffleArray(array) {
  // Creamos una copia para no mutar el array original
  const shuffled = [...array];
  let currentIndex = shuffled.length;
  let randomIndex;

  // Mientras queden elementos a mezclar.
  while (currentIndex !== 0) {
    // Escoger un elemento restante.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // E intercambiarlo con el elemento actual.
    [shuffled[currentIndex], shuffled[randomIndex]] = [
      shuffled[randomIndex], shuffled[currentIndex]
    ];
  }

  return shuffled;
}