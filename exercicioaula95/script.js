let nomeNave = prompt("Qual o nome da Sua nave?")
let trocaLetra = prompt("Qual caractere deseja Substituir?")
let letraTrocada = prompt("Por Qual caracter deseja subistituir?")
let novoNome = ""

for(let posicao = 0; posicao < nomeNave.length; posicao++) {
    if(nomeNave[posicao] == trocaLetra) {
       novoNome += letraTrocada 
    } else {
        novoNome += nomeNave[posicao]
    }
}

alert("O novo nome da nave é " + novoNome)