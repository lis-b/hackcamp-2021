import * as React from "react";

class Signout extends React.Component {
  componentDidMount() {
    const { signout } = this.props;

    signout();
  }
  
  render() {
    return (
      <div className="signout-success">
        Successfully signed out!
      </div>
    );
  }
}

export default Signout;