let array = [2, 3, 6, 27, 45, 1];
let oMaiorAteAgora = array[0];
let tam = array.length;

function larggestIndex(array){
    for(let index = 1; index < tam; index += 1){
        if(array[index] > oMaiorAteAgora){
            oMaiorAteAgora = array[index];
        }
    }
    return array.indexOf(oMaiorAteAgora);
}
console.log(larggestIndex (array));