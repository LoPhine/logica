// Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada
// entre
// estas notas (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este
// procedimento para uma turma composta por cinco alunos, usando o comando For.
// Exemplo de tela de saída:
// Entre com o nome do aluno: João da Silva
// Entre com o grau A: 5.0
// Entre com o grau B: 6.0
// O aluno João da Silva tem uma média:5.7

var rs = require('readline-sync');


for(var i = 0; i < 5; i++ ){
    var nome = rs.question("Digite o nome do aluno: ")
    var p1 = rs.questionFloat("Entre com o grau A: ")
    var p2 = rs.questionFloat("Entre com o grau B: ")

    var peso1 = p1 * 0.30
    var peso2 = p2 * 0.70
    var total = (peso1 + peso2).toFixed(2)

    console.log(`O aluno ${nome} tem uma média de ${total}`)
}