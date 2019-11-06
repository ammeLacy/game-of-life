# Game of Live

A Node application consisting of two classes,  cell and grid and accompanying test files, which can run by `npm t`. 

This project takes an Object Orientated approach with the logic for determining status held within the Cell and Grid classes to facilitate development, the alternate approach would have been to take a functional approach and from one turn to another create a new grid, copy the contents of the old grid into the new grid and then 'throw away' the old grid. 

## Cell Class
The Cell has the following properties
 1. isAlive -  boolean denoting the cells current status 
 2. changeState - boolean denoting whether the status of the cell needs to 	             be changed after rules have been applied.  
 3. neighbours a list of neighbouring cells 

And the following functions

 1. **assessRules** which filters a cells living neighbours, checks the numbers and sets changeState dependent on the rule. 
 2. **applyAssessment** uses the changeState variable and dependent on its value applies this to the isAlive variable to determine whether the cell lives. This function is called by the Grid class. 
 3. **addNeighbours** adds neighbours to a cell's neighbours array. 

## Grid Class
The Grid class has a single property of an array of a 2 dimensional of cells and includes the following functions 

 1. **createGrid** which is called in the grid constructor, and takes as a parameter a nested array of 1s and 0s, where 1 represents live cells and 0 a dead cell. This array is then looped through returning a new nested array (grid) populated with cells of the corresponding status. 
 2. **setUpNeighbours** determines whether neighbours can be created for a cell, as a cell can have 3, 5 or 8 neighbours dependent upon its position within the grid. Neighbours cannot be added to a cells list of neighbours if they are outside of the grid. 
 3. **getCurrentState** is a method for returning a grid back to a user, returning living or empty cells as 0s and 1s to match the way the information has been received. 
 4. **processTurn** calls the cells's *assessRules* function to update if required the cell's changeState variable, and then calls the cell's *applyAssessment* function to change the cell's status if required. 
 5. **doesGridNeedToExpand** assesses the edge of the grid for living cells to determine whether the grid needs to expand. 
 *This method would be called by the function to create an infinite grid which has not been completed due to time constraints*

### Limitations
The doesGridNeedToExpand function assumes that the grid provided will always be square, it is recognised that this will not always be the case and passing the grid class a rectangular grid will cause it to fail. 