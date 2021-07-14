//* Defines game animations
const animations = {
    computerSearch: function () {
        // Defines a turnover on computerPick class to change
        // tokens before computer's pick revelation
        let computerClass = computerPick.classList[1];
        if (computerClass === "rock") {
            computerPick.classList.remove("rock");
            computerPick.classList.add("paper");
        } else if(computerClass === "paper") {
            computerPick.classList.remove("paper");
            computerPick.classList.add("scissors");
        }  else if(computerClass === "scissors") {
            computerPick.classList.remove("scissors");
            computerPick.classList.add("rock");
        }
    }
} 