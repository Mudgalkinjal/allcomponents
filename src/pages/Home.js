// Home.js
import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import '../App.css';

const Home = () => {
    const [dataElem, setDataElem] = useState([]);
    const [sliderValue, setSliderValue] = useState(0);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchDataAndFilter = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const data = await response.json();
            const dataFinal = data.map((elem) => ({
              userId: elem.userId,
              id: elem.id,
              title: elem.title,
              body: elem.body,
            }));
      
            setDataElem(dataFinal);
            setFilteredData(dataFinal.slice(0, sliderValue));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchDataAndFilter();
      }, [sliderValue]);      
    
  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <div>
      <div id="sliderComponent">
        <Slider min={0} max={dataElem.length} step={1} onValueChanged={handleSliderChange}></Slider>
        <p>Slider Value in Home: {sliderValue}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
        {filteredData.length > 0 ? (
            filteredData.map((elem, index) => (
            <tr key={index}>
                <td>{elem.userId}</td>
                <td>{elem.id}</td>
                <td>{elem.title}</td>
                <td>{elem.body}</td>
            </tr>
            ))
            ) : (
            <tr>
                <td colSpan="4">No data available</td>
            </tr>
        )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
