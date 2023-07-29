import React, { useEffect, useState } from 'react';
import './home.css';
import Wave from 'react-wavify';
import { useScreenSize } from '../Common/Responsive';
import { useNavigate } from 'react-router-dom';
import BannerPlaces from './BannerPlaces';

const Banner = () => {
  const screenSize = useScreenSize();
  const sm = screenSize === 'sm';
  const md = screenSize === 'md';
  const lg = screenSize === 'lg';
  const xl = screenSize === 'xl';
  const xxl = screenSize === 'xxl';
  // const randomPosition  = ['l-10','l-15','l-20','l-30','l-50']

  const navigate = useNavigate(null)
  const [scaleValue, setScaleValue] = useState(1); // Initial scale value
  const [slideValue, setSlideValue] = useState('100px');
  const [opacity, setOpacity] = useState(0.14)

  const bubbleClick = () => {
    // alert('buuble clicked')
    document.getElementById('bubbleClick').classList.add('bubbleClicked')
  }
  const dubbleOut = () => {
    document.getElementById('bubbleClick').classList.remove('bubbleClicked')

  }
  const bubbleCrash = () => {
    document.getElementById('bubbleClick').classList.add('bubble-crasher')
    setTimeout(() => {
      document.getElementById('bubbleClick').remove();
    }, 400);

  }
  const popUp = (event)=>{
    // alert('altert')
    document.getElementById('popMe').classList.remove('wavvy-animation')
    document.getElementById('popit').classList.add('wavvy-scale')

  }
  const bubbleCreator = () => {
    // setTimeout(() => {
    //     const newBubble = document.createElement('div');
    //     newBubble.className = 'bubble';
    //     newBubble.classList.add('newBubbles important:true')
    //     newBubble.id = 'bubbleClick';
    //     document.querySelector('.bubbles').appendChild(newBubble);
    // }, 500);

  }
  useEffect(() => {
    // setTimeout(bubbleCreator,3000)

    const newOpacity = scaleValue * 0.30
    // alert(scaleValue)
    const handleScroll = (event) => {
      setOpacity(newOpacity)
      if (newOpacity > 0.68) {
        setOpacity(0.66)
      }
      const deltaY = event.deltaY;
      if (deltaY > 0) {
        // Scrolling down, zoom in
        const newScaleValue = Math.min(scaleValue + 0.20, 3);
        setScaleValue(newScaleValue);
        if (scaleValue === 4) {
          document.getElementById('bannerPlaces').classList.remove('hidden');
          document.getElementById('bannerPlaces').classList.add('slideUp');
        }
      }
      else if (deltaY < 0) {
        // Scrolling up, zoom out
        const newScaleValue = Math.max(scaleValue - 0.20, 1); //scalevalue - zoomout speed , max zoom out
        setScaleValue(newScaleValue);
        if (scaleValue === 1) {
          document.getElementById('bannerPlaces').classList.remove('slideUp');
          document.getElementById('bannerPlaces').classList.add('hidden');
        }
      }
    };

    document.addEventListener('wheel', handleScroll);
    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
  }, [scaleValue]);

  return (
    <>
      <div className='banner overflow-x-hidden' style={{ transform: `scale(${scaleValue})` }}>
        <div className='video-container'>
          <video className='video text-[#4ba5ff]' src="showPlaces1.mp4" autoPlay={true} loop muted id='video'></video>
        </div>

        <div className='banner-text overflow-x-hidden'>
          <p className={`overflow-x-hidden ${sm && 'text-[100px]'} ${md && 'text-[150px]'} ${lg && 'text-[200px]'} ${xl && 'text-[200px]'} ${xxl && 'text-[245px]'} font3d`}>let's Go Relaxed</p>
          <img src="cloudy.png" alt="cloudpng" className='cloud top-[18%] left-[-0px]' />
          <img src="cloudy.png" alt="cloudpng" className='cloud top-[15%] left-[-50px]' />
          <img src="cloudy.png" alt="cloudpng" className='cloud top-[7%] left-[250px]' />
          <img src="cloudy.png" alt="cloudpng" className='cloud top-[19%] left-[350px]' />
          <img src="cloudy.png" alt="cloudpng" className='cloud top-[17%] left-[900px]' />
          <img src="cloudy.png" alt="cloudpng" className='cloud top-[17%] left-[-800px]' />
          <img src="fly2.gif" alt="birds" className='birdsLeftTop bg-transparent ' />
          <img src="fly2.gif" alt="birds" className='birdsLeftTop2 bg-transparent ' />
        </div>
      </div>
      <div className={`w-full ${scaleValue >= 3 ? `` : ''}`}>
        <Wave
          className={`absolute bottom-[-0px] z-[120]`}
          fill='#0080F8'
          paused={false}
          options={{
            height: 80,
            amplitude: 20,
            speed: 0.25,
            points: 4
          }}
        />
      </div>
      <div className={`${scaleValue >= 1.5 ? 'block' : 'hidden'} `}>


        <div className={`bubble-container overflow-y-hidden ${scaleValue >= 2.5 ? 'block' : 'hidden'}`} >
          <div className='bubbles left-[10%] bottom-[60%] z-[142] h-[20px] w-[25px]' onMouseEnter={bubbleClick} onMouseLeave={dubbleOut} onClick={bubbleCrash} >
            <div className={`bubble`} id='bubbleClick' ></div>
          </div>

          <div>

          </div>
        </div>


        <div className={`ocean ${scaleValue >= 2.5 ? 'hidden' : 'h-[99vh]'}`} style={{ backgroundColor: `rgba(0,128,248,${opacity})` }}>


        </div>
      </div>
      <div
        className={`absolute top-0 h-[105vh] w-[98.78vw] object-fill ${scaleValue >= 2.5 ? 'block' : 'hidden'} z-[125]`}
        id='bannerPlaces'
      >
        <BannerPlaces />

          <div id='popit' className=' papper wavvy-animation h-[200px] w-[200px] absolute top-[20%] left-[20%]' >
            
          </div>

      </div>
    </>
  );
};

export default Banner;
