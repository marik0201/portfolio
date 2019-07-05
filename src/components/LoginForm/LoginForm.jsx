import React, { Component } from 'react';
import { withRouter } from 'react-router';

import './style.scss';

export class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();

    this.state = {
      errorMessage: ''
    };
  }

  login = async () => {
    if (!this.loginRef.current.value || !this.passwordRef.current.value) {
      this.setState({
        errorMessage: 'Enter login/password'
      });
    } else {
      this.props
        .signIn(this.loginRef.current.value, this.passwordRef.current.value)
        .then(() => (this.passwordRef.current.value = ''));
    }
  };

  render() {
    const errorMessage = this.state.errorMessage;
    return (
      <div className="login-form-container">
        <div className="login-form-background">
          <div className="login-form">
            <h2>Sign in</h2>
            <input
              className="input-default"
              type="text"
              placeholder="Login"
              ref={this.loginRef}
            />
            <input
              className="input-default"
              type="password"
              placeholder="Password"
              ref={this.passwordRef}
            />
            <a className="btn mt-1 login-button" onClick={this.login}>
              Login
            </a>
            {errorMessage && <span className="error-span">{errorMessage}</span>}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
