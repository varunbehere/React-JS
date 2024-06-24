import { useState } from 'react'
import Header from './components/Header'
import {Outlet} from 'react-router-dom'
function App() {
  return (
    <>
      <div className='w-screen h-screen bg-white text-black'>
        <Header/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
