// Escreva um programa que apresente quatro opções:
// (a) consulta saldo, (b) saque e (c) depósito e (d) sair.
// O saldo deve iniciar em R$ 0,00.
// A cada saque ou depósito o valor do saldo deve ser atualizado. Exemplo:

// Caso o usuário tente sacar mais do que possui em conta, trazer uma mensagem de erro
// e retornar à tela de opções

var rs = require('readline-sync')
var saldo = 0

while (true) {
    var toDo = rs.question("Digite (a) consulta saldo, (b) saque e (c) depósito e (d) sair. ").toLowerCase()
    if (toDo == "d") {
        break
    } else if (toDo == "a") {
        console.log("Seu saldo é de R$" + saldo)
    } else if (toDo == "c") {
        var deposito = rs.questionInt("digite o valor que deseja depositar: ")
        var total = saldo + deposito
        console.log("Seu saldo é de R$ " + total)
    } else if( toDo == "b"){
        var saque = rs.question("Digite o valor que deseja sacar: ")
        var total = saldo - saque
            if (saque > saldo) {
                console.log("Saldo insulficiente")
            } else {
                console.log("Seu saldo é de R$ " + saldo)
            }
        console.log("Seu saldo é de R$" + total)
    }  

}
