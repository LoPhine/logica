// Faça um programa que pergunta ao usuário :
// “Insira 0 para sair ou qualquer outra tecla para o continuar.”
// Se o usuário inserir 0 o programa encerra.
// Se o usuário inserir qualquer outra coisa o programa pergunta novamente :
// “Insira 0 para sair ou qualquer outro número para o continuar.”
// Até o usuário sair

var rs = require('readline-sync')
var continuar = rs. questionInt("Insira 0 para sair ou qualquer tecla para continuar: ")

var i = 1

if(continuar == 0){
    console.log("Programa encerrado")
}while(continuar >= 1){
  continuar =  rs.questionInt("Insira 0 para sair ou qualquer tecla para continuar: ")
    
    if(continuar == 0){
        console.log("Programa encerrado")
    }
}