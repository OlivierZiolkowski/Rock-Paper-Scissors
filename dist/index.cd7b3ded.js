let playerScore=0,savedPlayerScore=localStorage.getItem("Shifumi")?localStorage.getItem("Shifumi"):0;const score={init:function(){scoreBox.innerHTML=savedPlayerScore},updateScore:function(){playerScore++,scoreBox.innerHTML=playerScore,localStorage.setItem("Shifumi",playerScore)}};
//# sourceMappingURL=index.cd7b3ded.js.map
