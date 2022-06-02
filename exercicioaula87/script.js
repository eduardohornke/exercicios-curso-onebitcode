let DigitaDataPartida = prompt("Digite a data de partida (formato DD/MM/YYYY)")
let DataPartida = moment(DigitaDataPartida, "DD/MM/YYYY")
let dataHoje = moment()

let dataDiferenca = dataHoje - DataPartida

let EscolhaData = prompt("Escolha como gostaria de exibir o tempo de partida\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias\n5 - Meses\n6 - Anos")

if(EscolhaData == 1){
    let segundosPartida = Math.round(dataDiferenca / 1000)
    alert("Tempo de voo: " + segundosPartida + " segundos")
} else if(EscolhaData == 2) {
    let minutosPartida = Math.round(dataDiferenca / 1000 / 60)
    alert("Tempo de voo: " + minutosPartida + " minutos")
} else if(EscolhaData == 3){
    let horasPartida = Math.round(dataDiferenca / 1000 / 3600)
    alert("Tempo de voo: " + horasPartida + " horas")
}else if(EscolhaData == 4){
    let diasPartida = Math.round(dataDiferenca / 1000 / 3600 / 24)
    alert("Tempo de voo: " + diasPartida + " dias")
}else if(EscolhaData == 5){
    let mesesPartida = Math.round(dataDiferenca / 1000 / 3600 / 24 / 30)
    alert("Tempo de voo: " + mesesPartida + " meses")
}else if(EscolhaData == 6){
    let anosPartida = Math.round(dataDiferenca / 1000 / 3600 / 24 / 365)
    alert("Tempo de voo: " + anosPartida + " anos")}
else{
    alert("ERRO! Opção Inválida!")
}