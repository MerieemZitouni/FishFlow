import React from 'react';
import styles from './App.module.css';
import Sidebar from './Components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className={styles.App}>
      <Sidebar />
      <div className={styles.content}>
        <h1>main content area.</h1>
      </div>
    </div>
  );
};

export default App;
