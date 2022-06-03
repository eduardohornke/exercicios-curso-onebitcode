function parar(velocidade, imprime){
    let desacelerarao = 20

    while(velocidade > 0) {
        imprime(velocidade)
        velocidade -= desacelerarao
    }

    alert("Nave parada")
}

let velocidadeNave = 150

parar (velocidadeNave, function(velocidade) {
    console.log("Velocidade atual: " + velocidade)
})