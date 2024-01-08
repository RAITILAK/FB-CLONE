import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import Sidebar from '../../components/sidebar/Sidebar';
import "./home.scss";


const Home = () => {
  return  ( 
        <div className='home'>
    <Navbar />
  <div className='homeContainer'> 
   
    <Sidebar />
    <Feed />
    <Rightbar />
    </div >
  </div >
  );
};

export default Home;
 