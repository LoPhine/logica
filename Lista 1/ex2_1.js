// Faça um programa que receba um número via teclado e verifique se este número é par ou ímpar.

var rs = require('readline-sync');
var ultimoNumero = rs .questionInt("Qual o numero?");

if (ultimoNumero % 2 == 1 ){
    console.log("é impar")
}else if (ultimoNumero % 2 == 0){
    console.log("é par");
}