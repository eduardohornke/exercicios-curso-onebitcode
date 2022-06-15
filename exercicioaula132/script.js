class spaceship {
    constructor(name, crewQuantity){
        this.name = name;
        this.crewQuantity = crewQuantity;
        this.isHitched = false;
        this.entraceDoorsOpen = false;
    }
    hitch() {
        this.isHitched = true;
        this.entraceDoorsOpen = true;
    }
}

function showMenu () {
    let chosenOption
    while (chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
           chosenOption = prompt( "O que deseja fazer?\n1 - Engatar Nave\n2 - Imprimir Naves\n3 - Sair");
    }
    return chosenOption;
}

function createSpaceship() {
    let spaceshipName = prompt("Digite o nome da nave");
    let crewQuantity = prompt("Digite a quantidade de pessoas na nave");
    let spaceship = new spaceship(spaceshipName, crewQuantity);
    return spaceship;
}

function printSpaceshipList(spaceships) {
let spaceshipList = "";
spaceships.forEach((spaceship, index) => {
    spaceshipList += (index + 1) + "- " + spaceship.name + " (" + spaceship.crewQuantity + " pessoas)\n";
})
alert(spaceshipList);
}

let hitchedSpaceships = [];

let chosenOption

while (chosenOption != "3") {
    chosenOption = showMenu();
    switch (chosenOption) {
        case "1":
            let spaceshipToAdd = createSpaceship();
            spaceshipToAdd.hitch();
            hitchedSpaceships.push(spaceshipToAdd);
            break;
        case "2":
            printSpaceshipList(hitchedSpaceships);
            break;
    }
}