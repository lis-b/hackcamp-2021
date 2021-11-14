import * as React from "react";
import { Link } from "wouter";
import AccountForm from "./AccountForm";

class AccountFormPage extends React.Component {
  render() {
    const { pageTitle, isLogin, handler, pageText, pageLinkText } = this.props;
    
    return (
      <div className="account-form-page">
        <h1>{pageTitle}</h1>
        <div className="form-box">
          <AccountForm
            handler={handler}
            isLogin={isLogin}
          />
          <span>{pageText}</span>{" "}
          <Link href={isLogin ? "/signup" : "/login"}>{pageLinkText}</Link>
        </div>  
      </div>
    );
  }
}

export default AccountFormPage;