"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
};

function Node(value) {
  this.value = value;
  this.next = null;
};

LinkedList.prototype.add = function (info) {
  let nuevoNodo = new Node (info);
  let estaPos = this.head;
  if (!estaPos){
    this.head = nuevoNodo;
    //return nuevoNodo;
  }
  else {
    while (estaPos.next){
      estaPos = estaPos.next;
  	}
    estaPos.next = nuevoNodo;
    //return nuevoNodo;
    }
};

LinkedList.prototype.remove = function () {
  let estaPos = this.head;
  if (!estaPos) return null;
  else if (!estaPos.next){
      let valor = estaPos.value;
    	this.head = null;
    	return valor;
  }
  else {
    let siguientePos = estaPos.next;
    while (siguientePos.next){
      estaPos = estaPos.next;
      siguientePos = siguientePos.next;
  	}
    let valor = siguientePos.value;
    estaPos.next = null;
    return valor;
  }
};

LinkedList.prototype.search = function (info) {
  let estaPos = this.head;
  if (!estaPos){
    return null;
  }
  else {
    while (estaPos){
      if (typeof(info)==='function'){
        // otras opción, si no es funcion, genero un callback que me retorne true si es igual al valor, y recorro la lista con el mismo while viendo lalmando a la funcion
        if (info(estaPos.value)) return estaPos.value;
      }
      else if (estaPos.value === info ) return info;
      estaPos = estaPos.next;
    }
    return null;
    }
};

LinkedList.prototype.removePos = function (donde) {
  let pos = 0;
  let estaPos = this.head;
  if (!estaPos) return null;
  else {
    if (donde === 0){
      this.head = estaPos.next;
    }
    else{
    	while (estaPos.next && pos < donde-1){
      	estaPos = estaPos.next;
      	pos++;
  		}
      if (estaPos.next === null){
        console.log('La lista no tiene ese elemento, elija un número menor');
        return null;
      }
      else estaPos.next = estaPos.next.next;
    }
	} 
};





/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.locker = [];  
  this.numBuckets = 35;
}

HashTable.prototype.hash = function(key){
  let suma = 0;
  for(let i = 0; i < key.length ; i++){
    suma += key.charCodeAt(i);  
  }
  return suma % this.numBuckets;

}

HashTable.prototype.set = function(clave,valor) {
  if(typeof(clave) !== 'string') throw new TypeError('Keys must be strings');
  let cajon = this.hash(clave);
  if (!this.locker[cajon]) this.locker[cajon] = {};
  this.locker[cajon][clave] = valor;
}

HashTable.prototype.get = function(clave){
  let cajon = this.hash(clave);
	if (this.locker[cajon]) return this.locker[cajon][clave];
  else return null;
}

HashTable.prototype.hasKey = function(clave){
  let cajon = this.hash(clave);
  if (!this.locker[cajon]) return false;
  else return (this.locker[cajon].hasOwnProperty(clave));
  
}

/* La re compliqué! En esta versión, cada par key-value es un objeto disstinto, y el bucket es un arreglo de objetos.

HashTable.prototype.set = function(clave,valor){
  if(typeof(clave) !== 'string') throw new TypeError('Keys must be strings');
  let pos = this.hash(clave);
  if (!this.tabla[pos]) this.tabla[pos] = {[clave]: valor};
  else if (!this.tabla[pos].length){
      if (this.tabla[pos][clave]) this.tabla[pos][clave] = valor;
      else{
        let valor1 = this.tabla[pos];
        this.tabla[pos] = [valor1];
        this.tabla[pos].push({[clave]: valor});
      }
  }
  else{
    let flag = 0;
    for (let i = 0; i < this.tabla[pos].length ; i++){
     	if (this.tabla[pos][i][clave]){
        this.tabla[pos][i][clave] = valor;
        flag =1;
    	}
    }
    if (flag ===0)  this.tabla[pos].push({[clave]: valor});
  }
  
}

HashTable.prototype.get = function(key){
  let pos = this.hash(key);
  if (!this.tabla[pos].length) return this.tabla[pos][key];
  else {
    for (let i = 0; i < this.tabla[pos].length ; i++){
      if (this.tabla[pos][i][key]) return this.tabla[pos][i][key];
  	}
	}
}

HashTable.prototype.hasKey = function(key){
  let pos = this.hash(key);
  if (!this.tabla[pos]) return false;
  else if (!this.tabla[pos].length) return (!!this.tabla[pos][key])
  else{
    let flag = 0;
    for (let i = 0; i < this.tabla[pos].length ; i++){
      if (this.tabla[pos][i][key]) flag =1;
    }
    if (flag === 1) return true;
    else return false;
  }
}

  */




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
