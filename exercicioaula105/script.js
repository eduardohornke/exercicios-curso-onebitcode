function acelerar(velocidade, aceleracao) {
    let novaVelocidade = velocidade + aceleracao
    alert("Nova Velocidade: " + novaVelocidade)
    return novaVelocidade //retorna valor
}

let velocidade = 80
let aceleracao = 5

console.log(acelerar(100, 20))