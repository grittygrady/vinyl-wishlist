import React, { Component } from 'react'
import './Landing.css'

class Landing extends Component {
  render() {
    return (
      <div className='Landing'>
        <h3>Never forget the records you've been lusting after!</h3>
        <p className='landing-description'>Too many times we find ourselves at the record store, and when we try to recall the vinyl we've been wanting, we draw a blank. Sign up and start adding records, and get vinyl hunting!</p>
        <br />
        <hr></hr>
        <br />
        <p>Try logging in with the username "demo" and the password "password" to give it a try!</p>
      </div>
    )
  }
}

export default Landing
