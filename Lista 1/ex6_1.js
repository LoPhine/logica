// Tendo como entrada a altura e o sexo codificado da seguinte forma: 
// 	Valor 1 para feminino
// 	 Valor 2 para masculino
// de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes 
// Fórmulas: 
// - para homens: (72.7 * Altura) – 58 
// - para mulheres: (62.1 * Altura) – 44.7 

// var rs = require('readline-sync');
// var sexo = rs .question("Qual o seu sexo?");
// var altura = rs .questionInt("Qual a sua altura?")

// if(sexo == "M"){
//     console.log(" Seu peso ideal é " + (72.7 * parseFloat(altura)) - 58)
// }else if(sexo == "F") {
//     console.log(" Seu peso ideal é " + (62.1 * parseFloat(altura)) - 44.7)
// }


// var totalDivida = 1400; 


// function atualizarDivida(valorRecebido) { 
// totalDivida -= valorRecebido; 
// return totalDivida; 
// } 

// for (var i = 0; i < 12; i++) { 
// atualizarDivida(70); 
// } 

// console.log(totalDivida)



class Carro {
    constructor(nome, cor){
        this.nome = nome
        this.cor = cor
    }
}
var corola = new Carro("Toyota Corola", "branco")
var civic = new Carro("Honda civic", "cinza")

if(corola.cor === civic.cor){
    console.log("São da mesma cor")
}else {
    console.log("São diferentes")
}