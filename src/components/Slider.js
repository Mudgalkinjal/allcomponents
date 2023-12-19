import '../styles/App.css';
import { useState } from 'react';


export default function Slider(props) {
  const { min, max, step, onValueChanged } = props;
  const [ rangeVal, setRangeVal ] = useState(100)

    function handleChange(e) {
      const newValue = e.target.value;
      setRangeVal(newValue)
      onValueChanged(newValue);
    }

    return (
          <div id="slider">
            <h3>Filter how much data you want to see</h3>
            <span>{min}</span>
              <input onChange={handleChange} type="range" value={rangeVal} min={min} max={max} step={step} />
            <span>{max}</span>
          </div>
      );
    };