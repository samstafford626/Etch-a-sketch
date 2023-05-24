let container = document.querySelector('.container');
let button = document.querySelector('.btn');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let blockInsert = document.createElement('div');
        blockInsert.classList.add('grid-item');
        container.appendChild(blockInsert); 
    }
}

let gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', hoverEffect))
gridItems.forEach(gridItem => gridItem.addEventListener('mouseout', hoverOff))

function hoverEffect(e) {
    e.target.style.backgroundColor = 'red';
}

function hoverOff(e) {
    setTimeout(function () {e.target.style.backgroundColor = 'black'}, 1000)
}

button.addEventListener('click', newGame);

function newGame() {
    let index = prompt('Please enter a number for grid size:')
    let blockRemove = document.querySelectorAll('.grid-item');
    blockRemove.forEach(block => block.remove())
    
    for (let i = 0; i < index; i++) {
        for (let j = 0; j < index; j++) {
            let blockInsert = document.createElement('div');
            blockInsert.classList.add('grid-item');
            container.appendChild(blockInsert); 
        }
    }
}

