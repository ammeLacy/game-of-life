const Cell = require('./cell');
class Grid {
  constructor(cells) {
    this.cells = this.createGrid(cells);
    this.setUpNeighbours();
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

  setUpNeighbours() {
    for (let i = 0; i < this.cells.length; i++) {
      for (let j = 0; j < this.cells[i].length; j++) {
        const cell = this.cells[i][j];
        //if i -1 or j - 1 are negative neighbour is outside the grid
        if (i - 1 >= 0 && j - 1 >= 0) {
          cell.addNeighbour(this.cells[i - 1][j - 1]);
        }
        //if i -1 is negative neighbour is outside the grid
        if (i - 1 >= 0) {
          cell.addNeighbour(this.cells[i - 1][j]);
        }
        //if i -1 is negative or j + 1 is bigger than the grid's width neighbour is outside the grid
        if (i - 1 >= 0 && j + 1 < this.cells[i].length) {
          cell.addNeighbour(this.cells[i - 1][j + 1]);
        }
        //if j -1 is negative neighbour is outside grid
        if (j - 1 >= 0) {
          cell.addNeighbour(this.cells[i][j - 1]);
        }
        //if j + 1 is bigger than grid's with neighbour is outside the grid
        if (j + 1 < this.cells[i].length) {
          cell.addNeighbour(this.cells[i][j + 1]);
        }
        //if i + 1 greater the cells length gone of the bottom of the grid 
        if (i + 1 < this.cells.length && j - 1 >= 0) {
          cell.addNeighbour(this.cells[i + 1][j - 1]);
        }
        if (i + 1 < this.cells.length) {
          cell.addNeighbour(this.cells[i + 1][j]);
        }
        if (i + 1 < this.cells.length && j + 1 < this.cells[i].length) {
          cell.addNeighbour(this.cells[i + 1][j + 1]);
        }
      }
    }
  }

  processTurn() {
    for (let i = 0; i < this.cells.length; i++) {
      for (let j = 0; j < this.cells[i].length; j++) {
        this.cells[i][j].assessRules();
      }
    }
    for (let i = 0; i < this.cells.length; i++) {
      for (let j = 0; j < this.cells[i].length; j++) {
        this.cells[i][j].applyAssessment();
      }
    }
  }

  //to be used by UI for display purposes
  getCurrentState() {
    const grid = [];
    for (let i = 0; i < this.cells.length; i++) {
      const row = [];
      for (let j = 0; j < this.cells[i].length; j++) {
        row.push(this.cells[i][j].isAlive ? 1 : 0);
      }
      grid.push(row);
    }
    return grid;
  }
  doesGridNeedToExpand() {
    const n = this.cells.length - 1;

    for (let i = 0; i < this.cells.length; i++) {
      if (this.cells[0][i].isAlive
        || this.cells[i][0].isAlive
        || this.cells[n][i].isAlive
        || this.cells[i][n].isAlive) {
        return true;
      }
    }
    return false;
  }
}



module.exports = Grid;