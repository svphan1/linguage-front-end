import React, { Component } from 'react';
import Background from './Components/Background/Background';
import ButtonAppBar from './Components/NavBar/NavBar';
// import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Background />
        <ButtonAppBar />
      </React.Fragment>
    )
  }
};

export default App;
