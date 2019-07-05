import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import './style.scss';

export class About extends Component {
  render() {
    return (
      <section className="about">
        <h1 className="mb-1">{this.props.title}</h1>
        {ReactHtmlParser(this.props.text.substr(0, 200).concat('...'))}
        {/* <p>{this.props.text.substr(0, 200).concat('...')}</p> */}
        <Link
          to={{
            pathname: '/about',
            state: {
              text: this.props.text
            }
          }}
          className="btn mb-1"
        >
          Show more
        </Link>
      </section>
    );
  }
}

export default About;
