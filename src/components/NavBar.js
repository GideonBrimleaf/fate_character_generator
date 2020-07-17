import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <ul className="nav-bar">
      <li className="nav-item">
        <Link className="nav-link" to='/'>Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/New'>New Character</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/login'>Login</Link>
      </li>
    </ul>
  )
}

export default NavBar
