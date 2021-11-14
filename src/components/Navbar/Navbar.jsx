import * as React from "react";
import { NavbarItems } from "./NavbarItems.js"
import './Navbar.scss'
import { Router, Link } from "wouter";
import { DropdownButton, Dropdown } from "react-bootstrap";

class Navbar extends React.Component {
  render() {
    const { isSignedIn } = this.props;
    
    return(
      <nav className = "NavbarItems">
        <h1 className = "navbar-logo">Placeholder
          <i className="siteName"></i>
        </h1>
        <div className = "menu-icon"/>
        <ul className = "nav-menu">
          {NavbarItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.className} href={item.url}>
                {item.title}
                </a>
              </li>
            )
          })}
<DropdownButton id="log-in-button" title="Log In">
  <Dropdown.Item href="#/login">Log In</Dropdown.Item>
  <Dropdown.Item href="#/register">Register</Dropdown.Item>
</DropdownButton>          
        </ul>
        
      </nav>
    )
  }  
}

export default Navbar;