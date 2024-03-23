// EventForm.js
import React, { useState } from 'react';
import './EventForm.css';
import { useNavigate } from 'react-router-dom';
import UseLocalStorage from './LocalStorage';
import Footer from './Footer';
import Navbar from './Navbar';

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
    navigateTo('/home');
  };

  return (
    <>
    <Navbar/>
    <div className="form-container">
      <h2>Event Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
          <option value="">Select Event Type</option>
          <option value="Garden Party">Garden Party</option>
          <option value="Marriage Event">Marriage Event</option>
          <option value="Private Party">Private Party</option>
          <option value="Birthday Party">Birthday Party</option>
          <option value="Corporate Event">Corporate Event</option>
        </select>
        <input
          type="number"
          placeholder="Number of People"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(e.target.value)}
        />
        <select value={foodType} onChange={(e) => setFoodType(e.target.value)}>
          <option value="">Select Food Type</option>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
        </select>
        <button type="submit">Book Event</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default EventForm;
