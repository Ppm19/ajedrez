"use strict";

let tablero = [];
let peon = "P_";
let caballo = "C_";
let alfil = "A_";
let torre = "T_";
let reina = "Q_";
let rey = "K_";

let fichas = [peon, caballo, alfil, torre, reina, rey];

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

function colocarFichas(lista, lista2) {

  let contador = 0;

  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length; j++) {
      for (let ficha of lista2) {
        if(contador < 7){

          let x = Math.floor(Math.random() * (8 - 0) + 0);
          let y = Math.floor(Math.random() * (8 - 0) + 0);

          tablero[x][y] = ficha;
          contador++
        }
      }
    }
  }
  return impresora(lista);
}

function impresora(lista) {
  for (let i = 0; i < lista.length; i++) {
    let linea = "|";
    lista[3][6] = reina;
    lista[3][5] = rey;
    lista[4][5] = peon;
    for (let j = 0; j < lista.length; j++) {
      if (lista[i][j] == null) {
        linea += "__" + "|";
      } else {
        linea += lista[i][j] + "|";
      }
    }
    console.log(linea);
  }
}

function peonMove(lista, ficha) {
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length; j++) {
      if (lista[i][j] == ficha) {
        if (lista[i][j-1] == null) {
          console.log("El peón puede moverse hacia delante");
        } else if (lista[i-1][j-1] != null) {
          console.log("El peón puede comerse a " + lista[i - 1][j - 1]);
        } else if (lista[i+1][j-1] != null) {
          console.log("El peón puede comerse a " + lista[i + 1][j - 1]);
        } else if (lista[i][j-1] != null) {
          console.log("El peón no tiene movimientos posibles");
        }
      }
    }
  }
}

crearTablero(8);
colocarFichas(tablero, fichas);
//impresora(tablero);
peonMove(tablero, peon);