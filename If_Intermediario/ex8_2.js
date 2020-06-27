// Faça um algoritmo que receba um texto de entrada e diga se a primeira letra é
// maiúscula ou não

var rs = require('readline-sync')
var txt = rs.question("Digite um texto: ")

if(txt[0] === txt[0].toUpperCase(0)){
    console.log("A primeira letra está em maiúscula.")
}else{
    console.log("A primeira letra está em minúscula.")
}