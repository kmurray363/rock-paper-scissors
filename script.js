function computerPlay(){
    const choice = Math.floor(Math.random()*3);
    let output = ""
    switch(choice){
        case 0:
            output = "rock";
            break;
        case 1:
            output = "paper";
            break;
        case 2: 
            output = "scissors";
            break;
    }
    return output;
};

function playGame(playerSelection, computerSelection){
    const bestOf = document.getElementById("bestOf").value;
    if(playerScore > (bestOf / 2) || computerScore > (bestOf /2)){} 
    else {
        let results = '';
        let outcome = '';
        if(playerSelection === "ROCK"){
            switch(computerSelection){
                case "rock":
                    results = "You both picked rock... It's a tie.";
                    outcome = 'tie';
                    break;
                case "paper":
                    results = "You chose rock, your opponent chose paper... You lose this round.";
                    outcome ='loss';
                    break;
                case "scissors":
                    results = "You chose rock, your opponent chose scissors... You win this round!";
                    outcome = 'win';
                    break;
            }
        }
        else if(playerSelection === "SCISSORS"){
            switch(computerSelection){
                case "scissors":
                    results = "You both picked scissors... It's a tie.";
                    outcome = 'tie';
                    break;
                case "rock":
                    results = "You chose scissors, your opponent chose rock... You lose this round.";
                    outcome = 'loss';
                    break;
                case "paper":
                    results = "You chose scissors, your opponent chose paper... You win this round!";
                    outcome = 'win';
                    break;
            }
        }
        else if(playerSelection === "PAPER"){
            switch(computerSelection){
                case "paper":
                    results = "You both picked paper... It's a tie.";
                    outcome = 'tie';
                    break;
                case "scissors":
                    results = "You chose paper, your opponent chose scissors... You lose this round.";
                    outcome = 'loss';
                    break;
                case "rock":
                    results = "You chose paper, your opponent chose rock... You win this round!";
                    outcome = 'win';
                    break;
            }
        }
        display.textContent = results;

        if (outcome === 'win'){playerScore += 1
        } else if (outcome === 'loss'){computerScore += 1};

        computerScoreDisplay.textContent = computerScore;
        playerScoreDisplay.textContent = playerScore;
    };
    if(playerScore > (bestOf / 2) || computerScore > (bestOf /2)){
        if (computerScore > playerScore){
            alert('You lost... Please refresh the page to begin a new game');
        } else {
            alert('You won! Please refresh the page to begin a new game.')
        };
    };
};

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

const computerScoreDisplay = document.querySelector('.computerScore');
const playerScoreDisplay = document.querySelector('.playerScore');
let computerScore = 0;
let playerScore = 0;
const bestOfInput = document.querySelector('#bestOf');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playGame(button.id, computerPlay());
    });
});
