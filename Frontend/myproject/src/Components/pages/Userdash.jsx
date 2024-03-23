import React, { useState,useEffect } from 'react';
import './Userdash.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import Footer from './Footer';
import Navbar from './Navbar';
import UseLocalStorage from './LocalStorage';

const UserDashboard = () => {

  const [activeTab, setActiveTab] = useState('dashboard');
  const [events, setEvents] = UseLocalStorage('events', []);

  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleDelete = (index) => {
    // Remove the event at the given index
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };

  // Logic to calculate current events to display based on pagination
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  // Logic to paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(events.length / eventsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>User Panel</h2>
        <ul>
          <li>
            <a href="#" onClick={() => handleTabClick('bookings')} className={activeTab === 'bookings' ? 'active' : ''}>
              My Bookings
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleTabClick('users')} className={activeTab === 'users' ? 'active' : ''}>
              My Details
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleTabClick('logout')} className={activeTab === 'logout' ? 'active' : ''}>
              Logout
            </a>
          </li>
        </ul>
      </div>

      {/* User Dashboard */}
      <div className="user-dashboard-content" style={{ display: activeTab === 'bookings' ? 'block' : 'none' }}>
        <h2>My Bookings</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Type</th>
              <th>Number of People</th>
              <th>Food Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEvents.map((event, index) => (
              <tr key={index}>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.type}</td>
                <td>{event.numberOfPeople}</td>
                <td>{event.foodType}</td>
                <td>{event.status}</td>
                <td>
                  {/*<button onClick={() => handleDelete(index)}>Edit</button>*/}
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            &lt;
          </button>
          <ul>
            {Array.from({ length: Math.ceil(events.length / eventsPerPage) }, (_, i) => {
              if (i !== 0 && i !== Math.ceil(events.length / eventsPerPage) - 1) {
                return (
                  <li key={i}>
                    <a href="#" onClick={() => paginate(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>
                      {i + 1}
                    </a>
                  </li>
                );
              }
              return null; // Exclude the first and last buttons
            })}
          </ul>
          <button onClick={handleNextPage} disabled={currentPage === Math.ceil(events.length / eventsPerPage)}>
            &gt;
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default UserDashboard;
