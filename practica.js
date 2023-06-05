"use strict";

let tablero = [];
let peon = "♙_";
let caballo = "♘_";
let alfil = "♗_";
let torre = "♖_";
let reina = "♕_";
let rey = "♔_";

let fichas = [peon, caballo, alfil, torre, reina, rey];

/**
 * Función que crea un tablero de la cantidad de casillas que tu le pases
 * @param {Int} num_casillas 
 * @returns 
 */
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

/**
 * Funcion que coloca de forma aleatoria en una lista el contenido de otra lista
 * @param {Array} lista 
 * @param {Array} lista2 
 * @returns 
 */
function colocarFichas(lista, lista2) {
  let contador = 0;

  
  for(let ficha of fichas) {
    let colocada = false;
    while(!colocada) {
      let x = Math.floor(Math.random() * 8);
      let y = Math.floor(Math.random() * 8);
      if(!tablero[x][y]) {
        tablero[x][y] = ficha;
        colocada = true;
      }
    }
  }

  // for (let i = 0; i < lista.length; i++) {
  //   for (let j = 0; j < lista.length; j++) {
  //     for (let ficha of lista2) {
  //       if (contador < lista2.length) {
  //         let x = Math.floor(Math.random() * 8);
  //         let y = Math.floor(Math.random() * 8);

  //         tablero[x][y] = ficha;
  //         contador++;
  //       }
  //     }
  //   }
  // }
  return impresora(lista);
}

/**
 * Función que imprime de forma mas "xeitosa" la lista
 * @param {Array} lista 
 */
function impresora(lista) {
  for (let i = 0; i < lista.length; i++) {
    let linea = "|";
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

/**
 * Funcion que recorre una lista y si encuentra la ficha comprueba que movimientos puede hacer
 * @param {Array} lista 
 * @param {String} ficha 
 */
function peonMove(lista, ficha) {
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length; j++) {
      if (lista[i][j] == ficha) {
        if(i + 1  > lista.length || j + 1 > lista.length || i - 1 < 0 || j - 1 < 0){
          console.log("El " + ficha + " no puede comer a nadie")
          break;
        }
          if (lista[i - 1][j] == null) {
            console.log("El " + ficha + " puede moverse hacia delante");
          }
          if (lista[i - 1][j + 1] != null) {
            console.log("El " + ficha + " puede comer a " + lista[i - 1][j + 1]);
          }
          if (lista[i - 1][j - 1] != null) {
            console.log("El " + ficha + " puede comer a " + lista[i - 1][j - 1]);
          } else if (lista[i - 1][j] != null) {
            console.log("El " + ficha + " no tiene movimientos posibles");
        }
      }
    }
  }
}

/**
 * Funcion que recorre una lista y si encuentra la ficha comprueba que movimientos puede hacer
 * @param {Array} lista 
 * @param {String} ficha 
 */
function reyMove(lista, ficha) {
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length; j++) {
      if (lista[i][j] == ficha) {
        if(i + 1  > lista.length || j + 1 > lista.length || i - 1 < 0 || j - 1 < 0){
          console.log("El " + ficha + " no puede comer a nadie")
          break;
        }
        if (lista[i - 1][j] != null) {
          console.log("El " + ficha + " puede comer a " + lista[i - 1][j]);
        }
        if (lista[i - 1][j + 1] != null) {
          console.log("El " + ficha + " puede comer a " + lista[i - 1][j + 1]);
        }
        if (lista[i - 1][j - 1] != null) {
          console.log("El " + ficha + " puede comer a " + lista[i - 1][j - 1]);
        }
        if (lista[i][j - 1] != null) {
          console.log("El " + ficha + " puede comer a " + lista[i][j - 1]);
        }
        if (lista[i][j + 1] != null) {
          console.log("El " + ficha + " puede comer a " + lista[i][j + 1]);
        }
        if (lista[i + 1][j + 1] != null) {
          console.log("El " + ficha + " puede comer a " + lista[i + 1][j + 1]);
        }
        if (lista[i + 1][j - 1] != null) {
          console.log("El " + ficha + " puede comer a " + lista[i + 1][j - 1]);
        }
        if (lista[i + 1][j] != null) {
          console.log("El " + ficha + " puede comer a " + lista[i + 1][j]);
        }
      }
    }
  }
}

/**
 * Funcion que recorre una lista y si encuentra la ficha comprueba que movimientos puede hacer
 * @param {Array} lista 
 * @param {String} ficha 
 */
function torreMove(lista, ficha) {
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length; j++) {
      if (lista[i][j] == ficha) {
        if(i + 1  > lista.length || j + 1 > lista.length || i - 1 < 0 || j - 1 < 0){
          console.log("La " + ficha + " no puede comer a nadie")
          break;
        }
        for (let k = i - 1; k >= 0; k--) {
          if (lista[k][j] != null) {
            console.log("La " + ficha + " puede comer a " + lista[k][j]);
          }
        }
        for (let k = i + 1; k < lista.length; k++) {
          if (lista[k][j] != null) {
            console.log("La " + ficha + " puede comer a " + lista[k][j]);
          }
        }
        for (let k = j - 1; k >= 0; k--) {
          if (lista[i][k] != null) {
            console.log("La " + ficha + " puede comer a " + lista[i][k]);
          }
        }
        for (let k = j + 1; k < lista.length; k++) {
          if (lista[i][k] != null) {
            console.log("La " + ficha + " puede comer a " + lista[i][k]);
          }
        }
      }
    }
  }
}

