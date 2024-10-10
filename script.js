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

const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');

// Function to toggle between play and pause
function togglePlayPause() {
    if (video.paused || video.ended) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
}

// Add click event listener to the button
playPauseBtn.addEventListener('click', togglePlayPause);
