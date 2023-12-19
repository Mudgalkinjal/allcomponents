
import '../../styles/Games.css';
import { useState } from 'react';

export default function Tictactoe() {
    const [ grid, setGrid ] = useState(3)

    function handleInputChange(event) {
        setGrid(event.target.value)
    }
    console.log(grid)

    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <label htmlFor='gridNum'>Enter the number of grids you want for Tic Tac Toe: </label>
            <input min={3} onChange={handleInputChange} id="gridNum" type="number" />
        </div>
    )
}