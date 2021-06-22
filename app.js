let gridContainer = document.querySelector('#grid-container');

window.addEventListener('load', startingGrid);

//I need to make the below code more my own work, but it does work//  

//For tomorrow, my work will be cleaning the JS up and making it my own, and working on implementing a prompt for user to select the size of the grid//
function startingGrid() {
    gridSize(16);
    fillGrid(16);
};

//controls number of columns//
function gridSize(count) {
    gridContainer.style.gridTemplateColumns = `repeat(${count}, 1fr)`;
};

//controls number of divs within each columns, ie the rows//
//To keep the column number and row number the same, perhaps call both functions at the same time for function update()//

function fillGrid(count) {
    for (let i = 0; i < count * count; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'grid-item';
        //color change will be when div is hovered//
        //Use the random rgb color function to set the color on hover//
        gridContainer.appendChild(gridDiv);

        gridDiv.addEventListener('mouseover', function(){
            const newColor = randomColor();
            gridDiv.style.backgroundColor = newColor;
        })
    }  
}; //see if i can refactor fillGrid, that is a lot for one function//

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
};