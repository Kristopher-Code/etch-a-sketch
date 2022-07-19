
// Grid container.
const container = document.getElementById('container');
const clearBtn = document.getElementById('clearBtn');
const sizeChangeBtn = document.getElementById('sizeChangeBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
clearBtn.onclick = () => clearGrid();
sizeChangeBtn.onclick = () => changeGridSize();
rainbowBtn.onclick = () => setCurrentColour('rainbow')
eraserBtn.onclick = () => setCurrentColour('eraser')


let gridSize = 16;
let currentColour = 'white';
let mouseDown = false;

document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;



function switchColour(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentColour === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentColour === 'white') {
        e.target.style.backgroundColor = currentColour;
    } else if (currentColour === 'eraser') {
        e.target.style.opacity = "0";
    }
}

function setCurrentColour(newColour) {
    currentColour = newColour
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
        grid.addEventListener("mouseover", switchColour);
        grid.addEventListener("mousedown", switchColour);
        container.appendChild(grid);
    }
};


createGrid(gridSize);


