//Create a grid of 16x16 square divs into grid-container
//Make divs appear as a grid( versus just one on each line )
//Set up hover effect so that grid divs change colour when mouse passes over them
let side = 16;

//Define button that will change grid size
const gridButton = document.querySelector('.number')
//Add a button prompting the user for the number of squares per side (maximum 50)
gridButton.addEventListener('click', function () {
    //PROMPT USER FOR SIDE LENGTH
    side = prompt('Enter the number of grids you want per side (Max 100)')
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

//Define eraser button
const eraserButton = document.querySelector('.eraser')
let eraser = 0;
//highlight the eraser option when toggled on
eraserButton.addEventListener('click', function() {
    if (eraser == 0) {
        eraser = eraser + 1
        eraserButton.style.cssText = 'border: 2px solid yellow;'
    } else {
        eraser = eraser - 1
        eraserButton.style.cssText = 'border: 2px solid black;'
    }
})


//Define grid-container
const gridContainer = document.querySelector('#container')
gridContainer.style.cssText = 'border: 1px solid black; '

//Define function that creates grid
function grid(side) {
    for (let i = 0; i < side; i++) {
        //Define row; Create (SIDE) number of rows inside container
        const row = document.createElement('div')
        row.style.cssText = 'display:flex; max-width: 960px; '
        gridContainer.appendChild(row)
        //Define grid; Create (SIDE) number of grids inside row
        for (let i = 0; i < side; i++) {
            const grid = document.createElement('div');
            //Clear grid content
            grid.textContent = ""
            //CALCULATE HEIGHT AND WIDTH SIZE
            let gridSide = (960-2*side)/side
            //SET STYLE WITH NEW SIZE
            grid.style.cssText = `border: 1px solid rgb(245, 245, 245); width:${gridSide}px; height:${gridSide}px;`
            grid.addEventListener('mouseover', function () {
                //CALL VALUE OF COLOR ON COLORPICKER
                const color = document.querySelector('#colorpicker').value
                //SET VALUE OF COLOR PICKER
                grid.style.background = `${color}`
                //IF ERASER IS ON
                if (eraser == 1) {
                    //OVERWRITE COLOUR
                    grid.style.background = 'rgb(255,255,255'
                }
                //NEED TO COMPLETE:
                //====================================================================================================
                //IF RANDOMIZE = ON, GENERATE 3 RANDOM NUMBERS, STORE INTO RGB VALUE EX. (133, 42, 50)
                //IF PROGRESSIVE = ON, HAVE RANGE FROM (255,255,255) AND DECREASE BY 10% UNTIL (0,0,0) FOR BLACK
                //ABLE TO CHOOSE COLOUR (NEED TO UPDATE IN EVENT LISTENER)
            })
            row.appendChild(grid)
        }
    }
}
//INITIAL CALL ON GRID
grid(side)



//TO DO LIST:
//==============================================================================================================
//highlight randomize option when toggled on
//change from hover to click + drag
//change website style