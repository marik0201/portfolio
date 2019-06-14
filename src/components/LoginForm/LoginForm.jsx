import React, { Component } from 'react';

import './style.scss';

export class LoginForm extends Component {
  render() {
    return (
      <div className="login-form-container">
        <div className="login-form">
          <h2>Sign in</h2>
          <input className="input-default" type="text" placeholder="Login" />
          <input
            className="input-default"
            type="password"
            placeholder="Password"
          />
          <a className="btn mt-1 login-button">Login</a>
        </div>
      </div>
    );
  }
}

export default LoginForm;
