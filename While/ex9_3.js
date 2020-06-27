// Faça um algoritmo que receba uma palavra e imprima ela ao contrário.
// EX: usuário informou BANANA
// Algoritmo imprime:
// ANANAB


var rs = require('readline-sync')
var word = rs.question("Digite uma palavra: ").toUpperCase(0)

var i = word.length

while(i >= 0){
    console.log(word.charAt(i))
    i--
}