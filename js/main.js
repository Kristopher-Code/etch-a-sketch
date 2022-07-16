// Grid container.
const container = document.getElementById("container");
const clear = document.getElementById("clearBtn")
const size = document.getElementById("sizeChangeBtn")
let gridSize = 16;

let mouseDown = false;

document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;


clearBtn.onclick = () => clearGrid();
sizeChangeBtn.onclick = () => changeGridSize();
    // Change colour on mouse hover.

    changeColour = (e) => {
        if (e.type === "mouseover" && !mouseDown) return;
        e.target.style.backgroundColor = "white";
    }

changeGridSize = () => {
    let newSize = (prompt("Enter a number"));
    gridSize = newSize;
    container.innerHTML = "";
    createGrid(newSize);
}

clearGrid = () => {
    container.innerHTML = "";
    createGrid(gridSize);
}

createGrid = () => {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid-class");
        grid.addEventListener("mouseover", changeColour);
        grid.addEventListener("mousedown", changeColour);
        container.appendChild(grid);
    }
};



createGrid(gridSize);


