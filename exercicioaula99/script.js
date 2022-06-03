let naveNome = prompt("Qual é o nome da nave?")
let inverteNome = ""

for(let i = naveNome.length - 1; i >= 0; i --) {
    if(naveNome[i] == "e") {
        break
    }
    inverteNome += naveNome[i]
}
alert("Nome original da nave:" + naveNome + "\nNome apos ocultacao: " + inverteNome)