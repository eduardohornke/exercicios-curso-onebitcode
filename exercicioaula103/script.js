//se nao declarar, vai o valor padrao

function olaPiloto(nome, mensagem = "Olá") {
    alert(mensagem + ", " + nome)
}

olaPiloto("Eduardo" , "Seja bem-vindo")