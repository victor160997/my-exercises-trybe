let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont = 0;
let media;

for(let index = 0; index < numbers.length; index += 1){
    cont = cont + numbers[index];
}

media = cont / numbers.length;

console.log('Média é:' + media);