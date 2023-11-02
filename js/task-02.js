const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("ul#ingredients");

const allItems = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
ul.insertAdjacentHTML("beforeend", allItems);
