import * as React from "react";
import AccountFormPage from "../components/AccountForm/AccountFormPage";

class Login extends React.Component {
  render() {
    const { handleFakeAccount } = this.props;
    
    return (
      <AccountFormPage
        pageTitle="Log In To Your Account"
        handler={handleFakeAccount}
        isLogin={true}
        pageText="New To Activism On Board?"
        pageLinkText="Create Your Account"
      />
    );
  }
}

export default Login;