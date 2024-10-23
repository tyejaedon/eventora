import React, { useState, useRef ,useEffect} from 'react';
import event1 from '../resources/event1.jpg';
import event2 from '../resources/event2.jpg';
import event3 from '../resources/event3.jpg';
import event4 from '../resources/event4.jpg';

const events = [
  {
    id: 1,
    image: event1,
    description: 'Event 1: Learn React Basics',
    slotsAvailable: 50,
    link: '/register/event1',
  },
  {
    id: 2,
    image: event2,
    description: 'Event 2: Advanced JavaScript Workshop',
    slotsAvailable: 30,
    link: '/register/event2',
  },
  {
    id: 3,
    image: event3,
    description: 'Event 3: CSS Design Patterns',
    slotsAvailable: 20,
    link: '/register/event3',
  },
  {
    id: 4,
    image: event4,
    description: 'Event 4: HTML5 Best Practices',
    slotsAvailable: 40,
    link: '/register/event4',
  },
  {
    id: 5,
    image: event3,
    description: 'Event 5: Full-Stack Development',
    slotsAvailable: 25,
    link: '/register/event5',
  },
];

const EventCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastPressTime, setLastPressTime] = useState(Date.now()); // Store the last press time
  const [timeSinceLastPress, setTimeSinceLastPress] = useState(0); // Store elapsed time


  const itemsToShow = 3;
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - itemsToShow ? 0 : prevIndex + 1
    );
    setLastPressTime(Date.now());
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - itemsToShow : prevIndex - 1
    );
    setLastPressTime(Date.now());
  };


   // Effect to update the time since the last press
   useEffect(() => {
    const interval = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - lastPressTime) / 1000); // Calculate the time since last press
      setTimeSinceLastPress(elapsedTime);
      
    
    }, 1000); // Check every second

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [lastPressTime]);
  if (timeSinceLastPress > 5) {
    handleNext();
    setTimeSinceLastPress(0);
  }
 

const smooth = {
  transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
  transition: 'all 0.5s ease-in',

}


  return (
    <div className="carousel-container">
      <button className="carousel-btn prev" onClick={handlePrev}>‹</button>

      <div
          className="carousel" 
          style={
            smooth
          }
        >
      {events.map((event,index) => {
        return (
        


          <div className="carousel-item" style={{ backgroundImage: `url(${event.image})` }} key={index}>

            <div className="carousel-details">
              <h3>{event.description}</h3>
              <p>Slots available: {event.slotsAvailable}</p>
           
            </div>
            
          </div>
   

        )

      })}
      </div>



      <button className="carousel-btn next" onClick={handleNext}>›</button>
    </div>
  );
};

export default EventCarousel;