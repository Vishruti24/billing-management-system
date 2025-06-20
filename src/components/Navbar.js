import React from 'react';
import './Navbar.css';
import {Link,useNavigate} from 'react-router-dom';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);         // update login state
    navigate('/');                // redirect to home
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="blue">Billing</span>App
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        {isLoggedIn && <li><Link to="/bill-generator">Bill Generator</Link></li>}
        {!isLoggedIn ? (
          <li><Link to="/login">Login</Link></li>
        ) : (
          <li>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;