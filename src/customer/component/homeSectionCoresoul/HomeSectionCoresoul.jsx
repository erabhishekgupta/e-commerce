import React, { useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import 'react-alice-carousel/lib/alice-carousel.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Button from '@mui/material/Button';


const HomeSectionCoresoul = ({data , sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);  // Updated to camelCase
    const carouselRef = useRef(null);  // Add reference to AliceCarousel

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    // Function to move to the previous slide
    const slidePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };

    // Function to move to the next slide
    const slideNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    // Create the carousel items from the mensKurta dataset
    const items = data.map((item, index) => <HomeSectionCard key={index} product={item} />);

    return (
        <div className='border'>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    ref={carouselRef}  // Attach carousel reference
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}  // Changed to onSlideChanged to ensure correct sync
                    activeIndex={activeIndex}
                    infinite={false}  // Disable infinite for now
                />
                {/* Next Button */}
                <Button 
                    variant='contained'
                    className='z-50'
                    sx={{ 
                        position: 'absolute', 
                        top: '8rem', 
                        right: '0rem', 
                        transform: 'translateX(50%) rotate(90deg)', 
                        bgcolor: 'white' 
                    }}
                    aria-label='next'
                    onClick={slideNext}
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>

                {/* Previous Button */}
               {activeIndex!==0 && <Button
                    variant='contained'
                    className='z-50'
                    sx={{ 
                        position: 'absolute', 
                        top: '8rem', 
                        left: '0rem', 
                        transform: 'translateX(-50%) rotate(90deg)', 
                        bgcolor: 'white' 
                    }}
                    aria-label='prev'
                    onClick={slidePrev}
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
                </Button>}
            </div>
        </div>
    );
}

export default HomeSectionCoresoul;
