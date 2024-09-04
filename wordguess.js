"use strict";

const words = ["Love", "Happy", "Angry", "Excited", "Tired"]; // Array of Random Words
var currentWord; // Store current word


// Various elements
var wordDiv = document.getElementById("word");
var inputBox = document.getElementById("letter");
var startButton = document.getElementById("startGame");
var msgBox = document.getElementById("msgBox");

var correctLetters = 0; // Track how many correct letters there are

startButton.addEventListener("click", startGame); 
inputBox.addEventListener("input", handleInput);

function startGame() {
  inputBox.style.display = "block"; // Show Inputbox
  wordDiv.innerHTML = ""; // Clear the word
  msgBox.innerHTML = ""; // Clear the message box
  inputBox.disabled = false; // Enable inputbox
  inputBox.focus(); // Focus input box
  currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase(); // Set current word to guess
  correctLetters = 0; // Reset correctLetters

  // Create elements for each letter and placing a * in it
  for (let i = 0; i < currentWord.length; i++) {
    var letterDiv = document.createElement("div");
    var starDiv = document.createElement("div");
    var lineDiv = document.createElement("div");
    letterDiv.className = "wordBox";
    starDiv.className = "wordBox-letter";
    starDiv.innerText = "*";
    lineDiv.className = "wordBox-line";
    letterDiv.appendChild(starDiv);
    letterDiv.appendChild(lineDiv);
    wordDiv.appendChild(letterDiv);
  }
}

function handleInput(event) {
  setTimeout(() => {
    const enteredLetter = event.target.value.toUpperCase();
    event.target.value = ""; 

    let correctGuess = false;
    const wordBoxLetters = document.querySelectorAll(".wordBox-letter");

    for (let i = 0; i < currentWord.length; i++) {
      if (currentWord[i] === enteredLetter && wordBoxLetters[i].innerText === "*") {
        wordBoxLetters[i].innerText = enteredLetter;
        correctLetters++;
        correctGuess = true;
      }
    }

    if (correctLetters === currentWord.length) {
      msgBox.textContent = `You guessed the word ${currentWord} correctly!`;
      inputBox.disabled = true;
    }
  }, 300);
}







