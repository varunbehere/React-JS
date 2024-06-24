import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider,createRoutesFromElements, Route} from 'react-router-dom'
import  About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements (
  <Route path = '/' element = {<App/>}>
    <Route path = "/home"    element = {<Home/>}/>
    <Route path = "/about"    element = {<About/>}/>
    <Route path = "/contact"  element = {<Contact/>}/>
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
