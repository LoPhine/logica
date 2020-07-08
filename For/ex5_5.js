// Fazer um programa que calcule e imprima o fatorial de um número fornecido pelo usuário,
// usando o comando For.. Perguntar ao usuário se ele deseja calcular o fatorial de
// outro número e repetir a execução do programa tantas vezes quantas o usuário indicar.
// Exemplo de tela de saída:
var rs = require('readline-sync')


for(var i = 1; i = true; i++ ){
    var cont = rs.question("Deseja continuar? [s/n] ")
    if(cont === "s"){
        var num = rs.questionInt("Digite um número para calcular fatorial: ")
        var fator = 1
        for(var i = 1; i <= num; i++ )
        fator = i * fator  
        console.log(`O fatorial de ${num} é ${fator}`)
    }else{
        break
    }

}