const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ul = document.querySelector("ul.gallery");

const allImages = images
  .map((image) => `<img src="${image.url}" alt="${image.alt}">`)
  .join("");
ul.insertAdjacentHTML("beforeend", allImages);

ul.style.display = "flex";
ul.style.justifyContent = "space-evenly";
ul.style.flexDirection = "column";
ul.style.listStyleType = "none";
ul.style.gap = "30px";
