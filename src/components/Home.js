import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import bannerImage from '../assets/bill.png'; // Update path if needed

const Home = () => {
  return (
    <div className="home">
      <img src={bannerImage} alt="Bill Generator Banner" className="banner-image" />
      
      <h1>Accurate, Fast and Secure <span className="highlight">Online Bill Generator</span></h1>
      <p>
        Discover the ultimate solution for all your billing needs at the Online Bill Generator. 
        Trusted by thousands, our platform offers accurate, fast, and secure bill creation right 
        from your web browser - no login required! With our attractive templates, you can effortlessly 
        generate receipts, bills, and invoices for a wide range of purposes.
      </p>
      
      <Link to="/bill-generator">
        <button className="generate-btn">Generate Bill Now</button>
      </Link>
    </div>
  );
};

export default Home;
