import React, { Component } from 'react';

import ContactContainer from '../Contact/ContactContainer';
import AboutContainer from '../About/AboutContainer';
import './style.scss';
import MyProjectsContainer from '../MyProjects/MyProjectsContainer';

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <AboutContainer />
        <MyProjectsContainer />
        <ContactContainer />
      </div>
    );
  }
}

export default Main;
