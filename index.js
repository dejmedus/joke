// popups
function createPopup(imageSrc) {
  const popup = document.createElement("div");
  popup.classList.add("popup");

  const image = document.createElement("img");
  image.src = imageSrc;
  popup.appendChild(image);

  positionPopupRandomly(popup);

  return popup;
}

function positionPopupRandomly(popup) {
  const randomX = Math.random() * (window.innerWidth - popup.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - popup.offsetHeight);

  popup.style.left = `${randomX}px`;
  popup.style.top = `${randomY}px`;
}

const gifs = [
  "possum1.gif",
  "possum4.gif",
  "possum.gif",
  "possum2.gif",
  "possum3.gif",
];

let count = 0;

setInterval(() => {
  count = (count + 1) % gifs.length;
  const popup = createPopup(gifs[count]);
  document.body.appendChild(popup);
}, 1000);

// text animation
const rightSlow = document.querySelectorAll(".span");
const leftSlow = document.querySelectorAll(".leftSpan");

window.addEventListener("scroll", handleScroll);
window.onscroll = handleScroll;

function handleScroll() {
  const scrollPosition = window.scrollY;

  rightSlow.forEach((span) => {
    const translation = scrollPosition / 2;
    span.style.transform = `translateX(${translation}px)`;
  });
  leftSlow.forEach((span) => {
    const translation = scrollPosition / 2;
    span.style.transform = `translateX(-${translation}px)`;
  });
}
