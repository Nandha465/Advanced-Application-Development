// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Users</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
