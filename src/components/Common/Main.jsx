import React from 'react';
import Navbar from '../Home/Navbar';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import { ScreenSizeProvider } from './Responsive';

const Main = () => {
    return (
        <div className='overflow-x-hidden overflow-y-hidden'>
            <ScreenSizeProvider>
            <Navbar/>
            <Outlet/>
            </ScreenSizeProvider>
        </div>
    );
};

export default Main;