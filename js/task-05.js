const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const changeValue = (event) => {
  if (input.value.length <= 0) {
    span.textContent = "Anonymous";
  } else {
    span.textContent = input.value;
  }
};

input.addEventListener("input", changeValue);