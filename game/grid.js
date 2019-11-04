const Cell = require('./cell');
class Grid {
  constructor(cells) {
    this.cells = this.createGrid(cells);
  }

  createGrid(grid) {
    const cells = [];
    for (let i = 0; i < grid.length; i++) {
      const row = [];
      const gridRow = grid[i];
      for (let j = 0; j < gridRow.length; j++) {
        let isAlive;
        if (gridRow[j] === 1) {
          isAlive = true;
        }
        else {
          isAlive = false;
        }
        const cell = new Cell(isAlive);
        row.push(cell);
      }
      cells.push(row);
    }
    return cells;
  }

  processTurn() {

  }

  getCurrentState() {
  }
}

module.exports = Grid;