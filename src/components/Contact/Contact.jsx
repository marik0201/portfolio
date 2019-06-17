import React, { Component } from 'react';

import './style.scss';

export class Contact extends Component {
  render() {
    return (
      <section className="mt-5 contact" uk-scrollspy="cls: uk-animation-fade;">
        <h1 className="mt-4">Get in Touch</h1>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          unde, ex saepe repudiandae est soluta in porro beatae illo repellendus
          ab ipsum praesentium libero laudantium a aliquid aperiam ullam
          repellat.
        </p>
        <div className="contact-container">
          <div className="contact-form">
            <div className="mb-2 input-container">
              <div className="input-name">
                <input
                  className="input-default"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="input-email">
                <input
                  className="input-default"
                  type="text"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="input-message">
              <textarea className="textarea-default" placeholder="Message" />
            </div>

            <a className="btn mt-2">Send message</a>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <span
                className="contact-item-icon"
                data-uk-icon="icon: home; ratio:2"
              />
              <span className="contact-item-info">
                1234 Somewhere Rd. Nashville, TN 00000 United States
              </span>
            </div>
            <div className="contact-item">
              <span
                className="contact-item-icon"
                data-uk-icon="icon: phone; ratio:2"
              />
              <span className="contact-item-info">000-000-0000</span>
            </div>
            <div className="contact-item">
              <span
                className="contact-item-icon"
                data-uk-icon="icon: mail; ratio:2"
              />
              <span className="contact-item-info">marktechart@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
