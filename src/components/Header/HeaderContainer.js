import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const HeaderContainer = props => <Header {...props} />;

const mapStateToProps = ({ profile }) => ({
  text: profile.about.shortText
});

export default connect(mapStateToProps)(HeaderContainer);
