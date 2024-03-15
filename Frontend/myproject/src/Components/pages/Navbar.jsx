import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for styling

function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="#home">Home</a>
      </div>
      <div className="right">
        <Link to="/admin">Admin</Link>
        <Link to='/login'>Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;
