import React from 'react';
import { connect } from 'react-redux';
import Contact from './Contact';
import { sendEmail } from './ContactActions';

const ContactContainer = props => <Contact {...props} />;

const mapStateToProps = ({ profile }) => ({
  contacts: profile.contacts
});

const mapDispatchToProps = dispatch => ({
  sendMessage: async (name, email, message) => {
    dispatch(sendEmail(name, email, message));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactContainer);
