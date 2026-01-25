import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx' 
import Navbar from './component/Navbar.jsx'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />
      <main className="min-h-[calc(100vh-64px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
