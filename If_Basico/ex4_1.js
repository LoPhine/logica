// As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. 
// Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra

var rs = require('readline-sync');
var numeroMacas = rs .questionInt("Quantas maçãs você vai levar?")

if (numeroMacas < 12  ){
    console.log("R$" + (numeroMacas * 0.30).toFixed(2));
} else console.log("R$" + (numeroMacas * 0.25).toFixed(2));


