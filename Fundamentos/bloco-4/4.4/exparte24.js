let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let oMaiorAteAgora = names[0].split('').length;
tam = names.length
let word = names[0];

function maisCaracters (names){
    for(let index = 1; index < tam; index += 1){
        word = names[index].split('');
        if( word.length > oMaiorAteAgora){
            oMaiorAteAgora = word.length;
        }
    }

    return word;
}   
console.log(maisCaracters (names));

