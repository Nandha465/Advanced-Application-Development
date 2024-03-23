// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import imag from './Hapie.png';
const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="navbar">
      <Link to='/home'><div className="navbar-logo"><img src={imag} className='imag'/></div></Link>
      <div className="navbar-options">
      <Link to='/about'><div className="navbar-option">About Us</div></Link>
      
        <div className="navbar-option" onClick={toggleProfileDropdown}>
          Profile
          {isProfileOpen && (
            <div className="profile-dropdown">
              <Link to='/userdash'><div className="profile-option">Bookings</div></Link>
              <div className="profile-option">My Account</div>
              <Link to='/'><div className="profile-option">Logout</div></Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

