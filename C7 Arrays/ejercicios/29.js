function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) return null; // Verifica si el array está vacío

  const maxNumero = Math.max(...numeros); // Encuentra el número máximo en el array
  const minNumero = Math.min(...numeros); // Encuentra el número mínimo en el array

  let faltantes;
  for (let i = minNumero; i <= maxNumero; i++) {
    if (!numeros.includes(i)) {
      faltantes = i;
    }
  }

  return faltantes > 0 ? faltantes : null;
}

module.exports = encontrarNumeroFaltante;