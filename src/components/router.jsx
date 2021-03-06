import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import Explore from "../pages/explore";
import About from "../pages/about";
import Settings from "../pages/settings";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Signout from "../pages/signout";
import SampleMovement from "../pages/movements/sample";
import ClimateJustice from "../pages/movements/climatejustice";

/**
* The router is imported in app.jsx
*
* Our site just has two routes in it–Home and About
* Each one is defined as a component in /pages
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

class PageRouter extends React.Component {
  render() {
    const { dyslexiaMode, 
            handleFontChange, 
            handleFakeAccount, 
            signout } 
            = this.props;
    
    return (
     <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/explore" component={Explore} />
      <Route path="/sample" component={SampleMovement} />
      <Route path="/climatejustice" component={ClimateJustice} />
        
      <Route path="/settings">
        <Settings 
          dyslexiaMode={dyslexiaMode} 
          handler={handleFontChange}
        />
      </Route>
        
      <Route path="/login">
        <Login 
          handleFakeAccount={handleFakeAccount}
        />  
      </Route>
        
      <Route path="/signup">
        <Signup 
        handleFakeAccount={handleFakeAccount}
      />  
      </Route>
        
      <Route path="/signout">
        <Signout 
        signout={signout}
      />  
      </Route>
    </Switch>
     );
  }
}

export default PageRouter;