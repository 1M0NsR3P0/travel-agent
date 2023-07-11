import React, { useEffect } from 'react';
import './home.css'

const Banner = () => {

    return (
        <>
            <div className='banner'>
                <div className='video-container'>
                    <video className='video' src="showPlaces1.mp4" autoPlay={true} loop muted id='video'></video>
                </div>

                <div className='banner-text'>
                    <p className='font3d'>let's Go Relaxed</p>
                </div>

            </div>
            <h2 className='mt-5'>lets have a tour plan. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem! Obcaecati quidem cupiditate fugit a laudantium nobis, officiis odio. Rem aliquam sit minima labore deleniti illum at temporibus ipsam blanditiis?</h2>
        </>
    );
};

export default Banner;