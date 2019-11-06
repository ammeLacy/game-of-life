class Cell {
  constructor(isAlive = false) {
    this.isAlive = isAlive;
    this.changeState = false;
    this.neighbours = [];
  }

  //assess whether cell lives or dies
  assessRules() {
    const liveNeighbours = this.neighbours.filter(neighbour => neighbour.isAlive).length;
    if (this.isAlive) {
      if (liveNeighbours < 2) {
        this.changeState = true;
      }
      else if (liveNeighbours > 3) {
        this.changeState = true;
      }
    }
    else {
      if (liveNeighbours === 3) {
        this.changeState = true;
      }
    }
  }
  //if a rule triggered the change state variable this changes the value of isAlive
  applyAssessment() {
    if (this.changeState) {
      this.isAlive = !this.isAlive;
      this.changeState = false;
    }
  }

  addNeighbour(neighbour) {
    this.neighbours.push(neighbour);
  }

}


module.exports = Cell;

