// Fazer um algoritmo que receba 5 números e mostra o produto dos ímpares e
// a soma dos pares
// EX: valores fornecidos 1,2,3,4,5
// Impares -> 1 * 3 * 5 = 15
// Pares -> 2 = 4 = 6
// O programa imprime :
// Produtos dos impares : 15
// Soma dos pares : 6

var rs = require('readline-sync');
var cont = 0
var impar = 1
var par = 0

while(cont < 5){
    var num = rs.questionInt("Digite um número: ")
    if(num % 2 == 0){
        par = par + num
    }else{
        impar = impar * num
    }
    cont ++
}

console.log("O produto dos ímpares é " + impar)
console.log("A soma dos pares é " + par)