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
            <button className="button">Log In</button>
          </Link>
            <Link to="/signup">
            <button className="button">Register</button>
          </Link>    
        </div>

        <img id="leftcapy" src= "https://cdn.glitch.me/52e811a4-976d-4bda-8793-736a0ce70fdd%2Fcapy%20login.png?v=1636936236205" />
        <img id = "midcapy" src= "https://cdn.glitch.me/52e811a4-976d-4bda-8793-736a0ce70fdd%2Fcapy%20bath.png?v=1636937230961" />        
        <img id = "homecapy" src="https://cdn.glitch.me/52e811a4-976d-4bda-8793-736a0ce70fdd%2Fcapy%20home.png?v=1636936214127"/>
      </div>
    );
  }
  
}

export default Home;