const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 18 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return people.every((person) => person.age >= 18);
}

//console.log(verifyAges(people, 18));

if(verifyAges(people, 18) === false){
  console.log('Vcs estão presos por dar bebida a um menor!');
} else {
  console.log('Vocês estão dentro da lei :))');
}