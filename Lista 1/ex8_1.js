// Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é
// Equilátero, Isósceles ou Escaleno.
// Sendo que:
// − Triângulo Equilátero: possui os 3 lados iguais.
// − Triângulo Isóscele: possui 2 lados iguais.
// − Triângulo Escaleno: possui 3 lados diferentes.

var rs = require('readline-sync')
var l1 = rs.questionInt("quantos cm tem o lado 1 do seu triângulo?")
var l2 = rs.questionInt("quantos cm tem o lado 2 do seu triângulo?")
var l3 = rs.questionInt("quantos cm tem o lado 3 do seu triângulo?")

if (l1 == l2 && l2 == l3){
    console.log("É um Triângulo Equilátero")
}else if(l1 == l2 && l2 != l3){
    console.log("É um Triângulo Isóscele")
} else if(l1 != l2 &&  l2 != l3){
    console.log("É um Triângulo Escaleno")
}