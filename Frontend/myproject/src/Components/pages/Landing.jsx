import React from 'react';
import './Landing.css';
import vid from './vid.mp4';

function Landing() {
  return (
    
      <section className="video-section">
        <video autoPlay loop muted id='video'>
          <source src={vid} type="video/mp4" />
        </video>
        <div className="text-overlay">
          <h1>ENJOY YOUR DAY WITH US!</h1>
          <h3>MAKE THE MOMENT FREEZE</h3>
          <a href="#" className="btn">
            Our Services
          </a>
        </div>
      </section>
    
  );
}

export default Landing;
