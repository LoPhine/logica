function menorNum (a,b,c,d,e){
    let menor = a
    const numeros = [a,b,c,d,e]
    numeros.forEach(valor => {
        if(valor < menor){
            valor = menor
        }
        return menor
    })
}

module.exports = menorNum