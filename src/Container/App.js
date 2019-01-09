import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Background from "../Components/Background/Background";
import NavBar from "../Components/NavBar/NavBar";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Login/SignUp";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    isLandingPage: true
  };

  changeToLogin = () => {
    this.setState({ isLandingPage: false });
  };

  changeToSignUp = () => {
    this.setState({ isLandingPage: false });
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Background />
          <NavBar
            changeToLogin={this.changeToLogin}
            changeToSignUp={this.changeToSignUp}
          />
          {this.state.isLandingPage && (
            <Button className="btn-started">Get Started</Button>
          )}
          <Route
            exact
            path="/login"
            render={() => <Login changeToLogin={this.changeToLogin} />}
          />
          <Route
            exact
            path="/signup"
            render={() => <SignUp/>}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
