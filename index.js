/* CREATING ELEMENTS */

const container = document.querySelector("#container");
const divHeader = document.createElement("div");
const h1 = document.createElement("h1");
const button = document.createElement("button");
const gridContainer = document.createElement("div");

/* GENERATING ATTRIBUTES */

divHeader.classList.add("header-container");
h1.textContent = "Etch a Sketch";
button.textContent = "Generate Grid";
button.classList.add("btn");
gridContainer.classList.add("grid-container");

/* CREATING FIRST GRID */

const initialSquares = 16 * 16;
for (let i = 1; i <= initialSquares; i++) {
    const gridItem = createGridElement(16);
    gridContainer.appendChild(gridItem);
}

/* APPENDING ELEMENTS */

divHeader.appendChild(h1);
divHeader.appendChild(button);
container.appendChild(divHeader);
container.appendChild(gridContainer);

/* CREATING LISTENERS */

button.addEventListener("click", e => {
    const squareQuantity = Number(prompt("Please insert the desire quantity of squares"));

    if (squareQuantity > 100 || squareQuantity <= 0) {
        alert("Please insert a number of squares between 1 and 100");
    }else {
        removeGridItems();
        const totalDivs = squareQuantity * squareQuantity;
    
        for (let i = 1; i <= totalDivs; i++) {
            const gridItem = createGridElement(squareQuantity);
            gridContainer.appendChild(gridItem);
        }
    
        container.appendChild(gridContainer);
    }
})

let clicked = false;

function createGridElement(totalSquares){
    const gridItem = document.createElement("div");
    const size = `${600 / totalSquares}px;`;
    const style = `width: ${size} height: ${size} border: 1px solid black;`;
    gridItem.setAttribute("style", `${style}`);
    gridItem.classList.add("grid-item");
    document.body.onmousedown = () => clicked = true;
    document.body.onmouseup = () => clicked = false;
    gridItem.addEventListener("mousemove", e => {
        if (clicked) e.target.style.backgroundColor = "#4554ff";
    })


    return gridItem;
}

function removeGridItems(){
    document.querySelectorAll(".grid-item").forEach( element => gridContainer.removeChild(element));
}