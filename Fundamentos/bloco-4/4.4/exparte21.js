let word = 'lalalal';

function verificaPalindrome(word){
    let reverseWord = word.split('').reverse().join('');
    if(word === reverseWord){
        return true;
    } else {
        return false;
    }
}
console.log(verificaPalindrome(word));

