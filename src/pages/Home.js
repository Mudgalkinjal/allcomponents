// Home.js
import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import Pagination from '../components/Pagination';
import '../App.css';

const Home = () => {
  const [dataElem, setDataElem] = useState([]);
  const [sliderValue, setSliderValue] = useState(100);
  const [paginatedData, setPaginatedData] = useState([]);
  const [pageN, setPageN] = useState(0)
  
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
            setPaginatedData(dataFinal.slice(pageN*10, pageN*10+10))
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchDataAndFilter();
    }, [sliderValue, pageN]);    

    
  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  useEffect(() => {
    setPaginatedData(dataElem.slice(Math.min(pageN * 10,sliderValue), Math.min(pageN * 10 + 10,sliderValue)));
  }, [pageN, dataElem, sliderValue]);
  
  const handlePageChange = (value) => {
    setPageN(value);
    setPaginatedData(dataElem.slice(Math.min(pageN * 10,sliderValue), Math.min(pageN * 10 + 10,sliderValue)));
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
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
        {paginatedData.map((elem, index) => (
            <tr key={index}>
                <td>{elem.userId}</td>
                <td>{elem.id}</td>
                <td>{elem.title}</td>
                <td>{elem.body}</td>
            </tr>
            ))
            }
        </tbody>
      </table>
      <div id='pagination'>
        <Pagination sliderValue={sliderValue} itemsPerPage={10} onPageChange={handlePageChange}></Pagination>
      </div>
    </div>
  );
};

export default Home;
