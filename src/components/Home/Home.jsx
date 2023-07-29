import React, { useEffect, useState } from 'react';
import './home.css';
import Banner from './Banner';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Home = () => {
 
  return (
    <div className='Home overflow-y-hidden overflow-x-hidden' id='homePage'>
      <Banner  />
      <div className='absolute left-1/2 bottom-[60px] slideDownBtn items-center'>
        <span>Scroll Down</span>
        <ArrowCircleDownIcon />
      </div>
      
    </div>
  );
};

export default Home;
