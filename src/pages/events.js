import React from "react";
import Navbar from "../components/navbar";
import SearchBar from "../components/searchbar";
import CategoryTab from "../components/categories";
import EventCarousel from "../components/eventcarousel";
import Footer from "../components/footer";

const Events = () =>{
    return(
        <div className="events-page">
            <Navbar/>
            <EventCarousel/>
            <div className="events-flex">
            <SearchBar/>
            <CategoryTab/>
            </div>
          
            <Footer/>

         

            
        </div>
    )
}
export default Events;