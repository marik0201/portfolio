import React from 'react';
import { connect } from 'react-redux';

import MyProjects from './MyProjects';
import { changePage } from '../MainPage/MainPageActions';

const MyProjectsContainer = props => <MyProjects {...props} />;

const mapStateToProps = ({ profile }) => ({
  pages: profile.pages
});

const mapDispatchToProps = dispatch => ({
  changePage: async page => {
    await dispatch(changePage(page));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyProjectsContainer);
