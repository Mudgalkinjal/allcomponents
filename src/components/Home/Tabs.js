import '../../styles/Home.css';
import React, { useEffect, useState } from 'react'
import Accordion from './Accordion'

export default function Tabs() {

    const [tabNum, setTabNum] = useState(1);
    const [accData, setAccData ] = useState([])
    const arr = [1, 2, 3];

    function handleTabClick(e) {
        setTabNum(e)
    }

    useEffect(() => {
        async function fetchDataForAccordion() {
            const data = await fetch('https://jsonplaceholder.typicode.com/comments?_start=0&_limit=10').then(response => {
                return response.json();
            })
    
            setAccData(data);
        }

        if (accData.length === 0) {
            fetchDataForAccordion();
        }

    },[accData])


    return (
    <div>
        <div id="tabsContainer">
            {arr.map((elem,index) => (
                <div style={elem === tabNum ? { backgroundColor: '#3498db', color: 'white' } : {}} key={index} onClick={()=>handleTabClick(elem,index)}>Tab {elem}</div>
            ))}
        </div>
        <div id="contentContainer" >
                <Accordion accData={accData} tabNum={tabNum} />
        </div>
    </div>
    )
}