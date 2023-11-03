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
        return(`You won ${b} beats ${a}`);
    }
    else if(a=='paper'&&b=='scissor'){
        return(`You won ${b} beats ${a}`);    }
    else if(a=='scissor'&&b=='rock'){
        return(`You won ${b} beats ${a}`);
    }
    else{
        return(`You lost ${a} beats ${b}`);
    }
}
function getUserChoice(){
    return(prompt("Enter").toLowerCase());
}
function Game(){
    for (let i=0; i<5;   i++){
console.log(playRound(getComputerChoice(),getUserChoice()));}}

Game();