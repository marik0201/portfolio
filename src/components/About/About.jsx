import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

import './style.scss';

const About = ({ title, text }) => {
  return (
    <section className="about">
      <h1 className="mb-1">{title}</h1>
      {ReactHtmlParser(text.substr(0, 200).concat('...'))}
      <Link
        to={{
          pathname: '/about',
          state: {
            text: text
          }
        }}
        className="btn mb-1"
      >
        Show more
      </Link>
    </section>
  );
};

About.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};

export default About;
