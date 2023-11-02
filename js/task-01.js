//1 part
const total = document.querySelectorAll("li.item");
console.log(`Number of categories: ${total.length}`);

//2 part
total.forEach((item) => {
  const category = item.firstElementChild;

  const itemsList = item.lastElementChild;
  const elements = itemsList.children;

  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
