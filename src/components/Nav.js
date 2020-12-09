import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import './Nav.css'

const Nav = (props) => {
  return (
    <nav>
      <h1>Vinyl Wishlist</h1>
      <ul className='nav-links'>
        <Link to='/recordslist'>
          <li>Home</li>
        </Link>
        {props.loggedIn ? null : <Link to='/login'>
          <li>Login</li>
        </Link>}
        
        <Link to='signup'>
          <li>Sign Up</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
