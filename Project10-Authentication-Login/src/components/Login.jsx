import React, { useState } from 'react';

const Login = ({ setShowLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic using login function from context
  };

  const handleSignupClick = () => {
    setShowLogin(false); // Show Signup component
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-xs">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
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
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm">
          Don't have an account?{' '}
          <button
            className="text-blue-500 hover:underline focus:outline-none"
            onClick={handleSignupClick}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
