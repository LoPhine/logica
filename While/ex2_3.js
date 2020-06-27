// Criar um algoritmo que realize a multiplicação de dois números maiores que zero SEM
// usar o operador de multiplicação (*)

var rs = require('readline-sync')
var n1 = rs.questionInt("Entre com um número: ")
var n2 = rs.questionInt("Entre com o mutiplicador: ")

var i = 0
var result = 0

while(i < n1){
    result = result + n2
    i++
    console.log(result)
}