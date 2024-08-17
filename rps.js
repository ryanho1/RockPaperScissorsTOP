  
    
    function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);}

    let compChoice = getComputerChoice();

    function calculation()  {
        if (compChoice === 1) {
            console.log("rock");
        } 
        else if (compChoice === 2) {
            console.log('scissors');
        }   
        else if (compChoice === 3) {
            console.log('paper');
        };
    }

    console.log(calculation());

    function getHumanChoice(){
            console.log(getComputerChoice());
                let answer = window.prompt("choose rock paper or scissors");
                if (getComputerChoice() === 1 && answer === "rock"){
                    console.log('tie!');
                } else if (getComputerChoice() === 2 && answer === "rock"){
                    console.log('you win (rock kills scissors)');
                } else if (getComputerChoice() === 3 && answer === "rock"){
                    console.log('you lose (paper wraps rock!)');}
                else if (getComputerChoice() === 1 && answer === "scissors"){
                    console.log('you lose (scissors dies to rock)');
                } else if (getComputerChoice() === 2 && answer === "scissors"){
                    console.log('tie!');}
                    else if (getComputerChoice() === 3 && answer === "scissors"){
                    console.log('Scissors win (cut cut)');
                } else if (getComputerChoice() === 1 && answer === "paper"){
                    console.log('you win! (paper wraps around)');}
                    else if (getComputerChoice() === 2 && answer === "paper"){
                    console.log('you lose (got wrapped)');
                } else if (getComputerChoice() === 3 && answer === "paper"){
                    console.log('DRAW');}
                    else {
                        console.log('no match');
                    }}
            //      else if ("rock" && compChoice === 2){
            //         console.log('you win');
            //     } else if ("rock" && compChoice === 3){
            //         console.log('you lose');
            //     } else if ("scissors" && compChoice === 1){
            //         console.log('you lose');
            //     } else if ("scissors" && compChoice === 2){
            //         console.log('tie!')
            //     } else if ("scissors" && compChoice === 3){
            //         console.log('you win');
            //     } else if ("paper" && compChoice === 1){
            //         console.log('you win');
            //     } else if ("paper" && compChoice === 2){
            //         console.log('you lose');
            //     } else if ("paper" && compChoice === 3){
            //         console.log('tie!');
            //     } else if ('undefined') {
            //         console.log('nig')
            //     };
            // }
        

    // console.log(getComputerChoice());
    // console.log(calculation());
    console.log(getHumanChoice()); 
    console.log( typeof compChoice);
    console.log( typeof getComputerChoice());
    // console.log(typeof rock);

    
    