/**
 * Funcion que recorre una lista y si encuentra la ficha comprueba que movimientos puede hacer
 * @param {Array} lista 
 * @param {String} ficha 
 */
function alfilMove(lista, ficha) {
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length; j++) {
      if (lista[i][j] == ficha) {
        if(i + 1  > lista.length || j + 1 > lista.length || i - 1 < 0 || j - 1 < 0){
          console.log("El " + ficha + " no puede comer a nadie")
          break;
        }
        let limite = 1;
        while (i - limite >= 0 && j + limite < lista.length) {
          if (lista[i - limite][j + limite] != null) {
            console.log("El " + ficha + " puede comer a " + lista[i - limite][j + limite]);
          }
          limite++;
        }
        limite = 1;
        while (i - limite >= 0 && j - limite >= 0) {
          if (lista[i - limite][j - limite] != null) {
            console.log("El " + ficha + " puede comer a " + lista[i - limite][j - limite]);
          }
          limite++;
        }
      }
    }
  }
}

/**
 * Funcion que recorre una lista y si encuentra la ficha comprueba que movimientos puede hacer
 * @param {Array} lista 
 * @param {String} ficha 
 */
function caballoMove(lista, ficha) {
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length; j++) {
      if (lista[i][j] == ficha) {
        if(i + 1  > lista.length || j + 1 > lista.length || i - 1 < 0 || j - 1 < 0){
          console.log("El " + ficha + " no puede comer a nadie")
          break;
        }
        if (i - 2 >= 0 && j - 1 >= 0 && lista[i - 2][j - 1] != null) {
          console.log("El " + ficha + " puede comer a " + lista[i - 2][j - 1]);
        }
        if (i - 2 >= 0 && j + 1 < lista.length && lista[i - 2][j + 1] != null) {
          console.log("El " + ficha + " puede comer a " + lista[i - 2][j + 1]);
        }
        if (i + 2 < lista.length && j - 1 >= 0 && lista[i + 2][j - 1] != null) {
          console.log("El " + ficha + " puede comer a " + lista[i + 2][j - 1]);
        }
        if (i + 2 < lista.length && j + 1 < lista.length && lista[i + 2][j + 1] != null) {
          console.log("El " + ficha + " puede comer a " + lista[i + 2][j + 1]);
        }
        if (i - 1 >= 0 && j - 2 >= 0 && lista[i - 1][j - 2] != null) {
          console.log("El " + ficha + " puede comer a " + lista[i - 1][j - 2]);
        }
        if (i - 1 >= 0 && j + 2 < lista.length && lista[i - 1][j + 2] != null) {
          console.log("El " + ficha + " puede comer a " + lista[i - 1][j + 2]);
        }
        if (i + 1 < lista.length && j - 2 >= 0 && lista[i + 1][j - 2] != null) {
          console.log("El " + ficha + " puede comer a " + lista[i + 1][j - 2]);
        }
        if (i + 1 < lista.length && j + 2 < lista.length && lista[i + 1][j + 2] != null) {
          console.log("El " + ficha + " puede comer a " + lista[i + 1][j + 2]);
        }
      }
    }
  }
}

/**
 * Funcion que recorre una lista y si encuentra la ficha comprueba que movimientos puede hacer
 * @param {Array} lista 
 * @param {String} ficha 
 */
function reinaMove(lista, ficha) {
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length; j++) {
      if (lista[i][j] == ficha) {
        if(i + 1  > lista.length || j + 1 > lista.length || i - 1 < 0 || j - 1 < 0){
          console.log("La " + ficha + " no puede comer a nadie")
          break;
        }
        for (let k = i - 1; k >= 0; k--) {
          if (lista[k][j] != null) {
            console.log("La " + ficha + " puede comer a " + lista[k][j]);
          }
        }
        for (let k = i + 1; k < lista.length; k++) {
          if (lista[k][j] != null) {
            console.log("La " + ficha + " puede comer a " + lista[k][j]);
          }
        }
        for (let k = j - 1; k >= 0; k--) {
          if (lista[i][k] != null) {
            console.log("La " + ficha + " puede comer a " + lista[i][k]);
          }
        }
        for (let k = j + 1; k < lista.length; k++) {
          if (lista[i][k] != null) {
            console.log("La " + ficha + " puede comer a " + lista[i][k]);
          }
        }
        for (let k = 1; i - k >= 0 && j - k >= 0; k++) {
          if (lista[i - k][j - k] != null) {
            console.log("La " + ficha + " puede comer a " + lista[i - k][j - k]);
          }
        }
        for (let k = 1; i - k >= 0 && j + k < lista.length; k++) {
          if (lista[i - k][j + k] != null) {
            console.log("La " + ficha + " puede comer a " + lista[i - k][j + k]);
          }
        }
        for (let k = 1; i + k < lista.length && j - k >= 0; k++) {
          if (lista[i + k][j - k] != null) {
            console.log("La " + ficha + " puede comer a " + lista[i + k][j - k]);
          }
        }
        for (let k = 1; i + k < lista.length && j + k < lista.length; k++) {
          if (lista[i + k][j + k] != null) {
            console.log("La " + ficha + " puede comer a " + lista[i + k][j + k]);
          }
        }
      }
    }
  }
}

crearTablero(8);
colocarFichas(tablero, fichas);
peonMove(tablero, peon);
reyMove(tablero, rey);
torreMove(tablero, torre);
alfilMove(tablero, alfil);
reinaMove(tablero, reina);
caballoMove(tablero, caballo);