// Faça um programa onde o usuário irá escolhe se que Converte graus Celsius
// para Fahrenheit ou Fahrenheit para Celsius.

var rs = require('readline-sync')
var querOq = rs.question("Digite -C- para converter de Fahrenheit para Celsius ou -F- para conver de Celsius para Fahrenheit ")
var graus = rs.questionInt("Quantos graus? ")

if(querOq == "C"){
    var result = (graus - 32) / 1.8
    console.log(result + " ºC")
}else if (querOq == "F"){
    var result = (graus * 1.8) + 32
    console.log(result + " ºF")
}