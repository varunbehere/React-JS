import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='bg-white w-screen h-16 text-black flex items-center justify-between px-8 py-1 shadow-2xl'>
      <img className='max-h-16' src="../src/assets/pngwing.com.png" alt="Logo" />
      <div className='flex items-center'>
        <ul className='flex gap-8'>
          <Link to='/home'><li>Home</li></Link>
          <Link to = '/about'><li>About</li></Link>
          <Link to = '/contact'><li>Contact Us</li></Link>
        </ul>
      </div>
      <button className='bg-red-600 text-white px-4 py-2 rounded shadow-lg hover:bg-red-700 focus:outline-none'>Login</button>
    </div>
  )
}

export default Header
