import React, { Component } from 'react'
import config from '../config'
import './Login.css'

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

class Login extends Component {
  state = {
    username: '',
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
      username: this.state.username,
      password: this.state.password
    }

    fetch(`${config.API_ENDPOINT}/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(userLogin)
    })
    .then(res => {
      console.log(getCookie('connect.sid'))
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      this.props.history.push('/recordslist')
      return res.json()
    })
    .then(user => {
      this.props.setLoggedIn(user)
    })
    .catch(error => {
      console.error({ error })
    })
  }

  render() {
    return (
      <div className='Login'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange} aria-label='username' required />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} aria-label='password' required />
          <button>Log In</button>
        </form>
      </div>
    )
  }
}

export default Login
