function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let meses = [];

  if (!array.includes("Enero") || !array.includes("Marzo") || !array.includes("Noviembre")) {
    return "No se encontraron los meses pedidos";
  } 

  if (array.includes("Enero") && array.includes("Marzo") && array.includes("Noviembre")) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] ==="Enero" || array[i] ==="Marzo" || array[i] ==="Noviembre") {
        meses.push(array[i]);
      }
    } return meses;
  }





  // let meses = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] === "Enero" && array[i] === "Marzo" && array[i] === "Noviembre") {
  //     meses.push(array[i]);
  //     return meses;
  //   }

  //   if ( meses.includes("Enero") &&  meses.includes("Marzo") &&  meses.includes("Noviembre")) {
  //     return meses;
  //   } else {
  //     return "No se encontraron los meses pedidos";
  //   }
  // }
}

module.exports = mesesDelAño;
