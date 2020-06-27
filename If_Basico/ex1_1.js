// Escreva um programa para ler o ano de nascimento de uma pessoa e 
// escrever uma mensagem que diga se ela poderá ou não votar este ano 
// (não é necessário considerar o mês em que ela nasceu).

var rs = require('readline-sync');
var idade = rs .question("Qual a idade?");

if (idade < 16){

 console.log("Vai jogar video game")

 }else if (idade > 16 && idade < 18){
      console.log("Você pode votar, mas é melhor não ir")
 } else if(idade > 18 && idade < 65){
      console.log("Você é obrigado a votar, mas não faça merda")
 } else if (idade > 65){
      console.log("Fica em casa velho!")
 }