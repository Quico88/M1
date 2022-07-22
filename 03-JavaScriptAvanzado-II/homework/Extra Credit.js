// console.log('hola'.repeatify(3));   -> holaholahola

String.prototype.repeatify = function (n){
  let str = '';
  if (n<0) return 'error';
  else if (n==0) return '';
  else{
    for (let i=0; i < n; i++){
        str+=this;
  }
    return str;
}
}


---

class Shape {
  constructor (tipo){
    this.type = tipo;
  }
  
  getType = function() {
    return 'El tipo es ' + this.type;
  }
}


class Triangle extends Shape {
  constructor (a,b,c) {
    super();
    this.type = 'Triangle';
    this.a = a;
    this.b = b;
    this.c = c;
  }
  getPerimeter = function(){
    return (this.a + this.b + this.c);
  }
}

class Circle extends Shape {
  constructor (diam) {
    super();
    this.type = 'Circle';
    this.diam = diam;
  }
  getPerimeter = function(){
    return (this.diam * 3.1416);
  }
}

class Square extends Shape {
  constructor (b, h) {
    super();
    this.type = 'Square';
    this.base = b;
    this.altura = h;
  }
  getPerimeter = function(){
    return (2 * this.base + 2 * this.altura);
  }
}

let equi = new Triangle(2,2,4);
let c = new Circle(10);

c.getPerimeter();

equi.getPerimeter();