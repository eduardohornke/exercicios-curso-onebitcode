let piloto = prompt("Qual Seu Nome?")
let velocidade = 0
let novaVelocidade = prompt("A Que Velocidade Iniciar?")
let confirmaVelocidade = confirm("Estamos Acelerando para " + novaVelocidade + "km/s")

if(confirmaVelocidade){
    velocidade = novaVelocidade;
}

if(velocidade <= 0) {
    alert("Nave está parada")
} else if (velocidade < 40){
    alert("voce está devagar")
} else if(velocidade < 80){
    alert("voce está em uma velocidade boa")
} else if(velocidade >= 100){
    alert("voce está rapido")
}

alert("O piloto " + piloto + " está a " + velocidade + " km/s")