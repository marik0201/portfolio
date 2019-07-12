import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Main } from '../Main';
import HeaderContainer from '../Header/HeaderContainer';

export class MainPage extends Component {
  state = {
    isLoaded: this.props.isLoaded
  };

  componentDidMount = () => {
    this.props.getProfile();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.isLoaded != this.props.isLoaded) {
      this.setState({
        isLoaded: this.props.isLoaded
      });
    }
  };

  render() {
    return (
      <>
        {!this.state.isLoaded ? (
          <div className="preloader" data-uk-spinner="ratio: 3" />
        ) : (
          <>
            <HeaderContainer />
            <Main />
          </>
        )}
      </>
    );
  }
}

MainPage.propTypes = {
  isLoaded: PropTypes.bool,
  getProfile: PropTypes.func
};

export default MainPage;
