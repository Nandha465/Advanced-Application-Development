// EventForm.js
import React, { useState } from 'react';
import './EventForm.css';
import { Link,useNavigate } from 'react-router-dom';
import UseLocalStorage from './LocalStorage';
import Footer from './Footer';
import Navbar from './Navbar';
import { FaCalendar } from 'react-icons/fa';

const EventForm = ({ addEvent }) => {
  const [eventName, setEventName] = UseLocalStorage('eventName', '');
  const [eventDate, setEventDate] = UseLocalStorage('eventDate', '');
  const [eventType, setEventType] = UseLocalStorage('eventType', '');
  const [numberOfPeople, setNumberOfPeople] = UseLocalStorage('numberOfPeople', '');
  const [foodType, setFoodType] = UseLocalStorage('foodType', '');
  const navigateTo = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      name: eventName,
      date: eventDate,
      type: eventType,
      numberOfPeople: numberOfPeople,
      foodType: foodType,
      status: 'Pending'
    };
    addEvent(newEvent);
    setEventName('');
    setEventDate('');
    setEventType('');
    setNumberOfPeople('');
    setFoodType('');
    navigateTo('/paymentform');
  };

  return (
    <>
    <Navbar/>
    <div className='booktable'>
    <div className="book-container">
    <form className="book-form" onSubmit={handleSubmit}>
    <h2 className="book-heading">Book Your Event Now !!</h2>
    <h3 className='book-qoute'>"Join us for a feast of Light and Sound"</h3>
    <div className="form-book">  
    <label htmlFor="username" className="label">
            Name
          </label> 
    <input
          type="text"
          placeholder="Name"
          value={eventName}
          className="input"
          onChange={(e) => setEventName(e.target.value)}
        />
        </div> 
        <div className="form-book">
          
          <FaCalendar />
            Date
        <input
          type="date"
          value={eventDate}
          className="input"
          onChange={(e) => setEventDate(e.target.value)}
        />
        </div>
        <div className="form-book">
        <label htmlFor="username" className="label">
            Event Type
          </label>
        <select className="input"
        value={eventType} onChange={(e) => setEventType(e.target.value)}>
          <option value="">Select Event Type</option>
          <option value="Garden Party">Garden Party</option>
          <option value="Marriage Event">Marriage Event</option>
          <option value="Private Party">Private Party</option>
          <option value="Birthday Party">Birthday Party</option>
          <option value="Corporate Event">Corporate Event</option>
        </select>
        </div>
        <div className="form-book">
          <label className="label">
            No of People
          </label>
        <input
          type="number"
          placeholder="Number of People"
          value={numberOfPeople}
          className="input"
          onChange={(e) => setNumberOfPeople(e.target.value)}
        />
        </div>
        <div className="form-book">
        <label htmlFor="username" className="label">
            Food Type
          </label>
        <select   value={foodType} onChange={(e) => setFoodType(e.target.value)}>
          <option value="">Select Food Type</option>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
        </select>
        </div>
        <div id='buttons'>
        <div id='book-btn'>
        <Link to="/home"><button  className="book-button2">
          Cancel
          </button></Link>
          </div>
          <div id='book-btn1'>

        <button className="book-button1" type="submit">Book Event</button>
        </div>
        </div>
      </form>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default EventForm;
