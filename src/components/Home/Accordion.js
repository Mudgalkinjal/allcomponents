import React, { useEffect, useState } from 'react';
import '../../styles/Home.css';

export default function Accordion(props) {
    const [dataAc, setDataAc] = useState([]);
    const [tabNum, setTabNum] = useState(props.tabNum); // Initialize with the default tab
    const [keyNum, setKeyNum] = useState(0)

  useEffect(() => {
    setTabNum(props.tabNum);
  }, [props.tabNum]);
    
  const accData = props.accData;
  const equalizer = Math.floor(accData.length / 3);
  const accData1 = accData.slice(0, equalizer);
  const accData2 = accData.slice(equalizer, equalizer + equalizer);
  const accData3 = accData.slice(equalizer + equalizer, accData.length);
    
    function handleClick(e) {
        setKeyNum(e.target.id)
    }

  useEffect(() => {
    if (tabNum === 2) {
      setDataAc(accData2);
    } else if (tabNum === 3) {
      setDataAc(accData3);
    } else {
      setDataAc(accData1);
    }
  }, [tabNum, props.accData]);

  return (
    <div style={{width:'100%'}}>
        <h1>Tab {tabNum}</h1>
        {dataAc.map((elem, index) => (
            <div id='accComponent' key={index}>
                <button id={index+elem.id} onClick={handleClick}>{elem.name}</button>
                <p style={(index+elem.id)==keyNum?{display:'block'}:{display:'none'}} id={index+elem.id}>{elem.body}</p>
            </div>
        ))}
    </div>
  );
}
