function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let contador = 0;
  let valorFinal = num;
  do {
    valorFinal += 5;
    contador++;
  } while (contador < 8);
  return valorFinal;
}
module.exports = doWhile;
