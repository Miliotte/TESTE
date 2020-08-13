//maneira de ser escrever um number em javascript

const peso1 = 1.0; 
const peso2 =  Number('2.0');

console.log(peso1 , peso2);
console.log(Number.isInteger(peso1));
//Console para indenficar se é um numero inteiro.(irá retornar TRUE)

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)


console.log(media) //ira retorna a media total
console.log(media.toFixed(2)) //ira retorna apenas duas casas depois do .
console.log(media.toString(2)) //Binario 
console.log(typeof media) 


console.log(7 / 0) //Infinity