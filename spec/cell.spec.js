const chai = require('chai');
const expect = chai.expect;
const
  Cell = require('../game/cell');

describe('Creating a cell', () => {
  it('default value of false for is alive and change state', () => {
    const cell = new Cell();
    expect(cell.isAlive).to.equal(false);
    expect(cell.changeState).to.equal(false);
  });
  it('constructing live cell', () => {
    const cell = new Cell(true);
    expect(cell.isAlive).to.equal(true);
    expect(cell.changeState).to.equal(false);
  });
});

describe('Rule 1: Live cell has less than 2 live neighbours it should prepare to die', () => {
  it('When a live cell has one dead neighbour it should prepare to die', () => {
    const cell = new Cell(true);
    cell.addNeighbour(new Cell(false));
    cell.assessRules();
    expect(cell.changeState).to.equal(true);
    expect(cell.isAlive).to.equal(true);
  });
  it('When a live cell has 2 dead neighbours it should prepare to die', () => {
    const cell = new Cell(true);
    cell.addNeighbour(new Cell(false));
    cell.addNeighbour(new Cell(false));
    cell.assessRules();
    expect(cell.changeState).to.equal(true);
    expect(cell.isAlive).to.equal(true);
  });
  it('When a live cell has one dead and one  live neighbour it should prepare to die', () => {
    const cell = new Cell(true);
    cell.addNeighbour(new Cell(true));
    cell.addNeighbour(new Cell(false));
    cell.assessRules();
    expect(cell.changeState).to.equal(true);
    expect(cell.isAlive).to.equal(true);
  });
  it('When a live cell has two dead neighbours and one live neighbour it should prepare to die', () => {
    const cell = new Cell(true);
    cell.addNeighbour(new Cell(false));
    cell.addNeighbour(new Cell(true));
    cell.addNeighbour(new Cell(false));
    cell.assessRules();
    expect(cell.changeState).to.equal(true);
    expect(cell.isAlive).to.equal(true);
  });
});
describe('Rule 1: Dead cell has less than 2 live neighbours it should prepare to die', () => {
  it('When a dead cell has one dead neighbour it should remain dead', () => {
    const cell = new Cell(false);
    cell.addNeighbour(new Cell(false));
    cell.assessRules();
    expect(cell.changeState).to.equal(false)
    expect(cell.isAlive).to.equal(false);
  });
  it('When a dead cell has two dead neighbours it should remain dead', () => {
    const cell = new Cell(false);
    cell.addNeighbour(new Cell(false));
    cell.addNeighbour(new Cell(false));
    cell.assessRules();
    expect(cell.changeState).to.equal(false);
    expect(cell.isAlive).to.equal(false);
  });
  it('When a dead cell has one dead and one live neighbour it should remain dead', () => {
    const cell = new Cell(false);
    cell.addNeighbour(new Cell(false));
    cell.addNeighbour(new Cell(true));
    cell.assessRules();
    expect(cell.changeState).to.equal(false);
    expect(cell.isAlive).to.equal(false);
  });
  it('When a dead cell has two dead and one live neighbour it should remain dead', () => {
    const cell = new Cell(false);
    cell.addNeighbour(new Cell(false));
    cell.addNeighbour(new Cell(true));
    cell.addNeighbour(new Cell(false));
    cell.assessRules();
    expect(cell.changeState).to.equal(false);
    expect(cell.isAlive).to.equal(false);
  });
});

describe('Rule 2: Live cell', () => {
  it('When a live cell has more than 3 live neighbours it should prepare to die ', () => {
    const cell = new Cell(true);
    cell.addNeighbour(new Cell(true));
    cell.addNeighbour(new Cell(true));
    cell.addNeighbour(new Cell(true));
    cell.addNeighbour(new Cell(true));
    cell.assessRules();
    expect(cell.changeState).to.equal(true);
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



