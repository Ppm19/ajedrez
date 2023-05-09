"use strict";

let tablero = [];
let peon = "P_";
let caballo = "C_";
let alfil = "A_";
let torre = "T_";
let reina = "Q_";
let rey = "K_";

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
    tablero[4][5] = peon;
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

function peonMove(tablero, ficha) {

  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero.length; j++) {
      if (tablero[i][j] == ficha) {
        if (tablero[i][j] == null) {
          console.log("El peón puede moverse hacia delante");
        } else if (tablero[i - 1][j - 1] != null) {
          console.log("El peón puede comerse a " + tablero[i - 1][j - 1]);
        } else if (tablero[i + 1][j - 1] != null) {
          console.log("El peón puede comerse a " + tablero[i + 1][j - 1]);
        } else if (tablero[i][j - 1] != null) {
          console.log("El peón no tiene movimientos posibles");
        }
      }
    }
  }
  return 
}

crearTablero(8);
impresora(tablero);
peonMove(tablero,peon);
