let numbers = [5, 9, 3, 19, 300, 8, 100, 2, 35, 27];
let menor = numbers[1];

for ( let i = 0; i < numbers.length; i+=1 ){
    if(numbers[i] < menor){
        menor = numbers[i];
    }
}
console.log(menor);