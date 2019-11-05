const chai = require('chai');
const expect = chai.expect;
const Grid = require('../game/grid');

describe('createGrid', () => {
  it('creates and empty grid given an empty grid', () => {
    const grid = new Grid([]);
    expect(grid.cells.length).to.equal(0);
  });
  it('creates a 2 by 2 grid ', () => {
    const grid = new Grid([[1, 1], [0, 1]])
    expect(grid.cells.length).to.equal(2);
    expect(grid.cells[0].length).to.equal(2);
    expect(grid.cells[0][0].isAlive).to.equal(true);
    expect(grid.cells[1][1].isAlive).to.equal(true);
    expect(grid.cells[1][0].isAlive).to.equal(false);
  });
});

describe('setUpNeighbours', () => {
  it('checks corner top left has the right number of neighbour set up', () => {
    const grid = new Grid([
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]
    ]);
    expect(grid.cells[0][0].neighbours.length).to.equal(3);
  });
  it('checks corner top right has the right number of neighbour set up', () => {
    const grid = new Grid([
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]
    ]);
    expect(grid.cells[0][2].neighbours.length).to.equal(3);
  });
  it('checks corner bottom right has the right number of neighbour set up', () => {
    const grid = new Grid([
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]]);
    expect(grid.cells[2][2].neighbours.length).to.equal(3);
  });
  it('checks corner bottom left has the right number of neighbour set up', () => {
    const grid = new Grid([
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]]);
    expect(grid.cells[2][0].neighbours.length).to.equal(3);
  });
  it('checks top edge has the right number of neighbour set up', () => {
    const grid = new Grid([
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]]);
    expect(grid.cells[1][0].neighbours.length).to.equal(5);
  });
  it('checks left edge has the right number of neighbour set up', () => {
    const grid = new Grid([
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]]);
    expect(grid.cells[0][1].neighbours.length).to.equal(5);
  });
  it('checks right edge has the right number of neighbour set up', () => {
    const grid = new Grid([
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]]);
    expect(grid.cells[2][1].neighbours.length).to.equal(5);
  });
  it('checks bottom edge has the right number of neighbour set up', () => {
    const grid = new Grid([
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]]);
    expect(grid.cells[1][2].neighbours.length).to.equal(5);
  });
  it('checks centre has the right number of neighbour set up', () => {
    const grid = new Grid([
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]]);
    expect(grid.cells[1][1].neighbours.length).to.equal(8);
  });
});

describe('getCurrentState', () => {
  it('output matches input', () => {
    const grid = new Grid(
      [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
      ]);
    const output = grid.getCurrentState();
    expect(output).to.eql(
      [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
      ]);
  });
});

describe('processTurn', () => {
  it('3 cells in a line rotates', () => {
    const grid = new Grid(
      [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
      ]);
    grid.processTurn();
    const output = grid.getCurrentState();
    expect(output).to.eql(
      [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
      ]);
  });
});