// Faça um algoritmo que receba uma palavra e imprima cada caractere da palavra em
// uma linha.
// EX: usuário informou MAÇÃ
// O algoritmo imprime:
// M
// A
// Ç
// Ã

var rs = require('readline-sync')
var word = rs.question("Digite uma palavra: ").toUpperCase(0)
var i = 0
   
while(i < word.length){
        console.log(word.charAt(i))
        i++
    }