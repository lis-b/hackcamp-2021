import * as React from 'react';
import Switch from 'react-switch';

class Settings extends React.Component {
  
  render() {
    const { dyslexiaMode, handler } = this.props;
    
    return (
      <div className="page">
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
      </div>
    );
  }
}

export default Settings;