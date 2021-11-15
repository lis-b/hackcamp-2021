import * as React from "react";
import { NavbarItems } from "./NavbarItems.js"
import './Navbar.scss'
import { Link } from "wouter";
import { DropdownButton, Dropdown } from "react-bootstrap";

class Navbar extends React.Component {
  render() {
    const { isSignedIn } = this.props;
    
    return(
      <nav className = "NavbarItems">
        <Link className = "navbar-logo" href="/">Activism On Board
        </Link>
        <ul className = "nav-menu">
          {NavbarItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.className} href={item.url}>
                  {item.title}
                </Link>
              </li>
            )
          })}
           <div className = "login">
             <button className = "logbtn"> Log In
             <div className = "dropdown-content">
                  <a href="#/login">Log In</a>
                  <a href="#/signup">Register</a>             
               </div>
             </button>
          </div>       
        </ul>
        
      </nav>
    )
  }  
}

export default Navbar;