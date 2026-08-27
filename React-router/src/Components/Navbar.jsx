import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

 export default function Navbar() {
  return (
    <nav className="navbar">
      {/* <a href='#'>Link</a> */}
      <Link to="/">Home</Link>
      <br />

        <Link to="/about">About</Link>
        <br />

          <Link to="/contact">Contact</Link>
          <br />
          
    </nav>
  )
}
