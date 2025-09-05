import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <img 
          src="https://job-portal-gs-client.vercel.app/assets/logo-3syRoDZ6.svg" 
          alt="title img" 
          className="h-10"
        />

        {/* Buttons */}
        <div className="space-x-4">
          <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
            Recruiter
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Update profile
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
