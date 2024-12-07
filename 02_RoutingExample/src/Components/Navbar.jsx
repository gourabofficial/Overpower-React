import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4">
      <nav className="container mx-auto">
        <ul className="flex space-x-4">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "text-orange-600 font-bold" : "text-white hover:text-gray-400"}>Home</NavLink></li>
          <li><NavLink  to="/Portfolio" className={({ isActive }) => isActive ? "text-orange-600 font-bold" : "text-white hover:text-gray-400"}>Portfolio</NavLink ></li>
          <li><NavLink  to="/Instagram" className={({ isActive }) => isActive ? "text-orange-600 font-bold" : "text-white hover:text-gray-400"}>Instagram</NavLink ></li>
          <li><NavLink  to="/About" className={({ isActive }) => isActive ? "text-orange-600 font-bold" : "text-white hover:text-gray-400"}>About</NavLink ></li>
        </ul>
      </nav>
    </div>
  )
}