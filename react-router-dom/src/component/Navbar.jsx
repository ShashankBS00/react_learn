import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 gap-8">
          <Link 
            to="/" 
            className="text-white font-semibold text-lg hover:text-blue-400 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-white font-semibold text-lg hover:text-blue-400 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-white font-semibold text-lg hover:text-blue-400 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
