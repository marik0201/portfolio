import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { signIn } from './LoginFormActions';

const LoginFormContainer = props => <LoginForm {...props} />;

const mapDispatchToProps = dispatch => ({
  signIn: async (username, password) => dispatch(signIn(username, password))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginFormContainer);
