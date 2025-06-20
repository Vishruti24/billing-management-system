import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterest, FaTumblr } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-box">
      <div className="footer-container">
        <div className="footer-brand">
          <h2><span className="blue">Billing</span>App</h2>
       
        </div>

        <div className="footer-section horizontal">
          <h4>COMPANY</h4>
          <ul className="horizontal-links">
            <li>About Us</li>
            <li>Contact</li>
            <li>Testimonials</li>
            <li>Career</li>
            <li>Status</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>CONTACT US</h4>
          <p>Koramangala,<br />Bangalore, 560034 India</p>
         
          <div className="footer-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaPinterest />
            <FaTumblr />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
