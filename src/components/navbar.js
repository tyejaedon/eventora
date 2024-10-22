import React from 'react';
import logo from '../resources/logo.png';
import { useState } from 'react';

const Navbar = ({ sendMessage }) => {
  const handleClick = () => {
    sendMessage(true);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/"><img id='logo' src= {logo} /></a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/clubs">Clubs</a></li>
        <li><a onClick={handleClick}>Sign Up</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
