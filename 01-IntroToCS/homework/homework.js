'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let str = '';
  let arreglo = (str+num).split('').reverse();
  let decimal = 0;

  for (let i = 0; i < arreglo.length; i++){
      decimal+= Math.pow(2,i)*arreglo[i];
  }
  
  return decimal;

}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = [];
  while (num>0) {
    binario.unshift((num%2));
    num = Math.floor(num/2);
  }
  
  return binario.join('');

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}