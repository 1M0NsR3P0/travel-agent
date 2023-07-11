import React from 'react';
import Navbar from '../Home/Navbar';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            
        </div>
    );
};

export default Main;