/* CREATING ELEMENTS */

const container = document.querySelector("#container");
const divHeader = document.createElement("div");
const h1 = document.createElement("h1");
const button = document.createElement("button");

/* GENERATING ATTRIBUTES */

divHeader.classList.add("header-container");
h1.textContent = "Etch a Sketch";
button.textContent = "Generate Grid";
button.classList.add("btn");

/* APPENDING ELEMENTS */

divHeader.appendChild(h1);
divHeader.appendChild(button);
container.appendChild(divHeader);

/* CREATING LISTENERS */

button.addEventListener("click", e => {
    const squareQuantity = Number(prompt("Pleas inser the desire quantity of squares"));
})