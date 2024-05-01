  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import App from './App.jsx'
  import './index.css'
  import {RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
  import About from './About/About.jsx';
  import Home from './Home/Home.jsx';
  import Contact from './Contact/Contact.jsx';
  import { Route } from 'react-router-dom';  
  import User from './User/User.jsx';
  import Github from './Github/Github.jsx';
  // const router = createBrowserRouter([
  //   {
  //     path :'/',
  //     element : <App/>,
  //     children : [
  //       {
  //         path : '/home',
  //         element : <Home/>
  //       },
  //       {
  //         path : '/about',
  //         element: <About/>
  //       },
  //       {
  //         path : '/contact-us',
  //         element : <Contact/>
  //       } 
  //     ]
  //   }
  // ])

  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route path = '/' element = {<App/>}>
        <Route path = "/home"               element = {<Home/>}/> 
        <Route path = "/about"              element = {<About/>}/>
        <Route path = "/contact-us"         element = {<Contact/>}/>
        <Route path = "/user/:userid"       element = {<User/>}/>
        <Route path = "/github"             element = {<Github/>}/>
      </Route>
    )
  )
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
  )
