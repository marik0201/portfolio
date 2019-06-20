import React from 'react';
import { connect } from 'react-redux';
import MainPage from './MainPage';
import { getProfile } from './MainPageActions';

const MainPageContainer = props => <MainPage {...props} />;

const mapStateToProps = ({ profile }) => ({
  isLoaded: profile.isLoaded
});

const mapDispatchToProps = dispatch => ({
  getProfile: () => {
    dispatch(getProfile());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPageContainer);
