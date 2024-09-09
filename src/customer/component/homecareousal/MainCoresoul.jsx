import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCoresoulData } from './MainCoresoulData';

const MainCoresoul = () => {
    const items = MainCoresoulData.map((item, index) => (
        <img
            className='cursor-pointer'
            role='presentation'
            src={item.image}
            alt={`Slide ${index + 1}`}
            key={index}  // Adding a key for performance and rendering stability
            style={{ width: '100%', height: '480px', objectFit: 'cover' }} // Adjust the size here
        />
    ));
    
    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
        />
    );
};

export default MainCoresoul;
