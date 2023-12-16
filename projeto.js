let nomeHeroi = "Mulher Maravilha "
let quantidadeDeXP = 2500;
let nivelHeroi = " "


if (quantidadeDeXP <= 1000) {
    nivelHeroi = "Ferro"

} else if (quantidadeDeXP>=1001 && quantidadeDeXP<=2000) {
    nivelHeroi = "Bronze"

} else if (quantidadeDeXP>=2001 && quantidadeDeXP<=5000) {
    nivelHeroi = "Prata"

} else if (quantidadeDeXP>=6001 && quantidadeDeXP<=7000) {
    nivelHeroi = "Ouro"

} else if (quantidadeDeXP>=7001 && quantidadeDeXP<=8000) {
    nivelHeroi = "Platina"

} else if (quantidadeDeXP>=8001 && quantidadeDeXP<=9000) {
    nivelHeroi = "Ascendente"

} else if (quantidadeDeXP>=9001 && quantidadeDeXP<=10000) {
    nivelHeroi = "Imortal"

} else if (quantidadeDeXP >= 10001) {
    nivelHeroi = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + "está no nível " + nivelHeroi)
