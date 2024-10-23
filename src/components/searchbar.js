import React from 'react';
import icon from '../resources/search.png';


const SearchBar = () => {
  const imgstyle = {
   
    backgroundImage: `url(${icon})`, // Corrected background image syntax
    backgroundRepeat: 'no-repeat', // Set background repeat
    backgroundPosition: 'right', // Set background position
    backgroundSize: '35px', // Set background size
    backgroundPositionX: '97%'
  }
  return (
    <div className="search-bar-container" >
      <input
      style={imgstyle}
        type="text"
        className="search-input"
        placeholder="Search events, clubs, etc..."
      />
     
    </div>
  );
};

export default SearchBar;
