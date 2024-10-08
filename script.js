// Variables para la puntuación final

let humanScore = 0;
let computerScore = 0;

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

// Decisión del humano

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

// Función para jugar una ronda del juego

function playRound(humanChoice, computerChoice) {
   

    // Si el jugador elige Piedra
    if (humanChoice === "piedra") {
        choiceHuman = "piedra"
        if (humanChoice === computerChoice) {
            panelResultados.textContent = `¡Empate! Ambos habéis escogido: ${humanChoice} `;
        } else if (humanChoice === choiceHuman && computerChoice === "papel") {
            computerScore++;
            panelResultados.textContent = `¡Gana el ordenador! ${computerChoice} gana a ${humanChoice}`;
        } else if (humanChoice === choiceHuman && computerChoice === "tijeras") {
            humanScore++;
            panelResultados.textContent = `¡Gana el humano! ${humanChoice} gana a ${computerChoice}`;
        }
        // Si el jugador elige Papel
    } else if (humanChoice === "papel") {
        choiceHuman = "papel"
        if (humanChoice === computerChoice) {
            panelResultados.textContent = `¡Empate! Ambos habéis escogido: ${humanChoice} `;
        } else if (humanChoice === choiceHuman && computerChoice === "tijeras") {
            computerScore++;
            panelResultados.textContent = `¡Gana el ordenador! ${computerChoice} gana a ${humanChoice}`;
        } else if (humanChoice === choiceHuman && computerChoice === "piedra") {
            humanScore++;
            panelResultados.textContent = `¡Gana el humano! ${humanChoice} gana a ${computerChoice}`;
        }
        // Si el jugador elige Tijeras
    } else if (humanChoice === "tijeras") {
        choiceHuman = "tijeras"
        if (humanChoice === computerChoice) {
            panelResultados.textContent = `¡Empate! Ambos habéis escogido: ${humanChoice} `;
        } else if (humanChoice === choiceHuman && computerChoice === "piedra") {
            computerScore++;
            panelResultados.textContent = `¡Gana el ordenador! ${computerChoice} gana a ${humanChoice}`;
        } else if (humanChoice === choiceHuman && computerChoice === "papel") {
            humanScore++;
            panelResultados.textContent = `¡Gana el humano! ${humanChoice} gana a ${computerChoice}`;
        }
    }
// Marcador
    if (humanScore === 5) {
        humanScore = 0;
        computerScore = 0;
        panelPuntos.textContent = "¡¡FINAL DEL JUEGO!! ¡Gana el humano!";

    } else if (computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
        panelPuntos.textContent = "¡¡FINAL DEL JUEGO!! ¡Gana el ordenador!";
    } else{
        panelPuntos.textContent = '';
        panelPuntos.textContent = `HUMANO: ${humanScore} - ORDENADOR: ${computerScore}`;
    }
    
}



// Referencias al DOM

const boton_piedra = document.querySelector("#btn_piedra");
const boton_papel = document.querySelector("#btn_papel");
const boton_tijeras = document.querySelector("#btn_tijeras");
const panelResultados = document.querySelector("#resultados");
const panelPuntos = document.querySelector("#puntos");

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