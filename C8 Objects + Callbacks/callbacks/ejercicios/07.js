function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   for (let i = 0; i < arrayOfStrings.length; i++) {
      return arrayOfStrings.filter(el => typeof el === "string" && el.toLowerCase().startsWith("a"));
   }
}

module.exports = filter;
