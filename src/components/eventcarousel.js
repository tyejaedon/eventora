import React, { useState, useRef } from 'react';
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

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>{
      if(prevIndex+3 < events.length){
        return( prevIndex + 1);
      }else{
        return 0;
      };
      }
     
 ) };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const currentEvents = events.slice(currentIndex, currentIndex + 3);
  console.log(currentEvents);



  return (
    <div className="carousel-container">
      <button className="carousel-btn" onClick={handlePrev}>‹</button>


        {currentEvents.map((event) => {
          return(
        
                <div className="carousel-item">
                <img src={event.image} alt={event.description} className="carousel-image" />
                <div className="carousel-details">
                  <h3>{event.description}</h3>
                  <p>Slots available: {event.slotsAvailable}</p>
                  <a href={event.link} className="register-btn">Register</a>
                </div>
                </div>
          )

        })}

  

      <button className="carousel-btn" onClick={handleNext}>›</button>
    </div>
  );
};

export default EventCarousel;