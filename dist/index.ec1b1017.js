const gameboard=document.querySelector(".gameboard"),gameboardItemsList=gameboard.querySelectorAll(".gameboard__item"),resultBoard=document.querySelector(".game-result"),infosBlock=document.querySelector(".gr-infos"),resultMessage=document.querySelector(".gr-infos__title"),replayButton=document.querySelector(".gr-infos__button"),scoreBox=document.querySelector(".score-box__total");console.log(gameboardItemsList);const choicesList=[],playerPick=document.querySelector("#player-pick"),computerPick=document.querySelector("#computer-pick"),app={init:function(){score.init(),app.playerPick(),replayButton.addEventListener("click",app.relaunchGame)},playerPick:function(){for(let e=0;e<gameboardItemsList.length;e++)choicesList.push(gameboardItemsList[e].classList[1]),gameboardItemsList[e].addEventListener("click",app.launchGame)},launchGame:function(e){playerChoice=e.path[1].classList[1],gameboard.style.left="-200%",gameboard.style.opactity=0,gameboard.style.transition="all 0.6s ease-in-out",resultBoard.style.right="0",resultBoard.style.opacity=1,resultBoard.style.transition="all 0.6s ease-in-out",playerPick.classList.add(playerChoice),app.computerChoice()},computerChoice:function(){let e=choicesList[Math.floor(Math.random()*choicesList.length)];computerPick.classList.add(e),rules.gameRules()},relaunchGame:function(){gameboard.style.left=0,gameboard.style.opacity=1,gameboard.style.transition="all 0.6s ease-in-out",resultBoard.style.right="-200%",resultBoard.style.opacity=0,resultBoard.style.transition="all 0.6s ease-in-out",playerPick.classList.remove("paper","scissors","rock"),computerPick.classList.remove("paper","scissors","rock")}};document.addEventListener("DOMContentLoaded",app.init);
//# sourceMappingURL=index.ec1b1017.js.map