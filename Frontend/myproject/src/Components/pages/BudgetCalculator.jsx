import React, { useState } from 'react';
import './BudgetCalculator.css';
import image1 from './party1.jpg';
import image2 from './party2.jpg';
import image3 from './party3.jpg';

const BudgetCalculator = () => {
  const [eventType, setEventType] = useState('');
  const [date, setDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [foodType, setFoodType] = useState('');
  const [additionalServices, setAdditionalServices] = useState({
    cocktailBar: false,
    musicProgram: false,
    photographer: false,
    transportServices: false,
    staffForEvent: false,
    decor: false,
  });

  const eventOptions = ['Birthday Party', 'Family Function', 'Corporate Meeting'];

  const foodOptions = {
    Veg: 300,
    'Non-Veg': 600,
  };

  const serviceOptions = {
    cocktailBar: 100,
    musicProgram: 200,
    photographer: 300,
    transportServices: 150,
    staffForEvent: 250,
    decor: 200,
  };

  const handleAdditionalServiceChange = (serviceName) => {
    setAdditionalServices({
      ...additionalServices,
      [serviceName]: !additionalServices[serviceName],
    });
  };

  const calculateTotal = () => {
    let total = 0;

    // Calculate based on the number of people
    total += numberOfPeople * 10; // Placeholder cost per person

    // Add food cost
    total += foodOptions[foodType] || 0;

    // Add additional services cost
    Object.keys(additionalServices).forEach((service) => {
      if (additionalServices[service]) {
        total += serviceOptions[service];
      }
    });

    return total;
  };

  return (
    <div className="container">
      <div className="calculator">
        <h2>Event Budget Calculator</h2>
        <label>
          Event Type:
          <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
            <option value="">Select</option>
            {eventOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <br />
        <label>
          Number of People:
          <input
            type="number"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
          />
        </label>
        <br />
        <label>
          Food Type:
          <select value={foodType} onChange={(e) => setFoodType(e.target.value)}>
            <option value="">Select</option>
            {Object.keys(foodOptions).map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <br />
        <h3>Additional Services:</h3>
        {Object.keys(additionalServices).map((service, index) => (
          <label key={index} className="checkbox">
            <input
              type="checkbox"
              checked={additionalServices[service]}
              onChange={() => handleAdditionalServiceChange(service)}
            />
            {service}
          </label>
        ))}
        <br />
        <div className='total'>
          <h3>Total Cost: ${calculateTotal()}</h3>
        </div>
      </div>
      <div className="imag">
        <div className="image-contai">
          <img src={image1} alt="Image 1" />
          <div className="description">
            <h3>DJ Party</h3>
            <p className='bud'>"Groove to the rhythm of the night with our top-notch DJs spinning beats"</p>
          
          </div>
        </div>
        <div className="image-contai">
        <div className="description">
          <h3>Dinner Party</h3>
          <p className='bud'>"elevate your dining experience to new heights"</p>
        </div>
          <img src={image2} alt="Image 1" />
        </div>
        <div className="image-contai">
          <img src={image3} alt="Image 1" />
          <div className="description">
            <h3>Birthday Party</h3>
            <p className='bud'>"Celebrate another trip around the sun with joy, laughter, and memories"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;

