import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { registerUser } = useAuthContext();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    registerUser(email, userName, password);
    navigate('/login'); // Navigate to login after signup
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-xs">
        <h2 className="text-black text-xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-black">
          Already have an account?{' '}
          <button
            className="text-blue-500 bg-gray-100 hover:underline focus:outline-none"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
