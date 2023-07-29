import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Places = () => {
  const navigate = useNavigate(null)
  const [scaleValue, setScaleValue] = useState(1); // Initial scale value
  useEffect(() => {
    const handleScroll = (event) => {
      const deltaY = event.deltaY;
      if (deltaY > 0) {
        // Scrolling down, zoom in
        const newScaleValue = Math.min(scaleValue + 0.20, 4);
        setScaleValue(newScaleValue);
        if(scaleValue === 4 ){
            navigate('/')
        }
      } else if (deltaY < 0) {
        // Scrolling up, zoom out
        const newScaleValue = Math.max(scaleValue - 0.20, 1); //scalevalue - zoomout speed , max zoom out
        setScaleValue(newScaleValue);
      }
    };


    document.addEventListener('wheel', handleScroll);
    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
  }, [scaleValue]);

  return (
    <div className='h-[50vh] w-full bottom-[-90vh] flex justify-center items-center absolute bg-red-400'>
      <h1>This is the Places page</h1>
    </div>
  );
};

export default Places;
