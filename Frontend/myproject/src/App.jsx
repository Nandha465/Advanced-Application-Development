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

const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    localStorage.setItem('events', JSON.stringify([...events, newEvent]));
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
          <Route path="/eventform" element={<EventForm addEvent={addEvent} />} />
          <Route path="/userdash" element={<UserDashboard events={events} />} />
          <Route path="/admin" element={<AdminPage events={events} />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
