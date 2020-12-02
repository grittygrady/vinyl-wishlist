import React, { Component } from 'react'
import './Signup.css'

class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '' 
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return (
      <div className='Signup'>
        <form>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange} aria-label='username' required />
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange} aria-label='email' required />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} aria-label='password' required />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" name="confirmPassword" id="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} aria-label='confirm password' required />
          <button>Log In</button>
        </form>
      </div>
    )
  }
}

export default Signup
