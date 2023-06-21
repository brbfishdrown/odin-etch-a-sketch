//COMPLETED:
//Create a grid of 16x16 square divs into grid-container
//Make divs appear as a grid( versus just one on each line )
//Set up hover effect so that grid divs change colour when mouse passes over them
let side = 16;
//Be able to choose which colour //CAN WE PUT 3 BOXES OF TEXT INPUT?
let color = "(255, 0, 0)"

//Define button that will change grid size
const gridButton = document.querySelector('.number')
//Add a button prompting the user for the number of squares per side (maximum 50)
gridButton.addEventListener('click', function () {
    //PROMPT USER FOR SIDE LENGTH
    side = prompt('Enter the number of grids you want per side (Max 50)')
    //CLEAR EXISTING GRID
    document.querySelector('#container').innerHTML = "";
    //CALL GRID WITH UPDATED SIDE
    grid(side)
})

//Have clear feature 
//Define clear button
const clearGrid = document.querySelector('.clear')
clearGrid.addEventListener('click', function () {
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
            grid.style.cssText = 'border: 1px solid black; padding: 10px;/*PADDING FOR VISIBILITY*/'
            grid.addEventListener('mouseover', function () {
                //NEED TO COMPLETE:
                //====================================================================================================
                //IF ERASER = ON, COLOR = WHITE (255, 255, 255)
                //IF RANDOMIZE = ON, GENERATE 3 RANDOM NUMBERS, STORE INTO RGB VALUE EX. (133, 42, 50)
                //IF PROGRESSIVE = ON, HAVE RANGE FROM (255,255,255) AND DECREASE BY 10% UNTIL (0,0,0) FOR BLACK
                grid.style.background = `rgb${color}`
            })
            row.appendChild(grid)
        }
    }
}
//INITIAL CALL ON GRID
grid(side)



//TO DO LIST:
//==============================================================================================================
//highlight the eraser option when toggled on
//highlight randomize option when toggled on
//have a maximum size 960px by 960px so that grid doesn't grow too large (div should flex to accomodate) (try flex shrink?)
//change from hover to click + drag
//change website style