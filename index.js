//initialisation
let Original=document.getElementById("original");
let Bonus=document.getElementById("bonus");
let startInterface=document.getElementById("SelectGame");
let home=document.getElementById("home");
let ruleBtn = document.getElementById("ruleBtn");
let ruleClose = document.getElementById("close");
let ruleSec = document.getElementById("ruleSec");
let userPick = document.getElementById("userPick");
let B_userPick = document.getElementById("BuserPick");
let compPick = document.getElementById("compPick");
let B_compPick = document.getElementById("BcompPick");
let moves = document.querySelectorAll(".ring");
let selectingMoveSec = document.getElementById("selectMove");
let BonusSelectingMoveSec = document.getElementById("bonusSelectMove");
let gameActiveSec = document.getElementById("gameActive");
let BgameActiveSec = document.getElementById("BgameActive");
let result = document.getElementById("Result");
let B_result = document.getElementById("bonusResult");
let scoreNum = document.getElementById("scoreNum");
let B_scoreNum = document.getElementById("B_scoreNum");
let playAgain=document.getElementById("playAgain");
let B_playAgain=document.getElementById("bonusplayAgain");
let chooseGame=document.querySelectorAll(".hoverName");
let info=document.querySelector(".attribution");

//background glow on winnning or losing the game
let glow = document.createElement("div");
glow.id = "glow";
let scissor = document.getElementById("scissor");
let paper = document.getElementById("paper");
let rock = document.getElementById("rock");
//computer moves for ORiginal gameplay
let compMoves = [
  { link: "images/icon-rock.svg", id: "rock" },
  { link: "images/icon-scissors.svg", id: "scissor" },
  { link: "images/icon-paper.svg", id: "paper" },
];
selectingMoveSec.style.display = "grid";
gameActiveSec.style.display = "none";
glow.style.display = "none";
//initailising stored score
let clicks=true;
scoreNum.innerHTML = localStorage.getItem("score");// stored original score
B_scoreNum.innerHTML=localStorage.getItem("Bscore");// stored bonus score
let BonusScore = 0;
let score = 0;
BonusScore = localStorage.getItem("Bscore");
score = localStorage.getItem("score");

// rule btn fuctionality
var btn = 0;
ruleBtn.addEventListener("click", () => {
  if (btn == 0) {
    ruleSec.style.display = "block";
    btn = 1;
  }
});
ruleClose.addEventListener("click", () => {
  if (btn == 1) {
    ruleSec.style.display = "none";
    btn = 0;
  }
});

//functionality to choose game 
//Original Game
chooseGame[0].addEventListener("click",()=>{
         home.style.display="block";
         startInterface.style.display="none";
        Original.style.display="block";
        selectingMoveSec.style.display = "grid";
        gameActiveSec.style.display = "none";
        selectingMoveSec.append(paper);
        selectingMoveSec.append(scissor);
        selectingMoveSec.append(rock);
        if(compPick.children[1]){
          compPick.children[1].remove();}
        result.style.display="none";
        clicks=true;
        Bonus.style.display="none";
        ruleSec.children[0].children[1].src="images/image-rules.svg";
        ruleBtn.style.display="block";
        let inner_Width=window.innerWidth;
        if(inner_Width<=450){
           info.style.display="none";
        }
})
//BOnus Game
chooseGame[1].addEventListener("click",()=>{
  home.style.display="block"; 
  startInterface.style.display="none";
  Original.style.display="none";
  Bonus.style.display="block";
  BonusSelectingMoveSec.style.display = "grid";
  BgameActiveSec.style.display = "none";
  BonusSelectingMoveSec.append(B_scissor);
  BonusSelectingMoveSec.append(B_spock);
  BonusSelectingMoveSec.append(B_paper);
  BonusSelectingMoveSec.append(B_lizard);
  BonusSelectingMoveSec.append(B_rock);
  if(B_compPick.children[1]){
  B_compPick.children[1].remove();}
  B_result.style.display="none";
  clicks=true;
  ruleSec.children[0].children[1].src="images/image-rules-bonus.svg";
  ruleBtn.style.display="block";
  let inner_Width=window.innerWidth;
  if(inner_Width<=450){
     info.style.display="none";
  }
})
//go home 
home.addEventListener("click",()=>{
  startInterface.style.display="grid";
  Original.style.display="none";
  Bonus.style.display="none";
  home.style.display="none";
  gameActiveSec.style.display = "none";
  BgameActiveSec.style.display = "none";
  glow.remove() 
  ruleBtn.style.display="none";
  info.style.display="block";
})

