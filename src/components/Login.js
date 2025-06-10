import React, { useState } from 'react';
import './Login.css'; // Your CSS file
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter both email and password');
      return;
    }

    // For example purpose — in real app, verify from database/server
    if (email === 'test@example.com' && password === '123456') {
      alert('Login Successful');
      onLogin(); // Call parent handler
    } else {
      alert('Invalid Email or Password');
    }
  };

  return (
    <div style={{
        minHeight:'100vh',
        background: 'linear-gradient(to right, rgba(255,0,0,0), rgb(0, 72, 255))',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        }}>
    <div className='login-container'>
      <h2>Login</h2>
      <div className="login-input">
        <img src={email_icon} alt="email icon" />
        <input
          type="email"
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="login-input">
        <img src={password_icon} alt="password icon" />
        <input
          type="password"
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className='login-btn' onClick={handleLoginClick}>Login</button>
    </div>
    </div>
  );
};

export default Login;