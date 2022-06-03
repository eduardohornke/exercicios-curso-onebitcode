let velocidade = 0
let dobraSpacial

let nomeNave = prompt("Qual é o Nome da Nave?")

dobraSpacial = prompt("Deseja entrar em dobra espacial?\n1 - Sim\n2 - Não")

while(dobraSpacial == "1") {
    velocidade += 1
    dobraSpacial = prompt("Deseja aumentar a velocidade?\n1 - Sim\n2 - Não")
}

alert("Nave: " + nomeNave + "\nQuantidade de dobra:" + velocidade)