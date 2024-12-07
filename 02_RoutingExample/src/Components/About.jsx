import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <nav>
        <ul>
          <li><Link to="team"></Link></li>
          <li><Link to="company"></Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}