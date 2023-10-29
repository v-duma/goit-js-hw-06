//1 part
const total = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${total}`);

//2 part
const items = document.querySelectorAll("ul#categories>li.item");

items.forEach((item) => {
  const category = item.querySelector("h2");
  const elements = item.querySelectorAll("li");

  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
