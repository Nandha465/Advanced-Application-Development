import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import image1 from './testimg1.jpg'
import image2 from './testimg2.jpg'
import image3 from './testimg5.jpg'
import heart from './heart1.jpg';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: image1,
    },
    {
      id: 2,
      name: "Jane Smith",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image2,
    },
    {
      id: 3,
      name: "Alice Johnson",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: image3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === testimonialsData.length - 1 ? 0 : prevSlide + 1));
    }, 3000); 

    return () => clearInterval(interval);
  }, [testimonialsData.length]);

  return (
    <>
      <div className="side-image-container">
      <img src={heart} alt="Side Image" className="side-image" />
      </div>
      <h2 className="section-heading">WHAT PEOPLE SAY</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={testimonial.id} className={`testimonial ${index === currentSlide ? 'active' : ''}`}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-details">
              <p className="testimonial-description">{testimonial.description}</p>
              <p className="testimonial-name">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
