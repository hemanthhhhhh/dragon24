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

// Get video elements
const videoOverlay = document.getElementById("video-overlay");
const introVideo = document.getElementById("intro-video");
const playPauseButton = document.getElementById("play-pause");
const closeVideoButton = document.getElementById("close-video");

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

// Function to close the video overlay
function closeVideo() {
  introVideo.pause();
  videoOverlay.style.display = "none";
}

// Event listener for play/pause button
playPauseButton.addEventListener("click", togglePlayPause);

// Event listener for close button
closeVideoButton.addEventListener("click", closeVideo);

// When video ends, automatically close the overlay
introVideo.addEventListener("ended", () => {
  videoOverlay.style.display = "none";
});

// Optional: Autoplay the video when the overlay appears
window.addEventListener("load", () => {
  introVideo.play();
  playPauseButton.textContent = "Pause";
});

