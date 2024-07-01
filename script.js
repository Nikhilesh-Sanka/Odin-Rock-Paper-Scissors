const getComputerChoice = () => {
    let randNum=Math.floor(Math.random()*3);
    let arr=["rock","paper","scissors"];
    return arr[randNum];
};
const getHumanChoice = () => {
    return prompt("enter your choice","rock");
}
let humanScore=0;
let computerScore=0;
const playRound = (humanChoice=getHumanChoice(),computerChoice=getComputerChoice()) => {
    humanChoice=humanChoice.toLowerCase();
    computerChoice=computerChoice.toLowerCase();
    let result;
    if (humanChoice==="rock"){
        if(computerChoice==="paper"){
            computerScore++;
            result=1;
        }
        else if(computerChoice==="scissors"){
            humanScore++;
            result=0;
        }
        else{
            result=-1;
        }
    }
    else if (humanChoice==="paper"){
        if (computerChoice==="scissors"){
            computerScore++;
            result=1;
        }
        else if(computerChoice==="rock"){
            humanScore++;
            result=0;
        }
        else{
            result=-1;
        }
    }
    else if(humanChoice==="scissors"){
        if(computerChoice==="rock"){
            computerScore++;
            result=1;
        }
        else if (computerChoice==="paper"){
            humanScore++;
            result=0;
        }
        else{
            result=-1;
        }
    }
    if (result===0){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else if(result===1){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    else if(result===-1){
        console.log(`it's a Draw`);
    }
}
const playGame = () => {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if(humanScore>computerScore){
        console.log(`you win`);
    }
    else if(humanScore<computerScore){
        console.log(`you lose`);
    }
    else{
        console.log(`its a Draw`);
    }
}
playGame();