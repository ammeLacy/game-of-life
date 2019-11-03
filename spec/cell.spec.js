const chai = require('chai');
const expect = chai.expect;
const
  Cell = require('../game/cell');

describe('Cell: when a cell has less than 2 live neighbours it should prepare to die', () => {
  it('When a live cell has one dead neighbour it should die', () => {
    const cell = new Cell(true);
    cell.addNeighbour(new Cell(false));
    expect(cell.changeState).to.equal(false);
    expect(cell.isAlive).to.equal(true);
  });
  it('', () => {

  });
});




describe('Assess', () => {
  it('When a live cell that is prepared to die is told to apply the assessment it dies', () => {
    const cell = new Cell(true);
    cell.changeState = true;
    cell.applyAssessment();
    expect(cell.changeState).to.equal(false);
    expect(cell.isAlive).to.equal(false);
  });
  it('When a live cell that is prepared to die is told to apply the assessment it dies', () => {
    const cell = new Cell(true);
    cell.changeState = true;
    cell.applyAssessment();
    expect(cell.changeState).to.equal(false);
    expect(cell.isAlive).to.equal(false);
  });
  it('When a live cell that is not prepared to die is told to apply the assessment it stays alive', () => {
    const cell = new Cell(true);
    cell.changeState = false;
    cell.applyAssessment();
    expect(cell.changeState).to.equal(false);
    expect(cell.isAlive).to.equal(true);
  });
  it('When a dead cell that is prepared to live is told to apply the assessment it becomes alive', () => {
    const cell = new Cell(false);
    cell.changeState = true;
    cell.applyAssessment();
    expect(cell.changeState).to.equal(false);
    expect(cell.isAlive).to.equal(true);
  });
  it('When a dead cell that is not prepared to live is told to apply the assessment it remains dead', () => {
    const cell = new Cell(false);
    cell.changeState = false;
    cell.applyAssessment();
    expect(cell.changeState).to.equal(false);
    expect(cell.isAlive).to.equal(false);
  });
});



