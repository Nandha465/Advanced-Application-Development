import React from 'react';
import './Celebration.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

const Celebration = () => {
  return (
    <section className="celebrate-section">
      <div className="content">
        <h1>Celebrate With Us!</h1>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis semper tortor. Quisque non felis elementum augue ullamcorper laoreet.</h6>
        <Link to='/eventform'><button className='button'>LET’S GET STARTED!</button></Link>
      </div>
    </section>
  );
};

export default Celebration;
