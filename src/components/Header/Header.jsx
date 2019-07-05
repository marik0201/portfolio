import React, { Component } from 'react';
import './style.scss';
import { SERVER_URL } from '../../configs/server';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="image-container">
          <a href="https://www.linkedin.com/in/mark-likhtar-4bb888187/">
            <img
              className="profile-image"
              src={`${SERVER_URL}/api/profile/avatar`}
              alt=""
            />
          </a>
        </div>
        <div className="header-about">
          <span>{this.props.text}</span>
        </div>
        <div className="social-container">
          <a href={this.props.linkedinLink}>
            <span
              className="social-icon"
              data-uk-icon="icon: linkedin; ratio:2"
            />
          </a>
          <a href={this.props.githubLink}>
            <span
              className="social-icon"
              data-uk-icon="icon: github; ratio:2"
            />
          </a>
          <a href="mailto:marktechart@gmail.com">
            <span className="social-icon" data-uk-icon="icon: mail; ratio:2" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
