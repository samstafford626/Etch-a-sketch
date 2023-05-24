let container = document.querySelector('.container');//grab container
let button = document.querySelector('.btn');//grab button
button.addEventListener('click', newGame);//add event listener to button that calls new game

// function to start newGame on button click
function newGame() {
    let index = prompt('Please enter a number for grid size:')//Prompts user for grid size

    // removes old blocks
    let blockRemove = document.querySelectorAll('.grid-item');
    blockRemove.forEach(block => block.remove())

    // changes grid-template to user amount of columns
    container.style.gridTemplateColumns = `repeat(${index}, 1fr)`;

    // inserts grid-items
    for (let i = 0; i < index; i++) {
        for (let j = 0; j < index; j++) {
            let blockInsert = document.createElement('div');
            blockInsert.classList.add('grid-item');
            container.appendChild(blockInsert); 
        }
    }

    // add event listeners
    let gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', hoverEffect))
    gridItems.forEach(gridItem => gridItem.style.backgroundColor = 'black')
    gridItems.forEach(gridItem => gridItem.style.opacity = '0.1')
}

// functions for changing background color on hover
function hoverEffect(e) {
    let newOpacity = Number(e.target.style.opacity) + 0.1;
    e.target.style.opacity = newOpacity;
}

// returns background color to black after 2sec
function hoverOff(e) {
    setTimeout(function () {e.target.style.backgroundColor = 'black'}, 1000)
}