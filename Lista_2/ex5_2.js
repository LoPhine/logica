// Faça um programa que calcule e imprima o valor em reais de cada kw, o valor
// em reais a ser pago o novo valor a ser pago por essa residência com um
// desconto de 10%. Dado: 100 kilowatts custa 1/7 do salario minimo. quantidade
// de kw gasto por residência.

var rs = require('readline-sync')
var quantidade = rs.question(" Digite a quantidade de Kw da residência ")

var salariomin = 1045
var cemkw = (salariomin / 7).toFixed(2)
var umkw = (cemkw / 100).toFixed(2)
console.log("o valor de 1 kw é R$" + umkw)
var kwdes = (umkw * 0.9).toFixed(2)
console.log("O valor do kw com 10% de desconto é R$" + kwdes)
var valorpago = (quantidade * kwdes).toFixed(2)
console.log("O valor a ser pago pela sua residência é R$" + valorpago)