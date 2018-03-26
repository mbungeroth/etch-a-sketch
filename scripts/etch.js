function createGrid(numBoxes=16) {
  let columns = `repeat(${numBoxes}, 1fr)`;
  let rows = `repeat(${numBoxes}, 1fr)`;
  const container = document.querySelector('.container');
  container.style.gridTemplateColumns = columns;
  container.style.gridTemplateRows = rows;

  for (let i = 0; i < numBoxes * numBoxes; i++) {
    let box = document.createElement('div');
    box.setAttribute('class', i+1);
    container.appendChild(box);
    box.style.border = '1px solid black';
  }
}

createGrid();
