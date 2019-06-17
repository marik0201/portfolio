import React, { Component } from 'react';
import { AdminPanel } from '../AdminPanel';
import { LoginForm } from '../LoginForm';

export class AdminPage extends Component {
  state = {
    isLogin: false
  };
  render() {
    const isLogin = this.state.isLogin;
    return <>{isLogin ? <AdminPanel /> : <LoginForm />}</>;
  }
}

export default AdminPage;
