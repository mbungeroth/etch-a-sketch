function createGrid(numBoxes=16) {
  let columns = `repeat(${numBoxes}, 1fr)`;
  let rows = `repeat(${numBoxes}, 1fr)`;
  container.style.gridTemplateColumns = columns;
  container.style.gridTemplateRows = rows;
  let totalSquares = numBoxes * numBoxes;

  for (let i = 0; i < totalSquares; i++) {
    let box = document.createElement('div');
    box.setAttribute('class', 'box');
    container.appendChild(box);
    box.style.border = '1px solid black';
    box.addEventListener('mouseover', makeDarker);
  }
}


function resetGrid() {
  clearGrid();
  createGrid();
}


function chooseGrid() {
  let num = prompt('Please enter a number between 2 and 100');
  if (Number(num) >= 2 && Number(num) <= 100) {
    clearGrid();
    createGrid(Number(num));
  } else {
    alert('Follow directions, yo. Try again.');
  }
}


function makeDarker() {
  let currentOp = this.style.opacity;
  let newOp = Number(currentOp) + 0.1;
  this.style.opacity = newOp;
}


function clearGrid() {
  document.querySelectorAll('.box').forEach(function(div) {
    container.removeChild(div);
  });
}

const whatGrid = document.getElementById('choose');
whatGrid.addEventListener('click', chooseGrid);

const reset = document.getElementById('reset');
reset.addEventListener('click', resetGrid);

const container = document.querySelector('.container');



createGrid();
