// Escreva um programa que passe por todos os números de 1 a 50 e
// para cada um deles imprima na tela se o número é par ou ímpar. Caso o número
// também seja primo, o programa deve dizer que ele é primo. (um número primo é um
// número que só é divisível por ele mesmo e por 1). Dica: Neste exercício você pode
// precisar de ajuda do operador MÓDULO (%). Você também pode precisar criar mais de
// um loop.
// EX.:
// 1 ÍMPAR PRIMO
// 2 PAR PRIMO
// 3 ÍMPAR PRIMO
// 4 PAR
// 5 ÍMPAR PRIMO
// 6 PAR
// 7 ÍMPAR PRIMO
// 8 PAR
// 9 ÍMPAR
// 10 PAR

var num = 0

 while(num <= 50){
     if((num % 2 == 0) && (num % 1 == 0 && num % num == 0)){ //Se ele é par E se ele é primo
     console.log("PAR PRIMO")
    }else if(num % 2 == 0){
        console.log("PAR")
    }else if((num % 2 != 0) && (num % 1 == 0 && num % num == 0)){
        console.log("ÍMPAR PRIMO")
    }else{
        console.log("ÍMPAR")
    }
        num ++
}



// if     (num % 1 == 0 && num % num == 0 && num % 2 == 0){