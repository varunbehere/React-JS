// App.jsx
import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { AuthContextProvider } from './contexts/context';
import auth from './config/firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Dashboard from './components/Dashboard';

function App() {
  const [userRegistrationStatus, setUserRegistrationStatus] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (username, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      setCurrentUser(userCredential.user);
      setLoginStatus(true);
    } catch (error) {
      alert('Error logging in: ' + error.message);
      setLoginStatus(false);
    }
  };

  const signUp = async (name, username, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, username, password);
      setCurrentUser(userCredential.user);
      setUserRegistrationStatus(true);
    } catch (error) {
      alert('Error signing up: ' + error.message);
      setUserRegistrationStatus(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      setLoginStatus(false);
    } catch (error) {
      alert('Error logging out: ' + error.message);
      setLoginStatus(true);
    }
  };

  return (
    <AuthContextProvider value={{ login, logout, signUp, currentUser, userRegistrationStatus, loginStatus }}>
      {!loginStatus ? (!userRegistrationStatus ? <SignUp /> : <Login />) : <Dashboard user = {currentUser?.email}/>}
    </AuthContextProvider>
  );
}

export default App;
