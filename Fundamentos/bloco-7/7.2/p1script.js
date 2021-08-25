/* const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1); */

function criaObjeto(chave, valor){

  const objeto = {

  };
  let newKey = chave;
  const newValue = valor;
  objeto[newKey] = newValue
  return objeto;
}

console.log(criaObjeto('Nome', 'Victor'));