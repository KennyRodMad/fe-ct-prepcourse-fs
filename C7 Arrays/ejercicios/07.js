function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  array = array.sort(function (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b; //orden ascendente
    } else {
      return String(a).localeCompare(String(b));
    }
  });
  return array;
}

module.exports = ordenarArray;
