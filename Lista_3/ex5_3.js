// Faça um programa que calcule a potência (potenciação) de um número.
// Para isso ele deve receber dois números de entrada: o primeiro número é a base da
// potência, o segundo número será a potência.
// EX: usuário inseriu 2 para base e 4 para potência.
// O programa imprime :
// 16
// Lembrando: 2

// 4 = 2*2*2*2


var rs = require('readline-sync')
var base = rs.questionInt("Digite um número para a base da potência: ")
var pot = rs.questionInt("Digite um número para a potência: ")

i = 1
cont = base

while( i < pot){
    
    cont =  cont * base
    i++
}

console.log(cont)