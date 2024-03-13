let attempts = 0;
const maxAttempts = 5;
const actualGuess = 10;

function checkAttempts(userGuess) {
  if (userGuess === '') {
    alert("Input is empty");
  } else {
    attempts++;
    updateAttemptsDisplay();
    if (attempts < maxAttempts && Number(userGuess) === actualGuess) {
      alert("Correct guess, nice job");
    } else if (attempts === maxAttempts && Number(userGuess) !== actualGuess) {
      alert("Wrong guess, trial is over");
      disableButton();
      changeButtonColor();
    } else if (attempts < maxAttempts && Number(userGuess) !== actualGuess) {
      alert("Wrong guess, try again");
    } else if (attempts === maxAttempts && Number(userGuess) === actualGuess) {
      alert("Correct guess, you're in luck");
    }
  }
}

function disableButton() {
  inputButton.disabled = true;
}

function changeButtonColor() {
  inputButton.style.backgroundColor = "grey";
}

function updateAttemptsDisplay() {
  const remainingAttempts = maxAttempts - attempts;
  const chances = document.getElementById("chances");
  chances.textContent = You have ${remainingAttempts} attempt${remainingAttempts === 1 ? '' : 's'} left;
}

const inputVal = document.querySelector("input");
const inputButton = document.getElementsByClassName("btn")[0];

inputButton.addEventListener("click", function () {
  checkAttempts(inputVal.value);
});