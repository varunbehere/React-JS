import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(10)

  const addValue = ()=>{
    setCount(count + 1)
  }
  const delValue = ()=>{
    setCount(count-1)
    
  }
  return (
    <>
    <h1>Hello World -  Hooks Demo</h1>
    <h2>Counter : {count}</h2>
    <button onClick={addValue}>Counter Up </button>
    <br />
    <button onClick={delValue}>Counter Down</button>
    </>
  )
}

export default App
