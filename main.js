const originalHtml = document.getElementById('print').innerHTML;
userScore = 0;
computerScore = 0;
function getComputerChoice(){
    let a = (Math.floor(Math.random() * 3));
    if (a==0){
        return 'rock';}
    else if (a==1){
        return 'paper';
    }
    else{
        return 'scissor';
    }
}
function playRound(a,b){
    if(a==b){
        return(`Draw ${a}`);
    }
    else if(a=='rock'&&b=='paper'){
        userScore++;
        return(`You won ${b} beats ${a}`);
       
    }
    else if(a=='paper'&&b=='scissor'){
        userScore++;
        return(`You won ${b} beats ${a}`); 
           }
    else if(a=='scissor'&&b=='rock'){
        userScore++;
        return(`You won ${b} beats ${a}`);
        
    }
    else{
        computerScore++;
        return(`You lost ${a} beats ${b}`);
        
    }
}

function Game(userChoice){
   
document.getElementById('print').innerHTML = playRound(getComputerChoice(),userChoice);
updateScore();
}
function playGame(){
    
    document.querySelector("#rock").onclick = function(){
        Game('rock');
    }
    document.querySelector("#paper").onclick = function(){
        Game('paper');
    }
    document.querySelector("#scissor").onclick = function(){
        Game('scissor');
    }
  
}


function updateScore() {
    document.getElementById("userScore").innerHTML = `Your Score: ${userScore}`;
    document.getElementById("computerScore").innerHTML = `Computer Score: ${computerScore}`;
    playGame();
}
playGame();
document.getElementById("reset").onclick = function(){
    document.getElementById('print').innerHTML = originalHtml;
    playGame();
    if (userScore==5){
        document.getElementById('print').innerHTML = "You won";
    }
    if (computerScore==5){
        document.getElementById('print').innerHTML = "You lost";
    }
}