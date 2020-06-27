// Faça um programa que leia o valor de um produto X e leia a quantidade de reais
// de um cofrinho que contenha:
// a. N moedas de 1 real;
// b. N moedas de 50 centavos;
// c. N moedas de 25 centavos;
// d. N moedas de 10 centavos;
// e. N moedas de 5 centavos;
// f. N moedas de 1 centavos.

// O programa deverá verificar se o total de reais que contém no cofrinho é o
// bastante para compra o produto X e imprimir se possui ou não valor suficiente

var rs = require('readline-sync')

var real1 = 10
var centavos50 = 50
var centavos25 = 40
var centavos10 = 90
var centavos5 = 5
var centavos1 = 4

var meuCofrinho = (real1 + (centavos50/2) + (centavos25/4) + (centavos10/10) + (centavos5/20) + (centavos1/100))
console.log(meuCofrinho)
var produto = rs.question("Qual o valor do produto? ")

if(produto > meuCofrinho){
    console.log("Você não tem dinehiro pra isso, trabalhe mais")
}else if (produto <= meuCofrinho){
    console.log("Você tem dinehiro pra isso")
}





