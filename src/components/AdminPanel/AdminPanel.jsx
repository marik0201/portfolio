import React, { Component } from 'react';

import './style.scss';

export class AdminPanel extends Component {
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
            <li>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur, sed do eiusmod.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
