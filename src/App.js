import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Alertes from './Pages/Alertes/Alertes';
import styles from './App.module.css';
import Navbar from './Components/Navbar';
import List from './Components/List';
import Secondlist from './Components/Secondlist';
import Graphicalview from './Components/Graphicalview';
import Graph from './Components/Graph';



const App = () => {
  return (
    <Router>
      <div className={styles.App}>
        {/* <Sidebar /> */}
        <div className={styles.content}>
          <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/alertes" element={<Alertes />} />
            <Route path="/dashboard" element={
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
         
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;