const alertBox = document.querySelector(".alertbox");
const button = document.querySelector(".check");
const input = document.querySelector(".guess");
const message = document.querySelector(".alert__message");
const hello = document.querySelector(".hello");

const generateRandomNumber = () => {
  return Math.floor(Math.random() * (100 - 1) + 1);
};

let count = 1;
let resetButton;
const randomNumber = generateRandomNumber();
console.log(randomNumber);

const setGameOver = () => {
  input.disabled = true;
  button.disabled = true;
  setTimeout(reloadPage, 5000);
};

function reloadPage() {
  location.reload();
}

const checkGuess = () => {
  let userInput = parseInt(input.value);
  if (userInput === randomNumber) {
    hello.innerHTML = "";
    message.innerHTML =
      "Conguralation! You guessed It 😎. Reseting Game in 5 seconds!";
    setTimeout(showAlert, 0);
    setGameOver();
  } else if (count === 6) {
    hello.innerHTML = "Game Over 😢.";
    message.innerHTML =
      "GAME OVER😢. You could not make it. Reseting Game in 5 seconds!";
    setTimeout(showAlert, 0);
    setGameOver();
  } else {
    if (userInput < randomNumber) {
      hello.innerHTML = "Too Low 📉";
    } else if (userInput > randomNumber) {
      hello.innerHTML = "Too high 📈";
    }
  }
  count++;
  input.value = "";
  input.focus();
};

button.addEventListener("click", checkGuess);

const showAlert = () => {
  alertBox.style.right = "3%";
};
