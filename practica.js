"use strict";

let tablero = [];
let peon = p;
let caballo = c;
let alfil = a;
let torre = t;
let reina = q;
let rey = k;

function crearTablero(num_casillas) {

  let nTablero = [];

  for (let i = 0; i < num_casillas; i++) {
    nTablero.push([]);
    for (let j = 0; j < num_casillas; j++) {
      nTablero[i][j] = null;
    }
  }
  return (tablero = nTablero);
}

function impresora(tablero) {

  for (let i = 0; i < tablero.length; i++) {
    let linea = "|";
    for (let j = 0; j < tablero.length; j++) {
      if (tablero[i][j] == null) {
        linea += "__" + "|";
      } else {
        linea += tablero[i][j] + "|";
      }
    }
    console.log(linea);
  }
}

function pieza(letra) {
  
}
 
crearTablero(8);
impresora(tablero);
