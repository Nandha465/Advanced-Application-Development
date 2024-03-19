import './App.css'
import Home from './Components/pages/Home'
import {Routes,Route, BrowserRouter as Router} from "react-router-dom";
import { Suspense, useState } from 'react';
// import AdminPage from './Components/pages/AdminPage';
import Footer from './Components/pages/Footer';
import BudgetCalculator from './Components/pages/BudgetCalculator';
import Navbar from './Components/pages/Navbar';
import AboutPage from './Components/pages/About';
import Login from './Components/pages/Login';
import SignUp from './Components/pages/Signup';
import EventForm from './Components/pages/EventForm';
import Userdash from './Components/pages/Userdash';
import LoadingIndicator from './Components/pages/LoadingIndicator';
import React from 'react';

const Admin = React.lazy(() => import('./Components/pages/AdminPage'));

function App() {

  const [events, setEvents] = useState([]);
  const [event1, setEvent1] = useState([]);
  // const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };
  const addData = (newevents) => {
    setEvent1([...event1, newevents]);
  };

  return (
    <>
      
      <div>
      <Router>
      <Suspense fallback={<LoadingIndicator/>}>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/budget' element={<BudgetCalculator/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp addData={addData}/>}/>
          <Route path='/eventform' element={<EventForm addEvent={addEvent}/>} />
          <Route path='/userdash' element={<Userdash events={events}/>} />
          <Route path='/admin' element={<Admin events={events}/>} />
        </Routes>
        <Footer/>
        </Suspense>
      </Router>
      </div>
      
      </>
      )
    }
    
    export default App
    // <Register/>
    // <Login/>
    // <AdminPage/>
    
 
