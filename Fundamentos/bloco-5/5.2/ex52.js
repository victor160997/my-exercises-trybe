// ex1
let bodyChild = document.querySelector('body');
let adcTitleH1 = document.createElement('h1');
adcTitleH1.innerText = 'Exercício 5.2 - JavaScript DOM';
bodyChild.appendChild(adcTitleH1);

//ex2
let adcDivMainContent = document.createElement('div');
adcDivMainContent.className = 'main-content';
bodyChild.appendChild(adcDivMainContent);

//ex3
let divChildBody = document.querySelector('.main-content');
let divChildMainContent = document.createElement('div');
divChildMainContent.className = 'center-content';
divChildBody.appendChild(divChildMainContent);

//ex4
let divCenterContent = document.querySelector('.center-content');
let paragraph = document.createElement('p');
paragraph.innerHTML = 'Essa é minha reslução do exercício 4, <strong>APRECIEM!</strong>';
divCenterContent.appendChild(paragraph);

//ex5
let leftContente = document.createElement('div');
leftContente.className = 'left-content';
divChildBody.appendChild(leftContente);

//ex6
let rightContent = document.createElement('div');
rightContent.className = 'right-content';
divChildBody.appendChild(rightContent);

//ex7
let img = document.createElement('img');
img.className = 'small-image';
document.querySelector('.left-content').appendChild(img);
document.querySelector('.small-image').src = 'https://picsum.photos/200 ';

//ex8
let UList = document.createElement('ul');
document.querySelector('.right-content').appendChild(UList);
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let index = 0; index < numbers.length; index += 1){
    let num = numbers[index];
    switch(num){
        case 1:
            let um = document.createElement('li');
            um.innerText = 'Um'
            UList.appendChild(um);
            break;

        case 10:
        let dez = document.createElement('li');
        dez.innerText = 'dez'
        UList.appendChild(dez);
        break;

        case 9:
            let nove = document.createElement('li');
            nove.innerText = 'nove'
            UList.appendChild(nove);
            break;

        case 2:
            let dois = document.createElement('li');
            dois.innerText = 'Dois'
            UList.appendChild(dois);
            break;
        
        case 3:
            let tres = document.createElement('li');
            tres.innerText = 'Três'
            UList.appendChild(tres);
            break;

        case 4:
            let quatro = document.createElement('li');
            quatro.innerText = 'quatro'
            UList.appendChild(quatro);
            break;

        case 5:
            let cinco = document.createElement('li');
            cinco.innerText = 'Cinco'
            UList.appendChild(cinco);
            break;

        case 6:
            let seis = document.createElement('li');
            seis.innerText = 'seis'
            UList.appendChild(seis);
            break;

        case 7:
            let sete = document.createElement('li');
            sete.innerText = 'sete'
            UList.appendChild(sete);
            break;

        case 8:
            let oito = document.createElement('li');
            oito.innerText = 'oito'
            UList.appendChild(oito);
            break;
        }
    }

//ex9
let h31 = document.createElement('h3');
h31.innerText = 'Primeiro h3';
document.querySelector('.main-content').appendChild(h31);
let h32 = document.createElement('h3');
h32.innerText = 'Segundo h3';
document.querySelector('.main-content').appendChild(h32);
let h33 = document.createElement('h3');
h33.innerText = 'Terceiro h3';
document.querySelector('.main-content').appendChild(h33);