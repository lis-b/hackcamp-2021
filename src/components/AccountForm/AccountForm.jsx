import * as React from "react";
import { Form, Row, Button } from "react-bootstrap";

class AccountForm extends React.Component {
  render() {
    const { isLogin, handler } = this.props;
    
    return (
      <Form className="account-form">
        <Form.Group as={Row} className="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="yourname@domain.com" />
        </Form.Group>
        
        <Form.Group as={Row} className="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" />
        </Form.Group>
        
        <Button type="button" onClick={handler}>
          {isLogin ? "Log In" : "Register"}
        </Button>
      </Form>
    );
  }
}

export default AccountForm;