// Tendo como entrada a altura e o sexo codificado da seguinte forma: 
// 	Valor 1 para feminino
// 	 Valor 2 para masculino
// de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes 
// Fórmulas: 
// - para homens: (72.7 * Altura) – 58 
// - para mulheres: (62.1 * Altura) – 44.7 

var rs = require('readline-sync');
var sexo = rs .question("Qual o seu sexo? digite 1 para masculino e 2 para femino ")
var altura = rs .questionFloat("Qual a sua altura? ")


if(sexo == "1"){
   var resultado = (72.7 * altura) - 58
    
}else if (sexo == "2") {
    var resultado = (62.1 * altura) - 44.7
}

console.log(" Seu peso ideal é " + resultado)

