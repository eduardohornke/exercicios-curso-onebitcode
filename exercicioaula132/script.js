class spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = false
        this.doors = "Fechadas"
    }
    hitch(){
        this.isHitched = true
    }
}

let spacialSpaceship = []

while (chosenOption != 3) {
    var chosenOption = prompt("Bem-vindo, capitão. O que deseja fazer (digite o número da opção)?" +
        "\n\n1- Realizar engate" +
        "\n2- Imprimir lista de naves engatadas" +
        "\n3- Sair do programa"
    )

    if (chosenOption == 1) {
        var newSpaceship = new spaceship(prompt("Digite o nome da nave:"), parseInt(prompt("Digite a quantidade de tripulantes:")))
        newSpaceship.hitch()
        newSpaceship.doors = "Abertas"
        spacialSpaceship.push(newSpaceship)
    } else if (chosenOption == 2) {
        alert("Naves engatadas:\n\n" + spacialSpaceship.map( item => item.name).join("\n"))
    }
}

let anotherSpaceship = new spaceship("Tornado", 100)
spacialSpaceship.push(anotherSpaceship)
console.table(spacialSpaceship)