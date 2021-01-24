let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-value"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload()
    }
})

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter number between ${min} and ${max}`, "green");
  }

  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct!`);
    guessInput.disabled = true;
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      gameOver(false, `Game Over, you lost, the correct answer ${winningNum}`);
    } else {
      guessInput.value = "";
      guessInput.style.borderColor = "orange";
      setMessage(
        `${guess} is not correct. ${guessesLeft} guesses left`,
        "orange"
      );
    }
  }
});

function getRandomNum(min, max){
    return Math.floor(Math.random() * (max-min +1)+min)
}

function gameOver(won, msg) {
  let collor;
  won === true ? (color = "green") : (color = "red");

  guessInput.disabled = true; 
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  guessBtn.value = 'Play Again'
  guessBtn.className += 'play-again'
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
