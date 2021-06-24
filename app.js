let gridContainer = document.querySelector('#grid-container');
let newGridButton = document.getElementById('newGridButton');

window.addEventListener('load', startingGrid);

newGridButton.addEventListener('click', newGrid);

function startingGrid() {
    gridSize(16);
    fillGrid(16);
};

function emptyGrid() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function newGrid(){
    let count = parseInt(prompt('Please enter a number between 2 and 100 to make a new grid!'));
    
    if (isNaN(count) || (count < 2 || count > 100)) {
        alert('Sorry, that will not work. Please try again.');
        newGrid();
    } else {
        emptyGrid();
        gridSize(count);
        fillGrid(count);
    }   
}

//controls number of columns//
function gridSize(count) {
    gridContainer.style.gridTemplateColumns = `repeat(${count}, 1fr)`;
};

//controls number of divs within each columns, ie the rows//
function fillGrid(count) {
    for (let i = 0; i < count * count; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'grid-item';
        gridContainer.appendChild(gridDiv);

        gridDiv.addEventListener('mouseover', function(){
            const newColor = randomColor();
            gridDiv.style.backgroundColor = newColor;
        })
    }  
}; 

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
};