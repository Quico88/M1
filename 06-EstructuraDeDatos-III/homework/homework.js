"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
} 

BinarySearchTree.prototype.size =function (){
  if(!this.left && !this.right) return 1;
  // tiene un solo hijo
  if(this.left === null) {return 1 + this.right.size()};
  if(this.right === null) {return 1 + this.left.size()};
  return 1 + this.right.size() + this.left.size();
}

BinarySearchTree.prototype.insert = function (data){
  if (data > this.value) {
    if (this.right !== null) this.right.insert(data);
  	else this.right = new BinarySearchTree (data);
  }
  else{
    if (this.left !== null) this.left.insert(data);
  	else this.left = new BinarySearchTree (data);
  }
}

BinarySearchTree.prototype.contains = function (valor){
  if(this.value === valor) return true;
  else{
    if(valor > this.value && this.right !== null) return this.right.contains(valor);
    if(valor < this.value && this.left !== null) return this.left.contains(valor);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb,orden){
  if (orden === 'pre-order'){
    cb(this.value);
    if(this.left !== null) this.left.depthFirstForEach(cb,'pre-order');
    if(this.right !== null) this.right.depthFirstForEach(cb,'pre-order');
  };
  if (orden === 'post-order'){
    if(this.left !== null) this.left.depthFirstForEach(cb,'post-order');
    if(this.right !== null) this.right.depthFirstForEach(cb,'post-order');
    cb(this.value);
  };
  if (orden === 'in-order' || !orden){
    if(this.left !== null) this.left.depthFirstForEach(cb,'in-order');
    cb(this.value);
    if(this.right !== null) this.right.depthFirstForEach(cb,'in-order');
  };
};


BinarySearchTree.prototype.breadthFirstForEach = function (cb,arr=[]){
  
  if(this.left !== null) arr.push(this.left);
  if(this.right !== null) arr.push(this.right);
  cb(this.value);
  if (arr.length > 0) { 
    arr.shift().breadthFirstForEach(cb,arr);
  }
};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
