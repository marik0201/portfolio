import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import About from './About';

const AboutContainer = props => <About {...props} />;

const mapStateToProps = ({ profile }) => ({
  title: profile.about.title,
  text: profile.about.text
});

export default connect(mapStateToProps)(AboutContainer);
