import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <ul className="nav-bar">
      <li className="nav-item">
        <Link className="nav-link" to='/'>Home</Link>
      </li>
      <li>
        <Link className="nav-link" to='/New'>New Character</Link>
      </li>
    </ul>
  )
}

export default NavBar
