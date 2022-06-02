let distAnoLuz = prompt("Digite a Distância em anos-luz?")
let converOpcao = prompt("Para qual unidade deseja converter?\n1. Parse(pc)\n2. Unidade Astronômica (AU)\n3. Quilômetros (KM)")
let selecUnid
let converDistan

switch (converOpcao){
    case "1":
        selecUnid = "Parsec"
        converDistan = distAnoLuz * 0.306601
        break
    case "2":
        selecUnid = "Unidade Astronômica"
        converDistan = distAnoLuz * 63241.1
        break
    case "3":
        selecUnid = "Quilômetros"
        converDistan = distAnoLuz * 9.5 * Math.pow(10, 12)
        break
    default:
        selecUnid = "Unidade não identificada"
        converDistan = "Conversão fora do escopo"
}

alert("Distância de " + distAnoLuz + " ano-luz em " + selecUnid + " é: " + converDistan)