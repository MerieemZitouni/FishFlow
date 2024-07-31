import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {


  return (
    <div className={styles.sidebar}>
       <img src="assets/Group 1000.svg" alt="logo" />
      <div className={styles.sidebarContent}>
       


       <div className={styles.mainButtons} >

       <button className={styles.elementContainer}>
          <img src="assets/dashboard.svg" alt="dashboard" style={{ width: '40px', height: '40px' }} />
          <h2 className={styles.text}>Dashboard</h2>
        </button>

        <button className={styles.elementContainer}>
          <img src="assets/alerts.svg" alt="alerts" style={{ width: '40px', height: '40px' }} />
          <h2 className={styles.text}>Alerts</h2>
        </button>

        <button className={styles.elementContainer}>
          <img src="assets/sensors.svg" alt="sensors" style={{ width: '40px', height: '40px' }} />
          <h2 className={styles.text}>Sensors</h2>
        </button>

        <button className={styles.elementContainer}>
          <img src="assets/feeding.svg" alt="feeding" style={{ width: '40px', height: '40px' }} />
          <h2 className={styles.text}>Feeding</h2>
        </button>
      </div>

      <div className={styles.secondButtons}>
        <button className={styles.elementContainer}>
          <img src="assets/settings.svg" alt="settings" style={{ width: '40px', height: '40px' }} />
          <h2 className={styles.text}>Settings</h2>
        </button>

        <button className={styles.elementContainer}>
          <img src="assets/logout.svg" alt="logout" style={{ width: '40px', height: '40px' }} />
          <h2 className={styles.text}>Logout</h2>
        </button>

        </div>

        

        



        
      </div>
    </div>
  );
};

export default Sidebar;
