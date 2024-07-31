// src/Navbar.js
import React, { useState } from 'react';

import './Navbar.css';

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
      
        <div className="nav-title"><h1>Dashboard</h1></div>

        <div className="nav-selector">
          <select value={selectedOption} onChange={handleChange} className="nav-select">
            <option value="Option 1">Bassin 1</option>
            <option value="Option 2">Bassin 2</option>
            <option value="Option 3">Bassin 3</option>
          </select>
        </div>
        <ul className="nav-menu">
          
          <li className="nav-item">
            <a href="#" className="nav-links">
            
          <img src="assets/clarity_notification-solid.svg" alt="alerts" style={{ width: '23px', height: '23px' }} />
        
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              User
            </a>
          </li>
          
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
