import React from 'react'  
import Navbar from './components/Navbar.jsx'
import Hedder from './components/Hedder.jsx'
import Footer from './components/Footer.jsx'  
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import Men from './pages/Men.jsx'
import Women from './pages/Women.jsx'
import Contact from './pages/Contact.jsx'
import { Routes, Route, Router } from 'react-router-dom'
const App = () => {
  return (
    <div >
      <Navbar />
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} >
              <Route path='men' element={<Men />} />
              <Route path='women' element={<Women />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <Footer />    
            </div>
  )
}

export default App
