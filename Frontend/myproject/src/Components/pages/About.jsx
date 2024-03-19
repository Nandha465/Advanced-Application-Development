import React from 'react';
import './About.css'; // Import your CSS file for styling
import image1 from './marriageimg.jpg';
import image2 from './bdimg.jpg';
import image3 from './partyimg.jpg';
import image4 from './gardenimg.jpg';
import image5 from './corporateimg.jpg';

const AboutUs = () => {
  return (
    <>
    <h1 className='abt-h1'>About Us</h1>
    <h5 className='abt-h5'>Welcome to Happy Events, where we turn every occasion into an unforgettable celebration! With our expertise and dedication, we specialize in curating the perfect atmosphere for a wide range of events. From joyous birthday parties to elegant marriage events, intimate private gatherings to professional corporate functions, and enchanting garden parties, we make every moment magical.</h5>
    <div className="about-us-container">
      <div className="event-card">
        <img src={image1} alt="Birthday Party" />
        <h2>Birthday Party</h2>
        <p>Make your special day memorable with our customized birthday party packages.</p>
      </div>
      <div className="event-card">
        <img src={image2} alt="Marriage Event" />
        <h2>Marriage Event</h2>
        <p>Celebrate the beginning of your journey together with our beautiful marriage event setups.</p>
      </div>
      <div className="event-card">
        <img src={image3} alt="Private Event" />
        <h2>Private Event</h2>
        <p>Host your private gatherings with elegance and style using our event planning services.</p>
      </div>
      <div className="event-card">
        <img src={image4} alt="Corporate Event" />
        <h2>Corporate Event</h2>
        <p>Boost your company morale with our professional and well-organized corporate event solutions.</p>
      </div>
      <div className="event-card">
        <img src={image5} alt="Garden Party" />
        <h2>Garden Party</h2>
        <p>Enjoy the beauty of nature while we take care of the arrangements for your garden party.</p>
      </div>
    </div>
    </>
  );
}

export default AboutUs;
