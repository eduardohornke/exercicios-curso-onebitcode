let nave = {
    velocidade: 0,
    aumentaVelocidade: function(aceleracao) {
        this.velocidade += aceleracao
    }
}

function registroNave() {
    nave.nome = prompt("Informe o nome da nave:")
    nave.tipo = prompt("Informe o tipo da nave:")
    nave.velocidadeMax = Number(prompt("Informe a velocidade maxima da nave (km/h)"))
}

function acelera() {
    let aceleracao = Number(prompt("Quanto você quer acelerar? (km/h)"))
    nave.aumentaVelocidade(aceleracao)
    if(nave.velocidade > nave.velocidadeMax) {
        alert("VELOCIDADE MAXIMA ULTRAPASSADA" +
              "\nVelocidade da Nave: " + nave.velocidade + "km/h" +
              "\nVelocidade máxima da Nave: " + nave.velocidadeMax + "km/h")
    }
}

function parar() {
    alert(  "Nome: " + nave.nome + "\nTipo: " + nave.tipo + "\nVelocidade da Nave: "
    + nave.velocidade + "\nMáxima da Nave: " + nave.velocidadeMax)
    nave.velocidade = 0
}

function mostraMenu() {
    let opcao
    do {
        opcao = prompt("Você deseja:\n1 - Acelerar\n2 - Parar")
        switch(opcao) {
            case "1":
                acelera()
                break
            case "2":
                parar()
                break
            default:
                alert("Opção Inválida")
        }
    } while(opcao != "2")
}

registroNave()
mostraMenu()