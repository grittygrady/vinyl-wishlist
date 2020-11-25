import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
  render() {
    return (
      <div className='Login'>
        <form>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" aria-label='email' required />
          <br/>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" aria-label='password' required />
          <button>Log In</button>
        </form>
      </div>
    )
  }
}

export default Login
