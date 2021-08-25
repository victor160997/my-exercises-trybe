const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  let arrayFinal = [];
  let res = arrays.reduce((result, array) => {
    array.forEach((valor) => arrayFinal.push(valor));
  }, arrayFinal);
  return arrayFinal;
}

//console.log(flatten());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);