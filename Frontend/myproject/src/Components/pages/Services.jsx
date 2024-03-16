// ServicesSection.js
import React, { useState, useEffect } from 'react';
import './Services.css';
import images from './image1.jpg';

const Services = () => {
  const [slideIndex, setSlideIndex] = useState(0);
    
  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex >= 6) return 0; // Loop back to the first slide
      if (newIndex < 0) return 5;   // Loop to the last slide if on the first slide
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
    <div className="slideshow-container">
      <div className="slides">
        <div className="slide">
          <img src={images} alt="Party 1" />
          <p>Description of Party 1</p>
          <button>Button</button>
        </div>
        <div className="slide">
          <img src={images} alt="Party 1" />
          <p>Description of Party 1</p>
          <button>Button</button>
        </div>
        <div className="slide">
          <img src={images} alt="Party 1" />
          <p>Description of Party 1</p>
          <button>Button</button>
        </div>
        <div className="slide">
          <img src={images} alt="Party 1" />
          <p>Description of Party 1</p>
          <button>Button</button>
        </div>
        <div className="slide">
          <img src={images} alt="Party 1" />
          <p>Description of Party 1</p>
          <button>Button</button>
        </div>
        <div className="slide">
          <img src={images} alt="Party 1" />
          <p>Description of Party 1</p>
          <button>Button</button>
        </div>
        <div className="slide">
          <img src={images} alt="Party 1" />
          <p>Description of Party 1</p>
          <button>Button</button>
        </div>
        {/* Add remaining slides */}
      </div>
      <button className="prev" onClick={() => plusSlides(-1)}>&#10094; Previous</button>
      <button className="next" onClick={() => plusSlides(1)}>Next &#10095;</button>
    </div>
  );
};

export default Services;
