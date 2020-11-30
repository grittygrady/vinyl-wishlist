import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RecordsList from './components/RecordsList'
import Nav from './components/Nav'
import Signup from './components/Signup'
import Login from './components/Login'
import Landing from './components/Landing'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/recordslist' component={RecordsList} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
