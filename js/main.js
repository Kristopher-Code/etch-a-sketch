// Grid container.
const container = document.querySelector('.container');
let gridSize = 16;

// Add 16 divs.

createGrid = () => {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const grid = document.createElement('div');
        grid.style.cssText = "border: 1px solid black;";        
        container.appendChild(grid);
        container.addEventListener("mouseover", changeColour);
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    }
};

// Change colour on mouse hover.

changeColour = (e) => {
    e.target.style.backgroundColor = "pink";
}

createGrid(gridSize);

