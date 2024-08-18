  
    
    function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);};

    let ComputerChoice = getComputerChoice();

    let answer = prompt("choose rock paper or scissors");

    function getHumanChoice(){
        console.log(answer);
    }

    let humanChoice = getHumanChoice();

    function playGame() {
        let humanScore = 0;
        let computerScore = 0;
         let counter = playRound();
         let roundsPlayed = counter;
        function playRound() {
                if ((ComputerChoice === 1 && answer.toLowerCase() === "rock") || (ComputerChoice === 2 && answer.toLowerCase() === "scissors") || (ComputerChoice === 3 && answer.toLowerCase() === "paper")){
            console.log('tie!');
        } 
        else if ((ComputerChoice === 2 && answer.toLowerCase() === "rock") || (ComputerChoice === 3 && answer.toLowerCase() === "scissors") || (ComputerChoice === 1 && answer.toLowerCase() === "paper")){
            console.log('you win') ;
            ++humanScore;
            console.log(humanScore + "-" + computerScore);
        } 
        else if ((ComputerChoice === 3 && answer.toLowerCase() === "rock") || (ComputerChoice === 1 && answer.toLowerCase() === "scissors") || (ComputerChoice === 2 && answer.toLowerCase() === "paper")){
            console.log('you lose') ;
            ++computerScore;
            console.log(humanScore + "-" + computerScore);
        }
        else {
            return 'you either inputted the wrong answer or its broken';
        }
              } 
            (humanScore + "-" + computerScore);
   
            let rrr = 1;
            // let totalScore = "humanScore" + "computerScore";
            for (let counter = 0 ;counter < 4; counter++) {
                answer = prompt("choose rock paper or scissors round " + rrr++).toLowerCase();
                console.log(playRound(ComputerChoice, humanChoice));
                        }
            }



    // console.log(getComputerChoice());
    // console.log( typeof getComputerChoice());
    // console.log(answer);
    console.log(playGame());
    // console.log(humanScore + "-" + computerScore);



    
    