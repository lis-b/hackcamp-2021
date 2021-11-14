import * as React from "react";
import AccountFormPage from "../components/AccountForm/AccountFormPage";

class Login extends React.Component {
  render() {
    const { handleFakeAccount } = this.props;
    
    return (
      <AccountFormPage
        pageTitle="Login To Your Account"
        handler={handleFakeAccount}
        isLogin={true}
        pageText="New To Placeholder?"
        pageLinkText="Create Your Account"
      />
    );
  }
}

export default Login;