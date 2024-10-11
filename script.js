// Existing Word Scramble Game Code
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
  const correctAnswer = words[currentWordIndex].original.toLowerCase();

  if (userAnswer === correctAnswer) {
    document.getElementById("result").textContent = "Correct! Here's the next word.";
    // Move to the next word
    currentWordIndex = (currentWordIndex + 1) % words.length;
    displayScrambledWord();
    document.getElementById("user-input").value = ""; // Clear the input
  } else {
    document.getElementById("result").textContent = "Incorrect! Try again.";
  }
}

// Initialize the first scrambled word when the page loads
window.onload = function() {
  displayScrambledWord();
};

// New Video Functionality

// Get elements
const videoContainer = document.getElementById("video-container");
const introVideo = document.getElementById("intro-video");
const playPauseButton = document.getElementById("play-pause");
const gameContent = document.getElementById("game-content");

// Function to toggle play/pause
function togglePlayPause() {
  if (introVideo.paused || introVideo.ended) {
    introVideo.play();
    playPauseButton.textContent = "Pause";
  } else {
    introVideo.pause();
    playPauseButton.textContent = "Play";
  }
}

// Event listener for play/pause button
playPauseButton.addEventListener("click", togglePlayPause);

// When video ends, hide the video container and show the game
introVideo.addEventListener("ended", () => {
  videoContainer.style.display = "none";
  gameContent.style.display = "block";
});

// Optionally, show the game content when the user skips the video
// For simplicity, we'll show the game after the video ends

// Show game content if the video is already played (e.g., user refreshes)
introVideo.addEventListener("play", () => {
  gameContent.style.display = "none";
});

introVideo.addEventListener("pause", () => {
  // You can add logic here if needed when the video is paused
});
