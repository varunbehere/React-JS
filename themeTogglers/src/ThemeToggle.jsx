import React from 'react'
import ThemeContext from './context/ThemeContext'
import { useContext } from 'react'

function ThemeToggle() {
  const {theme,themeToggle} = useContext(ThemeContext)
  
  return (
    <>
        <div className={theme === 'light' ? 'w-screen h-screen bg-white text-black': 'w-screen h-screen bg-gray-950 text-white'}>
            <button onClick={themeToggle} className='bg-red-950 text-white'> Theme : {theme}</button>
        </div>    
    </>
  )
}

export default ThemeToggle
