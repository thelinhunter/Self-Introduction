const nav = document.querySelector(".nav")
const topText = document.querySelector(".Top a")
window.addEventListener("scroll", changeNav)

function changeNav() {
    if (window.scrollY > nav.offsetHeight + 300) {
        nav.classList.add("active");
        topText.textContent = "Back to top";
    } else {
        nav.classList.remove("active");
        topText.textContent = "My website";
    }
}

const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("audio-play");
const replayButton = document.getElementById("audio-replay");
const volumeControl = document.getElementById("volume-control");

audio.volume = 0.5;

playPauseButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "⏸️";
    } else {
        audio.pause();
        playPauseButton.textContent = "▶️";
    }
});

replayButton.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
    playPauseButton.textContent = "⏸️";
});

volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value;
});

// let hasInteracted = false;
// window.addEventListener("mousemove", startAudioPlayback);
// function startAudioPlayback() {
//   if (!hasInteracted) {
//       audio.play();
//       hasInteracted = true;
//       playPauseButton.textContent = "⏸️";
//   }
// }

const images = ['./img/moon.jpg', './img/sirius.jpg'];
const text = ['Moon', 'Sirius'];
const imageElement = document.getElementById('astronomy-image');
const textElement = document.getElementById('astronomy-text');
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
    textElement.textContent = text[currentIndex];
}
setInterval(changeImage, 3000);