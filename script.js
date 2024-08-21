// Decisión del ordenador

function getComputerChoice() {
    let dado = Math.random()
    if (dado >= 0 && dado <= 1 / 3) {
        let ComputerChoice = "Piedra";
        return ComputerChoice.toLowerCase();

    } else if (dado > 1 / 3 && dado < 2 / 3) {
        let ComputerChoice = "Papel";
        return ComputerChoice.toLowerCase();

    } else {
        let ComputerChoice = "Tijeras";
        return ComputerChoice.toLowerCase();
    }

}

// Decisión del jugador

function getHumanChoice(playerChoice) {
    let HumanChoice = playerChoice;
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

// Ronda

function playRound(humanChoice, computerChoice) {
   
    humanScore = 0;
    computerScore = 0;

    // Si el jugador elige Piedra
    if (humanChoice === "piedra") {
        choiceHuman = "piedra"
        if (humanChoice === computerChoice) {
            console.log(`¡Empate! Ambos habéis escogido: ${humanChoice} `);
        } else if (humanChoice === choiceHuman && computerChoice === "papel") {
            computerScore++;
            console.log(`¡Gana el ordenador! ${computerChoice} gana a ${humanChoice}`)
        } else if (humanChoice === choiceHuman && computerChoice === "tijeras") {
            humanScore++;
            console.log(`¡Gana el humano! ${humanChoice} gana a ${computerChoice}`)
        }
        // Si el jugador elige Papel
    } else if (humanChoice === "papel") {
        choiceHuman = "papel"
        if (humanChoice === computerChoice) {
            console.log(`¡Empate! Ambos habéis escogido: ${humanChoice} `);
        } else if (humanChoice === choiceHuman && computerChoice === "tijeras") {
            computerScore++;
            console.log(`¡Gana el ordenador! ${computerChoice} gana a ${humanChoice}`)
        } else if (humanChoice === choiceHuman && computerChoice === "piedra") {
            humanScore++;
            console.log(`¡Gana el humano! ${humanChoice} gana a ${computerChoice}`)
        }
        // Si el jugador elige Tijeras
    } else if (humanChoice === "tijeras") {
        choiceHuman = "tijeras"
        if (humanChoice === computerChoice) {
            console.log(`¡Empate! Ambos habéis escogido: ${humanChoice} `);
        } else if (humanChoice === choiceHuman && computerChoice === "piedra") {
            computerScore++;
            console.log(`¡Gana el ordenador! ${computerChoice} gana a ${humanChoice}`)
        } else if (humanChoice === choiceHuman && computerChoice === "papel") {
            humanScore++;
            console.log(`¡Gana el humano! ${humanChoice} gana a ${computerChoice}`)
        }
    }
// Marcador
    console.log(`Marcador ---- HUMANO: ${humanScore} - ORDENADOR: ${computerScore}`);

    
}

// Referencias de los botones del jugador 

const boton_piedra = document.querySelector("#btn_piedra");
const boton_papel = document.querySelector("#btn_papel");
const boton_tijeras = document.querySelector("#btn_tijeras");
const boton_test = document.querySelector("#test");

// Eventos de los botones del jugador 

boton_piedra.addEventListener("click", function () {
    playRound(getHumanChoice("piedra"), getComputerChoice())
});

boton_papel.addEventListener("click", function () {
    playRound(getHumanChoice("papel"), getComputerChoice())
});

boton_tijeras.addEventListener("click", function () {
    playRound(getHumanChoice("tijeras"), getComputerChoice())
});



boton_test.addEventListener("click", function() {
    getHumanChoice("piedra");
});





