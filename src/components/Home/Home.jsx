import React from 'react';
import './home.css'
import Banner from './Banner';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className='Home'>
            <Navbar/>
            <Banner/>   
        </div>
    );
};

export default Home;