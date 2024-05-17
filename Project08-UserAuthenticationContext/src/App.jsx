import { useState } from 'react'
import LoginPage from './Components/LoginPage'
import { LoginContextProvider } from './Contexts/loginContext'
import './App.css'

function App() {
  const [loginArray, setLoginArray] = useState([])
  const [items,setItem] = useState('')
  const proceedLogin = (email,password)=> {
    setLoginArray(prev => 
      [...prev, 
        {userId : Date.now(), email, password, loggedIn: true}
      ]
    )
    // localStorage.setItem("loginArray", JSON.stringify(loginArray))
    // console.log(loginArray)
  }
  return (
    <>
      <LoginContextProvider value ={{loginArray, proceedLogin}}>
        <LoginPage />
      </LoginContextProvider>
    </>
  )
}

export default App
