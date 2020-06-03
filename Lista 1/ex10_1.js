// Faça um programa que receba três notas, calcule e mostre a média aritmética entre
// elas, caso a média aritmética seja:
// Media maior ou igual a 7 imprimir :
// ALUNO APROVADO
// Media menor que 7 imprimir :
// ALUNO REPROVADO

var rs = require('readline-sync')
var nota1 = rs.questionInt("Qual a primeira nota? ")
var nota2 = rs.questionInt("Qual a segunda nota? ")
var nota3 = rs.questionInt("Qual a terceira nota? ")

var media = (nota1 + nota2 + nota3) / 3

if(media >= 7.00){
    console.log("Parabéns! Você foi aprovado")
}else{
    console.log("Estude mais e tente mais uma vez.")
}