// Faça um programa que recebe um número e imprima todos os números pares de 0 até
// o número inserido.
// Ex: usuário inseriu 8
// O programa imprime
// 0
// 2
// 4
// 6
// 
var rs = require('readline-sync')
var num = rs.questionInt("Digite um número: ")

var i = 1
var cont = 0

while (cont <= num ){
    console.log(i)
    i = i+1
    cont ++
    }