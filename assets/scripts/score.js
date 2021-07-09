// Defines & save player's score on localStorage
const score = {
    scoreInit: function() {
        if (typeof(Storage) !== "undefined") {
            if (localStorage.scoreCount) {
                document.querySelector(".score-box__total").innerHTML = localStorage.scoreCount;
            } else {
                localStorage.scoreCount = 0;
                document.querySelector(".score-box__total").innerHTML = localStorage.scoreCount;
            }
        } else {
            console.log("Erreur score box");
        }
    },
    scoreCounter: function() {
        if (typeof(Storage) !== "undefined") {
            if (localStorage.scoreCount) {
                localStorage.scoreCount = Number(localStorage.scoreCount) + 1;
            } else {
                localStorage.scoreCount = 1;
            }
            document.querySelector(".score-box__total").innerHTML = localStorage.scoreCount;
        } else {
            console.log("Erreur score box");
        }
    }
}