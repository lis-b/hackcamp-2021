import * as React from "react";
import './about.scss';
import Container from 'react-bootstrap/Container';

class About extends React.Component {
  render() {
    return (
      
      
      <div className="about-wrapper"> 
        <h1 className="title">
          About Us
        </h1>
        <div className="project-container">
          <div className="left">
           <img id="webpage" src= "https://cdn.glitch.me/52e811a4-976d-4bda-8793-736a0ce70fdd%2FBrazuca%20Screen%201.png?v=1636946515595" />
          </div>
          
       <div className="right">
          <h2 className="p1title">
          Our Project
        </h2>
        <p>
          Activism on Board aims to connect people to a global array of organizations actively working towards social change. Learn about a social movement or an organization by browsing the explore page. This project was made by Team Capybara for Hack Camp 2021.
        </p>
          </div>
        </div>
        
        <h2 className="teamdesc">
          Our Team
        </h2>
        <div className="team-grid">
        <div className = "team-members">
        <p>
          <h3>Lisa </h3> 
          <br />
          Social Movement they're following: All of them!
          <br />
        </p>
        </div>
        <div className = "team-members">
        <p>
          <h3>Ruby </h3>
          <br />
          Social Movement they're following: All of them!
          <br />
        </p>
        </div>
        <div className = "team-members">
        <p>
          <h3>Linda </h3>
          <br />
          Social Movement they're following: All of them!
          <br />
        </p>
        </div>
        <div className = "team-members">
        <p>
          <h3>Naia </h3>
          <br />
          Social Movement they're following: All of them!
          <br />
        </p>
        </div>
        </div>
        
      </div>
    );
  }
}

export default About;