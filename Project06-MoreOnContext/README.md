# About
This project is More of Theme Switcher using Context API in these the new thing is that <b>we have written all the context related code in one file only </b>.
That is - 
- createContext

```javascript
    export const ThemeContext = React.createContext({
        thememode : 'light',
        lighttheme : ()=>{},
        darkTheme:  ()=>{},
    })
```
- Context.Provider
```javascript
export const ThemeContextProvider = ThemeContext.Provider   
```
- useContext()
```javascript
export default function useTheme (){
    return useContext (ThemeContext)
}
```
Refer file - [Click Me]()