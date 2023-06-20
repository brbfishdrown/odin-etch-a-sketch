//COMPLETED:
//Create a grid of 16x16 square divs into grid-container
//Make divs appear as a grid( versus just one on each line )
//Set up hover effect so that grid divs change colour when mouse passes over them
let side = 16;
const gridButton = document.querySelector('.grid')
gridButton.addEventListener('click', function () {
    side = prompt('Enter the number of grids you want per side (Max 50)')
    grid()
})
//Define grid-container
const gridContainer = document.querySelector('.grid-container')
//Define row; Create (SIDE) number of rows inside container
function grid() {
    for (let i = 0; i < side; i++) {
        const row = document.createElement('div')
        row.style.cssText = 'display:flex;'
        gridContainer.appendChild(row)
        //Define grid; Create (SIDE) number of grids inside row
        for (let i = 0; i < side; i++) {
            const grid = document.createElement('div');
            grid.style.cssText = 'border: 1px solid black; padding: 10px; /*PADDING FOR VISIBILITY*/'
            grid.addEventListener('mouseover', function () { grid.style.backgroundColor = 'red' })
            row.appendChild(grid)
        }
    }
}
grid(side)


//Add a button at the top of the screen prompting the user for the number of squares per side (maximum 100)

//TO DO LIST:
//==============================================================================================================
//Be able to choose which colour
//Have eraser feature
//Have clear feature
//Have random colour feature
//Have progressive darkening feature