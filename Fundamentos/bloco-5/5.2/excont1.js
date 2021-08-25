// ex 1
document.querySelector('#elementoOndeVoceEsta');
let pai = document.querySelector('#elementoOndeVoceEsta').parentElement;

// ex 2
pai.style.color = 'red';

// ex 3
let filho1 = document.querySelector('#primeiroFilhoDoFilho');
filho1.innerHTML = 'Oi, meu nome é <strong>Victor</strong>!';

// ex 4
document.querySelector('#pai').firstElementChild;

// ex 5
document.querySelector('#elementoOndeVoceEsta').previousElementSibling;

// ex 6
document.querySelector('#elementoOndeVoceEsta').nextSibling;

// ex 7
document.querySelector('#elementoOndeVoceEsta').nextElementSibling;

// ex 8
document.querySelector('#pai').lastElementChild.previousElementSibling;

//part2 ex1
let brother = document.querySelector('#elementoOndeVoceEsta').parentElement;
let brotherElement = document.createElement('div');
brotherElement.innerText = 'Primeiro Exercicio';
brother.appendChild(brotherElement);

//part2 ex2
let brother2 = document.querySelector('#elementoOndeVoceEsta');
let childBrother2 = document.createElement('div');
childBrother2.innerHTML = '<strong>fala meu amigo!</strong>';
childBrother2.id = 'teste';
brother2.appendChild(childBrother2);

//part2 ex3
let firstChild = document.querySelector('#primeiroFilhoDoFilho');
let ex3 = document.createElement('section');
ex3.innerHTML = 'exer. 3';
firstChild.appendChild(ex3);

//part2 ex3
document.querySelector('section').parentElement.parentElement.nextElementSibling








