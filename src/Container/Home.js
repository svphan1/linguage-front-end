import React from 'react';
import Background from "../Components/Background/Background";
import NavBar from "../Components/NavBar/NavBar";

const Home = ({ showLogin, showSignUp }) => {
  return (
    <div>
      <NavBar showLogin={showLogin} showSignUp={showSignUp}/> 
    </div>
  )
}

export default Home;
