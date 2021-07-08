// Handle player's score saved on localStorage
let savedPlayerScore  = localStorage.getItem("Shifumi") ? localStorage.getItem("Shifumi") : localStorage.setItem("Shifumi", playerScore);

const score = {
    init: function() {
        scoreBox.innerHTML = savedPlayerScore;
    },
    updateScore: function() {
        // Add unity when player win
        playerScore ++;
        // Display the score on score board
        scoreBox.innerHTML = playerScore;

        // Save score on localStorage
        localStorage.setItem("Shifumi", playerScore);
    }
}