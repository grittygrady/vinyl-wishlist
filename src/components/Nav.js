import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <h1>Vinyl Wishlist</h1>
      <ul className='nav-links'>
        <Link to='/home'>
          <li>Home</li>
        </Link>
        <Link to='/login'>
          <li>Login</li>
        </Link>
        <Link to='signup'>
          <li>Sign Up</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
