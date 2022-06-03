let velocidade = 50
let aceleracao = 5

while(velocidade <= 100) {
    console.log("Acelerando: Estamos a" + velocidade + "km/h")
    velocidade += aceleracao //velocidade = velocidade + aceleracao
}

let constelacao = "Andromeda"
let posicao = 0
let constelacaoLength = constelacao.length

while(posicao < constelacaoLength){
    if(constelacao[posicao] == "a" || constelacao[posicao] == "A"){
        console.log(posicao)
    }
    posicao += 1
}