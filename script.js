//FIRST TASK:
//Create a grid of 16x16 square divs into grid-container
let side = 16;
//Define grid-container
const gridContainer = document.querySelector('.grid-container')
for (let i = 0; i < side * side; i++) {
    const grid = document.createElement('div');
    grid.style.cssText = 'border: 2px solid black; padding: 10px;'
    gridContainer.appendChild(grid)
}


//TO DO LIST:
//==============================================================================================================
//Make divs appear as a grid( versus just one on each line )
//Set up hover effect so that grid divs change colour when mouse passes over them
//Add a button at the top of the screen prompting the user for the number of squares per side (maximum 100)
//Be able to choose which colour
//Have eraser feature
//Have clear feature
//Have random colour feature
//Have progressive darkening feature