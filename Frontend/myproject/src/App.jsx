import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import LoadingIndicator from './Components/pages/LoadingIndicator';
import Login from './Components/pages/Login';
import Home from './Components/pages/Home';
import BudgetCalculator from './Components/pages/BudgetCalculator';
import AboutPage from './Components/pages/About';
import SignUp from './Components/pages/Signup';
import EventForm from './Components/pages/EventForm';
import UserDashboard from './Components/pages/Userdash';
import AdminPage from './Components/pages/AdminPage';
import PaymentForm from './Components/pages/PaymentForm';
import PaymentVid from './Components/pages/PaymentVid';

const App = () => {
  const [events, setEvents] = useState([]);
  const [payments, setPayments] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    localStorage.setItem('events', JSON.stringify([...events, newEvent]));
  };
  const addPayment = (newPayment) => {
    setPayments([...payments, newPayment]);
    localStorage.setItem('payments', JSON.stringify([...payments, newPayment]));
  };

  return (
    <Router>
      <Suspense fallback={<LoadingIndicator />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/budget" element={<BudgetCalculator />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/paysuccess" element={<PaymentVid/>} />
          <Route path="/eventform" element={<EventForm addEvent={addEvent} />} />
          <Route path="/userdash" element={<UserDashboard events={events} />} />
          <Route path="/admin" element={<AdminPage events={events} />} />
          <Route path="/paymentform" element={<PaymentForm addPayment={addPayment} />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
