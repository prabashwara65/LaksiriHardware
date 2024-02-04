import React from 'react';
import Header from './Dashboard_Header';
import Home from './Dashboard_Home';
import Sidebar from './Dashboard_Sidebar';
import './Dashboard.css'


function Dashboard() {


  return (
    <div>
      
      <div className='grid-container'>
        <Header />
        <Sidebar />
        <Home />
      </div>
      

    </div>
  );
}

export default Dashboard;
