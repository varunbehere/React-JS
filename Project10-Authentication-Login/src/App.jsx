import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/auth';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem("users"));
    if (usersData && usersData.length) {
      setUsers(usersData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const registerUser = (email, userName, password) => {
    if (users.find(user => user.email === email || user.userName === userName)) {
      alert('User already exists');
      return;
    } else {
      alert('User created!');
      setUsers(prev => [...prev, { email, password, userName, loginStatus: false }]);
    }
  };

  const login = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      if (!user.loginStatus) {
        setUsers(prev =>
          prev.map(loggedUser => loggedUser.email === email ? { ...loggedUser, loginStatus: true } : loggedUser)
        );
        setCurrentUser(user);
        alert('Login successful');
      } else {
        alert('User already logged in');
      }
    } else {
      alert('Invalid credentials!');
    }
  };

  const logout = (email) => {
    setUsers(prev =>
      prev.map(loggedUser => loggedUser.email === email ? { ...loggedUser, loginStatus: false } : loggedUser)
    );
    setCurrentUser(null);
    alert('Logged out');
  };

  return (
    <AuthProvider value={{ users, currentUser, registerUser, login, logout }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={currentUser ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={currentUser ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route
            path="/signup"
            element={currentUser ? <Navigate to="/dashboard" /> : <Signup />}
          />
          <Route
            path="/dashboard"
            element={currentUser ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
