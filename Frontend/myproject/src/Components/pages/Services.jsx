import React, { useState, useEffect } from 'react';
import './Services.css';
import image1 from './marriageimg.jpg';
import image2 from './bdimg.jpg';
import image3 from './partyimg.jpg';
import image4 from './gardenimg.jpg';
import image5 from './corporateimg.jpg';

const Services = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex >= 3) return 0; // Loop back to the first slide
      if (newIndex < 1) return 0;   // Loop to the last slide if on the first slide
      return newIndex;
    });
  };

  useEffect(() => {
    const showSlides = () => {
      const slides = document.querySelectorAll('.slide');
      slides.forEach((slide, index) => {
        if (index >= slideIndex && index < slideIndex + 3) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    };

    showSlides();
  }, [slideIndex]);

  return (
    <div id='ser'>
    <div className="slideshow-container">
        <h1 className='serve'>OUR SERVICES</h1>
      <div className="slides">
        <div className="slide">
        <div className="image-container1">
        <img src={image4} alt="Party 1" />
        <div className='party'>
        <h6>Garden Party</h6>
        <h6>$150</h6>
        </div>
        <div className='btn1'>
        <h6>4 - 6 Hrs</h6>
        <h6>UP TO 50 PERSONS</h6>
        </div>
      </div>
        </div>
        <div className="slide">
        <div className="image-container1">
        <img src={image1} alt="Party 1" />
        <div className='party'>
        <h6>Marriage Event</h6>
        <h6>$300</h6>
        </div>
        <div className='btn1'>
        <h6>1 - 3 Days</h6>
        <h6>UP TO 90 PERSONS</h6>
        </div>
      </div>
        </div>
        <div className="slide">
        <div className="image-container1">
        <img src={image3} alt="Party 1" />
        <div className='party'>
        <h6>Private Party</h6>
        <h6>$200</h6>
        </div>
        <div className='btn1'>
        <h6>3 - 5 Hrs</h6>
        <h6>UP TO 35 PERSONS</h6>
        </div>
      </div>
        </div>
        <div className="slide">
        <div className="image-container1">
        <img src={image2} alt="Party 1" />
        <div className='party'>
        <h6>Birthday Party</h6>
        <h6>$175</h6>
        </div>
        <div className='btn1'>
        <h6>4 - 8 Hrs</h6>
        <h6>UP TO 50 PERSONS</h6>
        </div>
      </div>
        </div>
        <div className="slide">
        <div className="image-container1">
        <img src={image5} alt="Party 1" />
        <div className='party'>
        <h6>Corporate Event</h6>
        <h6>$125</h6>
        </div>
        <div className='btn1'>
        <h6>1 - 2 Hrs</h6>
        <h6>UP TO 50 PERSONS</h6>
        </div>
      </div>
        </div>
        
        
      </div>
      <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
      <button className="next" onClick={() => plusSlides(1)}> &#10095;</button>
    </div>
    </div>
  );
};

export default Services;