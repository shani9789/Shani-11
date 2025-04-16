import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => navigate('/home');

  return (
    <div>
      <h2>Login / Sign Up</h2>
      <button onClick={handleLogin}>Continue</button>
    </div>
  );
};

export default Login;