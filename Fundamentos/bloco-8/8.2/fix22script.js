const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (names) => {
  nomeCinco = names.find((name) => name.length === 5);
  return nomeCinco;
  
}

console.log(findNameWithFiveLetters(names));