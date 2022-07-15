// Grid container.
const generateGrid = document.querySelector('.container');

// Add 16 divs.

createGrid = () => {
    for (let i = 1; i < 257; i++) {
        const gridDivs = document.createElement('div');
        gridDivs.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
        generateGrid.appendChild(gridDivs);
        generateGrid.addEventListener("mouseover", changeColour);
    }
};

// Change colour on mouse hover.

 changeColour = (e) => {
    e.target.style.backgroundColor = "pink";
}

createGrid();

