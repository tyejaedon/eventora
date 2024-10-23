import React, { useState } from 'react';
import pic4 from '../resources/workshop.jpg';

// Sample Data
const TrendingEvent = () => {
    const event = {
        title: "Epic Campus Workshop!",
        date: "Saturday, October 28th",
        time: "7:00 PM - 11:00 PM",
        location: "Main Auditorium",
        description: "Join us for an unforgettable night of music, fun, and friends! Featuring popular bands, food trucks, and special surprises!",
        image:pic4, // Replace with your event image
    };

    return (
        <div className="trending-event-container">
            <div className="trending-event-card">
                <img src={event.image} alt="Event" className="event-image" />
                <div className="event-details">
                    <h1 className="event-title">{event.title}</h1>
                    <p className="event-date-time">{event.date} | {event.time}</p>
                    <p className="event-location">📍 {event.location}</p>
                    <p className="event-description">{event.description}</p>
                    <button className="register-button">🚀 Register Now!</button>
                </div>
                <div className="limited-availability">
                    <p>🔥 Limited Spots Available! Don’t Miss Out!</p>
                </div>
            </div>
        </div>
    );
};

export default TrendingEvent;
