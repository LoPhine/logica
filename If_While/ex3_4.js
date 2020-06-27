// (OBRIGATÓRIO) Escreva um programa javascript para escrever o seguinte padrão na
// tela, com N linhas:
// *
// * *
// * * *
// * * * *
// * * * * *
// Onde N é um número maior que zero determinado pelo usuário (no exemplo, N=5).

var rs = require('readline-sync');
var num = rs.questionInt("Digite um número maior que zero: ")
var i = 0
var aparece = " "

while(i < num){
    aparece = aparece + "*"
    console.log(aparece)
    i++
}


