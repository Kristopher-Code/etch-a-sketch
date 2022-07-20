const gridcontainer = document.getElementById('gridcontainer');
const clearBtn = document.getElementById('clearBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const sizeSlider = document.getElementById('sizeslider');
const sizeX = document.getElementById('sizeX');
const colourPicker = document.getElementById('colorPicker');

let currentSize = 16;
let currentColour = 'white';

clearBtn.onclick = () => clearGrid();
rainbowBtn.onclick = () => setCurrentColour('rainbow');
eraserBtn.onclick = () => setCurrentColour('eraser');
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);
colourPicker.oninput = (e) => setCurrentColour(e.target.value);

// Click and drag functionality

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

// Creates the paintable grid.

createGrid = (gridSize) => {
    gridcontainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridcontainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid-class");
        grid.addEventListener("mouseover", switchColour);
        grid.addEventListener("mousedown", switchColour);
        gridcontainer.appendChild(grid);
    }
};

// Takes in the new value from the size slider and updates the grid accordingly.

changeSize = (value) => {
    updateSizeValue(value)
    setCurrentSize(value)
    changeGridSize()
};

setCurrentSize = (newSize) => {
    currentSize = newSize;
};

changeGridSize = () => {
    gridcontainer.innerHTML = "";
    createGrid(currentSize);
};

clearGrid = () => {
    gridcontainer.innerHTML = "";
    createGrid(currentSize);
};

// Updates the displayed value of the size slider.

updateSizeValue = (value) => {
    sizeX.innerHTML = `${value} x ${value}`
};

// Allows switching between colours.

switchColour = (e) => {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentColour === 'white') {
        e.target.style.backgroundColor = currentColour;
    } else if (currentColour === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentColour === 'eraser') {
        e.target.style.opacity = "0";    
    } else (e.target.style.backgroundColor = currentColour)
};

// Sets the colour selected

setCurrentColour = (newColour) => {
    currentColour = newColour
};

createGrid(currentSize);


