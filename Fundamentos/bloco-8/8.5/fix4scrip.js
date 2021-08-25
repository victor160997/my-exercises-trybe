let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

numerosPares = numerosPares.filter((numero) => numero % 2 === 0);
console.log(numerosPares);