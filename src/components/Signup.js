import React, { Component } from 'react'
import './Signup.css'

class Signup extends Component {
  render() {
    return (
      <div className='Signup'>
        <form>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" aria-label='email' required />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" aria-label='password' required />
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" name="confirm-password" id="confirm-password" aria-label='confirm password' required />
          <button>Log In</button>
        </form>
      </div>
    )
  }
}

export default Signup
