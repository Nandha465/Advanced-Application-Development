import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer-body'>
    
    <>
    {/* Footer */}
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github" />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section className="footer1">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3" />
                Company name
              </h6>
              <p>
              Determine if you'll focus on children's birthday parties, adult celebrations, or both.
              Research existing birthday event companies in your area to understand their services, pricing, and target demographics.
              
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
              <p>
                <a href="#!" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Services
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                   Theme
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Follow Us</h6>
              <p>
                <a href="#!" className="text-reset">
                  www.dreamday@gmail.com
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  www.facebook.com
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  www.instagram.com
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  www.snapchat.com
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3" /> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope me-3" />
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3" /> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3" /> + 01 234 567 89
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          DreamDay.com
        </a>
      </div>
      {/* Copyright */}
    </footer>
    {/* Footer */}
  </>
 

  
    </div>
  )
}

export default Footer