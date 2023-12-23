import '../styles/App.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props) {
    const navbarItems = props.navbarItems 
    const location = useLocation();
  return (
    <div id="navbarMain">
      <div id="navbar">
        {navbarItems.map((elem, index) => (
          <ul key={index} className={location.pathname === '/'+elem.page ? 'active' : ' '}>
            <li>
              <Link className='custom-link' to={elem.page}>{elem.name}</Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};
