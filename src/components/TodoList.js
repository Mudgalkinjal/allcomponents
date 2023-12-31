import { useState, useEffect } from 'react';
import '../styles/App.css';

export default function TodoList() {
    const [list, setList] = useState([]);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        
    }, [list]);

    function handleList(event) {
        if (event.key === 'Enter') {
            let msg = checkForDup(event.target.value);
            if (msg === 'Task added') {
                setList((prevList) => [...prevList, { task: event.target.value, completed: false }]);
            }
            setMsg(msg);
        }
    }

    function checkForDup(textI) {
        const stringWithoutSpaces = textI.replace(/\s/g, '');
        const isDuplicate = list.some(item => item.task === stringWithoutSpaces);
        if (isDuplicate) {
            return 'Task already in the list';
        } else {
            return 'Task added';
        }
    }

    function handleStrike(strInd) {
        setList((prevList) =>
            prevList.map((item, index) =>
                index === strInd ? { ...item, completed: true } : item
            )
        );
        setMsg('Task Completed')
    }

    function handleDelete(delInd) {
        setList((prevList) =>
            prevList.filter((item, index)=>index!==delInd)
        );
        setMsg('Task Deleted')
        console.log('deleted')
    }

    return (
        <div>
            <div id="toDoContainer">
                <label htmlFor='taskId'>Enter the task:</label>
                <input id="taskId" type="text" onKeyDown={handleList} />
                <span>{msg}</span>
            </div>
            <div id="listingTasks">
                {list.map((elem, index) => (
                    <div key={index}>
                        <ul onClick={() => handleStrike(index)}>
                            <li style={{ textDecoration: elem.completed ? 'line-through' : 'none' }}>
                                {elem.task}
                            </li>
                        </ul>
                        <button onClick={() => handleDelete(index)} id="secondary-Btn">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
