import React, { useState } from 'react';
import './styles.css';

const Swipper = (Slide) => {
  const [position, setPosition] = useState(0);
  const [increase, setIncrease] = useState(true);

  const slides = [
    {
      heading: 'This is heading',
      text: 'This is Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      imgSrc: 'ballon.png',
    },
    {
      heading: 'This is heading 2',
      text: 'This is Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      imgSrc: 'ballon.png',
    },
    {
      heading: 'This is heading 3',
      text: 'This is Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      imgSrc: 'ballon.png',
    },
  ];

  const handleSlideRight = () => {
    setIncrease(true);
    setPosition((prevPosition) => (prevPosition + 1) % slides.length);
  };

  const handleSlideLeft = () => {
    setIncrease(false);
    setPosition((prevPosition) => (prevPosition - 1 + slides.length) % slides.length);
  };

  return (
    <div className='carousel'>
      <div className='Container'>
        {
        slides.map((slide, index) => (
          <div
            className='slide-container'
            key={index}
            style={{
              display: index === position ? 'block' : 'none',
              animation: index === position ? (increase ? 'slideIn 0.5s ease' : 'slideInReverse 0.5s ease') : '',
            }}
          >
            <div className='slides'>
              <div>
                <h1 className='slide-heading'>{slide.heading}</h1>
                <div className='slide-text w-full'>
                <p className='text-center'>{slide.text}</p>
                </div>
              </div>
              <div className='slide-img-container'>
                <img className='slide-img' src={slide.imgSrc} alt="none" />
              </div>
            </div>
          </div>
        ))
        }
        <div className='arrows-container'>
          <div className='arrows arrowLeft'>
            <button onClick={handleSlideLeft}>
              <img className='rotate180' src="arrow.svg" alt="" />
            </button>
          </div>
          <div className='arrows arrowRight'>
            <button onClick={handleSlideRight}>
              <img src="arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swipper;
