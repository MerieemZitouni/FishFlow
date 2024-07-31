import React from 'react';
<<<<<<< HEAD
import styles from './App.module.css';
import Sidebar from './Components/Sidebar/Sidebar';
import List from './Components/List';
import Navbar from './Components/Navbar';
import Graph from './Components/Graph';
import Graphicalview from './Components/Graphicalview';
import Secondlist from './Components/Secondlist';



const App = () => {
  return (
    <div className={styles.App}>
      <Sidebar />

      <div className={styles.content}>

      <div><Navbar/></div>
      <List />
      <Secondlist />
      <Graphicalview />
      <Graph />

      </div>
    </div>
=======
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
>>>>>>> c2ce4ea82ad8db0caf6c47eb6b7685aaefb5c1aa
  );
};

export default App;
