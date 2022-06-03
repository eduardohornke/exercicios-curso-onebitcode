let nomeNave = prompt("Qual o nome da Sua Nave?")
let velocidadeNave = 0

function mostraMenu() {
    let opcao
    while (opcao != "1" && opcao != "2" && opcao != "3" && opcao != "4") {
        opcao = prompt("O que deseka fazer?\n" +
                       "1 - Acelera a nave em 5km/h\n" +
                       "2 - Desacelerar a nave em 5km/h\n" +
                       "3 - Imprimir dados de bordo\n" +
                       "4 - Sair do programa")
    }
    return opcao
}

function aumentaVelocidade(velocidade) {
    let novaVelocidade = velocidade + 5
    return novaVelocidade
}

function diminuiVelocidade(velocidade) {
    let novaVelocidade = velocidade - 5
    if(novaVelocidade < 0) {
        novaVelocidade = 0
    }
    return novaVelocidade
}

function mostraDadosNave(nome, velocidade) {
    alert("Espaçonave: " + nome + "\nVelocidade: " + velocidade + "km/h")
}

do {
    opcao = mostraMenu()
    switch(opcao) {
        case "1":
            velocidadeNave = aumentaVelocidade(velocidadeNave)
            break
        case "2":
            velocidadeNave = diminuiVelocidade(velocidadeNave)
            break
        case "3":
            mostraDadosNave(nomeNave, velocidadeNave)
            break
        default:
            alert("Encerrando programa de bordo")    
    }
 } while(opcao != "4")