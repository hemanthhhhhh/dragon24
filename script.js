// List of words for the game
const words = [
  { original: "apple", scrambled: "elppa" },
  { original: "banana", scrambled: "nanaba" },
  { original: "orange", scrambled: "egnaro" },
  { original: "grape", scrambled: "eparg" },
  { original: "kiwi", scrambled: "wiik" },
  { original: "dragon fruit", scrambled: "gondar tufti" },
  { original: "watermelon", scrambled: "lonetremwa" },
  { original: "pineapple", scrambled: "enipapple" },
  { original: "cherry", scrambled: "yrrehc" },
  { original: "pomegranate", scrambled: "garetnapome" }
];

let currentWordIndex = 0;

// Function to display the scrambled word
function displayScrambledWord() {
  const scrambledWordElement = document.getElementById("scrambled-word");
  scrambledWordElement.textContent = words[currentWordIndex].scrambled;
}

// Function to check the answer
function checkAnswer() {
  const userAnswer = document.getElementById("user-input").value.trim().toLowerCase();
  const correctAnswer = words[currentWordIndex].original;

  if (userAnswer === correctAnswer) {
    document.getElementById("result").textContent = "Correct! Here's the next word.";
    // Move to the next word
    currentWordIndex = (currentWordIndex + 1) % words.length;
    displayScrambledWord();
    document.getElementById("user-input").value = "";  // Clear the input
  } else {
    document.getElementById("result").textContent = "Incorrect! Try again.";
  }
}

// Initialize the first scrambled word when the page loads
window.onload = function() {
  displayScrambledWord();
};

document.getElementById('play-pause-btn').addEventListener('click', function () {
  const video = document.getElementById('intro-video');
  
  if (video.paused) {
    video.play();
    this.textContent = 'Pause';
  } else {
    video.pause();
    this.textContent = 'Play';
  }
});