import '../App.css';


export default function Slider(props) {
    const { min, max, step, onValueChanged } = props;

    function handleChange(e) {
        const newValue = e.target.value;
        onValueChanged(newValue);
    }

    return (
          <div id="slider">
            <h3>Filter how much data you want to see</h3>
            <span>{min}</span>
            <input onChange={handleChange} type="range" min={min} max={max} step={step} />
            <span>{max}</span>
          </div>
      );
    };