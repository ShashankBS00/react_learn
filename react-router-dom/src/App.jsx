import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx' 
import Navbar from './component/Navbar.jsx'
const App = () => {
  return (
    <div>
      <h1>My App  </h1>
    

    <div>
      <Navbar />  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} /> 
      </Routes>
    </div>
    </div>
  )
}

export default App
