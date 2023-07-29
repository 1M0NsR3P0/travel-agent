import React, { useEffect } from 'react';
import { useScrollDirection } from 'react-use-scroll-direction'

const Hotels = () => {
//   const { 
//     isScrolling,
//     isScrollingX,
//     isScrollingY,
//     isScrollingUp, 
//     isScrollingDown,
//     isScrollingLeft,
//     isScrollingRight,
//     scrollDirection,
//   } = useScrollDirection()
//   console.log(scrollDirection,isScrolling,isScrollingX,isScrollingY)
    useEffect(()=>{
        console.log(window.scrollbars)
        if(window.scrollBy){

        }
    },[])
    return (
        <div className='h-[550vh] flex justify-center items-center absolute'>
            this is the hotel page
        </div>
    );
};

export default Hotels;