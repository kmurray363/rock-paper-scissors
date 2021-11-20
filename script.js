function computerSelection(){
    const choice = Math.floor(Math.random() * 3)
    let output = ""
    switch (choice){
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
}

function playerSelection(){
    return prompt('Please make your selection. Type either rock, paper or scissors to continue').toLowerCase();
}

function playRound(computerSelection, playerSelection){
    let score = 0;
    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
        playerSelection = prompt('Invalid selection. Please type either rock, paper or scissors to continue').toLowerCase();
    }
    if (playerSelection === computerSelection){
        console.log(`You both picked ${playerSelection} it's a tie.`)
    } 
    else {
        switch (playerSelection){
            case 'rock':
                if (computerSelection === 'paper') {
                    console.log(`You selected ${playerSelection} and your opponent selected ${computerSelection}... You lose this round.`);
                    score = -1;
                }
                else if (computerSelection === 'scissors') {
                    console.log(`You selected ${playerSelection} and your opponent selected ${computerSelection}... You win this round.`);
                    score = 1;
                }
                break;
            case 'paper':
                if (computerSelection === 'scissors') {
                    console.log(`You selected ${playerSelection} and your opponent selected ${computerSelection}... You lose this round.`);
                    score = -1;
                    }
                else if (computerSelection === 'rock') {
                    console.log(`You selected ${playerSelection} and your opponent selected ${computerSelection}... You win this round.`);
                    score = 1;
                }
                break;
            case 'scissors':
                if (computerSelection === 'rock') {
                    console.log(`You selected ${playerSelection} and your opponent selected ${computerSelection}... You lose this round.`);
                    score = -1;
                    }
                else if (computerSelection === 'paper') {
                    console.log(`You selected ${playerSelection} and your opponent selected ${computerSelection}... You win this round.`);
                    score = 1;
                }
                break;
        }
    }
    return score;
}

function game(){
    let score = 0;
    for(let i=0; i < 5; i++){
        score += playRound(computerSelection(),playerSelection());
        if (score < 0){console.log(`You are losing to your opponent by ${score * -1}.`)}
        else if (score > 0){console.log(`You are beating your opponent by ${score}.`)}
        else console.log('You are tied with your opponent.')
    }
    if (score < 0) {console.log(`You lost to your opponent by ${score * -1}. How embarrassing...`)}
    else if (score > 0) {console.log(`You beat your opponent by ${score}. Congratulations!`)}
    else {console.log('You tied with the opponent. How boring...')}
}

game()