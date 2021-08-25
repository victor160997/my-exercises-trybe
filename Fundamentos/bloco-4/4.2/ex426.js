let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let num = 0;
let impares = [];
let pares = [];

for( let index = 0; index < numbers.length; index += 1){
    num = numbers[index] % 2;
    if(num === 1) {
        impares.push(numbers[index]);
    } 
}
if(impares.length > 0){
    console.log(impares.length + ' números ímpares');
} else {
    console.log('nenhum valor ímpar encontrado');
}


