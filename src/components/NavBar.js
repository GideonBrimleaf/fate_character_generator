import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <ul className="nav-bar">
      <li className="nav-item">
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/New'>New Character</Link>
      </li>
    </ul>
  )
}

export default NavBar
