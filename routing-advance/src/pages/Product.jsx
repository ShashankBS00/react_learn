// ...existing code...
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className="p-6">
      <h1 className="text-5xl font-bold text-center underline mb-6">Product Page</h1>
      <div className="flex justify-center gap-8 mt-4">
        <Link to="/product/men" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition">
          Men
        </Link>
        <Link to="/product/women" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition">
          Women
        </Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Product
// ...existing code...