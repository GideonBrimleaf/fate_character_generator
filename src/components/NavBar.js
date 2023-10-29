import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { auth } from '../lib/fire';
import { AuthContext } from '../auth/Auth';

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);

  return currentUser
    ? (
      <ul className="nav-bar">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={() => auth.signOut()}>Sign Out</Link>
        </li>
      </ul>
    )
    : null;
};

export default NavBar;
