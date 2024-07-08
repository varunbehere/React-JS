import React, { createContext, useState } from 'react'

const ThemeContext = createContext()
export const ThemeContextProvider = ({children})=>{

    const [theme,setTheme] = useState('light')
    const themeToggle = ()=>{
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
    <ThemeContext.Provider value = {{theme, themeToggle}}>
        {children}
    </ThemeContext.Provider>)
}

export default ThemeContext
