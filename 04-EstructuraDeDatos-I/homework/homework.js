'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if (n==0 || n==1) return 1
  else if (n < 0) return 0;
  else return n * nFactorial(n-1);
}
/*

VERSION CORTA:

function nFactorial(n) {
  return n === 0 ? 1 : n * nFactorial(n - 1);
}*/

/*
USANDO FOR:

function facto (n) {
  let prod =1;
  for (let i=n ; i>1 ; i--){
    prod*=i;
  }
  return prod;
}
*/


function nFibonacci(n) {
  if (n < 0) return 'Error';
  else if (n === 1 || n === 2)return 1;
  else return (nFibonacci(n-2) + nFibonacci(n-1));
}             
 
/*
  Versión corta:

function fibo (n){
  return n<=2 ? 1 : fibo(n-1) + fibo (n-2);
}*/

/*
Usando for:

function fibo (n){
	if (n === 0) return 0;
  else if (n === 1 || n === 2)return 1;
  else {
    let serie = [0,1]
    for (i=2; i <= (n); i++){
      serie.push((serie[i-1]+serie[i-2]));
    }
    return serie[n];
  } 
}
*/

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

class Queue {
  constructor(){  
  	this.cola = [];
  }
 	enqueue = function(elem){
    this.cola.push(elem);
  } 
  dequeue = function(){
    if (this.cola.length === 0) return undefined
    return this.cola.shift();
  } 
  size = function(){
    return this.cola.length;
  }
}




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
