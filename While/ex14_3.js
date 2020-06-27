// Fazer um algoritmo que receba 8 idades do usuário e no final ele imprimir
// qual é a menor idade.

var rs = require('readline-sync')
var cont = 0
numeros = 150

while(cont < 8){
    var idade = rs.questionInt("Digite sua idade: ")
    if ( idade > 0){
        if(idade < numeros){
           var numeros = idade;
       }
       }
       cont++    
   }    
   console.log(numeros)

//    NÃO ENTENDI