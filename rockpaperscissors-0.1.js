
function computerPlay () {
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else if (randomNum === 2) {
        return 'scissors';
    }
}

function round (playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    switch (playerSelection + ',' + computerSelection) {
        case 'rock,rock':
            return 'draw';
            break;
        case 'rock,paper':
            return 'lose';
            break;
        case 'rock,scissors':
            return 'win';
            break;
        case 'paper,rock':
            return 'win';
            break;
        case 'paper,paper':
            return 'draw';
            break;
        case 'paper,scissors':
            return 'lose';
            break;
        case 'scissors,rock':
            return 'lose';
            break;
        case 'scissors,paper':
            return 'win';
            break;
        case 'scissors,scissors':
            return 'draw';
            break;                                    



    }
}
    
function game() { 
    const roundLimit = 5;
    let playerScore= 0;
    let computerScore =0;

    for (currentRound = 1; currentRound <= roundLimit; currentRound++) {
        // prompt for player input
        let playerPlay = prompt("Player input?");
        
        // play round
        let roundResult = round(playerPlay,computerPlay()); 
        console.log(roundResult);

        // increment score
        if (roundResult === 'draw') {
            playerScore +=1;
            computerScore +=1;

            console.log(`Player score: ${playerScore}`)
            console.log(`Computer score: ${computerScore}`)
        } else if (roundResult === 'win') {
            playerScore +=1;
            console.log(`Player score: ${playerScore}`)
            console.log(`Computer score: ${computerScore}`)
        } else if (roundResult === 'lose') {
            computerScore +=1;
            console.log(`Player score: ${playerScore}`)
            console.log(`Computer score: ${computerScore}`)
        }
    }

    return getGameResult(playerScore, computerScore);

}


function getGameResult (playerScore, computerScore) {
    if (playerScore === computerScore) {
        return 'Game result: You drew!';
    } else if (playerScore < computerScore) {
        return 'Game result: You lost!';
    } else if (playerScore > computerScore) {
        return 'Game result: You won!';
    }
}

