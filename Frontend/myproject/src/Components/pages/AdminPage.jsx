import React, { useState,useEffect} from 'react';
import './Userdash.css'; // Import the CSS file
import image1 from './partyimg.jpg'; // Import your images
import image2 from './marriageimg.jpg';
import image3 from './kids_cele.jpg';
import image4 from './gardenimg.jpg';// Import useHistory from react-router-dom
import { Link } from 'react-router-dom';
import UseLocalStorage from './LocalStorage';
import Navbar from './Navbar';
import Footer from './Footer';

const AdminPage = () => {
  // Initialize useHistory

  const [activeTab, setActiveTab] = useState('dashboard');
  const [events, setEvents] = UseLocalStorage('events', []);
  const [users, setUsers] = UseLocalStorage('users', []);
  const [payments, setPayments] = UseLocalStorage('payments', []);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;
  const usersPerPage = 4;


  const initialUsers = [
    { username: 'Nandhini', email: 'Nandhini@example.com', password: '********' },
    { username: 'Nandhagopal', email: 'Nandhagopal@example.com', password: '********' },
    { username: 'Priya', email: 'Priya@example.com', password: '********' },
    { username: 'kavin', email: 'kavin@example.com', password: '********' },
    { username: 'Guru', email: 'Guru@example.com', password: '********' },
    { username: 'Prasath', email: 'Prasath@example.com', password: '********' }
  ];

  useEffect(() => {
    setUsers(initialUsers);
  }, []);
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  useEffect(() => {
    const storedPayments = JSON.parse(localStorage.getItem('payments')) || [];
    setPayments(storedPayments);
  }, []);

  

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleApprove = (index) => {
    const updatedEvents = [...events];
    updatedEvents[index].status = 'Approved';
    setEvents(updatedEvents);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };


  // Inside the handleEdit function of AdminPage component

const handleEdit = (type, index) => {
  if (type === 'events') {
    // Assuming events have properties: name, date, type, numberOfPeople, foodType, and status
    const updatedEvents = [...events];
    const editedEvent = updatedEvents[index];

    // Show a form with input fields prefilled with the current event's details
    const newName = window.prompt('Enter new name', editedEvent.name);
    const newDate = window.prompt('Enter new date', editedEvent.date);
    const newType = window.prompt('Enter new type', editedEvent.type);
    const newNumberOfPeople = window.prompt('Enter new number of people', editedEvent.numberOfPeople);
    const newFoodType = window.prompt('Enter new food type', editedEvent.foodType);

    // Update the event details if the user entered new values
    if (newName || newDate || newType || newNumberOfPeople || newFoodType) {
      editedEvent.name = newName || editedEvent.name;
      editedEvent.date = newDate || editedEvent.date;
      editedEvent.type = newType || editedEvent.type;
      editedEvent.numberOfPeople = newNumberOfPeople || editedEvent.numberOfPeople;
      editedEvent.foodType = newFoodType || editedEvent.foodType;
      setEvents(updatedEvents);
    }
  } else if (type === 'payments') {
    // Assuming payments have properties: phoneNumber, paymentDate, paymentType, budget, and status
    const updatedPayments = [...payments];
    const editedPayment = updatedPayments[index];

    // Show a form with input fields prefilled with the current payment's details
    const newPhoneNumber = window.prompt('Enter new phone number', editedPayment.phoneNumber);
    const newPaymentDate = window.prompt('Enter new payment date', editedPayment.paymentDate);
    const newPaymentType = window.prompt('Enter new payment type', editedPayment.paymentType);
    const newBudget = window.prompt('Enter new budget', editedPayment.budget);

    // Update the payment details if the user entered new values
    if (newPhoneNumber || newPaymentDate || newPaymentType || newBudget) {
      editedPayment.phoneNumber = newPhoneNumber || editedPayment.phoneNumber;
      editedPayment.paymentDate = newPaymentDate || editedPayment.paymentDate;
      editedPayment.paymentType = newPaymentType || editedPayment.paymentType;
      editedPayment.budget = newBudget || editedPayment.budget;
      setPayments(updatedPayments);
    }
  }
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
  const indexOfLastUser = currentPage * eventsPerPage;
  const indexOfFirstUser = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
  const currentPayments = payments.slice(indexOfFirstEvent, indexOfLastEvent); 
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
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
        <h2>Admin Panel</h2>
        <ul>
          <li>
            <a href="#" onClick={() => handleTabClick('bookings')} className={activeTab === 'bookings' ? 'active' : ''}>
              User Bookings
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleTabClick('users')} className={activeTab === 'users' ? 'active' : ''}>
              Users
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleTabClick('settings')} className={activeTab === 'settings' ? 'active' : ''}>
              View Events
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
      <div className="user-dashboard-content" style={{ display: activeTab === 'bookings' ? 'block' : 'none' }}>
        <h2>User Bookings</h2>
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
                {event.status !== 'Approved' && (
                  <button onClick={() => handleApprove(index)}>Approve</button>
                )}
                <button onClick={() => handleEdit('events', index)}>Edit</button>
                <button onClick={() => handleDelete('events', index)}>Delete</button>
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
                    <button onClick={() => handleEdit('payments', index)}>Edit</button>

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
      <div className="user-dashboard-content" style={{ display: activeTab === 'users' ? 'block' : 'none' }}>
        <h2>Users</h2>
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {currentUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => handleDeleteUser(index)}>Delete</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="pagination">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>&lt;</button>
            <ul>
              {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, i) => {
                if (i !== 0 && i !== Math.ceil(users.length / usersPerPage) - 1) {
                  return (
                    <li key={i}>
                      <a href="#" onClick={() => paginate(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>
                        {i + 1}
                      </a>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            <button onClick={handleNextPage} disabled={currentPage === Math.ceil(users.length / usersPerPage)}>&gt;</button>
          </div>
      </div>

      {(activeTab !== 'settings') && (activeTab !== 'bookings') && (activeTab !== 'users') && (
        <div className="image-contain">
          <div className="image-item">
            <img src={image1} alt="Description 1" />
            <p>Description 1</p>
          </div>
          <div className="image-item">
            <img src={image2} alt="Description 2" />
            <p>Description 2</p>
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

      {/* Images with descriptions */}
      {activeTab === 'settings' && (
        <>
        
        <div className="image-container">
          <div className="image-item">
            <img src={image1} alt="Description 1" />
            <p>Description 1</p>
          </div>
          <div className="image-item">
            <img src={image2} alt="Description 2" />
            <p>Description 2</p>
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
          </>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default AdminPage;
