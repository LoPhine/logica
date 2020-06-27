// Faça um programa para ler dois números inteiros A e B e informar se A é divisível por B.

var rs = require('readline-sync');
var num1 = rs.questionInt("Digite um número: ")
var num2 = rs.questionInt("Digite outro número: ")

if(num1 % num2 == 0){
    console.log("Um é divisivel pelo outro")
}else{
    console.log("Não é divisivel")
}