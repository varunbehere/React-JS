import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { AuthContextProvider } from './contexts/context'

function App() {
  const [userRegistrationStatus, setuserRegistrationStatus] = useState(false)
  const [loginStatus, setLoginStatus] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  
  const login = async (username,password)=>{
    try {
      setCurrentUser({username})
      setLoginStatus(true)
    } catch (error) {
      alert('error caught :: login :: ', error)
      setLoginStatus(false)
    }
  }
  const signUp = async(name,username,password)=>{
    try {
      
      setuserRegistrationStatus(true)
    } catch (error) {
      alert ("error caught :: signUp :: ", error)
      setuserRegistrationStatus(false)
    }
  }
  const logout = async ()=>{
    try {
      setCurrentUser(null)
      setLoginStatus(false)
    } catch (error) {
      alert ("error caught :: logout :: ", error)
      setLoginStatus(true)
    }
  }

  return (
    <AuthContextProvider value = {{user,login, logout, signUp, currentUser,userRegistrationStatus,loginStatus}}>
      {!loginStatus ? !userRegistrationStatus ? <SignUp/> : <Login/>  : <DashBoard/>}
    </AuthContextProvider>
  )
}

export default App
