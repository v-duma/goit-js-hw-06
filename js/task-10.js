const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

let size = 30;
let createdDivs = [];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  for (let index = 1; index <= amount; index++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = `${getRandomHexColor()}`;
    document.body.appendChild(div);
    createdDivs.push(div);
    size += 10;
  }
};

const createEvent = (event) => {
  const amount = input.value;
  createBoxes(amount);
};

const destroyEvent = (event) => {
  for (const div of createdDivs) {
    div.remove();
  }
};

buttonCreate.addEventListener("click", createEvent);
buttonDestroy.addEventListener("click", destroyEvent);
