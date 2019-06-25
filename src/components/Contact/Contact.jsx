import React, { Component } from 'react';

import './style.scss';

export class Contact extends Component {
  render() {
    return (
      <section className="mt-5 contact" uk-scrollspy="cls: uk-animation-fade;">
        <h1 className="mt-4">Get in Touch</h1>
        <p className="mt-2">
          If you have any questions, you can contact with this information below
          or write a message
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
                {this.props.contacts.address}
              </span>
            </div>
            <div className="contact-item">
              <span
                className="contact-item-icon"
                data-uk-icon="icon: phone; ratio:2"
              />
              <span className="contact-item-info">
                <a href={`tel:${this.props.contacts.telephone}`}>
                  {this.props.contacts.telephone}
                </a>
              </span>
            </div>
            <div className="contact-item">
              <span
                className="contact-item-icon"
                data-uk-icon="icon: mail; ratio:2"
              />
              <span className="contact-item-info">
                <a href="mailto:marktechart@gmail.com">
                  {this.props.contacts.email}
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
