// Decisión del ordenador

function getComputerChoice () {
    let dado = Math.random()
    if (dado >= 0 && dado <= 1/3) {
        let ComputerChoice = "Piedra";
        return ComputerChoice.toLowerCase();

    } else if (dado > 1/3 && dado < 2/3) {
        let ComputerChoice = "Papel";
        return ComputerChoice.toLowerCase();

    } else {
        let ComputerChoice = "Tijeras";
        return ComputerChoice.toLowerCase();
    }
    
}

// Decisión del jugador

function getHumanChoice (){
    let HumanChoice = prompt("¿Cuál es tu elección?");
    let HumanChoiceLower = HumanChoice.toLowerCase();
    if (HumanChoiceLower === "piedra") {
        return HumanChoiceLower;
    } else if (HumanChoiceLower === "papel") {
        return HumanChoiceLower;
    } else if (HumanChoiceLower === "tijeras") {
        return HumanChoiceLower;
    } else {
        let BadChoice = "Introduce una opción válida: piedra, papel o tijeras."
        return BadChoice;
    }
}

// Partida a 5 rondas con sistema de puntos

function playGame (){
    // Sistema de puntos
    let humanScore = 0;
    let computerScore = 0;



    function playRound(humanChoice, computerChoice) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        // Si el jugador elige Piedra
        if (humanSelection === "piedra") {
            choiceHuman = "piedra"
            if (humanSelection === computerSelection){
                console.log(`¡Empate! Ambos habéis escogido: ${humanSelection} `);
            } else if (humanSelection === choiceHuman && computerSelection === "papel") {
                computerScore++;
                return console.log (`¡Gana el ordenador! ${computerSelection} gana a ${humanSelection}`)    
            } else if (humanSelection === choiceHuman && computerSelection === "tijeras") {
                humanScore++;
                return console.log (`¡Gana el humano! ${humanSelection} gana a ${computerSelection}`)
            }
        // Si el jugador elige Papel
        } else if (humanSelection === "papel") {
            choiceHuman = "papel"
            if (humanSelection === computerSelection){
                console.log(`¡Empate! Ambos habéis escogido: ${humanSelection} `);
            } else if (humanSelection === choiceHuman && computerSelection === "tijeras") {
                computerScore++;
                return console.log (`¡Gana el ordenador! ${computerSelection} gana a ${humanSelection}`)    
            } else if (humanSelection === choiceHuman && computerSelection === "piedra") {
                humanScore++;
                return console.log (`¡Gana el humano! ${humanSelection} gana a ${computerSelection}`)
            }
        // Si el jugador elige Tijeras
    } else if (humanSelection === "tijeras") {
        choiceHuman = "tijeras"
        if (humanSelection === computerSelection){
            console.log(`¡Empate! Ambos habéis escogido: ${humanSelection} `);
        } else if (humanSelection === choiceHuman && computerSelection === "piedra") {
            computerScore++;
            return console.log (`¡Gana el ordenador! ${computerSelection} gana a ${humanSelection}`)    
        } else if (humanSelection === choiceHuman && computerSelection === "papel") {
            humanScore++;
            return console.log (`¡Gana el humano! ${humanSelection} gana a ${computerSelection}`)
        }
    }
    }
    // Bucle para el número de rondas
    for (let i = 0; i<5; i++){
        playRound();
    }
    // Marcador
    console.log(`Marcador ---- HUMANO: ${humanScore} - ORDENADOR: ${computerScore}`);

}

playGame();