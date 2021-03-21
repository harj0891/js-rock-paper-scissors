
let playerCurrentScore = 0;
let computerCurrentScore = 0;
let maxScore = 5;

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

function getRoundResult (playerSelection, computerSelection) {

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

function getGameResult (playerScore, computerScore) {
    if (playerScore === computerScore) {
        displayGameResult('Game result: You drew!');
    } else if (playerScore < computerScore) {
        displayGameResult('Game result: You lost!');
    } else if (playerScore > computerScore) {
        displayGameResult('Game result: You won!');
    }
}


function game(playerSelection, playerScore, computerScore) { 
    // play round
    let roundResult = getRoundResult(playerSelection,computerPlay()); 

    // display score
    if (roundResult === 'draw') {
        playerCurrentScore +=1;
        computerCurrentScore +=1;
        displayRoundScore(playerCurrentScore,computerCurrentScore);
    } else if (roundResult === 'win') {
        playerCurrentScore +=1;
        displayRoundScore(playerCurrentScore,computerCurrentScore);
    } else if (roundResult === 'lose') {
        computerCurrentScore +=1;
        displayRoundScore(playerCurrentScore,computerCurrentScore);
    }

}

function resetGame() {
    // reset scores
    playerCurrentScore=0;
    computerCurrentScore=0;
    displayRoundScore(playerCurrentScore, computerCurrentScore);

    // reset buttons
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

    gameScoreSection.removeChild(resultSection);
}


function displayRoundScore(playerScore, computerScore) {
    playerTotal.textContent = `Player Score: ${playerScore}`;
    computerTotal.textContent =`Computer Score: ${computerScore}`;
    if (playerScore === maxScore || computerScore === maxScore) {
        getGameResult(playerScore, computerScore);
    }

}

function displayGameResult(gameResult) {

    // disable buttons
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    // display game result
    resultSection.textContent = gameResult;
    gameScoreSection.appendChild(resultSection);

}




const rockBtn = document.querySelector('#select-rock');
rockBtn.addEventListener("click", function() {
    game("rock",playerCurrentScore,computerCurrentScore);
});

const paperBtn = document.querySelector('#select-paper');
paperBtn.addEventListener("click", function() {
    game("paper",playerCurrentScore,computerCurrentScore);
});

const scissorsBtn = document.querySelector('#select-scissors');
scissorsBtn.addEventListener("click", function() {
    game("scissors",playerCurrentScore,computerCurrentScore);
});

const resetBtn = document.querySelector('#reset-game');
resetBtn.addEventListener("click", function() {
    resetGame();
});

const playerTotal = document.querySelector('#score-player');
const computerTotal = document.querySelector('#score-computer');

const gameScoreSection = document.querySelector('#main-game-scores');
const resultSection =  document.createElement('p');