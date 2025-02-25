const input = document.getElementById("input");
const remaining_chance = document.querySelector(".remaning_chance");
const last_Guess = document.querySelector(".Last_Guess");
const low_High = document.querySelector(".Low_High");
const messageBox = document.createElement("p");
document.body.appendChild(messageBox);

let num = Math.floor(Math.random() * 100) + 1;
let guess_remaining = 10;
let playGame = true;

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    if (playGame) {
        checkGuess();
    }
});

function checkGuess() {
    let userGuess = parseInt(input.value);
    
    if (isNaN(userGuess) || userGuess > 100 || userGuess < 1) {
        messageBox.textContent = "❗ Enter a valid number between 1 and 100.";
        return;
    }

    if (userGuess === num) {
        messageBox.textContent = "🎉 You WON!";
        endGame();
    } else {
        guess_remaining--;
        last_Guess.textContent += `${userGuess}, `;
        remaining_chance.innerHTML = `You Have ${guess_remaining} Chances Left`;

        low_High.textContent = userGuess > num ? "📈 Too High!" : "📉 Too Low!";
        
        if (guess_remaining === 0) {
            messageBox.textContent = `❌ Game Over! The correct number was ${num}.`;
            endGame();
        }
    }

    input.value = "";
}

function endGame() {
    playGame = false;
    input.disabled = true;
}
