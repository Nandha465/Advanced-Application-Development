import React, { useState } from 'react';
 // Import useHistory
import './EventForm.css'; 
import { useNavigate } from 'react-router-dom';

const EventForm = ({ addEvent }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventType, setEventType] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [foodType, setFoodType] = useState('');
  const navigateTo = useNavigate();


  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleEventDateChange = (e) => {
    setEventDate(e.target.value);
  };

  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
  };

  const handleNumberOfPeopleChange = (e) => {
    setNumberOfPeople(e.target.value);
  };

  const handleFoodTypeChange = (e) => {
    setFoodType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      name: eventName,
      date: eventDate,
      type: eventType,
      numberOfPeople: numberOfPeople,
      foodType: foodType
    };
    addEvent(newEvent);
    setEventName('');
    setEventDate('');
    setEventType('');
    setNumberOfPeople('');
    setFoodType('');
    navigateTo('/')
  };

  return (
    <div className="form-container">
      <h2>Event Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={eventName}
          onChange={handleEventNameChange}
        />
        <input
          type="date"
          value={eventDate}
          onChange={handleEventDateChange}
        />
        <select value={eventType} onChange={handleEventTypeChange}>
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
          onChange={handleNumberOfPeopleChange}
        />
        <select value={foodType} onChange={handleFoodTypeChange}>
          <option value="">Select Food Type</option>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
        </select>
        <button type="submit">Book Event</button>
      </form>
    </div>
  );
};

export default EventForm;
