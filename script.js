"use strict";
let userGuess;
let computerGuess;
let result;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", rockClicked);
paper.addEventListener("click", paperClicked);
scissors.addEventListener("click", scissorsClicked);

function rockClicked() {
  //   console.log("rock clicked");
  userGuess = "rock";
  computerGuesses();
}
function paperClicked() {
  //   console.log("paper clicked");
  userGuess = "paper";
  computerGuesses();
}
function scissorsClicked() {
  //   console.log("scissors clicked");
  userGuess = "scissors";
  computerGuesses();
}

function computerGuesses() {
  computerGuess = "scissors";
  //   let ranNum;
  // random 0 1 eller 2
  // if sætning hvis ranNum er 0 så er computer guess scissors osv...
  console.log("Computer Guess:", computerGuess);
  console.log("User Guess:", userGuess);
  determineWinner();
}

function determineWinner() {
  // resultater af at user vælger rock
  if (userGuess === "rock" && computerGuess === "rock") {
    result = "draw";
  }
  if (userGuess === "rock" && computerGuess === "paper") {
    result = "computer";
  }
  if (userGuess === "rock" && computerGuess === "scissors") {
    result = "user";
  }

  // resultater af at user vælger paper
  if (userGuess === "paper" && computerGuess === "paper") {
    result = "draw";
  }
  if (userGuess === "paper" && computerGuess === "scissors") {
    result = "computer";
  }
  if (userGuess === "paper" && computerGuess === "rock") {
    result = "user";
  }

  // resultater af at user vælger scissors
  if (userGuess === "scissors" && computerGuess === "scissors") {
    result = "draw";
  }
  if (userGuess === "scissors" && computerGuess === "rock") {
    result = "computer";
  }
  if (userGuess === "scissors" && computerGuess === "paper") {
    result = "user";
  }

  console.log("Result:", result);
  handAnimation();
}

function handAnimation() {
  console.log("animation starter");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document.querySelector(".player").addEventListener("animationend", visResultat);
}

function visResultat() {
  console.log("her er resultatet");
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");

  if (result === "draw") {
    document.querySelector("#draw").classList.remove("hidden");
  }
  if (result === "computer") {
    document.querySelector("#lose").classList.remove("hidden");
  }
  if (result === "user") {
    document.querySelector("#win").classList.remove("hidden");
  }
  // ændre users håndtegn
  if (userGuess === "scissors") {
    document.querySelector("#player1").classList.add("scissors");
  }
  if (userGuess === "rock") {
    document.querySelector("#player1").classList.add("rock");
  }
  if (userGuess === "paper") {
    document.querySelector("#player1").classList.add("paper");
  }

  //   ændre computers håndtegn
  if (computerGuess === "scissors") {
    document.querySelector("#player2").classList.add("scissors");
  }
  if (computerGuess === "rock") {
    document.querySelector("#player2").classList.add("rock");
  }
  if (computerGuess === "paper") {
    document.querySelector("#player2").classList.add("paper");
  }

  rock.addEventListener("click", restartGame);
  paper.addEventListener("click", restartGame);
  scissors.addEventListener("click", restartGame);
}

function restartGame() {
  console.log("restart");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#player1").classList.remove("rock");
  document.querySelector("#player1").classList.remove("scissors");
  document.querySelector("#player1").classList.remove("paper");

  //   this.classList = "";
  //   this.firstElementChild.classList = "";
  //   this.offsetLeft;
}
