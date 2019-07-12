import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

import './style.scss';

export const AboutPage = ({ location }) => {
  return (
    <div className="about-page-container">
      <Link className="main-link" to="/">
        <span
          className="social-icon"
          data-uk-icon="icon: arrow-left; ratio:3"
        />
      </Link>
      <div className="uk-animation-fade">
        {ReactHtmlParser(location.state.text)}
      </div>
    </div>
  );
};

AboutPage.propTypes = {
  location: PropTypes.object
};
