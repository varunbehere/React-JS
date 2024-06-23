import { useState } from 'react';
import './App.css';
import { AuthProvider } from './context/auth';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

  const registerUser = (email, userName, password) => {
    if (users.find(user => user.email === email || user.userName === userName)) {
      alert('User already exists');
      return;
    } else {
      alert('User created!');
      setUsers(prev => [...prev, { email, password, userName, loginStatus: false }]);
      setShowLogin(true); // Directly show login after signup
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
        setShowLogin(false); // Navigate to Dashboard after login
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
    setShowLogin(true); // Show login page after logout
    alert('Logged out');
  };

  return (
    <AuthProvider value={{ users, currentUser, registerUser, login, logout }}>
      <div className="App">
        {showLogin ? (
          <Login setShowLogin={setShowLogin} />
        ) : (
          <Dashboard setShowLogin={setShowLogin} />
        )}
        {showLogin && <Signup />}
      </div>
    </AuthProvider>
  );
}

export default App;
