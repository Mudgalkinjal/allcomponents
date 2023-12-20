
import '../../styles/Games.css';
import React, { useEffect, useState } from 'react';

export default function Tictactoe() {
    const [grid, setGrid] = useState(3)
    const [gridItems, setGridItems] = useState([]);
    const [toggleElem, setToggleElem ] = useState('O')
    const numRows = grid;
    const numCols = grid;

    function handleInputChange(event) {
        setGrid(event.target.value)
    }

    function handleClick(e) {
        const clickedItem = e.target;
        clickedItem.textContent = toggleElem;
        setToggleElem('X')
        // setToggleElem((prevToggleElem) => (prevToggleElem === 'O' ? 'X' : 'O'));
      }

      // Generate the grid dynamically
  const generateGrid = () => {
    const items = [];
    for (let row = 1; row <= numRows; row++) {
      for (let col = 1; col <= numCols; col++) {
        // Create a unique key for each grid item
        const key = `item-${row}-${col}`;

        // Assign class names for rows and columns
        const classNames = `grid-item row-${row} col-${col}`;

        // Set some content (you can customize this as needed)
        const content = ``;

        // Push the JSX element for the grid item into the array
        items.push(
          <div key={key} className={classNames} onClick={handleClick}>
            {content}
          </div>
        );
      }
    }
    // Update the state with the new grid items
    setGridItems(items);
  };

  // Call the generateGrid function when the component mounts
  React.useEffect(() => {
    generateGrid();
  }, [numRows, numCols]);
    

    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <div id="inputGridClass">
                <label>Enter the number of grids you want: </label>
                <input onChange={handleInputChange} min={3} max={6} type='number' />
            </div>
            <div className="grid-container" style={{gridTemplateColumns:`repeat(${grid},0fr)`}}>
                {gridItems}
            </div>
        </div>
    )
}