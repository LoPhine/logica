// Crie um programa que peça ao usuário o nome e a idade de n pessoas e os imprima na
// tela (EX.: “O nome digitado foi: Robson”.). O programa deve ser interrompido quando o
// usuário digitar o nome “Final”. No final, o programa deve imprimir o número de usuários
// que foram cadastrados no total.
var rs = require('readline-sync');
var i = 0;

while(true){
    var name = rs.question("Digite seu nome: ");
    var age = rs.question("Digite sua idade: ");
    
    if(name == "Final"){
        break
    }else{
        console.log("O nome digitado foi: "+ name)
    }
    i++
}

console.log("Foram cadastrados " + i + " usúarios.");