import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-5 mb-5'>Tailwind Test</h1>
      <div className='flex justify-evenly'>
        <Card name = 'Varun' btnText = 'Visit Profile'/>
        <Card name = 'Behere' btnText = 'Visit Now'/>
      </div>
    </>
  )
}

export default App
