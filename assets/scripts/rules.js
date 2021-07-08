//* Defines game rules

const rules = {
    gameRules: function() {
        // Winning conditions
        if (
            (computerPick.classList[1] === "scissors" && playerPick.classList[1] === "rock") ||
            (computerPick.classList[1] === "paper" && playerPick.classList[1] === "scissors") ||
            (computerPick.classList[1] === "rock" && playerPick.classList[1] === "paper")
        ) {
            resultMessage.innerHTML = "you win";
            score.updateScore();
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
    }
}