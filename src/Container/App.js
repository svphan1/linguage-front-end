import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Background from "../Components/Background/Background";
import NavBar from "../Components/NavBar/NavBar";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Login/SignUp";
import Dashboard from "../Components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    isLandingPage: true,
    isDashboard: false
  };

  showLogin = () => {
    this.setState({ isLandingPage: false });
  };

  showSignUp = () => {
    this.setState({ isLandingPage: false });
  };

  showDashboard = () => {
    this.setState({ isDashboard: true });
    console.log("showing dash")
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          {/* <Background />
          <NavBar showLogin={this.showLogin} showSignUp={this.showSignUp} /> */}
          {/* {this.state.isLandingPage && (
            <Button className="btn-started">Get Started</Button>
          )} */}
          {/* <Button className="btn-started">Get Started</Button> */}
          {/* <Route
            exact
            path="/login"
            render={() => (
              <Login
                showLogin={this.showLogin}
                showDashboard={this.showDashboard}
              />
            )}
          /> */}
          {/* <Route exact path="/signup" render={() => <SignUp />} /> */}
          <Route exact path="/dashboard" render={() => <Dashboard />} />
          
        </React.Fragment>
      </Router>
    );
  }
}

export default App;