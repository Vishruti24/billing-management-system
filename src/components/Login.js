// import React, { useState } from 'react';
// import './Login.css'; // Your CSS file
// import email_icon from '../assets/email.png';
// import password_icon from '../assets/password.png';

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLoginClick = () => {
//     if (email.trim() === '' || password.trim() === '') {
//       alert('Please enter both email and password');
//       return;
//     }


//     if (email === 'test@example.com' && password === '123456') {
//       alert('Login Successful');
//       onLogin(); 
//     } else {
//       alert('Invalid Email or Password');
//     }
//   };

//   return (
//     <div style={{
//         minHeight:'100vh',
//          background: 'linear-gradient( 80deg, #3a41f4, #720660)',
//         // background: 'linear-gradient(to right, rgba(255,0,0,0), rgb(0, 72, 255))',
//         display:'flex',
//         justifyContent:'center',
//         alignItems:'center'
//         }}>
//     <div className='login-container'>
//       <h2>Login</h2>
//       <div className="login-input">
//         <img src={email_icon} alt="email icon" />
//         <input
//           type="email"
//           placeholder='Enter Email'
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>

//       <div className="login-input">
//         <img src={password_icon} alt="password icon" />
//         <input
//           type="password"
//           placeholder='Enter Password'
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>

//       <button className='login-btn' onClick={handleLoginClick}>Login</button>
//     </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      navigate('/bill-generator');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>LOGIN</button>
        
      </div>
    </div>
  );
};

export default Login;
