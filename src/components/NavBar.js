import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { auth } from "../fire"

const NavBar = () => {

  return (
    <ul className="nav-bar">
      <li className="nav-item">
        <Link className="nav-link" to='/'>Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" onClick={() => auth.signOut()}>Sign Out</Link>
      </li>
    </ul>
  )
}

export default NavBar
