import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './nav/navbar'



function Login() {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });

      if (response.data && response.data.message === 'Login successful') {
        setMessage(response.data.message);
        setIsLoggedIn(true);
        navigate('/UserList');
      } else {
        setMessage('No response data received or email and password are invalid.');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred during login');
    }
  };

  return (
    <>
    <Navbar />
    <div className="container mt-5" style={{marginBottom: '350px'}}>
     
      <h1>Login</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="email "
          name="email "
          value={email}
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
      <p className="mt-3">{message}</p>
      {isLoggedIn && (
        <p className="mt-3">
          Login successful! <Link to="/Accuel">Go to Accuel</Link>
        </p>
      )}
      {!isLoggedIn && (
        <p className="mt-3">
          Don't have an account? <Link to="/Signup">Sign up here!</Link>
        </p>
      )}
    </div>

    </>
  );
}

export default Login;
