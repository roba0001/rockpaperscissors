import { $, $$ } from "../utils/dom.js";
import { getRandomNumber } from "../utils/numbers.js";
let userGuess;
let computerGuess;
let result;

const rock = $(".rock");
const paper = $(".paper");
const scissors = $(".scissors");
const leftHand = $("#player1");
const rightHand = $("#player2");

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
  // random nummer kan være 0 1 eller 2
  let ranNum = getRandomNumber(3);
  // Math.floor(Math.random() * (2 + 1));

  // if sætning hvis ranNum er 0 så er computer guess rock osv...
  if (ranNum === 0) {
    computerGuess = "rock";
  } else if (ranNum === 1) {
    computerGuess = "paper";
  } else {
    computerGuess = "scissors";
  }

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
  leftHand.classList.add("shake");
  rightHand.classList.add("shake");
  $(".player").addEventListener("animationend", visResultat);
}

function visResultat() {
  leftHand.classList.remove("shake");
  rightHand.classList.remove("shake");

  if (result === "draw") {
    // document.querySelector("#draw");
    $("#draw").classList.remove("hidden");
  } else if (result === "computer") {
    // document.querySelector("#lose")
    $("#lose").classList.remove("hidden");
  } else {
    // document.querySelector("#win")
    $("#win").classList.remove("hidden");
  }
  // ændre users håndtegn
  if (userGuess === "scissors") {
    leftHand.classList.add("scissors");
  } else if (userGuess === "rock") {
    leftHand.classList.add("rock");
  } else {
    leftHand.classList.add("paper");
  }

  //   ændre computers håndtegn
  if (computerGuess === "scissors") {
    rightHand.classList.add("scissors");
  } else if (computerGuess === "rock") {
    rightHand.classList.add("rock");
  } else {
    rightHand.classList.add("paper");
  }

  rock.addEventListener("click", restartGame);
  paper.addEventListener("click", restartGame);
  scissors.addEventListener("click", restartGame);
}

function restartGame() {
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  leftHand.classList.remove("rock");
  leftHand.classList.remove("scissors");
  leftHand.classList.remove("paper");
  rightHand.classList.remove("rock");
  rightHand.classList.remove("scissors");
  rightHand.classList.remove("paper");

  //   this.classList = "";
  //   this.firstElementChild.classList = "";
  //   this.offsetLeft;
}
