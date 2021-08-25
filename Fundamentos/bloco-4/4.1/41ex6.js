let peca = 'REI';
let pecaMinusculo = peca.toLowerCase();

switch(pecaMinusculo) {
    case 'bispo':
        console.log("Anda na diagonal");
        break;
    case 'torre':
        console.log("anda na vertical");
        break;    
    case 'peão':
        console.log("anda apenas um passo por vez e a frente");
        break;
    case 'rainha':
        console.log("movimento livre para qualquer direção");
        break;
    case 'rei':
        console.log("movimento livre para qualquer direção, porém só de uma em uma casa");
        break;
    case 'cavalo':
        console.log("anda em movimento d L");
        break;
    default:
        console.log('não é peça');
}