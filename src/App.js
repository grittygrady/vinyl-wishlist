import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RecordsList from './components/RecordsList'
import Nav from './components/Nav'
import Signup from './components/Signup'
import Login from './components/Login'
import Landing from './components/Landing'
import './App.css'

class App extends Component {
  state = {
    loggedIn: null
  }
  componentDidMount() {
    fetch(`http://localhost:8000/api/user`, {
      credentials: 'include'
    })
    
      .then((res) => {
        res.ok && res.json()})
      .then(user => {
        console.log(user)
        this.setState({
          loggedIn: user
        })
      })
  }
  render() {
    const setLoggedIn = user => this.setState({loggedIn: user})
    return (
      <Router>
        <div>
          <Nav loggedIn={this.state.loggedIn}/>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' render={props => <Login {...{...props, setLoggedIn}} />} />
            <Route path='/recordslist' component={RecordsList} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
