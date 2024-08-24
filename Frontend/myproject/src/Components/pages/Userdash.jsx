import React, { useState,useEffect } from 'react';
import './Userdash.css'; // Import the CSS file
import { useNavigate,Link } from 'react-router-dom'; // Import useHistory from react-router-dom
import Footer from './Footer';
import Navbar from './Navbar';
import UseLocalStorage from './LocalStorage';

const UserDashboard = () => {

  const [activeTab, setActiveTab] = useState('dashboard');
  const [events, setEvents] = UseLocalStorage('events', []);
  const [payments, setPayments] = UseLocalStorage('payments', []);
  const [userDetails, setUserDetails] = useState({}); // State for user details

  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  useEffect(() => {
    const storedPayments = JSON.parse(localStorage.getItem('payments')) || [];
    setPayments(storedPayments);
  }, []);

  const userDetail = {
    username: 'Nandhagopal',
    email: 'nandha@example.com',
    password: '*********', // Dummy password
    age: 20,
    gender: 'Male',
    dob: '2004-03-08' // Date of birthf
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const handleDelete = (type, index) => {
    if (type === 'events') {
      // Remove the event at the given index
      const updatedEvents = [...events];
      updatedEvents.splice(index, 1);
      setEvents(updatedEvents);
    } else if (type === 'payments') {
      // Remove the payment at the given index
      const updatedPayments = [...payments];
      updatedPayments.splice(index, 1);
      setPayments(updatedPayments);
    }
  };

  // Logic to calculate current events to display based on pagination
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
  const currentPayments = payments.slice(indexOfFirstEvent, indexOfLastEvent); // Paginated payments
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
          <a href="#" onClick={() => handleTabClick('payments')} className={activeTab === 'payments' ? 'active' : ''}>
          Payment Details
        </a>
          </li>
          <li>
            <Link to='/' onClick={() => handleTabClick('logout')} className={activeTab === 'logout' ? 'active' : ''}>
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* User Dashboard */}
      
      <div className="payment-details-container">
      {activeTab === 'bookings' && (
        <div style={{ display: activeTab === 'bookings' ? 'block' : 'none' }}>
        <h2>My Bookings</h2>
        <table  className="payment-details-table">
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
                  <button onClick={() => handleDelete(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
          <button onClick={handleNextPage} disabled={currentPage === Math.ceil(payments.length / eventsPerPage)}>
            &gt;
          </button>
        </div>
        </div>
          )}
          
          <div className="user-dashboard-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {activeTab === 'users' && (
            <div style={{ display: activeTab === 'users' ? 'block' : 'none' }}>
              <h2>My Details</h2>
              <div className="user-details-box" style={{ backgroundColor: 'black', color: 'white', padding: '30px', borderRadius: '10px' }}>
                <p>Username: {userDetail.username}</p>
                <p>Email: {userDetail.email}</p>
                <p>Password: {userDetail.password}</p>
                <p>Age: {userDetail.age}</p>
                <p>Gender: {userDetail.gender}</p>
                <p>Date of Birth: {userDetail.dob}</p>
              </div>
            </div>
          )}
          </div>
          <div className="payment-details-container">
          {activeTab === 'payments' && (
          <div style={{ display: activeTab === 'payments' ? 'block' : 'none' }}>
            <h2>Payment Details</h2>
            <table className="payment-details-table">
              {/* Table header */}
              <thead>
                <tr>
                  <th>Phone Number</th>
                  <th>Payment Date</th>
                  <th>Payment Type</th>
                  <th>Budget</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody>
                {currentPayments.map((payment, index) => (
                  <tr key={index}>
                    <td>{payment.phoneNumber}</td>
                    <td>{payment.paymentDate}</td>
                    <td>{payment.paymentType}</td>
                    <td>{payment.budget}</td>
                    <td>{payment.status}</td>
                    <td>
                    <button onClick={() => handleDelete(index)}>Edit</button>

                      <button onClick={() => handleDelete('payments', index)}>Delete</button>
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
          <button onClick={handleNextPage} disabled={currentPage === Math.ceil(payments.length / eventsPerPage)}>
            &gt;
          </button>
        </div>
      </div>
          )}
          </div>
          </div>
    </div>
    <Footer/>
    </>
  );
};

export default UserDashboard;
