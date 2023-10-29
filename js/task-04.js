let value = document.querySelector("#value");
let counterValue = 0;
const button = document.querySelector("#counter");

const decrementButton = () => {
  value.textContent = counterValue - 1;
  counterValue -= 1;
};

const incrementButton = () => {
  value.textContent = counterValue + 1;
  counterValue += 1;
};

button.firstElementChild.addEventListener("click", decrementButton);
button.lastElementChild.addEventListener("click", incrementButton);
