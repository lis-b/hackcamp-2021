import * as React from "react";
import { Link } from "wouter";
import './home.scss'

class Home extends React.Component {
  render() {
    return(
      <div id = "main-container">
        <div id= "welcome-text">
          Welcome to Activism On Board!
        </div>
        <div id= "welcome-sub">
          Learn more and connect through social movements around the world.
        </div>
        <div id="home-buttons">
          <Link to="/login">
            <button type="button">Log In</button>
          </Link>
            <Link to="/signup">
            <button type="button">Register</button>
          </Link>
        </div>
      </div>
    );
  }
  
}

export default Home;