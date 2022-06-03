const detalheNave = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let filtroNove = detalheNave.filter(nave => {
    return nave[1] > 9
}).map(nave => {
    return nave[0]
})

let engatePendente = detalheNave.findIndex(nave => {
    return nave[2] == false
})

let caixaAlta = detalheNave.map(nave =>{
    return nave[0].toUpperCase()
})

let mensagem = "Naves com mais de 9 tripulantes: " + filtroNove.join(". ")
mensagem += "\nPlataforma com processo de engate: " + (engatePendente + 1)
mensagem += "\nEspaçonaves destacadas: " + caixaAlta.join(", ")

alert(mensagem)