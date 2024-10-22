import React from "react";
import Navbar from "../components/navbar";
import UserProfile from "../components/userprofile";
import profile from '../resources/pf.gif';
import EventCarousel from "../components/eventcarousel";

const Dashboard = () =>{
    const userData = {
        name: 'John Doe',
        email: 'john.doe@strathmore.edu',
        profileImage: profile, // Placeholder image URL
        favoriteCategory: 'Technology',
        eventsAttended: 5,
        lastEventDate: '2024-10-15',
      };

    return(
        <div className="dashboard">
            <Navbar/>
            <div className="dashboard-flex">
                <div className="dashboard-events">
                <h1>Events to Attend</h1>
                <EventCarousel/>
              <hr/>
              <h1>Past Events Attended</h1>
              <EventCarousel/>
              <hr/>
              <h1>Reccomened Events</h1>
              <EventCarousel/>
                </div>
                <div className="dashboard-userprofile">
                <UserProfile user={userData}/>
                </div>
            
            </div>
            



        </div>
    );
}
export default Dashboard;