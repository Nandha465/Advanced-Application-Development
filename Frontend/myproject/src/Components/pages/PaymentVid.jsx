import React from 'react';
import './Landing.css';
import video from './pay-vid.mp4';
import { Link } from 'react-router-dom';
// import AnchorLink from "react-anchor-link-smooth-scroll";

function PaymentVid() {
  return (
    
      <section className="video-section">
        <video autoPlay loop muted id='video'>
          <source src={video} type="video/mp4" />
        </video>
        <div className="text-overlay">
          <h1>ENJOY YOUR DAY WITH US!</h1>
          <h3>MAKE THE MOMENT FREEZE</h3>
          <Link to='/home' className="btnn">
            Back To Home
          </Link>
          
        </div>
      </section>
    
  );
}

export default PaymentVid;
