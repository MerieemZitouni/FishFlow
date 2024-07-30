import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Alertes from './Pages/Alertes/Alertes';
import styles from './App.module.css';

const App = () => {
  return (
    <Router>
      <div className={styles.App}>
        <Sidebar />
        <div className={styles.content}>
          <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/alertes" element={<Alertes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
