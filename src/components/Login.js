import React, { Component } from 'react'
import config from '../config'
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

  handleSubmit = (e) => {
    e.preventDefault()
    const userLogin = {
      email: this.state.email,
      password: this.state.password
    }

    fetch(`${config.API_ENDPOINT}/login`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userLogin)
    })
    .then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json()
    })
    .catch(error => {
      console.error({ error })
    })

  }

  render() {
    return (
      <div className='Login'>
        <form onSubmit={this.handleSubmit}>
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
