// Crie um programa que peça o usuário n números e, quando o usuário digitar -1, imprima
// o maior e o menor, sem levar em consideração o -1

var rs = require('readline-sync');
var i = 0;
var valorSaida = -1;
var numero = 0;
var menorNumero = 0;
var maiorNumero = 0;

while (numero != valorSaida) {

    numero = rs.questionInt('Digita o Número ' + i + ' ')

    if (numero != valorSaida) {
        if (i == 0) {
            menorNumero = numero;
            maiorNumero = numero;
        } else {
            if (numero <= menorNumero) {
                menorNumero = numero;
            } else if(numero >= maiorNumero){
                maiorNumero = numero;
            } 
        }
    }

    i++;
}

console.log('O maior numero é = ' + maiorNumero);
console.log('O menor numero é = ' + menorNumero);
