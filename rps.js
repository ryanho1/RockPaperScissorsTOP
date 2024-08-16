  
    
    function getComputerChoice() {
    Math.floor(Math.random() * 4);
        if (1){
            console.log("rock");
        } else if (2){
            console.log('scissors');
        }   else if (3){
            console.log('paper');
        }
    }

    function getHumanChoice(){
        window.prompt("Pick rock, paper, or scissors","tf is this?")
            // if (getComputerChoice = 1 || getHumanChoice = 3){
            //     console.log("You win");
            }
    // }

    console.log(getComputerChoice());
    