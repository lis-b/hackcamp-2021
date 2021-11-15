import * as React from 'react';
import Switch from 'react-switch';
import "./settings.sass";

class Settings extends React.Component {
  
  render() {
    const { dyslexiaMode, handler } = this.props;
    
    return (
      <div className="settings-page">
        <h1 className="title">
          Settings
        </h1>
        
        <label htmlFor="font-switch">
          <span>Enable OpenDyslexic font</span>
          <Switch 
            checked={dyslexiaMode}
            onChange={handler}
            className="react-switch"
            id="font-switch"
          />
        </label>
        
        <img src="https://cdn.glitch.me/52e811a4-976d-4bda-8793-736a0ce70fdd%2Fcapy%20bath.png?v=1636937230961" className="capy-bath" />
      </div>
    );
  }
}

export default Settings;