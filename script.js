let currentIndex = 0;

const images = [
  "https://picsum.photos/id/1015/600/300",
  "https://picsum.photos/id/1016/600/300",
  "https://picsum.photos/id/1018/600/300",
  "https://picsum.photos/id/1020/600/300"
];

const carouselImg = document.getElementById("carousel-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const jokeBtn = document.getElementById("joke-btn");
const jokeText = document.getElementById("joke");

function showImage(index) {
  if (index < 0) {
    currentIndex = images.length - 1;
  } else if (index >= images.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  carouselImg.src = images[currentIndex];
}

function nextImage() {
  showImage(currentIndex + 1);
}

function prevImage() {
  showImage(currentIndex - 1);
}

async function fetchJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    jokeText.textContent = `${data.setup} 😂 ${data.punchline}`;
  } catch (error) {
    jokeText.textContent = "⚠️ Couldn’t fetch a joke. Try again!";
  }
}

if (nextBtn) nextBtn.addEventListener("click", nextImage);
if (prevBtn) prevBtn.addEventListener("click", prevImage);
if (jokeBtn) jokeBtn.addEventListener("click", fetchJoke);

showImage(currentIndex);