// function of Original gameplay
function fun1(e){
  if(clicks){
  selectingMoveSec.style.display = "none";
  gameActiveSec.style.display = "flex";
  userPick.appendChild(e);

  setTimeout(() => {
    //create div element for comp. moves with js
    let jsRing = document.createElement("div");
    jsRing.className = "ring";
    let jsInnerRing = document.createElement("div");
    jsInnerRing.className = "innerRing";
    let jsMove = document.createElement("img");
    let num = Math.floor((Math.random(0) * 6) / 2);
    jsMove.src = compMoves[num].link;
    jsRing.id = compMoves[num].id;
    jsInnerRing.append(jsMove);
    jsRing.append(jsInnerRing);

    compPick.appendChild(jsRing);
  }, 2000);
  setTimeout(() => {
    //condition to lose
     if (
      (userPick.children[1].id === "paper") &&
      (compPick.children[1].id === "scissor")
    ) {
      result.children[0].innerHTML = "YOU LOSE";
      result.style.display = "block";
      compPick.appendChild(glow);
      glow.style.top = "-25%";
      
      glow.style.display = "block";
      score--;
    } else if (
      (userPick.children[1].id === "scissor") &&
      (compPick.children[1].id === "rock")
    ) {
      result.children[0].innerHTML = "YOU LOSE";
      result.style.display = "block";
      glow.style.top = "-25%";
      
      compPick.appendChild(glow);
      glow.style.display = "block";
      score--;
    } else if (
      (userPick.children[1].id === "rock") &&
     (compPick.children[1].id === "paper")
    ) {
      result.children[0].innerHTML = "YOU LOSE";
      result.style.display = "block";
      compPick.appendChild(glow);
      glow.style.top = "-25%";
      
      glow.style.display = "block";
      score--;
    } else if (userPick.children[1].id === compPick.children[1].id) {
      //condition for a draw
      result.children[0].innerHTML = "DRAW";
      result.style.display = "block";
      glow.style.display = "none";
    } else {
      //condition to win
      result.children[0].innerHTML = "YOU WIN";
      result.style.display = "block";
      userPick.appendChild(glow);
      glow.style.top = "-20%";
      glow.style.display = "block";
      score++;
    }
    //storing score
    scoreNum.innerHTML = score;
    localStorage.setItem("score", score);
    
  }, 3000);
clicks=false;
};}

//function for playAgain btn
playAgain.addEventListener("click",()=>{
  selectingMoveSec.style.display = "grid";
  gameActiveSec.style.display = "none";
  selectingMoveSec.append(paper);
  selectingMoveSec.append(scissor);
  selectingMoveSec.append(rock);
  compPick.children[1].remove();
  result.style.display="none";
  glow.remove();
  clicks=true;

})

//bonus game functionality
let B_paper=document.getElementById("B_paper");
let B_scissor=document.getElementById("B_scissor");
let B_rock=document.getElementById("B_rock");
let B_spock=document.getElementById("B_spock");
let B_lizard=document.getElementById("B_lizard");


