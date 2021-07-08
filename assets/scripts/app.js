// Game elements
const gameboard = document.querySelector(".gameboard");
const gameboardItemsList = gameboard.querySelectorAll(".gameboard__item");
const resultBoard = document.querySelector(".game-result");
const infosBlock = document.querySelector(".gr-infos");
const resultMessage = document.querySelector(".gr-infos__title");
const replayButton = document.querySelector(".gr-infos__button");
const scoreBox = document.querySelector(".score-box__total");

console.log(gameboardItemsList);

// Retrieves class names of choices items
const choicesList = [];

// Retrieves tokens place where choices are expected
const playerPick = document.querySelector("#player-pick");
const computerPick = document.querySelector("#computer-pick");

const app = {
    // Game initialization
    init: function () {
        // Upload saving player score function
        score.init();
        // Launch game function
        app.playerPick();

        // Defines event on replay button
        replayButton.addEventListener("click", app.relaunchGame);
    },
    playerPick: function () {
        // Permit to launch a new game when palyer click on a game token
        for (let i = 0; i < gameboardItemsList.length; i++) {
            choicesList.push(gameboardItemsList[i].classList[1]);
            gameboardItemsList[i].addEventListener("click", app.launchGame);
        }
    },
    launchGame: function (clickedItem) {
        // Retrieves class from player's choice pick
        playerChoice = clickedItem.path[1].classList[1];

        // Change gameboard by result board
        gameboard.style.left = "-200%";
        gameboard.style.opactity = 0;
        gameboard.style.transition = "all 0.6s ease-in-out";

        resultBoard.style.right = "0";
        resultBoard.style.opacity = 1;
        resultBoard.style.transition = "all 0.6s ease-in-out";

        playerPick.classList.add(playerChoice);

        // Call computer choice
        app.computerChoice();
    },
    computerChoice: function () {
        // Defines how computer make a choice
        let computerSaid = choicesList[Math.floor(Math.random() * choicesList.length)];
        computerPick.classList.add(computerSaid);
        
        // Apply rules after computer's choice
        rules.gameRules();
    },
    relaunchGame: function () {
        // Gameboard init
        gameboard.style.left = 0;
        gameboard.style.opacity = 1;
        gameboard.style.transition = "all 0.6s ease-in-out";

        // Result board init
        resultBoard.style.right = "-200%";
        resultBoard.style.opacity = 0;
        resultBoard.style.transition = "all 0.6s ease-in-out";

        // Remove class on result board tokens
        playerPick.classList.remove("paper", "scissors", "rock");
        computerPick.classList.remove("paper", "scissors", "rock");
    }
}

// Calling app.init to the start of the app
document.addEventListener('DOMContentLoaded', app.init);