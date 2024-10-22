import React from "react";
import Navbar from "../components/navbar";
import EventCarousel from "../components/eventcarousel";
import SearchBar from "../components/searchbar";
import Footer from "../components/footer";
import SignUp from "../components/signup";
import Login from "../components/login";
import { useState } from "react";

const Home = ()=>{
    const [isPopupVisible, setIsPopupVisible] = useState(false);

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
            <EventCarousel/>
            <div className="form-popup">
            {
               isPopupVisible &&<SignUp  onPress ={closePopup}/>
            }
            </div>
            <SearchBar/>
            <Footer/>

        </div>
    );


}
export default Home;