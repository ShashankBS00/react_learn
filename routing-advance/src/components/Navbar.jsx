import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="flex justify-center gap-8">
        <Link to="/" className="text-white font-semibold hover:text-yellow-300 transition">
          Home
        </Link>
        <Link to="/product" className="text-white font-semibold hover:text-yellow-300 transition">
          Product
        </Link>
       
        <Link to="/contact" className="text-white font-semibold hover:text-yellow-300 transition">
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar