// PaymentForm.js
import React, { useState } from 'react';
import './EventForm.css'; // Maintain the same styles
import { Link, useNavigate } from 'react-router-dom';
import UseLocalStorage from './LocalStorage';
import Footer from './Footer';
import Navbar from './Navbar';
import { FaCalendar } from 'react-icons/fa';

const PaymentForm = ({ addPayment }) => {
  const [phoneNumber, setPhoneNumber] = UseLocalStorage('phoneNumber', '');
  const [paymentDate, setPaymentDate] = UseLocalStorage('paymentDate', '');
  const [paymentType, setPaymentType] = UseLocalStorage('paymentType', '');
  const [budget, setBudget] = UseLocalStorage('budget', '');
  const navigateTo = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPayment = {
      phoneNumber: phoneNumber,
      paymentDate: paymentDate,
      paymentType: paymentType,
      budget: budget,
      status: 'Pending'
    };
    addPayment(newPayment);
    setPhoneNumber('');
    setPaymentDate('');
    setPaymentType('');
    setBudget('');
    navigateTo('/paysuccess');
  };

  return (
    <>
      <Navbar />
      <div className='booktable'>
        <div className="book-container">
          <form className="book-form" onSubmit={handleSubmit}>
            <h2 className="book-heading">Make Payment Now !!</h2>
            <h3 className='book-qoute'>"Secure your booking with us"</h3>
            <div className="form-book">
              <label htmlFor="phoneNumber" className="label">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                className="input"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-book">
              <FaCalendar />
              Payment Date
              <input
                type="date"
                value={paymentDate}
                className="input"
                onChange={(e) => setPaymentDate(e.target.value)}
              />
            </div>
            <div className="form-book">
              <label htmlFor="paymentType" className="label">
                Payment Type
              </label>
              <select className="input"
                value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>
                <option value="">Select Payment Type</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Cash">Cash</option>
              </select>
            </div>
            <div className="form-book">
              <label htmlFor="budget" className="label">
                Budget
              </label>
              <select className="input"
                value={budget} onChange={(e) => setBudget(e.target.value)}>
                <option value="">Select Budget</option>
                <option value="5000-6999">5000-6999</option>
                <option value="7000-9999">7000-9999</option>
                <option value="10000-12999">10000-12999</option>
                <option value="13000-15999">13000-15999</option>
              </select>
            </div>
            <div id='buttons'>
              <div id='book-btn'>
                <Link to="/home">
                  <button className="book-button2">
                    Cancel
                  </button>
                </Link>
              </div>
              <div id='book-btn1'>
                <button className="book-button1" type="submit">Make Payment</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentForm;
