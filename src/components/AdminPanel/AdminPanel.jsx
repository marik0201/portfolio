import React, { Component } from 'react';
import AdminPanelContacts from './AdminPanelContacts';

import './style.scss';
import LocalStorage from '../../services/local-storage';
import history from '../../helpers/history';
import AdminPanelContactsContainer from './AdminPanelContactsContainer';
import AdminPanelProfileContainer from './AdminPanelProfileContainer';

export class AdminPanel extends Component {
  constructor(props) {
    super(props);

    !LocalStorage.isLogin() && history.push('/login');
  }
  render() {
    return (
      <div className="admin-panel-container">
        <div className="tabs-container  uk-width-auto@m">
          <ul
            className="uk-tab-left"
            uk-tab="connect: #component-tab-left; animation: uk-animation-fade"
          >
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="tabs-content m-3 uk-width-expand@m">
          <ul id="component-tab-left" className="uk-switcher">
            <li>
              <AdminPanelProfileContainer />
            </li>
            <li>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
            <li>
              <AdminPanelContactsContainer />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
