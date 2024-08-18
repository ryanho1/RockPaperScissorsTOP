  
    
    function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);};

    const ComputerChoice = getComputerChoice();

    let answer = prompt("choose rock paper or scissors");

    function getHumanChoice(){
        console.log(answer);
    }

    let humanChoice = getHumanChoice();
    let humanScore = 0;
    let computerScore = 0;
    let OverallScore

    function playRound(humanChoice, computerChoice) {
        if ((ComputerChoice === 1 && answer.toLowerCase() === "rock") || (ComputerChoice === 2 && answer.toLowerCase() === "scissors") || (ComputerChoice === 3 && answer.toLowerCase() === "paper")){
            console.log('tie!');
        } 
        else if ((ComputerChoice === 2 && answer.toLowerCase() === "rock") || (ComputerChoice === 3 && answer.toLowerCase() === "scissors") || (ComputerChoice === 1 && answer.toLowerCase() === "paper")){
            console.log('you win') && ++humanScore;
        } 
        else if ((ComputerChoice === 3 && answer.toLowerCase() === "rock") || (ComputerChoice === 1 && answer.toLowerCase() === "scissors") || (ComputerChoice === 2 && answer.toLowerCase() === "paper")){
            console.log('you lose') && ++computerScore;
        }
        else {
            return 'you either inputted the wrong answer or its broken';
        }
              }

    // console.log(getComputerChoice());
    // console.log( typeof getComputerChoice());
    // console.log(answer);
    console.log (playRound());


    
    