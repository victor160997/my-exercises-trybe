const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (numbers) => {
  const divNumber = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
  return divNumber;
}

console.log(findDivisibleBy3And5(numbers));