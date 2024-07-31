import React from 'react';
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
  );
};

export default App;
