const button = document.querySelector("button");
const form = document.querySelector(".login-form");
const input = document.querySelector("input");
const inputEmail = document.querySelector('[name="email"]');
const inputPassword = document.querySelector('[name="password"]');
const object = {};
const inputEmailAr = [];
const inputPasswordAr = [];

const changeValue = (event) => {
  event.preventDefault();
  if (input.value.length <= 0) {
    alert("Please fill out all fields");
  } else {
    inputEmailAr.push(inputEmail.value);
    inputPasswordAr.push(inputPassword.value);

    for (let index = 0; index < inputEmailAr.length; index++) {
      object.key = inputEmailAr[index];
      object.value = inputPasswordAr[index];
    }
    console.log(object);
    form.reset();
  }
};

form.addEventListener("submit", changeValue);
