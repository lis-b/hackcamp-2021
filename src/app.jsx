import React, { useState, useEffect, Component } from "react";
import { Router, Link } from "wouter";
import "./styles/style.sass";
import "./styles/OpenDyslexic.sass";
import "normalize.css"
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.handleFontChange = this.handleFontChange.bind(this);
    this.handleFakeAccount = this.handleFakeAccount.bind(this);
    this.signout = this.signout.bind(this);
    
    this.state = {
      dyslexiaMode: false,
      isSignedIn: false,
    }
  }
  
  handleFontChange() {
    const { dyslexiaMode } = this.state;
    
    this.setState({dyslexiaMode: !dyslexiaMode});
  }
  
  handleFakeAccount() {
    this.setState({isSignedIn: true});
  }
  
  signout() {
    this.setState({isSignedIn: false});
  }
  
  render() {
    const { dyslexiaMode, isSignedIn } = this.state;
    var font = dyslexiaMode ? {fontFamily: "OpenDyslexic"} : {fontFamily: "Verdana, sans-serif"};
    
    return (
      <Router hook={useHashLocation}>
        <Seo />
        <div 
          className="main-wrapper"
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
              signout={this.signout}
            />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;