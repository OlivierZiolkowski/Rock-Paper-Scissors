// Calling scripts

// Game elements
const gameboard =  document.querySelector(".gameboard");
const gameboardItemsList = gameboard.querySelectorAll(".gameboard__item");
const resultBoard = document.querySelector(".game-result");
const infosBlock = document.querySelector(".gr-infos");
const resultMessage = document.querySelector(".gr-infos__title");
const replayButton = document.querySelector(".gr-infos__button");

// Retrieves class names of choices items
const choicesList = [];

// Choices
const playerPick = document.querySelector("#player-pick");
const computerPick = document.querySelector("#computer-pick");

const app = {
    // Game initialization
    init: function() {
        app.playerPick();
        replayButton.addEventListener("click", app.relaunchGame);
    },
    playerPick: function() {
        // Récupère la liste des items
        for (let i = 0; i < gameboardItemsList.length; i++) {
            choicesList.push(gameboardItemsList[i].classList[1]);
            gameboardItemsList[i].addEventListener("click", app.launchGame);
        }
    },
    launchGame: function(clickedItem) {
        playerChoice = clickedItem.path[1].classList[1];
        gameboard.style.left = "-100%";
        gameboard.style.display = "none";
        gameboard.style.transition = "all 0.6s ease-in-out";

        resultBoard.style.right = "0";
        resultBoard.style.display = "flex";
        resultBoard.style.transition = "all 0.6s ease-in-out";

        playerPick.classList.add(playerChoice);

        app.computerChoice();

    },
    computerChoice: function() {
        console.log(choicesList);
        let computerSaid = choicesList[Math.floor(Math.random()*choicesList.length)];
        computerPick.classList.add(computerSaid);
        app.gameRules();
    },
    gameRules: function() {
        console.log(computerPick.classList[1]);
        console.log(playerPick.classList[1]);
        // Winning conditions
        if (
            (computerPick.classList[1] === "scissors" && playerPick.classList[1] === "rock") ||
            (computerPick.classList[1] === "paper" && playerPick.classList[1] === "scissors") ||
            (computerPick.classList[1] === "rock" && playerPick.classList[1] === "paper")
        ) {
            resultMessage.innerHTML = "you win";
        } 
        // Losing conditions
        else if(
            (computerPick.classList[1] === "scissors" && playerPick.classList[1] === "paper") ||
            (computerPick.classList[1] === "paper" && playerPick.classList[1] === "rock") ||
            (computerPick.classList[1] === "rock" && playerPick.classList[1] === "scissors")
        ) {
            resultMessage.innerHTML = "you lose";
        }
        // Draw conditions
        else {
            resultMessage.innerHTML = "draw";
        }

        // Infos block
        infosBlock.style.display = "flex";
    },
    relaunchGame: function() {
        playerPick.classList.remove("paper", "scissors", "rock");
        computerPick.classList.remove("paper", "scissors", "rock");
        gameboard.style.left = 0;
        gameboard.style.display = "flex";
        gameboard.style.transition = "all 0.6s ease-in-out";

        resultBoard.style.right = "-100%";
        resultBoard.style.display = "none";
        resultBoard.style.transition = "all 0.6s ease-in-out";
    }
}

// Calling app.init to the start of the app
document.addEventListener('DOMContentLoaded', app.init);