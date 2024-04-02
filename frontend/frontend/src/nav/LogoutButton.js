import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for routing

function LogoutButton() {
  const navig = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('token'); 
    navig.push('/');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;
