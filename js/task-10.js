const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const parentDiv = document.querySelector("#boxes");

let size = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  let newDiv = "";
  for (let index = 1; index <= amount; index++) {
    const color = getRandomHexColor();
    newDiv += `<div style="width:${size}px; height:${size}px; background-color:${color}"></div>`;
    size += 10;
  }
  parentDiv.insertAdjacentHTML("beforeend", newDiv);
};

const createEvent = (event) => {
  const amount = input.value;
  createBoxes(amount);
};

const destroyBoxes = (event) => {
  parentDiv.innerHTML = "";
  size = 30;
};

buttonCreate.addEventListener("click", createEvent);
buttonDestroy.addEventListener("click", destroyBoxes);
