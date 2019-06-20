import React from 'react';
import { connect } from 'react-redux';
import MyProjects from './MyProjects';

const MyProjectsContainer = props => <MyProjects {...props} />;

const mapStateToProps = ({ profile }) => ({
  projects: profile.projects
});

export default connect(mapStateToProps)(MyProjectsContainer);
