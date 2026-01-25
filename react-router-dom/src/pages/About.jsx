import React from 'react'

const About = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">About Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              We are dedicated to providing exceptional experiences through innovative solutions and outstanding customer service. Our team works tirelessly to exceed expectations and deliver value.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To be the leading innovator in our industry, creating meaningful connections and transforming how people interact with technology. We believe in continuous improvement and excellence.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">Why Choose Us?</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              Expert team with years of experience
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              Innovative solutions tailored to your needs
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              Dedicated customer support available 24/7
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              Proven track record of success
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About

