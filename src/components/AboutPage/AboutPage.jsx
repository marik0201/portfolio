import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

export class AboutPage extends Component {
  componentDidMount() {
    console.log(this.props.location.state.text);
  }
  render() {
    return (
      <div className="about-page-container">
        <Link className="main-link" to="/">
          <span
            className="social-icon"
            data-uk-icon="icon: arrow-left; ratio:3"
          />
        </Link>
        <p className="uk-animation-fade">{this.props.location.state.text}</p>
      </div>
    );
  }
}

export default AboutPage;
