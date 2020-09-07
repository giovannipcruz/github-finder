import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

// app level state
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

// components
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar icon="fab fa-github" />
          <div className="container">
            <Alert />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;

// ==== ES6 Class based Component ====
/*
import React, { Component } from "react";
import "./App.css";

import Axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";

class App extends Component {
  state = {
    user: {},
    users: [],
    repos: [],
    loading: false,
    alert: null,
  };

  async componentDidMount() {
    // with Promises
    // Axios.get("https://api.github.com/users").then((response) => console.log(response.data));

    this.setState({ loading: true });
    const response = await Axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: response.data, loading: false });
  }

  // search for users in github
  searchUser = async (text) => {
    this.setState({ loading: true });
    const response = await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: response.data.items, loading: false });
  };

  // get one user from github
  getUser = async (username) => {
    this.setState({ loading: true });
    const response = await Axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ user: response.data, loading: false });
  };

  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const response = await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ repos: response.data, loading: false });
  };

  // clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  alert = (alert) => {
    this.setState({
      alert: { msg: alert.msg, type: alert.type },
    });

    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  // show Clear users button?
  showClearUsers = () => (this.state.users.length > 0 ? true : false);

  render() {
    return (
      <BrowserRouter>
        <Navbar icon="fab fa-github" />
        <div className="container">
          {this.state.alert && <Alert alert={this.state.alert} />}
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <>
                  <Search searchUser={this.searchUser.bind(this)} clearUsers={this.clearUsers} showClearUsers={this.showClearUsers()} alert={this.alert} />
                  <Users loading={this.state.loading} users={this.state.users} />
                </>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" render={(props) => <User {...props} loading={this.state.loading} user={this.state.user} repos={this.state.repos} getUser={this.getUser} getUserRepos={this.getUserRepos} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
*/
