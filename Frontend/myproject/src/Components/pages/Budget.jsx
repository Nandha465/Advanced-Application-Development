import React from 'react';
import './Budget.css';
import { Link } from 'react-router-dom';

function Budget() {
  return (
    
    <div className='budget-main'>
    <section className='budget-section'>
      <div className='budget'>
        <h1>Looking for something very special?</h1>
        <h6>PLAN YOUR BUDGET AND LET’S GET STARTED!</h6>
      </div>
      <Link to='/budget'><button className="calculate-button">Budget Calculator</button></Link>
    </section>
    </div>
  );
}

export default Budget;
