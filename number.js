"use script";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

const displayMessage = function (comment) {
  document.querySelector(".comment").textContent = comment;
};
const displayBody = function (body) {
  document.querySelector("body").style.backgroundColor = body;
};

const displaySecretNumber = function (secret) {
  document.querySelector(".secretnumber").textContent = secret;
};

const displayWidthNumber = function (width) {
  document.querySelector(".secretnumber").style.width = width;
};

const displayScore = function (score) {
  document.querySelector(".numberscore").textContent = score;
};

let displayHighscore = function (highscore) {
  document.querySelector(".numberhighscore").textContent = highscore;
};

let numberHighScore = document.querySelector(".numberhighscore").textContent;
let numberScore = document.querySelector(".numberscore").textContent;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    displayMessage("⛔No number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉Correct Number");
    displayBody("rgb(89, 226, 25)");
    displayWidthNumber("250px");
    displaySecretNumber(secretNumber);

    if (score > numberHighScore) {
      numberHighScore = score;
      document.querySelector(".numberhighscore").textContent = numberHighScore;
      console.log(typeof numberScore);
      console.log(typeof numberHighScore);
    }
    // if (score > highscore) {
    //   score = highscore;

    //   document.querySelector(".highscore").textContent = highscore;
    // }
  }

  // highscore

  //   if (score > highscore) {
  //     // highscore = score;
  //     document.querySelector(".numberhighscore").textContent = highscore;
  else if (guess !== secretNumber && score > 1) {
    score--;
    highscore = score;
    displayMessage(guess < secretNumber ? "📉Too Low" : "📈Too high");
    displayScore(score);
    displayHighscore(0);
  }
  // if you loose the game
  else {
    displayMessage("💥You lost the game!");
    displayScore(0);
    // extra feauture
    displaySecretNumber(secretNumber);
    displayWidthNumber("250px");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayScore(score);
  displayMessage("Start guessing...");
  displaySecretNumber("?");
  displayBody("rgb(226, 149, 25)");
  displayWidthNumber("150px");
  document.querySelector(".guess").value = "";
});
//1. select variables numbers that need to change
//2. condition if no input
// if user guesses correct number- display message change feautures
//3. else  if condition if input too high && score < 1
//4. else if condition if input too low && score <1
//5. again button new game resetting original conditions
