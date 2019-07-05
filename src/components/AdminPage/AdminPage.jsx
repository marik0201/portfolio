import React, { Component } from 'react';
import { AdminPanel } from '../AdminPanel';
import LoginFormContainer from '../LoginForm/LoginFormContainer';
import LocalStorage from '../../services/local-storage';

export class AdminPage extends Component {
  render() {
    return (
      <>
        {LocalStorage.isLogin() ? (
          <AdminPanel />
        ) : (
          <LoginFormContainer
            action={async () =>
              await this.forceUpdate(async () => {
                console.log('FORCE');
              })
            }
          />
        )}
      </>
    );
  }
}

export default AdminPage;
