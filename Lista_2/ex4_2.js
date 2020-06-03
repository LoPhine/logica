// Uma empresa abriu uma linha de crédito para os funcionários.
// O valor da prestação não pode ultrapassar 30% do salário.
// Faça um programa que receba o salário, o valor do empréstimo e o número de
// prestações e informe se o empréstimo pode ser concedido. Nenhum dos valores
// informados pode ser zero ou negativo.

var rs = require('readline-sync')
var salario = rs.questionInt("Qual o seu salario? ")
var valor = rs.questionInt("Quanto você quer de empréstimo? ")

if(valor > salario * 0.3){
    console.log("Nós não podemos te conceder esse emprétimo, tente um valor menor.")
}else{
    console.log("Seu empréstimo foi aprovado!")
    var parcelas = rs.questionInt("Em quantas vezes você deseja parcelar o seu empréstimo? ")
    var result = valor / parcelas
    console.log("Seu empréstimo ficou em " + parcelas + " de " + result )
}