// npm install prompt-sync
const prompt = require('prompt-sync')();

console.log("\n Calculadora de partidas Rankeadas! \n")

let avancar = true

while (avancar){
    let vitorias = parseInt(prompt('Quantas vitórias o jogador teve: '))
    let derrotas = parseInt(prompt('Quantas Derrotas o jogador teve: '))
    niveis = Calcular(vitorias,derrotas)
    console.log("O Herói tem de saldo de " + niveis[0] + " e está no nível de " + niveis[1])
    console.log("\nVoce quer calcular o saldo novamente? (Digite 'S' para sim, qualquer outra para sair)")
    let escolha = prompt('Escolha: ')
    if (escolha == 'S'){
        avancar = true
    }
    else {
        avancar = false
    }
}

function Calcular(vit, der){
    resultado = vit - der
    let saldo = []
    saldo.push(resultado.toString())
    if (saldo <= 10){
        saldo.push("Ferro")
        return saldo
    }
    else if (saldo > 10 && saldo <= 20){
        saldo.push("Bronze")
        return saldo
    }
    else if (saldo > 20 && saldo <= 50){
        saldo.push("Prata")
        return saldo
    }
    else if (saldo > 50 && saldo <= 80){
        saldo.push("Ouro")
        return saldo
    }
    else if (saldo > 80 && saldo <= 90){
        saldo.push("Diamante")
        return saldo
    }
    else if (saldo > 90 && saldo <= 100){
        saldo.push("Lendario")
        return saldo
    }
    else {
        saldo.push("Imortal")
        return saldo
    }
}



