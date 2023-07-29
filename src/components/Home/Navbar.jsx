import React, { useEffect } from 'react';
import './nav.css'
import ActiveLink from '../Common/ActiveLink';

const Navbar = () => {
    useEffect(() => {
        const scroller = () => {
            if (document.documentElement.scrollTop <= 10) {
                document.getElementById('nav-scroll').classList.remove('scrollClass')
                document.getElementById('nav-scroll').classList.add('scrollTopClass')
                document.getElementById('nav-scroll').style.height = '80px'
                document.getElementById('font-mina').style.fontSize = '36px'
                document.getElementById('navbar').style.justifyContent = 'space-around'
            }
            else {
                document.getElementById('nav-scroll').classList.add('scrollClass')
                document.getElementById('nav-scroll').classList.remove('scrollTopClass')
                document.getElementById('nav-scroll').style.position = 'fixed'
                document.getElementById('nav-scroll').style.height = '60px'
                document.getElementById('navbar').style.justifyContent = 'end'
                // document.getElementById('navLogo').style.add('transition');
                document.getElementById('font-mina').style.fontSize = '32px'
            }
        }
        window.addEventListener('scroll', scroller);
        return () => {
            window.removeEventListener('scroll', scroller)
        }
    }, [])
    return (
        <div className='navbar-container w-full' id='nav-scroll'>
            <div className='nav-control' id='navbar'>
                <div className='navbar-content' id=''>
                    <div className='navLogo flex gap-5' id='navLogo'>
                        <img src="/logo.png" className='w-[48px]' alt="" />
                        <h2 className=' font-mina text-black ' id='font-mina' title="let's go for a walk">Dream Traveller</h2>
                    </div>
                </div>
                <div className='nav-list-container mr-10'>
                    <ul className='nav-link'>
                        <li><ActiveLink to='/'>Home</ActiveLink></li>
                        <li><ActiveLink to='/blogs'>Travel Blogs</ActiveLink></li>
                        <li><ActiveLink to={'places'}>Places</ActiveLink></li>
                        <li><ActiveLink to={'booking'}>My Bookings</ActiveLink></li>
                        <li><ActiveLink to={'hotels'}>Our Selected Hotels</ActiveLink></li>
                        <li><ActiveLink to={'about'}>About Us</ActiveLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;