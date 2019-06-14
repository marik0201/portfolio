import React, { Component } from 'react';

import { About } from '../About';
import { MyWorks } from '../MyWorks';
import { Contact } from '../Contact';
import './style.scss';

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <About />
        <MyWorks />
        <Contact />
      </div>
    );
  }
}

export default Main;
