// src/List.js
import React from 'react';
import './List.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const List = () => {
    const progressValue = 66;
    const percentage = 12;
  return (
    <ul className="horizontal-list">
      <li className='item-normal'>   

        <div className='fishnumber-container'>
        <div className='fishnum-container'>  
     <span className="item1-title">Fish number</span> 
     <span className="item1-description">126</span>          
     </div>
     <div className='fishnum-image'>
     <img src="assets/Group 14.svg" alt="up" style={{ width: '40px', height: '40px' }} className='fishnumber-image' />
     <h2>{`+${percentage}%`}</h2>
     </div>
    </div>

        </li>

      <li className='item-normal'>
       
        <div className="progress-container">
        <span className="item2-title">Stock <br /> state</span>
          <CircularProgressbar
            value={progressValue}
            text={`${progressValue}%`}
            styles={buildStyles({
              textColor: '#333',
              pathColor: '#296868',
              trailColor: '#d6d6d6',
            })}
          />  
          </div>
          </li>
      <li >    
      <div className='system-health-container'>
      <div className='systeme-health'>
      <img src="assets/Vector.svg" alt="up" style={{ width: '32px', height: '32px' }} className='system-health-img'/>
      <span className="item3-title">System is healthy</span> 
      </div>
      <span className="item3-description">You are up to date, everything is fine Lorem Ipsum is simply dummy text of the </span>   
      </div> 
      </li>

    </ul>




  );
};

export default List;
