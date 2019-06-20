import React, { Component } from 'react';

import { Main } from '../Main';
import HeaderContainer from '../Header/HeaderContainer';

export class MainPage extends Component {
  state = {
    isLoaded: this.props.isLoaded
  };

  componentDidMount = () => {
    this.props.getProfile();
    console.log(this.props.state);
  };

  componentDidUpdate = prevProps => {
    if (prevProps.isLoaded != this.props.isLoaded) {
      console.log('hi');

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

export default MainPage;
