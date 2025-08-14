function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let mult = 1;
  let inicio = Math.min(a, b);
  let fin = Math.max(a, b);
  for (let i = inicio; i <= fin; i++){
    mult = mult*i;  
  } 
  
  return mult || 0; // Si es -0 o 0, devuelve 0 positivo
}

module.exports = productoEntreNúmeros;