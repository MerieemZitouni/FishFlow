import React from 'react';
import './List.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Secondlist = () => {
const percentage = 24
return (

    <ul className="horizontal-list">
      <li className='item-secondlist'>       <div className="hover-text">Temperature</div>

      <div className="icon-and-text">
        
      <img src="assets/Vector.png" alt="Icon" className="icon" />
      <span className="item2-title">{`${percentage}%`}</span>


      </div>
     </li>
        <li className='item-secondlist'> 
        <div className="icon-and-text">
        <img src="assets/Vector (2).svg" alt="Icon" className="icon"  />
        <span className="item2-title">{`${percentage}%`}</span>
        </div>
    </li>
    <li className='item-secondlist'> 
    <div className="icon-and-text">
    <img src="assets/simple-icons_oxygen.svg" alt="Icon" className="icon" />
    <span className="item2-title">{`${percentage}%`}</span>
    </div>
    </li>
        <li className='item-secondlist'> 
        <div className="icon-and-text">
        <img src="assets/Vector (3).svg" alt="Icon" className="icon" />
        <span className="item2-title">{`${percentage}%`}</span>
        </div>
        </li>

        <li className='item-secondlist'> 
        <div className="icon-and-text">
        <img src="assets/Vector (3).svg" alt="Icon" className="icon" />
        <span className="item2-title">{`${percentage}%`}</span>
        </div>
        </li>
        
        


    </ul>


)

}
export default Secondlist;
