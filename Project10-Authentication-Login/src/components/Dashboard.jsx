import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/auth';

const Dashboard = () => {
  const { currentUser, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(currentUser.email);
    navigate('/login'); // Navigate to login after logout
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-black text-xl font-semibold mb-4">Dashboard</h2>
        <p className="mb-4 text-black">Welcome, {currentUser.userName}!</p>
        <button
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
