// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'mamão', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'chocolate', 'granola'];

const fruitSalad = (fruit, additional) => {
  let sobremesa = [...specialFruit, ...additionalItens];
  return sobremesa;
};

console.log(fruitSalad(specialFruit, additionalItens));