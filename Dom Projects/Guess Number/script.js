"use strict";

let secretNumber = Math.round(Math.random() * 19) + 1;
let score = 20;
let heighscore = 0;

const DisplayNumber = function (message) {
  document.querySelector("#range").textContent = message;
};

// document.querySelector("#number").textContent = secretNumber;

document.querySelector("#check").addEventListener("click", function () {
  const guess = Number(document.querySelector("#guess").value);
  if (!guess) {
    // document.querySelector("#range").textContent = "😡 No Number!";
    DisplayNumber("😡 No Number!");
  } else if (guess === secretNumber) {
    // document.querySelector("#range").textContent = "🎉 Correct Number",
    //   number;
    DisplayNumber("🎉 Correct Number ", number);
    document.querySelector("#number").textContent = secretNumber;
    document.querySelector("body").style.background = "green";
    document.querySelector("#highscore-number").textContent = score;
    console.log(secretNumber);

    if (score > heighscore) {
      heighscore = score;
      document.querySelector(".highscore-number").textContent = heighscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector("#guess").value = "";
      // document.querySelector("#range").textContent =
      //   guess > secretNumber ? "😍 Too High!" : "😍 Too Low!";
      DisplayNumber(guess > secretNumber ? "😍 Too High!" : "😍 Too Low!");
      score--;
      document.querySelector("#score-number").textContent = score;
      console.log(secretNumber);
    } else {
      // document.querySelector("#range").textContent = "😥 You Lost the Game!";
      DisplayNumber("😥 You Lost the Game!");
      document.querySelector("#guess").textContent = " ";
    }

    //  else if (guess > secretNumber) {
    //   if (score > 0) {
    //     document.querySelector("#guess").value = "";
    //     document.querySelector("#range").textContent = "😍 Too High!";
    //     score--;
    //     document.querySelector("#score-number").textContent = score;
    //     console.log(secretNumber);
    //   } else {
    //     document.querySelector("#range").textContent = "😥 You Lost the Game!";
    //     document.querySelector("#guess").textContent = " ";
    //   }
    // } else if (guess < secretNumber) {
    //   if (score > 0) {
    //     document.querySelector("#guess").textContent = " ";
    //     document.querySelector("#range").textContent = "😍 Too Low!";
    //     score--;
    //     document.querySelector("#score-number").textContent = score;
    //     console.log(secretNumber);
    //   } else {
    //     document.querySelector("#guess").textContent = " ";
    //     document.querySelector("#range").textContent = "😥 You Lost the Game!";
    //   }
    // }
  }
});

function validateForm() {
  const inputElement = document.getElementById("guess");
  const inputValue = parseInt(inputElement.value);

  if (inputValue < 1 || inputValue > 20) {
    alert("Please enter a number between 1 and 20.");
    // document.querySelector("#range").textContent =
    //   "Please enter a number between 1 and 20.";
    DisplayNumber("Please enter a number between 1 and 20.");

    return false;
  }

  return true;
}

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.round(Math.random() * 19) + 1;
  DisplayNumber("Start Guessing...");
  // document.querySelector("#range").textContent = "Start Guessing...";
  document.querySelector("#score-number").textContent = score;
  document.querySelector("#number").textContent = "? ";
  document.querySelector("#guess").value = "";
  document.querySelector("body").style.background = "#222";
  document.querySelector(".number").style.width = "15rem";
});
