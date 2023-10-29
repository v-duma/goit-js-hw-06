const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("ul#ingredients");

for (let index = 0; index < ingredients.length; index++) {
  //1 part
  const element = document.createElement("li");

  //2 part
  element.textContent = ingredients[index];

  //3 part
  element.class = "item";

  //4 part
  const addElement = ul.append(element);
}
