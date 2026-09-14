// selecting main Elements
const grid = document.querySelector('#grid');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const gridItems = document.querySelectorAll('.grid-item');
const gridResetButton = document.querySelector('#reset-btn');

// Checked default button
const defaultRadio = document.querySelector('input[value="16"]');
defaultRadio.checked = true;
createGrid(defaultRadio);
createGridItems(defaultRadio);

// Creating grid
function createGrid(input) {
    //clear out the previous grid completely
    grid.innerHTML = '';
    // Convert string value to a number
    const value = parseInt(input.value);
    for (let index = 0; index < value; index++) {
        const createDivRow = document.createElement('div');
        createDivRow.classList.add('grid-row'); 
        grid.appendChild(createDivRow);
    }
}

// creating Grid Items.
function createGridItems(input) {
    const value = input.value;
    // selecting the rows as grid-row elements.
    const divRows = document.querySelectorAll('.grid-row');
    // iterating over each one of them.
    divRows.forEach(divRow => {
        // append to it a new div for as much time as the value of fetched from the input.
         for(let index = 0; index < value; index ++) {
            const createDivItem = document.createElement('div');
            createDivItem.classList.add('grid-item'); // Added class for easier CSS styling
            createDivItem.textContent = '';
            divRow.appendChild(createDivItem);
         }
    });
}

// attach a single change event listener to each button.
radioButtons.forEach((btn) => {
    btn.addEventListener('change', (event) => {
        // event.target is the specific radio btn that was selected
        const selectedRadioButton = event.target;

        // passing the radio button elements into functions
        createGrid(selectedRadioButton);
        createGridItems(selectedRadioButton);
        
    });
});

// extra credit random color container function
function applyRandomColor() {
    // gen random number
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return randomColor;
}

// mousemove 
grid.addEventListener('mousemove', (event) => {
    if(event.target.classList.contains('grid-item')) {
        // normal
        // event.target.style.backgroundColor = 'black';
        // event.target.style.backgroundColor = 'red';
        // extra credit RGB colors..
        event.target.style.backgroundColor = applyRandomColor();
    }

});

// Grid Reset Button.
gridResetButton.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(cell => {
        cell.style.backgroundColor = ''; //reverts the default.
    });
});