//computer moves for Bonus gameplay
let BcompMoves = [
  { link: "images/icon-rock.svg", id: "B_rock" },
  { link: "images/icon-scissors.svg", id: "B_scissor" },
  { link: "images/icon-paper.svg", id: "B_paper" },
  {link:"images/icon-spock.svg",id:"B_spock"},
  {link:"images/icon-lizard.svg",id:"B_lizard"}
];
function fun2(e){
  if(clicks){
  BonusSelectingMoveSec.style.display = "none";
  BgameActiveSec.style.display = "flex";
  B_userPick.append(e);
 
  setTimeout(() => {
    //create div element for comp. moves with js
    let jsRing = document.createElement("div");
    jsRing.className = "B_ring";
    let jsInnerRing = document.createElement("div");
    jsInnerRing.className = "innerRing";
    let jsMove = document.createElement("img");
    let num = Math.floor((Math.random(0) * 5));
    jsMove.src = BcompMoves[num].link;
    jsRing.id = BcompMoves[num].id;
    jsInnerRing.append(jsMove);
    jsRing.append(jsInnerRing);
    B_compPick.appendChild(jsRing);
  }, 2000);
  setTimeout(() => {
    //condition to lose
     if (
      (B_userPick.children[1].id === "B_paper") &&
      (B_compPick.children[1].id === "B_scissor")
    ) {
      B_result.children[0].innerHTML = "YOU LOSE";
      B_result.style.display = "block";
      B_compPick.appendChild(glow);
      glow.style.top = "-25%";
      glow.style.display = "block";
      BonusScore--;
    } else if (
      (B_userPick.children[1].id === "B_scissor") &&
      (B_compPick.children[1].id === "B_rock")
    ) {
      B_result.children[0].innerHTML = "YOU LOSE";
      B_result.style.display = "block";
      glow.style.top = "-25%";
      B_compPick.appendChild(glow);
      glow.style.display = "block";
      BonusScore--;
    } 
    else if (
      (B_userPick.children[1].id === "B_scissor") &&
      (B_compPick.children[1].id === "B_spock")
    ) {
      B_result.children[0].innerHTML = "YOU LOSE";
      B_result.style.display = "block";
      glow.style.top = "-25%";
      B_compPick.appendChild(glow);
      glow.style.display = "block";
      BonusScore--;
    } else if (
      (B_userPick.children[1].id === "B_rock") &&
     (B_compPick.children[1].id === "B_paper")
    ) {
      B_result.children[0].innerHTML = "YOU LOSE";
      B_result.style.display = "block";
      B_compPick.appendChild(glow);
      glow.style.top = "-25%";
      glow.style.display = "block";
      BonusScore--;
    } else if (
      (B_userPick.children[1].id === "B_rock") &&
     (B_compPick.children[1].id === "B_spock")
    ) {
      B_result.children[0].innerHTML = "YOU LOSE";
      B_result.style.display = "block";
      B_compPick.appendChild(glow);
      glow.style.top = "-25%";
      glow.style.display = "block";
      BonusScore--;
    } else if (
      (B_userPick.children[1].id === "B_spock") &&
     (B_compPick.children[1].id === "B_paper")
    ) {
      B_result.children[0].innerHTML = "YOU LOSE";
      B_result.style.display = "block";
      B_compPick.appendChild(glow);
      glow.style.top = "-25%";
      glow.style.display = "block";
      BonusScore--;
    } 
    else if (
      (B_userPick.children[1].id === "B_spock") &&
     (B_compPick.children[1].id === "B_lizard")
    ) {
      B_result.children[0].innerHTML = "YOU LOSE";
      B_result.style.display = "block";
      B_compPick.appendChild(glow);
      glow.style.top = "-25%";
      glow.style.display = "block";
      BonusScore--;
    } else if (
      (B_userPick.children[1].id === "B_lizard") &&
     (B_compPick.children[1].id === "B_rock")
    ) {
      B_result.children[0].innerHTML = "YOU LOSE";
      B_result.style.display = "block";
      B_compPick.appendChild(glow);
      glow.style.top = "-25%";
      glow.style.display = "block";
      BonusScore--;
    } else if (
      (B_userPick.children[1].id === "B_lizard") &&
     (B_compPick.children[1].id === "B_scissor")
    ) {
      B_result.children[0].innerHTML = "YOU LOSE";
      B_result.style.display = "block";
      B_compPick.appendChild(glow);
      glow.style.top = "-25%";
      glow.style.display = "block";
      BonusScore--;
    } else if (
      (B_userPick.children[1].id === "B_paper") &&
     (B_compPick.children[1].id === "B_lizard")
    ) {
      B_result.children[0].innerHTML = "YOU LOSE";
      B_result.style.display = "block";
      B_compPick.appendChild(glow);
      glow.style.top = "-25%";
      glow.style.display = "block";
      BonusScore--;
    } else if (
      (B_userPick.children[1].id === "B_rock") &&
     (B_compPick.children[1].id === "B_paper")
    ) {
      B_result.children[0].innerHTML = "YOU LOSE";
      B_result.style.display = "block";
      B_compPick.appendChild(glow);
      glow.style.top = "-25%";
      glow.style.display = "block";
      BonusScore--;
    } 
    else if (B_userPick.children[1].id === B_compPick.children[1].id) {
      //condition for draw
      B_result.children[0].innerHTML = "DRAW";
      B_result.style.display = "block";
      glow.style.display = "none";
    } else {
      //condition to win
      B_result.children[0].innerHTML = "YOU WIN";
      B_result.style.display = "block";
      B_userPick.appendChild(glow);
      glow.style.top = "-20%";
      glow.style.display = "block";
      BonusScore++;
      console.log( B_compPick.children[1].id);
    }
    //storing score
    B_scoreNum.innerHTML = BonusScore;
    localStorage.setItem("Bscore", BonusScore);
    
  }, 3000);
clicks=false;
};}

//functionality for bonus play again btn
B_playAgain.addEventListener("click",()=>{
  BonusSelectingMoveSec.style.display = "grid";
  BgameActiveSec.style.display = "none";
  BonusSelectingMoveSec.append(B_scissor);
  BonusSelectingMoveSec.append(B_spock);
  BonusSelectingMoveSec.append(B_paper);
  BonusSelectingMoveSec.append(B_lizard);
  BonusSelectingMoveSec.append(B_rock);
  B_compPick.children[1].remove();
  B_result.style.display="none";
  glow.remove()
  
clicks=true;

})