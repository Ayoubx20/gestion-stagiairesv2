import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './nav/navbar'

// import '/up.css';

function SignupAdmin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/Signup', { username, password });
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
    
   
    <div className="">
    
      <h1 className="mt-5">Registration</h1>
      <div className="mb-3">
        <input
          type="mail"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={handleRegister}>
        Register
      </button>
      <p>{message}</p>
    </div>  
    </>
  );
}

export default SignupAdmin;
