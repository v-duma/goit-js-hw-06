const input = document.querySelector("#validation-input");
const dataLength = input.dataset.length;

const changeBorder = (event) => {
  if (input.class === "valid") {
    input.classList.remove("valid");
  } else {
    input.classList.remove("invalid");
  }

  if (input.value.length === parseInt(dataLength)) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", changeBorder);