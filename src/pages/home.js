import React from "react";
import Navbar from "../components/navbar";
import EventCarousel from "../components/eventcarousel";
import SearchBar from "../components/searchbar";
import Footer from "../components/footer";
import SignUp from "../components/signup";
import Login from "../components/login";
import HugeCarousel from "../components/singleslideshow";
import pic1 from '../resources/concert.jpg';
import pic2 from '../resources/school.jpg';
import pic3 from '../resources/talent.jpg';
import pic4 from '../resources/workshop.jpg';
import TrendingEvent from "../components/trendingevent";
import { useState } from "react";

const Home = ()=>{
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const events = [
        { 
          title: "Music Festival", 
          description: "Join us for an amazing music experience.", 
          image: pic1
        },
        { 
          title: "Tech Conference", 
          description: "Explore the latest trends in technology.", 
          image: pic2
        },
        { 
          title: "Art Exhibition", 
          description: "Discover breathtaking artwork by local artists.", 
          image: pic3
        },
      ];

    const handleMessage = (msg) => {
      if (msg === true) {
        setIsPopupVisible(true);
      }
    };
  
    const closePopup = (msg) => {
        if (msg === true) {
            setIsPopupVisible(false);
        }
    
    };
    return(
        <div className="home">
            <Navbar sendMessage = {handleMessage}/>
            <HugeCarousel events={events}/>
            <h1 >Ongoing Events</h1>
            <EventCarousel/>
            <div className="form-popup">
            {
               isPopupVisible &&<SignUp  onPress ={closePopup}/>
            }
            </div>
            <SearchBar/>
            <h1 className="trending-event-title">Trending Event!</h1>
            <TrendingEvent/>
            <Footer/>

        </div>
    );


}
export default Home;