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