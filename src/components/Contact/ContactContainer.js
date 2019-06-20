import React from 'react';
import { connect } from 'react-redux';
import Contact from './Contact';

const ContactContainer = props => <Contact {...props} />;

const mapStateToProps = ({ profile }) => ({
  contacts: profile.contacts
});

export default connect(mapStateToProps)(ContactContainer);
