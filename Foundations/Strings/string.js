const name = 'Miliotte'

console.log(name.charAt(4))
//Irá mostra o quarto caractere da cont que (o)
console.log(name.charCodeAt(4))
//Usado para identificar o codigo do caractere

console.log('Ricardo '.concat(name).concat("!"))
//o concat é usado para concatenar ou seja juntar 

console.log(name.replace('e', '3'))
//o replace é usado para subistuir, exemplo: Miliotte passará a ser: Miliotte3

console.log('Ricardo,Miliotte,Cruz'.split(','))
//o split é usado para gerar um array.Ele irá retonar ['Ricardo','Miliotte','Cruz']
