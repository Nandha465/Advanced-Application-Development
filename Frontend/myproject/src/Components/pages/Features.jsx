import React from 'react';
import './Feature.css'; // Import CSS file for styling
import { MdDiversity1 } from "react-icons/md";
import { BsBalloon } from "react-icons/bs";
import { FaGlassCheers } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

function Features() {
  return (
    <section className="four-icons-section">
      <div className="icon">
        <MdDiversity1 className='ico'/>
        <h4>Friendly Team</h4>
        <br/>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
        <h5>ABOUT US</h5>
      </div>
      <div className="icon">
        <BsBalloon className='ico'/>
        <h4>Perfect Venues</h4>
        <br/>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
        <h5>OUR VENUES</h5>
      </div>
      <div className="icon">
        <FaGlassCheers className='ico'/>
        <h4>Unique Scenarios</h4>
        <br/>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
        <h5>OUR PARTIES</h5>
      </div>
      <div className="icon">
        <GiPartyPopper className='ico'/>
        <h4>Unforgettable Time</h4>
        <br/>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
        <h5>CLIENTS REVIEWS</h5>
      </div>
    </section>
  );
}

export default Features;
