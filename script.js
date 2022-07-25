let choices = ["rock", "paper", "scissors"];
function playGame() {
    let playerSelection = window.prompt("Rock, Paper, or Scissors?").toLowerCase();
    console.log(`Player Selection: ${playerSelection}`)
    function selectRandom() {
        return choices[Math.floor(Math.random() * 3)];
    }
    computerSelection = selectRandom();
    console.log(`Computer Selection: ${computerSelection}`);
    while (!choices.includes(playerSelection)) {
        playerSelection = window.prompt("Rock, Paper, or Scissors?");
    };
    switch(playerSelection) {
        case "rock":
            if (computerSelection === choices[2]) {
                console.log("You win!")
                return true;
            } else if (computerSelection === choices[1]) {
                console.log("You lose!")
                return false;
            } else {
                alert("Tie!");
                playGame();
            }
            break;
        case "paper":
            if (computerSelection === choices[0]) {
                return true;
            } else if (computerSelection === choices[2]) {
                return false;
            } else {
                alert("Tie!");
                playGame();
            }
            break;
        case "scissors":
            if (computerSelection === choices[1]) {
                return true;
            } else if (computerSelection === choices[0]) {
                return false;
            } else {
                alert("Tie!");
                playGame();
            }
            break;
        default:
            console.log("Error!")
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (playGame()) {
        document.querySelector(".win").style.display = "block";
        document.querySelector(".lose").style.display = "none";
    } else {
        document.querySelector(".lose").style.display = "block";
        document.querySelector(".win").style.display = "none";
    }
})