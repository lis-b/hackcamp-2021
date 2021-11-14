import React, { useState, useEffect, Component } from "react";
import { Router, Link } from "wouter";

/**
* This code defines the react app
*
* Imports the router functionality to provide page navigation
* Defines the Home function outlining the content on each page
* Content specific to each page (Home and About) is defined in their components in /pages
* Each page content is presented inside the overall structure defined here
* The router attaches the page components to their paths
*/

// Import and apply CSS stylesheet
import "./styles/style.sass";
import "./styles/OpenDyslexic.sass";
import "normalize.css"

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";
import Navbar from "./components/Navbar/Navbar.jsx";

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.handleFontChange = this.handleFontChange.bind(this);
    this.handleFakeAccount = this.handleFakeAccount.bind(this);
    
    this.state = {
      dyslexiaMode: false,
      isSignedIn: false,
    }
  }
  
  handleFontChange(event) {
    const { dyslexiaMode } = this.state;
    
    this.setState({dyslexiaMode: !dyslexiaMode});
  }
  
  handleFakeAccount() {
    this.setState({isSignedIn: true});
  }
  
  render() {
    const { dyslexiaMode, isSignedIn } = this.state;
    var font = dyslexiaMode ? {fontFamily: "OpenDyslexic"} : {fontFamily: "Verdana, sans-serif"};
    
    return (
      <Router hook={useHashLocation}>
        <Seo />
        <div 
          className="wrapper"
          style={font} >
          <div className="header">
            <Navbar isSignedIn={isSignedIn} />
          </div>
          <div className="content">
            {/* Router specifies which component to insert here as the main content */}
            <PageRouter 
              {...this.state}
              handleFontChange={this.handleFontChange}
              handleFakeAccount={this.handleFakeAccount}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;