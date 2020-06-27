// Fazer um algoritmo que recebe 15 números de entrada e calcule a média dos
// números fornecidos.
var rs = require('readline-sync')
var cont = 0
var i = 0

while(cont < 15){
    var num = rs.questionInt("Digite um número: ")
    i = i + num
    cont++
}
console.log(i / 15)