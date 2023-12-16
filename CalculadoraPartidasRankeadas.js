

function calculaSaldo(quantidadeVitorias, quantidadeDerrotas) {
    
    let saldoVitorias = quantidadeVitorias - quantidadeDerrotas

    return saldoVitorias
}


function identificaNivelHeroi(saldoVitorias) {

    let nivelHeroi

    if (saldoVitorias <= 10) {
        nivelHeroi = "Ferro"
    
    } else if (saldoVitorias>=11 && saldoVitorias<=20) {
        nivelHeroi = "Bronze"
    
    } else if (saldoVitorias>=21 && saldoVitorias<=50) {
        nivelHeroi = "Prata"
    
    } else if (saldoVitorias>=51 && saldoVitorias<=80) {
        nivelHeroi = "Ouro"
    
    } else if (saldoVitorias>=81 && saldoVitorias<=90) {
        nivelHeroi = "Diamante"
    
    } else if (saldoVitorias>=91 && saldoVitorias<=100) {
        nivelHeroi = "Lendário"
    
    } else if (saldoVitorias >= 101) {
        nivelHeroi = "Imortal"
    }

    return nivelHeroi
}





let quantidadeVitorias = 20
let quantidadeDerrotas = 15

let saldoVitorias = calculaSaldo(quantidadeVitorias, quantidadeDerrotas)
let nivelHeroi = identificaNivelHeroi(saldoVitorias)


console.log(`O Herói tem de saldo de ${saldoVitorias} vitórias e está no nível de ${nivelHeroi}`)
