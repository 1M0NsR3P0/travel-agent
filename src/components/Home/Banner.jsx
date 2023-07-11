import React, { useEffect } from 'react';
import './home.css'
import ActiveLink from '../Common/ActiveLink';

const Banner = () => {

    return (
        <>
            <div className='banner '>
                <div className='video-container'>
                    <video className='video' src="showPlaces1.mp4" autoPlay={true} loop muted id='video'></video>
                </div>

                <div className='banner-text'>
                    <p className='font3d'>let's Go Relaxed</p>
                    <img src="cloudy.png" alt="cloudpng" className='cloud top-[18%] left-[-0px]' />
                    <img src="cloudy.png" alt="cloudpng" className='cloud top-[15%] left-[-50px]' />
                    <img src="cloudy.png" alt="cloudpng" className='cloud top-[7%] left-[250px]' />
                    <img src="cloudy.png" alt="cloudpng" className='cloud top-[19%] left-[350px]' />
                    <img src="cloudy.png" alt="cloudpng" className='cloud top-[17%] left-[900px]' />
                    <img src="cloudy.png" alt="cloudpng" className='cloud top-[17%] left-[-800px]' />
                    <img src="fly2.gif" alt="birds" className='birdsLeftTop bg-transparent '/>
                    <img src="fly2.gif" alt="birds" className='birdsLeftTop2 bg-transparent '/>
                </div>

            </div>
            <div className='absolute bottom-[10%] z-[11] px-[450px]'>
            <h2 className='text-left text-xl'>Ignite Your Wanderlust: Discover, Book, and Experience Unforgettable Journeys. Explore our user-friendly website for curated destinations, seamless bookings, and exclusive deals. Let our passionate travel experts assist you in creating personalized itineraries. Unveil hidden gems with our comprehensive travel guides. Your privacy is our priority, with secure online transactions. Embark on extraordinary adventures with us today!</h2>
            <button className='btn-primaryy'><ActiveLink to={'/places'}>Let's Go</ActiveLink></button>
            </div>
        </>
    );
};

export default Banner;