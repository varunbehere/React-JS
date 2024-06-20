import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-black bg-green-400 text-3xl font-bold'>
        Hello Varun
      </h1>
    </>
  )
}

export default App
