import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import './style.scss';

export class AboutPage extends Component {
  render() {
    return (
      <div className="about-page-container">
        <Link className="main-link" to="/">
          <span
            className="social-icon"
            data-uk-icon="icon: arrow-left; ratio:3"
          />
        </Link>
        <div className="uk-animation-fade">
          {ReactHtmlParser(this.props.location.state.text)}
        </div>
      </div>
    );
  }
}

export default AboutPage;
