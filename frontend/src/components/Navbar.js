import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'

export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-dark bg-secondary">
      
        <Link className="navbar-brand" to="/">
         Blog Today
        </Link>
        <div className='rightnav'>
        <Link className="navbar-brand" to="/login">
          Login
        </Link>
        <Link className="navbar-brand" to="/register">
          Register
        </Link>
      </div>
    </nav>
  </div>
  )
}
