"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
//let data123 = "xyzzzz";
//console.log(document.querySelector("h1").dataset);

//console.log(document.querySelector('.message').textContent = 'aashish');

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value );
  console.log(guess);

  // when there is no input
  if (!guess) {
    //document.querySelector(".message").textContent = "🚫 no number!";
    displayMessage("🚫 no number!");
  }

  // when guess is correct
  else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = "🎉 correct number";
    displayMessage("🎉 correct number");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  // when guess is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "🤔 too high!" : "🤔 too low!";
      displayMessage(guess > secretNumber ? "🤔 too high!" : "🤔 too low!");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector(".message").textContent = "😱 you lost!";
      displayMessage("😱 you lost!");
      document.querySelector(".score").textContent = 0;

      document.querySelector("body").style.backgroundColor = "#ec1212";
      //document.querySelector(".number").style.width = "30rem";
    }
  }

  // when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "🤔 too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😱 you lost!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
  // // when guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "🤔 too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😱 you lost!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  //document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
