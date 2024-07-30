import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {


  return (
    <div className={styles.sidebar}>
       <img src="assets/logo1.png" alt="logo" />
      <div className={styles.sidebarContent}>
       


       <div className={styles.mainButtons} >

        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
        <button className={styles.elementContainer}>
          <img src="assets/dashboard.svg" alt="dashboard" style={{ width: '40px', height: '40px' }} />
          <h2 className={styles.text}>Dashboard</h2>
        </button>
        </Link>
    

        <Link to="/alertes" style={{ textDecoration: 'none' }}>
        <button className={styles.elementContainer}>
          <img src="assets/alerts.svg" alt="alerts" style={{ width: '40px', height: '40px' }} />
          <h2 className={styles.text}>Alerts</h2>
        </button>
        </Link>

        <Link to="/sensors" style={{ textDecoration: 'none' }}>
        <button className={styles.elementContainer}>
          <img src="assets/sensors.svg" alt="sensors" style={{ width: '40px', height: '40px' }} />
          <h2 className={styles.text}>Sensors</h2>
        </button>
        </Link>

        <Link to="/feeding"  style={{ textDecoration: 'none' }}>
        <button className={styles.elementContainer}>
          <img src="assets/feeding.svg" alt="feeding" style={{ width: '40px', height: '40px' }} />
          <h2 className={styles.text}>Feeding</h2>
        </button>
        </Link>
      </div>

      <div className={styles.secondButtons}>

        <Link to="/settings"  style={{ textDecoration: 'none' }}>
        <button className={styles.elementContainer}>
          <img src="assets/settings.svg" alt="settings" style={{ width: '40px', height: '40px' }} />
          <h2 className={styles.text}>Settings</h2>
        </button>
        </Link>

        <Link to="/logout"  style={{ textDecoration: 'none' }}>
        <button className={styles.elementContainer}>
          <img src="assets/logout.svg" alt="logout" style={{ width: '40px', height: '40px' }} />
          <h2 className={styles.text}>Logout</h2>
        </button>
        </Link>

        </div>

        

        



        
      </div>
    </div>
  );
};

export default Sidebar;
