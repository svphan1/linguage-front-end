import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Background from "../Components/Background/Background";
import NavBar from "../Components/NavBar/NavBar";
import Login from "../Components/Login/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    isLandingPage: true
  };

  changeToLogin = () => {
    this.setState({ isLandingPage: false });
    console.log("this", this.state.isLandingPage);
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Background />
          <NavBar changeToLogin={this.changeToLogin}/>
          {this.state.isLandingPage ? (
            <Button className="btn-started">Get Started</Button>
          ) : (
            <Login />
          )}
          <Route
            exact
            path="/login"
            render={() => <Login changeToLogin={this.changeToLogin} />}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
