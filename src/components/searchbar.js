import React from 'react';


const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search events, clubs, etc..."
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
