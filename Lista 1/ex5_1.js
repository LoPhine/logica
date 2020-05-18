// Escreva um programa para ler 3 valores inteiros (considere que não serão lidos valores
//    iguais) e escrevê-los em ordem crescente.


var rs = require('readline-sync');
var n1 = rs .questionInt("Digite o numero 1");
var n2 = rs .questionInt("Digite o numero 2");
var n3 = rs .questionInt("Digite o numero 3");

var numeros = [n1, n2, n3]

function compararNumeros(a, b) {
    return a - b;
}

var ordenados = numeros.sort();

 console.log( numeros.sort(compararNumeros));
