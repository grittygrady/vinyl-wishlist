import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return (
      <div className='Login'>
        <form>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange} aria-label='email' required />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} aria-label='password' required />
          <button>Log In</button>
        </form>
      </div>
    )
  }
}

export default Login
