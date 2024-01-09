import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {users, hashPassword} from '../../users';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = () => {
      const user = users.find(u => u.username === username);
  
      if (user && user.passwordHash === hashPassword(password)) {
        // Simulate session by storing user id in localStorage
        localStorage.setItem('userId', user.id);
        navigate('/');
      } else {
        alert('Invalid credentials');
      }
    };
  
    return (
      <div>
        <h2>Login</h2>
        <label>Username: </label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
  
