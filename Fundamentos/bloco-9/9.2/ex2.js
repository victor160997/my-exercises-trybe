const promise = async () => { 
  return new Promise((resolve, reject) => {
  let array = [];
  for (index = 0; index <= 9; index += 1) {
    array.push(Math.floor(Math.random().toFixed(2)*50) * Math.floor(Math.random().toFixed(2)*50));
  }
  let soma = array.reduce((acc, cv) => acc + cv, 0);

  if( soma < 8000) {
    return resolve(soma);
  } else {
    reject(soma);
  }
});
}
promise()
await console.log('resolvido'+soma);






/* let array = [];
  for (index = 0; index <= 9; index += 1) {
    array.push(Math.floor(Math.random().toFixed(2)*50) * Math.floor(Math.random().toFixed(2)*50));
  }
  let soma = array.reduce((acc, cv) => acc + cv, 0);
console.log(array);
console.log(soma); */