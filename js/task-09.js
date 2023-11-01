const body = document.querySelector("body");
const span = document.querySelector(".color");
const button = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeValue = (event) => {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  span.textContent = `${getRandomHexColor()}`;
};

button.addEventListener("click", changeValue);
