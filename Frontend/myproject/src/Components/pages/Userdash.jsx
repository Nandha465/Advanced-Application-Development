import React, { useState } from 'react';
import './Userdash.css'; // Import the CSS file
import image1 from './partyimg.jpg'; // Import your images
import image2 from './marriageimg.jpg';
import image3 from './kids_cele.jpg';
import image4 from './gardenimg.jpg';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom

const UserDashboard = ({ events: initialEvents }) => {

  const [activeTab, setActiveTab] = useState('dashboard');
  const [events, setEvents] = useState(initialEvents);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;

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
                <td>
                  <button onClick={() => handleDelete(index)}>Edit</button>
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

      {/* Images with descriptions */}
      {(activeTab !== 'bookings') && (activeTab !== 'users') && (
        
        <div className="image-container">
        <div className="image-item">
          <div className="image-item">
            <img src={image1} alt="Description 1" />
            <p>Description 1</p>
          </div>
          </div>
        
          <div className="image-item">
            <img src={image3} alt="Description 3" />
            <p>Description 3</p>
          </div>
          <div className="image-item">
            <img src={image3} alt="Description 3" />
            <p>Description 3</p>
          </div>
          <div className="image-item">
            <img src={image4} alt="Description 4" />
            <p>Description 4</p>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default UserDashboard;
