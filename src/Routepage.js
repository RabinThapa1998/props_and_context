import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Page404 from './pages/Page404';

function Routepage() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<Page404/>}/>
   </Routes>
  </BrowserRouter>
    
  )
}

export default Routepage