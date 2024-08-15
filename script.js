// Decisión del ordenador

function getComputerChoice () {
    let dado = Math.random()
    if (dado >= 0 && dado <= 1/3) {
        let ComputerChoice = "Piedra";
        return ComputerChoice;

    } else if (dado > 1/3 && dado < 2/3) {
        let ComputerChoice = "Papel";
        return ComputerChoice;

    } else {
        let ComputerChoice = "Tijeras";
        return ComputerChoice;
    }
    
}

console.log(getComputerChoice())