import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import config from './config';
import RecordsList from "./components/RecordsList";
import Nav from "./components/Nav";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Landing from "./components/Landing";
import "./App.css";

class App extends Component {
  state = {
    loggedIn: {},
  };
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/user`, {
      credentials: "include",
    })
      .then((res) => res.ok && res.json())
      .then((user) => {
        this.setState({
          loggedIn: user,
        });
      });
  }

  logoutHandler = () => {
    fetch(`${config.API_ENDPOINT}/user`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
      credentials: "include"
    })
    .then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      this.setState({ loggedIn: {} })
    })
    .catch(error => {
      console.error({ error })
    })
  }

  render() {
    const setLoggedIn = (user) => this.setState({ loggedIn: user });
    return (
      <Router>
        <div>
          <Nav loggedIn={this.state.loggedIn.username} logoutHandler={this.logoutHandler} />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/signup" component={Signup} loggedIn={this.state.loggedIn.username} />
            <Route
              path="/login"
              render={(props) => <Login {...{ ...props, setLoggedIn }} />}
            />
            <Route path="/recordslist" component={RecordsList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
