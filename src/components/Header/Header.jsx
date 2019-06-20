import React, { Component } from 'react';
import './style.scss';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="image-container">
          <a href="https://www.linkedin.com/in/mark-likhtar-4bb888187/">
            <img
              className="profile-image"
              src="https://media.licdn.com/dms/image/C5603AQHAuTx-7Gp5Hw/profile-displayphoto-shrink_200_200/0?e=1565827200&v=beta&t=itDjF3LHeJ2quAQdJc1L1ru7jwVCFAT_t_FENO8QJ9M"
              alt=""
            />
          </a>
        </div>
        <div className="header-about">
          <span>{this.props.text}</span>
        </div>
        <div className="social-container">
          <a href="https://www.linkedin.com/in/mark-likhtar-4bb888187/">
            <span
              className="social-icon"
              href="https://www.linkedin.com/in/mark-likhtar-4bb888187/"
              data-uk-icon="icon: linkedin; ratio:2"
            />
          </a>
          <a href="https://github.com/marik0201">
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
