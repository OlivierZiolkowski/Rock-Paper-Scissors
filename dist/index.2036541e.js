const gameboard=document.querySelector(".gameboard"),gameboardItemsList=gameboard.querySelectorAll(".gameboard__item"),resultBoard=document.querySelector(".game-result"),infosBlock=document.querySelector(".gr-infos"),resultMessage=document.querySelector(".gr-infos__title"),replayButton=document.querySelector(".gr-infos__button"),scoreBox=document.querySelector(".score-box__total"),choicesList=[],playerPick=document.querySelector("#player-pick"),computerPick=document.querySelector("#computer-pick"),app={init:function(){score.scoreInit(),app.playerPick(),replayButton.addEventListener("click",app.relaunchGame)},playerPick:function(){for(let e=0;e<gameboardItemsList.length;e++)choicesList.push(gameboardItemsList[e].classList[1]),gameboardItemsList[e].addEventListener("click",app.launchGame)},launchGame:function(e){playerChoice=e.path[1].classList[1]?e.path[1].classList[1]:e.path[0].classList[1],gameboard.style.left="-200%",gameboard.style.opactity=0,gameboard.style.transition="all 0.6s ease-in-out",resultBoard.style.left="0",resultBoard.style.opacity=1,resultBoard.style.transition="all 0.6s ease-in-out",playerPick.classList.add(playerChoice),app.computerChoice()},computerChoice:function(){let e=choicesList[Math.floor(Math.random()*choicesList.length)];setTimeout((function(){computerPick.classList.add(e),rules.gameRules()}),1200)},relaunchGame:function(){gameboard.style.left=0,gameboard.style.opacity=1,gameboard.style.transition="all 0.6s ease-in-out",resultBoard.style.left="-200%",resultBoard.style.opacity=0,resultBoard.style.transition="all 0.6s ease-in-out",infosBlock.style.display="none",playerPick.classList.remove("paper","scissors","rock","win"),computerPick.classList.remove("paper","scissors","rock","win")}};document.addEventListener("DOMContentLoaded",app.init);
//# sourceMappingURL=index.2036541e.js.map
