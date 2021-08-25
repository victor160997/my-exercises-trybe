const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  nomes = names.join('').split('')
  let vezes = nomes.reduce((acc, letra) => {
    if(letra === 'a' || letra ==='A'){
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  return vezes
}

//console.log(containsA());

assert.deepStrictEqual(containsA(), 20);