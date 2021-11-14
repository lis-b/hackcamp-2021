import * as React from "react";
import AccountFormPage from "../components/AccountForm/AccountFormPage";

class Signup extends React.Component {
  render() {
    const { handleFakeAccount } = this.props;
    
    return (
      <AccountFormPage
        pageTitle="Create Your Account"
        handler={handleFakeAccount}
        isLogin={false}
        pageText="Already Have An Account?"
        pageLinkText="Login Here"
      />
    );
  }
}

export default Signup;