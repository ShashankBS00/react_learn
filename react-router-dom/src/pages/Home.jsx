import React from 'react'

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Welcome Home</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Explore our amazing content and navigate through different sections
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Get Started
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
