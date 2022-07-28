let choices = ["rock", "paper", "scissors"];
let buttons = document.querySelectorAll('button');
let playerScoreElement = document.querySelector('.playerScore');
let computerScoreElement = document.querySelector('.computerScore');
let scoreText = document.querySelector('.scoreText');
let resetButton = document.querySelector('.reset')
let winPicture = document.querySelector('.win')
let losePicture = document.querySelector('.lose')
let playerScore = 0;
let computerScore = 0;

function selectRandom() {
    return choices[Math.floor(Math.random() * 3)];
}

function playGame(playerSelection) {
    let computerSelection = selectRandom();
    console.log(`Player Selection: ${playerSelection}`)
    console.log(`Computer Selection: ${computerSelection}`);

    switch(playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                playerScore += 1;
                console.log("You win!");
                scoreText.textContent = 'You win!';
            } else if (computerSelection === "paper") {
                computerScore += 1;
                console.log("You lose!");
                scoreText.textContent = 'You lose.';
            } else {
                scoreText.textContent = 'Tie!';
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                playerScore += 1;
                console.log("You win!");
                scoreText.textContent = 'You win!';
            } else if (computerSelection === "scissors") {
                computerScore += 1;
                console.log("You lose!");
                scoreText.textContent = 'You lose.';
            } else {
                scoreText.textContent = 'Tie!';
            }
            break;
        case "scissors":
            if (computerSelection === "paper") {
                playerScore += 1;
                console.log("You win!");
                scoreText.textContent = 'You win!';
            } else if (computerSelection === "rock") {
                computerScore += 1;
                console.log("You lose!")
                scoreText.textContent = 'You lose.';
            } else {
                scoreText.textContent = 'Tie!';
            }
            break;
        default:
            console.log("Resetting.")
    }

    if (scoreText.textContent === 'You win!') scoreText.style.color = 'green';
    if (scoreText.textContent === 'You lose.') scoreText.style.color = 'red';
    if (scoreText.textContent === 'Tie!') scoreText.style.color = 'black';
    
    if (playerScore === 5) {
        playerScoreElement.textContent = 5;
        winPicture.style.display = 'block'
        scoreText.style.display = 'none'
        return;
    } else if (computerScore === 5) {
        computerScoreElement.textContent = 5;
        losePicture.style.display = 'block'
        scoreText.style.display = 'none'
        return;
    } else {
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
        return;
    }
}

resetButton.addEventListener ('click', (e) => {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    winPicture.style.display = 'none';
    losePicture.style.display = 'none';
    scoreText.style.display = 'block';
    scoreText.textContent = 'First to 5 wins!'
    scoreText.setAttribute('style', 'color: black')
})

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (playerScore >= 5 || computerScore >= 5) {
            return
        }
        playGame(e.target.className);
})
});