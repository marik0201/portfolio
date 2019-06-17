import React, { Component } from 'react';

import { Header } from '../Header';
import { Main } from '../Main';
import { getProfile } from '../../services/profile';

export class MainPage extends Component {
  state = {
    isLoading: true
  };

  componentDidMount = () => {
    this.props.getProfile();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.state.profile.isLoaded != this.props.state.profile.isLoaded) {
      this.setState({
        isLoading: !this.props.state.profile.isLoaded
      });
    }
  };

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <div className="preloader" data-uk-spinner="ratio: 3" />
        ) : (
          <>
            <Header />
            <Main />
          </>
        )}
      </>
    );
  }
}

export default MainPage;
