  
    
    function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);};

    const ComputerChoice = getComputerChoice();
    // console.log(typeof ComputerChoice);

    let answer = prompt("choose rock paper or scissors");

    function getHumanChoice(){
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
                }}
            // } if (getComputerChoice() === 1 && answer === "rock"){
            //         console.log('tie!');
            //     } 
            //     else if (getComputerChoice() === 2 && answer === "rock"){
            //         console.log('you win (rock kills scissors)');
            //     } 
            //     else if (getComputerChoice() === 3 && answer === "rock"){
            //         console.log('you lose (paper wraps rock!)');
            //     }
            //     else if (getComputerChoice() === 1 && answer === "scissors"){
            //         console.log('you lose (scissors dies to rock)');
            //     }
            //     else if (getComputerChoice() === 2 && answer === "scissors"){
            //         console.log('tie!');
            //     }
            //     else if (getComputerChoice() === 3 && answer === "scissors"){
            //         console.log('Scissors win (cut cut)');
            //     }
            //     else if (getComputerChoice() === 1 && answer === "paper"){
            //         console.log('you win! (paper wraps around)');
            //     }
            //     else if (getComputerChoice() === 2 && answer === "paper"){
            //         console.log('you lose (got wrapped)');
            //     } 
            //     else if (getComputerChoice() === 3 && answer === "paper"){
            //         console.log('DRAW');
            //     }
            //     else {
            //         return 'you either inputted the wrong answer or its broken';
            //     }
            // }
        

    // console.log(getComputerChoice());
    // console.log(calculation());
    console.log(getHumanChoice()); 
    // console.log( typeof getComputerChoice());
    console.log(answer);

    // console.log(typeof rock);

    
    