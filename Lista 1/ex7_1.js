// Escreva um programa para ler o número de lados de um polígono regular e a medida do
// lado (em cm). Calcular e imprimir o seguinte:
// − Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor da área
// − Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área.
// − Se o número de lados for igual a 5 escrever PENTÁGONO.

var rs = require('readline-sync');
var lados = rs.questionInt("Quantos lados tem o seu polígono? ")
var medida = rs.question("Qual a medida do lado em cm? ")

if(lados == 3){
    console.log("É um triângulo!")
    var cont1 = Math.pow(medida,2) * Math.sqrt(3) / 4
    console.log("Seu triângulo tem área de " + cont1.toFixed(2) + " cm^2.")
}else if (lados == 4){
    console.log("É um quadrado!")
    var cont1 = medida * medida
    console.log("Seu quadrado tem área de " + cont1 + " cm^2.")
}else if(lados == 5){
    console.log("É um pentágono")
    var cont1 = 5 * Math.pow(medida,2) / (4 * Math.sqrt(5 - 2 * Math.sqrt(5)))
    console.log("Seu pentágono tem área de " + cont1.toFixed(2) + " cm^2.")
}else{
    console.log("Digite um número de 3 a 5")
}