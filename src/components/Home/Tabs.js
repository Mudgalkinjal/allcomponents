import '../../styles/Home.css';
import React, { useState } from 'react'

export default function Tabs() {

    const [tabNum, setTabNum] = useState(1);
    const arr = [1, 2, 3];

    function handleTabClick(e) {
        setTabNum(e)
    }

    return (
    <div>
        <div id="tabsContainer">
            {arr.map((elem,index) => (
                <div style={elem === tabNum ? { backgroundColor: 'gray' } : {}} key={index} onClick={()=>handleTabClick(elem,index)}>Tab {elem}</div>
            ))}
        </div>
        <div id="contentContainer">
                <div>Content {tabNum}</div>
        </div>
    </div>
    )
}