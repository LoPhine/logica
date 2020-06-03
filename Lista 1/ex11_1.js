// Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja
// negativo, imprimindo o resultado.

var rs = require('readline-sync');
var num = rs.questionInt("Digite um número: ")

if(num < 0){
    var cont = num * 3
    console.log("É negativo, e seu triplo é " + cont)
}else{
    var cont = num * 2
    console.log("É positivo, e seu dobro é " + cont)
}