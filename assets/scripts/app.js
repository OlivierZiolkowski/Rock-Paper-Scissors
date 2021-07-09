// Game elements
const gameboard = document.querySelector(".gameboard");
const gameboardItemsList = gameboard.querySelectorAll(".gameboard__item");
const resultBoard = document.querySelector(".game-result");
const infosBlock = document.querySelector(".gr-infos");
const resultMessage = document.querySelector(".gr-infos__title");
const replayButton = document.querySelector(".gr-infos__button");
const scoreBox = document.querySelector(".score-box__total");

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
        // Permit to launch a new game when player click on a game token
        for (let i = 0; i < gameboardItemsList.length; i++) {
            // Add each choice on choiceList array
            choicesList.push(gameboardItemsList[i].classList[1]);
            // Add an listener on each game token
            gameboardItemsList[i].addEventListener("click", app.launchGame);
        }
    },
    launchGame: function (clickedItem) {
        // Retrieves class from player's choice pick
        playerChoice = clickedItem.path[1].classList[1] ? clickedItem.path[1].classList[1] : clickedItem.path[0].classList[1] ;

        // Change gameboard by result board
        gameboard.style.left = "-200%";
        gameboard.style.opactity = 0;
        gameboard.style.transition = "all 0.6s ease-in-out";
        resultBoard.style.right = "0";
        resultBoard.style.opacity = 1;
        resultBoard.style.transition = "all 0.6s ease-in-out";

        // Add player's choice on result board
        playerPick.classList.add(playerChoice);

        // Call computer choice
        app.computerChoice();
    },
    computerChoice: function () {
        // Defines how computer make a choice
        let computerSaid = choicesList[Math.floor(Math.random() * choicesList.length)];
        // Defines a timeout to async computer's choice
        setTimeout(function(){ computerPick.classList.add(computerSaid)}, 2000);

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
        playerPick.classList.remove("paper", "scissors", "rock", "win");
        computerPick.classList.remove("paper", "scissors", "rock", "win");
    }
}

// Calling app.init to the start of the app
document.addEventListener('DOMContentLoaded', app.init);