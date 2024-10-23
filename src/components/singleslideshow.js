import React, { useState } from 'react';


const HugeCarousel = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextEvent = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevEvent = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='flex'>
         <button className="slide-btn prev" onClick={prevEvent}>
        ‹
      </button>
    <div className="slide-container">
     
      <div className="slide-content" style={{
          backgroundImage: `url(${events[currentIndex].image})`,
        }}>
        <div className="slide-item">
          <h1 className='title'>{events[currentIndex].title}</h1>
          <div className='slide-collumn'>

          <p>{events[currentIndex].description}</p>
          <button className='register-btn'>Register</button>
          </div>
        </div>
      </div>
    
    </div>
    <button className="slide-btn next" onClick={nextEvent}>
        ›
      </button>
    </div>
  );
};

export default HugeCarousel;
