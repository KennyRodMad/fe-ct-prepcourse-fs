function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  texto = texto.split('').reverse().join('');
  return texto;
}

module.exports = invertirTexto;
