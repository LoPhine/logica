// Elabore um algoritmo que calcule o que deve ser pago por um produto,
// solicitando o preço da etiqueta do produto e a escolha da condição de
// pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de
// pagamento escolhida e efetuar o cálculo adequado. Código Condição de
// pagamento
// - 1 À vista em dinheiro ou cheque, recebe 10% de desconto
// - 2 À vista no cartão de crédito, recebe 15% de desconto
// - 3 Em duas vezes, preço normal de etiqueta sem juros
// - 4 Em duas vezes, preço normal de etiqueta mais juros de 10%

var rs = require('readline-sync')
var preco = rs.question("Qual o preço do produto? ")
var modo = rs.question("Como deseja pagar? à vista ou parcelado? Digite V para Á vista e P para parcelado ").toUpperCase(0)
var forma = rs.question(" Dinehiro, cheque ou cartão de crédito? Digite D para dinheiro, C para cheque ou CC para cartão de crédito ").toUpperCase(0)

if(modo === "V" && forma === "D" || forma === "C"){
    var total = preco * 0.9
    console.log("Você recebeu 10% de desconto, o valor a ser pago é R$" + total)
}else if(modo == "V" && forma == "CC"){
    var total = preco * 0.85
    console.log("Você recebeu 15% de desconto, o valor a ser pago é R$" + total)
}else if(modo == "P" && forma == "CC"){
    var parc = preco / 2
    console.log("O valor ficou em 2 vezes de R$" + parc + " com o total de R$" + preco  )
}else if(modo === "P" && forma === "C"){
    var total = (preco + (preco * 0.1))
    var parc = total / 2
    console.log("O valor ficou em 2 vezes de R$" + parc + " com o total de R$" + total)
}


// Resolver condição 4 dps