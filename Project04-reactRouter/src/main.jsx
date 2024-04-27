  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import App from './App.jsx'
  import './index.css'
  import {RouterProvider, createBrowserRouter} from 'react-router-dom';
  import About from './About/About.jsx';
  import Home from './Home/Home.jsx';
  import Contact from './Contact/Contact.jsx';
  
  const router = createBrowserRouter([
    {
      path :'/',
      element : <App/>,
      children : [
        {
          path : '/home',
          element : <Home/>
        },
        {
          path : '/about',
          element: <About/>
        },
        {
          path : '/contact-us',
          element : <Contact/>
        } 
      ]
    }
  ])
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
  )
