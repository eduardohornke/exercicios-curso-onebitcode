function dizerOi(nome, mensagem = "Olá") {
    alert(mensagem + ", " + nome)
}

dizerOi() //errado

dizerOi("Eduardo", "Oi") //se definir parametros, tem que declarar

function acelerar(velocidade, unidade = "km/h", aceleracao) {
    let novaVelocidade = velocidade + aceleracao
    alert("Nova Velocidade: " + novaVelocidade + unidade)
}

acelerar(50, 20)  //errado

acelerar(50, "km/s", 20) //declarar sempre na ordem certa que esta na funcao