import React from 'react';

const Dashboard = ({ setShowLogin }) => {
  const handleLogout = () => {
    // Implement logout logic using logout function from context
    setShowLogin(true); // Show Login component
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <p className="mb-4">Welcome to your dashboard!</p>
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
