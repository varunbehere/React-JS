// components/SignUp.js
import React, { useState } from 'react';
import { useAuthContext } from '../contexts/context';

const SignUp = () => {
  const { signUp } = useAuthContext();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    signUp(name, username, password);
  };

  return (
    <div className='flex items-center justify-center min-h-screen text-black'>
      <div className='bg-white min-h-96 min-w-80 p-8 rounded-lg shadow-lg'>
        <h1 className='font-bold text-3xl text-center mb-8'>Sign Up</h1>
        <form onSubmit={handleSignUp} className='space-y-6'>
          <input
            className='bg-gray-200 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
            type="text"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='bg-gray-200 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
            type="email"
            placeholder='Email'
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
