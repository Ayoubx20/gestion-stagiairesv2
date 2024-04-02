import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './nav/navbar';

function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateUsername = (username) => {
    return username.length >= 3; // Minimum username length requirement
  };

  const validatePassword = (password) => {
    return password.length >= 6; // Minimum password length requirement
  };

  const handleRegister = async () => {
    setEmailError('');
    setUsernameError('');
    setPasswordError('');
    
    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }

    if (!validateUsername(username)) {
      setUsernameError('Username should be at least 3 characters long');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password should be at least 6 characters long');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/signup', { email, username, password });
      if (response && response.data) {
        setMessage(response.data.message || 'Registration successful');
      } else {
        setMessage('No response data received');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred during registration');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5" style={{marginBottom: '320px'}}>

        <h1 className="mt-5">Stagiaire Registration</h1>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="text-danger">{emailError}</p>}
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <p className="text-danger">{usernameError}</p>}
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="text-danger">{passwordError}</p>}
        </div>
        <button className="btn btn-primary mb-3" onClick={handleRegister}>
          Register
        </button>
        <p>{message}</p>
      </div>
    </>
  );
}

export default Signup;
