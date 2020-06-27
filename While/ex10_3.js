// Faça um algoritmo que receba um número e imprima todos seus divisores.
// EX : usuário informou 21
// O algoritmo imprime :
// 1
// 3
// 7
// 21
// DICA: Você pode precisar usar a operação de módulo (a%b)

var rs = require('readline-sync')
var num = rs.questionInt("Digite um número para discobir seus divisores: ")
var cont = num
var divisor = ""
while(cont > 0){
    if(num % divisor == 0){
        console.log(divisor)
    }
    divisor ++
    cont--;   
}
    console.log(num)