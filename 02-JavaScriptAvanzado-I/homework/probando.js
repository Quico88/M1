1

x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // imprime 10
  console.log(a); // 8
  var f = function(a, b, c) {
    b = a;
    console.log(b); // imprime 8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // imprime 9
}
c(8,9,10);
console.log(b);  // 10
console.log(x);  //1

---

//execution
console.log(bar); //undefined
console.log(baz); //not defined
foo(); // Hola!
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

/* creation phase

function foo(){...}
var bar:
*/
---

//execution
var instructor = "Tony";
if(true) {
    var instructor = "Franco"; //contexto sigue siendo global porque uso 'var'. Si usara let, creo otra variable en contexto del bloque
}
console.log(instructor); // Franco

/*
creation phase

var instructor = undefined;
*/

---

/*
creation phase
instructor = undefined

  contexto IIFE
    instructor = undefined

*/

//execution
var instructor = "Tony";
console.log(instructor); // Tony
(function() {
   if(true) {
      var instructor = "Franco"; 
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony (Franco existió solo en la función)

/*
creation phase
  instructor = undefined;
  pm X = No hay hoisting con let

*/
//execution
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash"; // sobrescribe variable global
    let pm = "Reverse Flash"; // crea nueva variable local
    console.log(instructor); // The Flash
    console.log(pm); // Reverse Flash
}
console.log(instructor); // The flash
console.log(pm); // Franco

---

6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // Nan
7 / 0 // Infinity
{}[0] // [0]
parseInt("09") // 9
5 && 2 // 2  t1 && t2 -  t2 
2 && 5 // 5 t1 && t2 -  t2 
5 || 0 // 5 t || f  - t
0 || 5 // 5 f || t  - t
[3]+[3]-[10] // '3' + '3' - '10' = 33 -10 = 23
3>2>1 // t > 1 // false, true == 1 pero true !== 1
[] == ![]

---

/*
creation phase
  test {...}
    contexto test
      var a = undefined;
      function foo {...}
    
*/

//execution
function test() { 
  console.log(a); // undefined
  console.log(foo()); // 2

  var a = 1;
  function foo() {
     return 2;
  }
}

test(); // crea nuevo contexto de ejecucion

---

/*
creation phase

var snack
function getFood {...}

  getFood
     food = false 
     var snack = undefined

*/

// execution
var snack = 'Meow Mix';

function getFood(food) {
    if (food) { // no entra
        var snack = 'Friskies'; 
        return snack;
    }
    return snack; // undefined
}

getFood(false); // ejecuto y creo nueva instancia de getfood

---

/*creation 
  var fullname = undefined
  var obj = undefined
  var test = obj.prop.getFullname

    obj -- this = obj
    obj.fullname = natalia...
    obj.pro {
        this = obj.prop
        obj.prop.fullname = aurelio
        obj.prop.getfullname = {}
    }
          
    }

*/

//execution phase
var fullname = 'Juan Perez';
var obj = {                  //crea instancia
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio de Rosa

var test = obj.prop.getFullname; // Juan Perez

console.log(test());