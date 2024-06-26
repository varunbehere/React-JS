// components/Login.js
import React, { useState } from 'react';
import { useAuthContext } from '../contexts/context';

const Login = () => {
  const { login } = useAuthContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className='flex items-center justify-center min-h-screen text-black'>
      <div className='bg-white min-h-96 min-w-80 p-8 rounded-lg shadow-lg'>
        <h1 className='font-bold text-3xl text-center mb-8'>Login</h1>
        <form onSubmit={handleLogin} className='space-y-6'>
          <input
            className='bg-gray-200 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
            type="text"
            placeholder='Username/Email'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className='bg-gray-200 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            className='bg-blue-500 text-white px-5 py-3 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
