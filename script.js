// Mood toggle
const toggleMood = document.getElementById("toggleMood");
const body = document.body;

toggleMood.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleMood.textContent = body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Switch Mood";
});

// Love letter reveal
const revealButton = document.getElementById("revealLetter");
const loveLetter = document.getElementById("loveLetter");

revealButton.addEventListener("click", () => {
  if (loveLetter.style.display === "block") {
    loveLetter.style.display = "none";
    revealButton.textContent = "💖 Open Letter";
  } else {
    loveLetter.style.display = "block";
    revealButton.textContent = "💌 Hide My Letter";
  }
});

// Music control
const music = document.getElementById("bgMusic");
function playSong(filename) {
  music.src = filename;
  music.play();
}

let isMuted = false;

toggleMusic.addEventListener("click", () => {
  if (isMuted) {
    music.muted = false;
    toggleMusic.textContent = "🔇 Mute Music";
  } else {
    music.muted = true;
    toggleMusic.textContent = "🔊 Unmute Music";
  }
  isMuted = !isMuted;
});

// For each picture card, run its own slideshow
document.querySelectorAll(".picture-card").forEach(card => {
  const slides = card.querySelectorAll(".card-slide");
  let index = 0;

  // Function to show the current image
  function showSlide() {
    slides.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
    index = (index + 1) % slides.length; // next image
  }

  showSlide(); // start immediately
  setInterval(showSlide, 3000); // change every 3 seconds
});
