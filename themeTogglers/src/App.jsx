import React from 'react'
import './App.css'
import {ThemeContextProvider} from './context/ThemeContext'
import ThemeToggle from './ThemeToggle'

function App() {
  return (
    <ThemeContextProvider>
      <ThemeToggle/>
    </ThemeContextProvider>
  )
}

export default App
