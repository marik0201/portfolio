import React from 'react';
import { connect } from 'react-redux';
import About from './About';

const AboutContainer = props => <About {...props} />;

const mapStateToProps = ({ profile }) => ({
  title: profile.about.title,
  text: profile.about.text
});

export default connect(mapStateToProps)(AboutContainer);
