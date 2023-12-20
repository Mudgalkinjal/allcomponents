// Home.js
import React, { useEffect, useState } from 'react';
import Carousel from '../components/Home/Carousel';
import Tabs from '../components/Home/Tabs';

import '../styles/App.css'

const Home = () => {

  const [ dataImg, setDataImg ] = useState([])

  useEffect(()=>{
      const fetchDataAndFilter = async () => {
          const data = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10').then(response => {
              return response.json()
          })

          data.forEach(elem => {
              setDataImg((prevData)=>[...prevData, elem.url])
          })
      }
      if (dataImg.length === 0) {
          fetchDataAndFilter();
      }
  })
 
  return (
    <div>
      <Carousel imgData={dataImg} />
      <Tabs />
    </div>
  );
};

export default Home;
