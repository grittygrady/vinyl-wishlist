import React, { Component } from 'react'
import config from '../config'
import './Login.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    error: null
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
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      this.props.history.push('/recordslist')
      return res.json()
    })
    .then(user => {
      this.props.setLoggedIn(user)
    })
    .catch(error => {
      this.setState({
        error
      })
    })
  }

  render() {
    return (
      <>
      {(!this.props.loggedIn && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) && 
        <div className="cookies-msg">
          <span style={{textAlign: 'center', color: 'black'}}>It appears you are using Safari. Cookies must be enabled for this site. For more information <a href="https://www.arcolatheatre.com/disable-prevent-cross-site-tracking/" rel="noreferrer" target="_blank">click here</a>.</span>
        </div>  
      }
      <div className='Login'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange} aria-label='username' required />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} aria-label='password' required />
            {this.state.error && <p className='errorMsg'>Password is incorrect</p>}
          <button>Log In</button>
        </form>
      </div>
      </>
    )
  }
}

export default Login
