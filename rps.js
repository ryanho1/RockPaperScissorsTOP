    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    let answer = "";

    rock.style.color = "blue";
    paper.style.color = "red";
    scissors.style.color = "green";

    rock.addEventListener('click', function() {
        answer = "rock";
    });
    paper.addEventListener('click', function() {
        answer = "paper";
    });
    scissors.addEventListener('click', function() {
        answer = "scissors";
    });

    const result = document.querySelector("#result");
    result.textContent = "Result: ";

    const score = document.querySelector("#score");
    score.textContent = "Score: ";

    const finalScore = document.querySelector("#finalScore");
    

    function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);
        };
        let humanScore = 0;
        let computerScore = 0;

        function reset() {
        humanScore = 0;
        computerScore = 0;
        finalScore.textContent = "Final Scoreboard: " + humanScore + " - " + computerScore;
        score.textContent = ("Current scoreboard: 0-0");
        }

        function playRound() {
        var ComputerChoice = getComputerChoice();
        console.log (ComputerChoice);
        if ((ComputerChoice === 1 && answer === 'rock') || (ComputerChoice === 2 && answer === "scissors") ||
            (ComputerChoice === 3 && answer === 'paper'))
            {
            result.textContent = "Result: DRAW";
            score.textContent = ("Current scoreboard: 0-0");
            } 
        else if ((ComputerChoice === 2 && answer === 'rock') || (ComputerChoice === 3 && answer === "scissors") ||
            (ComputerChoice === 1 && answer === 'paper'))
            {
            result.textContent = "Result: You WIN"; 
            score.textContent = ("Current scoreboard: 1-0");
            humanScore++;
            } 
        else if ((ComputerChoice === 3 && answer === 'rock') || (ComputerChoice === 1 && answer === "scissors") || 
            (ComputerChoice === 2 && answer === 'paper'))
            {
            result.textContent = "Result: You LOSE";
            score.textContent = ("Current scoreboard: 0-1");
            computerScore++;
            }
        else {
            return "no";
        }
        finalScore.textContent = "Final Scoreboard: " + humanScore + " - " + computerScore;

        if (humanScore === 5){
            alert ("human wins");
        } else if (computerScore === 5){
            alert ("you lose");
        }
    }

    //push to github, then continue with TOP


    