import * as React from "react";
import { Link } from "wouter";
import AccountForm from "./AccountForm";
import './AccountFormPage.sass'

class AccountFormPage extends React.Component {
  render() {
    const { pageTitle, isLogin, handler, pageText, pageLinkText } = this.props;
    
    return (
      <div className="account-form-page-wrapper">
        <div className="account-form-page">
          <h1>{pageTitle}</h1>
          <div className={`form-box ${isLogin ? "login" : "signup"}`}>
            <AccountForm
              handler={handler}
              isLogin={isLogin}
            />
            <div className="form-text">
              <span>{pageText}</span>{" "}
              <Link href={isLogin ? "/signup" : "/login"}>{pageLinkText}</Link>
            </div>
          </div>

          <img src="https://cdn.glitch.me/52e811a4-976d-4bda-8793-736a0ce70fdd%2Fcapy%20login.png?v=1636936236205" />
        </div>
      </div>
    );
  }
}

export default AccountFormPage;