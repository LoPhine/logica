// Escreva um programa que simule uma partida de pedra papel e tesoura.  Deve ser solicitado o nome do jogador A e do jogador B. Após isso o programa deve pedir a jogada do jogador A e a jogada do jogador B. No final o programa deve imprimir quem ganhou. Dicas:  Papel ganha de pedra Tesoura ganha de papel Pedra ganha de tesoura 
 
// Para não exibir a jogada do jogador utilize o comando de “password” no readline-sync 

var rs = require('readline-sync');
var jogadorA = rs.question("Digite seu nome: ")
var jogadorB = rs.question("Digite seu nome: ")
var papel = 1
var pedra = 2
var tesoura = 3
var jogadaA
var jogadaB



while(true){
    jogadaA = rs.questionInt(`Escolha uma das opcoes, ${jogadorA}:\n[1] Papel\n[2]Pedra\n[3]Tesoura\n`, {hideEchoBack: true})
    jogadaB = rs.questionInt(`Escolha uma das opcoes, ${jogadorB}:\n[1] Papel\n[2]Pedra\n[3]Tesoura\n`, {hideEchoBack: true})
    if(jogadaA == papel){
        if(jogadaB == papel){console.log('Deu empate!')}
        else if(jogadaB == pedra){console.log(jogadorA + ' venceu!')}
        else if(jogadaB == tesoura){jogadorB + ' venceu!'}
        else{console.log(`A jogada do ${jogadorB} é invalida!`)}
    }
    else if(jogadaA == pedra){
        if(jogadaB == papel){console.log(jogadorB + ' venceu!')}
        else if(jogadaB == pedra){console.log('Deu empate')}
        else if(jogadaB == tesoura){jogadorA + ' venceu!'}
        else{console.log(`A jogada do ${jogadorB} é invalida!`)}
    }
    else if(jogadaA == tesoura){
        if(jogadaB == papel){console.log(jogadorA + ' venceu!')}
        else if(jogadaB == pedra){console.log(jogadorB + ' venceu')}
        else if(jogadaB == tesoura){'Deu empate'}
        else{console.log(`A jogada do ${jogadorB} é invalida!`)}
    }
    else{
        console.log(`A jogada do ${jogadorA} é invalida!`)
    }

jogo = rs.keyInYN('Desejam jogar novamente? ')
 if(jogo == n){
     break
 }
}
