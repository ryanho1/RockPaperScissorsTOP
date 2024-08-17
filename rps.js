  
    
    function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);};

    const ComputerChoice = getComputerChoice();

    let humanScore = 0;
    let computerScore = 0;
    let answer = prompt("choose rock paper or scissors");

    function getHumanChoice(){
            console.log(answer);
    }
        
    function playRound(humanChoice, computerChoice) {
                if ((ComputerChoice === 1 && answer === "rock") || (ComputerChoice === 2 && answer === "scissors") || (ComputerChoice === 3 && answer === "paper")){
                    console.log('tie!');
                } 
                else if ((ComputerChoice === 2 && answer === "rock") || (ComputerChoice === 3 && answer === "scissors") || (ComputerChoice === 1 && answer === "paper")){
                    console.log('you win');
                } 
                else if ((ComputerChoice === 3 && answer === "rock") || (ComputerChoice === 1 && answer === "scissors") || (ComputerChoice === 2 && answer === "paper")){
                    console.log('you lose');
                }
                else {
                    return 'you either inputted the wrong answer or its broken';
                }
              }
              
    const humanSelection = getHumanChoice();
    // const ComputerChoice = getComputerChoice();
              
    playRound(humanSelection, ComputerChoice);
        

    // console.log(getComputerChoice());
    // console.log(calculation());
    console.log(getHumanChoice()); 
    // console.log( typeof getComputerChoice());
    console.log(answer);

    // console.log(typeof rock);

    
    