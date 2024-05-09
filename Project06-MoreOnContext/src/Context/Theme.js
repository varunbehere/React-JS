import React, { useContext } from "react";

export const ThemeContext = React.createContext({
    themeMode : light,
    lightTheme : ()=>{},
    darkTheme : ()=>{},
})

export const ThemeContextProvider = ThemeContext.Provider

export default function useTheme (){
    return useContext(ThemeContext) 
}



/*
In this we have done everything related to Context in the same file and by default we are exporting the useContext
*/ 