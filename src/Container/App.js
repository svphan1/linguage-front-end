import React, { Component } from "react";
import Background from "../Components/Background/Background";
import NavBar from "../Components/NavBar/NavBar";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Login/SignUp";
import Dashboard from "../Components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    isLandingPage: true,
    isLoggedIn: false
  };

  showLogin = () => {
    this.setState({ isLandingPage: false });
  };

  showSignUp = () => {
    this.setState({ isLandingPage: false });
  };

  showDashboard = () => {
    this.setState({ isLoggedIn: true });
  };

  hideDashboard = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          {!this.state.isLoggedIn && <Background />}
          {!this.state.isLoggedIn && (
            <NavBar showLogin={this.showLogin} showSignUp={this.showSignUp} />
          )}
          <Switch>
            <Route
              exact
              path="/login"
              render={() => (
                <Login
                  showLogin={this.showLogin}
                  showDashboard={this.showDashboard}
                />
              )}
            />
            <Route
              exact
              path="/signup"
              render={() => <SignUp showDashboard={this.showDashboard} />}
            />
            <Route
              exact
              path="/dashboard"
              render={() => (
                <Dashboard
                  showDashboard={this.showDashboard}
                  hideDashboard={this.hideDashboard}
                />
              )}
            />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
