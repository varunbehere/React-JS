import React from 'react';
import { useState } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import User from './User/User';
function App() {
  return (
    <>
      <div className='w-screen h-full'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
