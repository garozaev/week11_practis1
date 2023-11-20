const gallery = document.querySelector(".gallery");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const price = document.querySelector(".price");
const buttonPrice = document.querySelector(".buttonPrice");
const addText = () => {
  const text = input.value;
  console.log(typeof text);
  input.value = "";
  gallery.textContent = text;
};

function sum() {
  const priceDress = +price.textContent;
  const sum = priceDress + priceDress;
  console.log(sum);
}

button.addEventListener("click", addText);
buttonPrice.addEventListener("click", sum);
