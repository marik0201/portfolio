import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const HeaderContainer = props => <Header {...props} />;

const mapStateToProps = ({ profile }) => ({
  text: profile.about.shortText,
  linkedinLink: profile.about.linkedinLink,
  githubLink: profile.about.githubLink
});

export default connect(mapStateToProps)(HeaderContainer);
