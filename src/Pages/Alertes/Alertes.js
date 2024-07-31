import React, { useState } from 'react';
import styles from './Alertes.module.css';
import Select from 'react-select';
import ParameterCard from './ParameterCard';

const Alertes = ({ nbAlertes }) => {

    const optionBassin = [
        { value: '1', label: 'Bassin 1' },
        { value: '2', label: 'Bassin 2' },
        { value: '3', label: 'Bassin 3' },
        { value: '4', label: 'Bassin 4' },
        { value: '5', label: 'Bassin 5' },
      ];

      const styleSelect = {
        singleValue: (provided) => ({
          ...provided,

         
            color: '#FFFFFF'
        }),
        option: (provided) => ({
          ...provided,
          color: '#FFFFFF', // Text color for options
          backgroundColor: '#023047', // Optional: Background color for options
        }),
        control: (base) => ({
          ...base,
          background: '#023047',
          border: '1px solid #023047',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '10px',
          width: '165px',
          height: '32px',
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),

        placeholder: (provided) => ({
            ...provided,
            color: '#FFFFFF', 
          }),
      };


  return (
    <div className={styles.Alertes}>
        <div className={styles.header}>
           <h2 className={styles.title}>Alerts & Notifications </h2>
           
           <div className={styles.innerheader}>
           <Select
           options={optionBassin}
           styles={styleSelect}
           placeholder="Bassin"
           />
           <img src="assets/notif0.svg" alt="notif" style={{marginLeft: '60px'}} />
           <h4 className={styles.text1} style={{marginLeft: '30px'}}>user user</h4>
           <img src="assets/user.svg" alt="user image" width="48.76" height="47" style={{marginLeft: '30px'}} />


           </div>

           
           

        </div>
        <img src="assets/Lineheader.svg" alt="line" />  

        
       

        <div className={styles.graphicContainer}>
         
         <div className={styles.graphicCol1}>
        <h3 className={styles.title2}>Summary of the day</h3>
        <div className={styles.gridCards}>
           <ParameterCard 
             valueNumber={26} 
             iconPath='/assets/tempIcon.svg' 
              parameterName='Temperature' 
             />
               <ParameterCard 
             valueNumber={26} 
             iconPath='/assets/conductivityIcon.svg' 
              parameterName='Conductivity' 
             />

             <ParameterCard 
             valueNumber={26} 
             iconPath='/assets/oxygenIcon.svg' 
              parameterName='D. Oxygen' 
             />

            <ParameterCard 
             valueNumber={26} 
             iconPath='/assets/phIcon.svg' 
              parameterName='pH' 
             />
             
            </div>

            <div className={styles.secondRow}>
                
            <div className={styles.historyButton} >{nbAlertes}</div>
            <div className={styles.historyButton}>
            <img src="assets/historyAlertButton.svg" alt="history" />
            </div>

            </div>
        </div>

           
        </div>
        
        
    </div>
  );
};

export default Alertes;
