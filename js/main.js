
// Grid container.
const container = document.getElementById('container');
const clearBtn = document.getElementById('clearBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const sizeSlider = document.getElementById('sizeSlider')
const sizeX = document.getElementById('sizeX')

clearBtn.onclick = () => clearGrid();
rainbowBtn.onclick = () => setCurrentColour('rainbow')
eraserBtn.onclick = () => setCurrentColour('eraser')
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)


let currentSize = 16;
let currentColour = 'white';
let mouseDown = false;

document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

changeSize = (value) => {
    updateSizeValue(value)
    setCurrentSize(value)
    changeGridSize()
}

setCurrentSize = (newSize) => {
    currentSize = newSize;
}

updateSizeValue = (value) => {
    sizeX.innerHTML = `${value} x ${value}`
}

switchColour = (e) => {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentColour === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})` 
    } else if (currentColour === 'eraser') {
        e.target.style.opacity = "0";
    } else if (currentColour === 'white') {
        e.target.style.backgroundColor = currentColour; 
    }
}

setCurrentColour = (newColour) => {
    currentColour = newColour
}


changeGridSize = () => {
    container.innerHTML = "";
    createGrid(currentSize);
}

clearGrid = () => {
    container.innerHTML = "";
    createGrid(currentSize);
}

createGrid = (gridSize) => {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid-class");
        grid.addEventListener("mouseover", switchColour);
        grid.addEventListener("mousedown", switchColour);
        container.appendChild(grid);
    }
    console.log(gridSize);
};

createGrid(currentSize);


