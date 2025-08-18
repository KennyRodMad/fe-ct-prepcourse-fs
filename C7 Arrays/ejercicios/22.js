function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let tabla = [];
  for (let i = 0; i <= 10; i++) {
    let mult = 6 * i;
    tabla.push(mult); 
  } return tabla;
}

module.exports = tablaDelSeis;
