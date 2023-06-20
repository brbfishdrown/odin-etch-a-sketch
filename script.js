//COMPLETED:
//Create a grid of 16x16 square divs into grid-container
//Make divs appear as a grid( versus just one on each line )
//Set up hover effect so that grid divs change colour when mouse passes over them
let side = 16;
//Be able to choose which colour
let color = "(155, 0, 0)"

//Define button that will change grid size
const gridButton = document.querySelector('.number')
gridButton.addEventListener('click', function () {
    //PROMPT USER FOR SIDE LENGTH
    side = prompt('Enter the number of grids you want per side (Max 50)')
    //CLEAR EXISTING GRID
    document.querySelector('#container').innerHTML = "";
    //CALL GRID WITH UPDATED SIDE
    grid(side)
})

//Define grid-container
const gridContainer = document.querySelector('#container')

//Define function that creates grid
function grid(side) {
    for (let i = 0; i < side; i++) {
        //Define row; Create (SIDE) number of rows inside container
        const row = document.createElement('div')
        row.style.cssText = 'display:flex;'
        gridContainer.appendChild(row)
        //Define grid; Create (SIDE) number of grids inside row
        for (let i = 0; i < side; i++) {
            const grid = document.createElement('div');
            grid.style.cssText = 'border: 1px solid black; padding: 10px; /*PADDING FOR VISIBILITY*/'
            grid.addEventListener('mouseover', function () { grid.style.background = `rgb${color}` })
            row.appendChild(grid)
        }
    }
}
grid(side)

//Add a button at the top of the screen prompting the user for the number of squares per side (maximum 100)

//TO DO LIST:
//==============================================================================================================
//Have eraser feature
//Have clear feature
//Have random colour feature
//Have progressive darkening feature