"use strict";

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function leeLinea(texto) {
  return new Promise((resolve, rejects) => {
    rl.question(texto, (introducido) => {
      resolve(introducido);
    });
  });
}

let tablero = [];

/**
 * Esta función imprime de forma bonita nuestro tablero y sustituye el valor null por espacios en blanco, en esta funcion linea siempre representa el valor de la celda
 * @param {Array} tablero
 */
function impresora(tablero) {
  for (let i = 0; i < tablero.length; i++) {
    let linea = "|";
    for (let j = 0; j < tablero.length; j++) {
      if (tablero[i][j] == null) {
        linea += "\t|";
      } else {
        linea += tablero[i][j] + "\t|";
      }
    }
    console.log(linea);
  }
}
/**
 * Este for genera un tablero de 3x3, en el que i son las filas y j las columnas
 */
for (let i = 0; i < 3; i++) {
  tablero.push([]);
  for (let j = 0; j < 3; j++) {
    tablero[i][j] = null;
  }
}

function comprobar(lista) {
  let lleno = true;

  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length; j++) {
      if (lista[i][j] === null) {
        lleno = false;
        break;
      } else {
        console.log("El tablero esta lleno");
        return false;
      }
    }
  }
  return true;
}

async function tresenraya(lista) {
  let x = await leeLinea("Que fila quieres seleccionar(0,1,2): \n");
  let y = await leeLinea("Que columna quieres seleccionar(0,1,2): \n");

  if (lista[x][y] == null) {
    lista[x][y] = "   X";
  } else {
    console.log("La celda seleccionada esta ocupada \n");
    let enter = await leeLinea("Pulsa enter para continuar");
  }
  impresora(lista);
  comprobar(lista);
  tresenraya(lista);
}

//tablero[1][2] = "   O";//aqui cambio el valor de la celda que esta en la posicion(fila:1,columna:2)

tresenraya(tablero);
