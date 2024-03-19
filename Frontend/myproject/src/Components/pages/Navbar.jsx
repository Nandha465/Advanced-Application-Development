// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="navbar">
      <Link to='/'><div className="navbar-logo">Happy Events</div></Link>
      <div className="navbar-options">
      <Link to='/about'><div className="navbar-option">About Us</div></Link>
      <Link to='/login'><div className="navbar-option">Login</div></Link>
        <div className="navbar-option" onClick={toggleProfileDropdown}>
          Profile
          {isProfileOpen && (
            <div className="profile-dropdown">
              <Link to='/userdash'><div className="profile-option">Bookings</div></Link>
              <div className="profile-option">My Account</div>
              <div className="profile-option">Logout</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

