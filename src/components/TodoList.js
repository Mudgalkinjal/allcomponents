import { useState } from 'react';
import '../styles/App.css';

export default function TodoList() {

    const [list, setList] = useState([]);

    function handleList(event) {
        if (event.key === 'Enter') {
            setList((prevList)=>[...prevList, event.target.value])
        }
    }

    return (<div>
        <div id="toDoContainer">
            <label htmlFor='taskId'>Enter the task:</label>
            <input id="taskId" type="text" onKeyDown={handleList} />
        </div>
        <div id="listingTasks">
            {list.map((elem, index) => (
            <ul key={index}>
                <li>{elem}</li>
            </ul>
            ))}
        </div>
    </div>)
}